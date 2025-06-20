# URL Shortener - Your Connections Platform

A modern, full-stack URL shortening application built with React and Node.js, featuring user authentication, analytics, and a clean, responsive interface.

## 🚀 Features

### Core Functionality
- **URL Shortening**: Convert long URLs into short, shareable links
- **User Authentication**: Secure registration and login system
- **Click Tracking**: Monitor clicks and engagement on your shortened URLs
- **Custom Links**: Create personalized short URLs (planned feature)
- **QR Code Generation**: Generate QR codes for your shortened URLs
- **Analytics Dashboard**: View detailed statistics and performance metrics

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Real-time Updates**: Instant feedback and updates
- **Protected Routes**: Secure access to user-specific features

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **nanoid** - Unique ID generation for short URLs

## 📁 Project Structure

```
url/
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── config/         # Database and app configuration
│   │   ├── controllers/    # Route handlers
│   │   ├── dao/           # Data Access Objects
│   │   ├── middlewares/   # Custom middleware
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── server.js          # Entry point
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── api/           # API configuration
│   │   ├── components/    # Reusable components
│   │   ├── layout/        # Layout components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # State management
│   │   ├── routes/        # Route configuration
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
└── README.md              # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd url
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/url-shortener
   JWT_SECRET=your-super-secret-jwt-key
   APP_URL=http://localhost:5000/
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Get Current User
```http
GET /api/auth/me
Cookie: accessToken=<jwt-token>
```

#### Logout User
```http
GET /api/auth/logout
```

### URL Shortening Endpoints

#### Create Short URL
```http
POST /api/url/create
Content-Type: application/json
Cookie: accessToken=<jwt-token>

{
  "url": "https://example.com/very-long-url"
}
```

#### Redirect to Original URL
```http
GET /:shortId
```
Redirects to the original URL and increments click count.

## 🗄️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  avatar: String (default: gravatar),
  createdAt: Date
}
```

### Short URL Model
```javascript
{
  _id: ObjectId,
  full_url: String (required),
  short_url: String (required, unique, indexed),
  clicks: Number (default: 0),
  user: ObjectId (ref: User),
  createdAt: Date (default: Date.now)
}
```

## 🎨 Frontend Architecture

### Component Structure
- **Layout Components**: Header, Sidebar, MainLayout
- **Page Components**: Home, Auth, Links, Analytics, QR, etc.
- **UI Components**: Forms, buttons, sections
- **Feature Components**: URL shortener, analytics dashboard

### State Management
- **Redux Store**: Centralized state management
- **Features**: Organized by domain (auth, urls, etc.)
- **Async Actions**: API calls with Redux Toolkit

### Routing
- **Protected Routes**: Authentication-required pages
- **Public Routes**: Landing and authentication pages
- **Nested Routes**: Layout-wrapped application routes

## 🔧 Development

### Available Scripts

#### Backend
```bash
npm run dev    # Start development server with nodemon
npm test       # Run tests (not implemented yet)
```

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- **ESLint**: Configured for React and modern JavaScript
- **Prettier**: Code formatting (recommended)
- **File Naming**: camelCase for files, PascalCase for components

## 🚀 Deployment

### Backend Deployment
1. Set production environment variables
2. Build and deploy to your preferred platform (Heroku, Railway, etc.)
3. Ensure MongoDB connection is configured for production

### Frontend Deployment
1. Update `VITE_API_URL` to point to production backend
2. Build the application: `npm run build`
3. Deploy the `dist` folder to your hosting platform (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- Custom slug functionality is commented out and needs implementation
- Test suite needs to be implemented
- Analytics features are in development

## 🔮 Future Enhancements

- [ ] Custom URL slugs
- [ ] Bulk URL shortening
- [ ] Advanced analytics with charts
- [ ] URL expiration dates
- [ ] Password-protected URLs
- [ ] API rate limiting
- [ ] Email notifications
- [ ] Social media integration
- [ ] Team collaboration features

## 📞 Support

For support, email [abhishekkushwahaak0121@gmail.com] or create an issue in the repository.

---

**Built with ❤️ using React and Node.js**