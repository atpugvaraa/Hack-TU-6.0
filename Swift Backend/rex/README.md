# REX API Documentation

This is the backend API for the REX marketplace, allowing users to create and manage listings for recyclable materials like metal scraps, glass, and textiles.

## Authentication

### Register a New User
```javascript
axios.post('http://localhost:8080/users/register', {
  username: 'your_username',
  password: 'your_password',
  confirmPassword: 'your_password'
});
```

### Login
```javascript
axios.post('http://localhost:8080/users/login', {
  username: 'your_username',
  password: 'your_password'
}, {
  auth: {
    username: 'your_username',
    password: 'your_password'
  }
});
```

## Listings API

### Get All Listings
```javascript
axios.get('http://localhost:8080/api/listings');
```

### Get Single Listing
```javascript
axios.get(`http://localhost:8080/listings/${listingId}`);
```

### Create New Listing (Authenticated)
```javascript
axios.post('http://localhost:8080/listings', {
  title: 'Metal Scraps Collection',
  imgLink: 'https://example.com/image.jpg',
  location: 'Toronto, ON',
  price: 100,
  quantity: 50
}, {
  auth: {
    username: 'your_username',
    password: 'your_password'
  }
});
```

### Update Listing (Authenticated)
```javascript
axios.put(`http://localhost:8080/listings/${listingId}`, {
  title: 'Updated Title',
  imgLink: 'https://example.com/new-image.jpg',
  location: 'Vancouver, BC',
  price: 150,
  quantity: 75
}, {
  auth: {
    username: 'your_username',
    password: 'your_password'
  }
});
```

### Delete Listing (Authenticated)
```javascript
axios.delete(`http://localhost:8080/listings/${listingId}`, {
  auth: {
    username: 'your_username',
    password: 'your_password'
  }
});
```

## Response Format

### Listing Object
```javascript
{
  "id": "UUID",
  "title": "Metal Scraps Collection",
  "author": "username",
  "imgLink": "https://example.com/image.jpg",
  "publishDate": "2024-01-20T12:00:00Z",
  "location": "Toronto, ON",
  "price": 100,
  "quantity": 50
}
```

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Running the Server

1. Clone the repository
2. Navigate to the Swift Backend/rex directory
3. Run `swift run`

The server will start on `http://localhost:8080`