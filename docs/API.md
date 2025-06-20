# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All authenticated endpoints require a JWT token to be sent as a cookie named `accessToken`.

### Authentication Flow
1. Register or login to receive a JWT token
2. Token is automatically set as an HTTP-only cookie
3. Include the cookie in subsequent requests to protected endpoints

## Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://www.gravatar.com/avatar/..."
  }
}
```

**Error Responses:**
- `400 Bad Request`: Missing required fields
- `409 Conflict`: Email already exists

---

#### POST `/api/auth/login`
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://www.gravatar.com/avatar/..."
  }
}
```

**Error Responses:**
- `400 Bad Request`: Missing email or password
- `401 Unauthorized`: Invalid credentials

---

#### GET `/api/auth/me`
Get current authenticated user information.

**Headers:**
```
Cookie: accessToken=<jwt-token>
```

**Response (200):**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://www.gravatar.com/avatar/..."
}
```

**Error Responses:**
- `401 Unauthorized`: Invalid or missing token

---

#### GET `/api/auth/logout`
Logout the current user (clears the authentication cookie).

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

### URL Shortening Routes (`/api/url`)

#### POST `/api/url/create`
Create a new shortened URL.

**Headers:**
```
Cookie: accessToken=<jwt-token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "url": "https://example.com/very-long-url-that-needs-shortening"
}
```

**Response (200):**
```
http://localhost:5000/abc123
```

**Error Responses:**
- `400 Bad Request`: Invalid URL format
- `401 Unauthorized`: Missing or invalid authentication

### Redirect Routes

#### GET `/:shortId`
Redirect to the original URL and increment click counter.

**Parameters:**
- `shortId`: The unique identifier for the shortened URL

**Response:**
- `302 Found`: Redirects to the original URL
- `404 Not Found`: Short URL not found

**Example:**
```
GET /abc123
→ Redirects to https://example.com/very-long-url-that-needs-shortening
```

## Error Handling

All API endpoints follow a consistent error response format:

```json
{
  "error": "Error message description",
  "status": 400
}
```

### Common HTTP Status Codes

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Authentication required or invalid
- `403 Forbidden`: Access denied
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource already exists
- `500 Internal Server Error`: Server error

## Rate Limiting

Currently, no rate limiting is implemented. This is planned for future releases.

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:5173` (development frontend)

Credentials (cookies) are enabled for cross-origin requests.

## Security Features

- **Password Hashing**: Passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **HTTP-Only Cookies**: Tokens stored in secure, HTTP-only cookies
- **Input Validation**: Request data validation and sanitization
- **CORS Protection**: Configured for specific origins only

## Future API Enhancements

- [ ] GET `/api/url/user` - Get all URLs for authenticated user
- [ ] DELETE `/api/url/:id` - Delete a shortened URL
- [ ] PUT `/api/url/:id` - Update URL metadata
- [ ] GET `/api/url/:id/analytics` - Get detailed analytics
- [ ] POST `/api/url/custom` - Create custom slug URLs
- [ ] GET `/api/url/search` - Search user's URLs
