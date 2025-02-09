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
        // Code to save car object
        let car_key = signer::address_of(owner);
        move_to(&owner, car);
    }

    /// Function to rent a car.
    public fun rent_car(renter: &signer, owner_address: address) acquires Car {
        let car_ref = borrow_global_mut<Car>(owner_address);
        assert!(car_ref.is_available, 1);
        car_ref.is_available = false;
        // Additional logic for renting can be added here
        }
}