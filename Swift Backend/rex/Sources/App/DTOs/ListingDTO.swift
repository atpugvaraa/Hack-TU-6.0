import Vapor

final class ListingDTO: Content, Sendable {
    let id: UUID?
    let title: String
    let author: String
    let imgLink: String
    let publishDate: Date
    let location: String
    let price: Int
    let quantity: Int
    
    init(listing: Listing) {
        self.id = listing.id
        self.title = listing.title
        self.author = listing.author
        self.imgLink = listing.imgLink
        self.publishDate = listing.publishDate
        self.location = listing.location
        self.price = listing.price
        self.quantity = listing.quantity
    }
}
