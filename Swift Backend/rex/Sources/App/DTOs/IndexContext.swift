import Vapor

struct IndexContext: Encodable {
    let title: String
    let listings: [ListingDTO]
    
    init(title: String = "Welcome to Rex!", listings: [ListingDTO]) {
        self.title = title
        self.listings = listings
    }
}