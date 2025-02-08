import Fluent
import Vapor
import JWT

final class User: Model, Content, Sendable {
    static let schema = "users"
    
    @ID(key: .id)
    var id: UUID?
    
    @Field(key: "username")
    var username: String
    
    @Field(key: "password_hash")
    var passwordHash: String
    
    init() { }
    
    init(id: UUID? = nil, username: String, passwordHash: String) {
        self.id = id
        self.username = username
        self.passwordHash = passwordHash
    }
    
    struct Public: Content {
        let id: UUID?
        let username: String
    }
    
    func asPublic() -> Public {
        return Public(id: id, username: username)
    }
}

extension User: ModelAuthenticatable {
    static let usernameKey = \User.$username
    static let passwordHashKey = \User.$passwordHash
    
    func verify(password: String) throws -> Bool {
        try Bcrypt.verify(password, created: self.passwordHash)
    }
    
    func generateToken() throws -> String {
        let expirationDate = Date().addingTimeInterval(86400) // 24 hours
        let signers = JWTSigners()
        signers.use(.hs256(key: Array("your-secret-key".utf8)))
        
        let payload = SessionToken(
            subject: SubjectClaim(value: id?.uuidString ?? ""),
            expiration: ExpirationClaim(value: expirationDate)
        )
        
        return try signers.sign(payload)
    }
}

struct SessionToken: Content, Authenticatable, JWTPayload {
    var subject: SubjectClaim
    var expiration: ExpirationClaim
    
    func verify(using signer: JWTSigner) throws {
        try expiration.verifyNotExpired()
    }
}