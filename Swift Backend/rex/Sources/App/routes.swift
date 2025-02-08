import Fluent
import Vapor

func routes(_ app: Application) throws {
    // Configure CORS middleware
    let corsConfiguration = CORSMiddleware.Configuration(
        allowedOrigin: .all,
        allowedMethods: [.GET, .POST, .PUT, .DELETE, .OPTIONS],
        allowedHeaders: [.accept, .authorization, .contentType, .origin, .xRequestedWith]
    )
    app.middleware.use(CORSMiddleware(configuration: corsConfiguration))
    
    // API routes
    let api = app.grouped("api")
    
    // Public listings endpoint
    api.get("listings") { req async throws -> [ListingDTO] in
        let listings = try await Listing.query(on: req.db).all()
        return listings.map { ListingDTO(listing: $0) }
    }
    
    // User routes with authentication
    try app.register(collection: UserController())
    
    // Listing routes with authentication
    try app.register(collection: ListingController())
    
    // Error handling middleware
    app.middleware.use(ErrorMiddleware.default(environment: app.environment))
}
