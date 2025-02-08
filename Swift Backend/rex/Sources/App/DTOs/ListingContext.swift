import Vapor

struct ListingContext: Encodable {
    let listing: ListingDTO
    let isAuthor: Bool
    
    init(listing: ListingDTO, isAuthor: Bool) {
        self.listing = listing
        self.isAuthor = isAuthor
    }
}