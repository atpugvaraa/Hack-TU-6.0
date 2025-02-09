module CloudStorage::UserManagement {
    struct User has key {
        id: address,
        username: vector<u8>,
    }

    public entry fun register_user(account: &signer, username: vector<u8>) {
        let user = User {
            id: signer::address_of(account),
            username: username,
        };
        move_to(account, user);
    }
}
