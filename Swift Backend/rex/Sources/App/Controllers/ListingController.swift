import Fluent
import Vapor

struct ListingController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let listingsRoute = routes.grouped("listings")
        listingsRoute.get(use: index)
        listingsRoute.get(":listingID", use: show)
        
        let protected = listingsRoute.grouped(User.authenticator())
        protected.post(use: create)
        protected.put(":listingID", use: update)
        protected.delete(":listingID", use: delete)
    }
    
    func index(req: Request) async throws -> [ListingDTO] {
        let listings = try await Listing.query(on: req.db).all()
        return listings.map { ListingDTO(listing: $0) }
    }
    
    func show(req: Request) async throws -> ListingDTO {
        guard let listing = try await Listing.find(req.parameters.get("listingID"), on: req.db) else {
            throw Abort(.notFound, reason: "Listing not found")
        }
        return ListingDTO(listing: listing)
    }
    
    func create(req: Request) async throws -> ListingDTO {
        let user = try req.auth.require(User.self)
        let input = try req.content.decode(CreateListingDTO.self)
        
        let listing = Listing(
            title: input.title,
            author: user.username,
            imgLink: input.imgLink,
            publishDate: Date(),
            location: input.location,
            price: input.price,
            quantity: input.quantity
        )
        
        try await listing.save(on: req.db)
        return ListingDTO(listing: listing)
    }
    
    func update(req: Request) async throws -> ListingDTO {
        let user = try req.auth.require(User.self)
        guard let listing = try await Listing.find(req.parameters.get("listingID"), on: req.db) else {
            throw Abort(.notFound, reason: "Listing not found")
        }
        
        guard listing.author == user.username else {
            throw Abort(.forbidden, reason: "You can only update your own listings")
        }
        
        let input = try req.content.decode(UpdateListingDTO.self)
        
        listing.title = input.title ?? listing.title
        listing.imgLink = input.imgLink ?? listing.imgLink
        listing.location = input.location ?? listing.location
        listing.price = input.price ?? listing.price
        listing.quantity = input.quantity ?? listing.quantity
        
        try await listing.save(on: req.db)
        return ListingDTO(listing: listing)
    }
    
    func delete(req: Request) async throws -> HTTPStatus {
        let user = try req.auth.require(User.self)
        guard let listing = try await Listing.find(req.parameters.get("listingID"), on: req.db) else {
            throw Abort(.notFound, reason: "Listing not found")
        }
        
        guard listing.author == user.username else {
            throw Abort(.forbidden, reason: "You can only delete your own listings")
        }
        
        try await listing.delete(on: req.db)
        return .ok
    }
}

struct CreateListingDTO: Content {
    let title: String
    let imgLink: String
    let location: String
    let price: Int
    let quantity: Int
}

struct UpdateListingDTO: Content {
    let title: String?
    let imgLink: String?
    let location: String?
    let price: Int?
    let quantity: Int?
}