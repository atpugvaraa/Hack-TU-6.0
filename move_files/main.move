module MyModule::P2PCarRental {

    use aptos_framework::signer;
    use std::vector;

    /// Struct representing a car listed for rental.
    struct Car has store, key {
        owner: address,         // Address of the car owner
        model: vector<u8>,      // Model name of the car
        rental_price: u64,      // Price for renting the car
        is_available: bool,     // Whether the car is available for rent
    }

    /// Function to list a car for rental.
    public fun list_car(owner: &signer, model: vector<u8>, rental_price: u64) {
        let car = Car {
            owner: signer::address_of(owner),
            model,
            rental_price,
            is_available: true,
        };
        move_to(owner, car);
    }

    /// Function to rent a car, updating its status.
    public fun rent_car(renter: &signer, owner_address: address) acquires Car {
        let car = borrow_global_mut<Car>(owner_address);

        // Ensure the car is available for rent
        assert!(car.is_available, 1);

        // Mark the car as rented (not available)
        car.is_available = false;

        // Payment and insurance are assumed to be handled off-chain
    }
}