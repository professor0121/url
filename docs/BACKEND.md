# Backend Documentation

## Overview

The backend is a RESTful API built with Node.js and Express.js, providing authentication, URL shortening, and analytics services. It follows a clean architecture pattern with separation of concerns.

## Technology Stack

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **nanoid**: Unique ID generation
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Architecture

### Project Structure

```
backend/src/
├── config/                 # Configuration files
│   ├── config.js          # App configuration
│   └── connectDb.js       # Database connection
├── controllers/           # Route handlers
│   ├── auth.controller.js # Authentication logic
│   └── shortUrl.controller.js # URL shortening logic
├── dao/                   # Data Access Objects
│   ├── user.dao.js       # User database operations
│   └── shortUrl.dao.js   # URL database operations
├── middlewares/           # Custom middleware
│   └── auth.middleware.js # Authentication middleware
├── models/                # Database models
│   ├── user.model.js     # User schema
│   └── shortUrl.model.js # URL schema
├── routes/                # API routes
│   ├── auth.routes.js    # Authentication routes
│   └── shortUrl.routes.js # URL routes
├── services/              # Business logic
│   ├── auth.service.js   # Authentication services
│   └── shortUrl.service.js # URL services
├── utils/                 # Utility functions
│   ├── errorHandler.js   # Error handling
│   ├── helper.js         # Helper functions
│   └── tryCatchWrapper.js # Async error wrapper
└── app.js                 # Express app configuration
```

### Design Patterns

#### MVC Pattern
- **Models**: Database schemas and data validation
- **Views**: JSON responses (API endpoints)
- **Controllers**: Request handling and response formatting

#### Repository Pattern (DAO)
- **Data Access Objects**: Abstracted database operations
- **Service Layer**: Business logic implementation
- **Controller Layer**: HTTP request/response handling

## Database Models

### User Model

```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false  // Excluded from queries by default
  },
  avatar: {
    type: String,
    default: "https://www.gravatar.com/avatar/..."
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

**Methods:**
- `comparePassword(password)`: Compare hashed passwords

### Short URL Model

```javascript
{
  _id: ObjectId,
  full_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true,
    unique: true,
    index: true  // Indexed for fast lookups
  },
  clicks: {
    type: Number,
    default: 0
  },
  user: {
    type: ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## API Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/register`
- **Controller**: `registerUser`
- **Service**: `register(name, email, password)`
- **Response**: JWT token + user data

#### POST `/login`
- **Controller**: `loginUser`
- **Service**: `login(email, password)`
- **Response**: JWT token + user data

#### GET `/me`
- **Middleware**: `authMiddleware`
- **Controller**: `getMe`
- **Response**: Current user data

#### GET `/logout`
- **Controller**: `logOutUser`
- **Response**: Clear authentication cookie

### URL Routes (`/api/url`)

#### POST `/create`
- **Middleware**: `authMiddleware`
- **Controller**: `createShortUrl`
- **Service**: `createShortUrlServiceWithUser` or `createShortUrlServiceWithoutUser`
- **Response**: Shortened URL

### Redirect Routes

#### GET `/:shortId`
- **Controller**: `redirectFromShortUrl`
- **Action**: Increment clicks and redirect to original URL

## Services Layer

### Authentication Service

```javascript
// Register new user
export const register = async (name, email, password) => {
  // 1. Check if user exists
  // 2. Hash password
  // 3. Create user
  // 4. Generate JWT token
  // 5. Return token and user data
}

// Login existing user
export const login = async (email, password) => {
  // 1. Find user by email
  // 2. Compare passwords
  // 3. Generate JWT token
  // 4. Return token and user data
}
```

### URL Shortening Service

```javascript
// Create short URL for authenticated user
export const createShortUrlServiceWithUser = async (url, userId) => {
  // 1. Validate URL
  // 2. Generate unique short ID
  // 3. Save to database with user reference
  // 4. Return short URL
}

// Create short URL for anonymous user
export const createShortUrlServiceWithoutUser = async (url) => {
  // 1. Validate URL
  // 2. Generate unique short ID
  // 3. Save to database without user reference
  // 4. Return short URL
}
```

## Middleware

### Authentication Middleware

```javascript
export const authMiddleware = async (req, res, next) => {
  // 1. Extract token from cookies
  // 2. Verify JWT token
  // 3. Find user by decoded ID
  // 4. Attach user to request object
  // 5. Call next() or return error
}
```

### Error Handling Middleware

```javascript
export const errorHandler = (err, req, res, next) => {
  // 1. Log error details
  // 2. Determine error type
  // 3. Send appropriate response
  // 4. Handle different error scenarios
}
```

## Security Features

### Password Security
- **Hashing**: bcryptjs with salt rounds
- **Validation**: Minimum length requirements
- **Storage**: Never store plain text passwords

### JWT Authentication
- **Token Generation**: Secure random secrets
- **Token Expiration**: Configurable expiry times
- **Cookie Storage**: HTTP-only, secure cookies

### Input Validation
- **URL Validation**: Proper URL format checking
- **Email Validation**: Email format validation
- **Sanitization**: Input cleaning and validation

### CORS Configuration
```javascript
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
```

## Database Configuration

### MongoDB Connection

```javascript
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
```

### Environment Variables

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your-super-secret-jwt-key
APP_URL=http://localhost:5000/
NODE_ENV=development
```

## Error Handling

### Try-Catch Wrapper

```javascript
const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
```

### Error Types
- **Validation Errors**: 400 Bad Request
- **Authentication Errors**: 401 Unauthorized
- **Authorization Errors**: 403 Forbidden
- **Not Found Errors**: 404 Not Found
- **Server Errors**: 500 Internal Server Error

## Performance Optimizations

### Database Indexing
- **Short URL Index**: Fast lookups for redirects
- **Email Index**: Unique constraint and fast user lookups
- **User Reference Index**: Efficient user-URL relationships

### Caching Strategy (Future)
- **Redis Integration**: Cache frequently accessed URLs
- **Session Storage**: Cache user sessions
- **Query Optimization**: Optimize database queries

## Development

### Available Scripts

```bash
npm run dev    # Start with nodemon (auto-restart)
npm start      # Start production server
npm test       # Run tests (to be implemented)
```

### Development Tools
- **Nodemon**: Auto-restart on file changes
- **Morgan**: HTTP request logging
- **Postman**: API testing and documentation

## Testing Strategy

### Unit Tests (Planned)
- **Service Layer**: Business logic testing
- **DAO Layer**: Database operation testing
- **Utility Functions**: Helper function testing

### Integration Tests (Planned)
- **API Endpoints**: Full request/response testing
- **Database Integration**: MongoDB integration testing
- **Authentication Flow**: End-to-end auth testing

## Deployment

### Production Considerations
- **Environment Variables**: Secure secret management
- **Database**: MongoDB Atlas or production MongoDB
- **Logging**: Structured logging with Winston
- **Monitoring**: Application performance monitoring
- **Security**: Rate limiting and security headers

### Docker Configuration (Future)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## Future Enhancements

- [ ] Rate limiting implementation
- [ ] Advanced analytics and reporting
- [ ] Custom URL slug support
- [ ] URL expiration functionality
- [ ] Bulk URL operations
- [ ] API versioning
- [ ] Comprehensive logging
- [ ] Performance monitoring
- [ ] Automated testing suite
