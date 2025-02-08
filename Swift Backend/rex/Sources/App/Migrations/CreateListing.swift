import Fluent

struct CreateListing: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("listings")
            .id()
            .field("title", .string, .required)
            .field("author", .string, .required)
            .field("img_link", .string, .required)
            .field("publish_date", .datetime, .required)
            .field("location", .string, .required)
            .field("price", .int, .required)
            .field("quantity", .int, .required)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("listings").delete()
    }
}