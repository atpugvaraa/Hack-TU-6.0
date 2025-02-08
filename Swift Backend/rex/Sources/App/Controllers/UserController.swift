import Fluent
import Vapor

struct UserController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let usersRoute = routes.grouped("users")
        usersRoute.post("register", use: register)
        
        let passwordProtected = usersRoute.grouped(User.authenticator())
        passwordProtected.post("login", use: login)
        passwordProtected.get("profile", use: profile)
    }
    
    func register(req: Request) async throws -> User.Public {
        try RegisterDTO.validate(content: req)
        let create = try req.content.decode(RegisterDTO.self)
        guard create.password == create.confirmPassword else {
            throw Abort(.badRequest, reason: "Passwords did not match")
        }
        
        // Check if username already exists
        if try await User.query(on: req.db)
            .filter(\.$username == create.username)
            .first() != nil {
            throw Abort(.conflict, reason: "Username already exists")
        }
        
        let user = try User(
            username: create.username,
            passwordHash: Bcrypt.hash(create.password)
        )
        try await user.save(on: req.db)
        return user.asPublic()
    }
    
    func login(req: Request) async throws -> LoginResponse {
        let user = try req.auth.require(User.self)
        let token = try user.generateToken()
        return LoginResponse(user: user.asPublic(), token: token)
    }
    
    func profile(req: Request) async throws -> User.Public {
        let user = try req.auth.require(User.self)
        return user.asPublic()
    }
}

struct RegisterDTO: Content, Validatable {
    let username: String
    let password: String
    let confirmPassword: String
    
    static func validations(_ validations: inout Validations) {
        validations.add("username", as: String.self, is: !.empty && .count(3...) && .alphanumeric)
        validations.add("password", as: String.self, is: !.empty && .count(6...))
    }
}

struct LoginResponse: Content {
    let user: User.Public
    let token: String
}

extension User {
    struct Create: Content, Validatable {
        var username: String
        var password: String
        var confirmPassword: String
        
        static func validations(_ validations: inout Validations) {
            validations.add("username", as: String.self, is: !.empty)
            validations.add("password", as: String.self, is: .count(6...) && .alphanumeric)
            validations.add("confirmPassword", as: String.self, is: !.empty)
        }
    }
}