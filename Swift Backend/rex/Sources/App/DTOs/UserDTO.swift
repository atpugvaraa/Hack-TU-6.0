import Vapor

struct UserDTO: Content {
    let id: UUID?
    let username: String
    
    init(user: User) {
        self.id = user.id
        self.username = user.username
    }
}