import Fluent
import Vapor

final class Listing: Model, Content, Sendable {
    static let schema = "listings"
    
    @ID(key: .id)
    var id: UUID?
    
    @Field(key: "title")
    var title: String
    
    @Field(key: "author")
    var author: String
    
    @Field(key: "img_link")
    var imgLink: String
    
    @Field(key: "publish_date")
    var publishDate: Date
    
    @Field(key: "location")
    var location: String
    
    @Field(key: "price")
    var price: Int
    
    @Field(key: "quantity")
    var quantity: Int
    
    init() { }
    
    init(id: UUID? = nil, title: String, author: String, imgLink: String, publishDate: Date, location: String, price: Int, quantity: Int) {
        self.id = id
        self.title = title
        self.author = author
        self.imgLink = imgLink
        self.publishDate = publishDate
        self.location = location
        self.price = price
        self.quantity = quantity
    }
}