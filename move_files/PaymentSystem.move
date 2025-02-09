module CloudStorage::PaymentSystem {
    use Aptos::Coin;
    use CloudStorage::StorageManagement;

    public entry fun pay_for_storage(account: &signer, amount: u64) {
        Coin::withdraw(account, amount);  // Withdraw the amount from the user's wallet
        Coin::deposit(&CloudStorage::StorageManagement, amount);  // Deposit to the storage management contract
    }
}
