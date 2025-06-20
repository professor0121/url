# Frontend Documentation

## Overview

The frontend is a modern React application built with Vite, featuring a responsive design and comprehensive state management. It provides a clean, intuitive interface for URL shortening and management.

## Technology Stack

- **React 19.1.0**: Latest React with concurrent features
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Axios**: HTTP client

## Project Structure

```
frontend/src/
├── api/                    # API configuration and services
│   └── axiosInstance.js   # Axios configuration
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── settings/         # Settings-related components
│   ├── Header.jsx        # Main navigation header
│   ├── Sidebar.jsx       # Navigation sidebar
│   ├── Footer.jsx        # Footer component
│   ├── UrlForm.jsx       # URL input form
│   └── ...               # Other feature components
├── layout/               # Layout components
│   └── MainLayout.jsx    # Main application layout
├── pages/                # Page components
│   ├── Home.jsx          # Dashboard/home page
│   ├── Auth.jsx          # Authentication page
│   ├── Links.jsx         # Links management
│   ├── Analytics.jsx     # Analytics dashboard
│   ├── Qr.jsx           # QR code features
│   └── ...              # Other pages
├── redux/                # State management
│   ├── features/         # Feature-specific slices
│   ├── store.js         # Redux store configuration
│   └── rootReducer.js   # Root reducer
├── routes/               # Routing configuration
│   └── IndexRoute.jsx   # Main route definitions
├── utils/                # Utility functions
├── App.jsx              # Root component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## Key Components

### Layout Components

#### MainLayout
The primary layout wrapper that includes the header, sidebar, and main content area.

```jsx
<div className="flex flex-col min-h-screen">
  <Header />
  <div className="flex flex-1">
    <Sidebar />
    <main className="w-full ml-64 pt-18 p-4 min-h-screen">
      <Outlet />
    </main>
  </div>
</div>
```

#### Header
Top navigation bar with user information and quick actions.

#### Sidebar
Left navigation panel with main application routes.

### Page Components

#### Home (Dashboard)
- URL shortening form
- Quick create section
- Getting started guide
- Tips and recommendations
- Custom links section

#### Auth
- Login and registration forms
- Form validation
- Authentication state management

#### Links
- List of user's shortened URLs
- Click statistics
- URL management actions

#### Analytics
- Performance metrics
- Click tracking data
- Visual charts and graphs

#### QR
- QR code generation
- QR code customization
- Download functionality

### Feature Components

#### UrlForm
Main URL shortening component with input validation and submission handling.

#### UrlShortener
Complete URL shortening interface with results display.

## State Management

### Redux Store Structure

```javascript
// Root Reducer combines all feature slices
{
  auth: {
    isAuth: boolean,
    user: User | null,
    token: string | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
  },
  url: {
    originalUrl: string,
    shortUrl: string | null,
    loading: boolean,
    error: string | null
  }
}
```

### Redux Implementation

#### Store Configuration
```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import urlReducer from './features/url/urlSlice';
import authReducer from './features/auth/authSlice';

const rootReducer = combineReducers({
  url: urlReducer,
  auth: authReducer,
});
```

#### Auth Slice Implementation
```javascript
// authSlice.js
const initialState = {
  isAuth: false,
  user: null,
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
```

### Async Thunks

#### Authentication Thunks
```javascript
// loginThunk
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", credentials);
      return res.data; // { user, token }
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// registerThunk
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/register", formData);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// getProfileThunk
export const getProfileThunk = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/auth/me", {
        withCredentials: true,
      });
      return res.data.user;
    } catch (err) {
      const message = err.response?.data?.message || "Failed to fetch profile.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
```

#### URL Shortening Thunks
```javascript
// createShortUrl
export const createShortUrl = createAsyncThunk(
  'url/createShortUrl',
  async (originalUrl, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/url/create', { url: originalUrl });
      return {
        originalUrl,
        shortUrl: res.data,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Shortening failed');
    }
  }
);

// redirectShortUrl
export const redirectShortUrl = createAsyncThunk(
  'url/redirectShortUrl',
  async (shortId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/${shortId}`);
      return {
        shortUrl: shortId,
        originalUrl: res.data.originalUrl,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Redirection failed');
    }
  }
);
```

### Component Integration

#### Using Redux in Components
```javascript
// Header.jsx - Complete Redux integration example
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../redux/features/auth/authThunks";
import { Search, HelpCircle, ChevronUp } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return (
    <header className="fixed w-full bg-white border-b border-gray-200 px-6 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">b</span>
          </div>
        </div>

        {/* Right side - Search, Upgrade, Help, Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Upgrade Button */}
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
            Upgrade
          </button>

          {/* Help Icon */}
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <HelpCircle className="text-gray-400 cursor-pointer hover:text-gray-600" size={24} />
          </div>

          {/* User Avatar */}
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {user?.name?.[0]?.toUpperCase() || "A"}
            </span>
          </div>

          {/* User Name */}
          <span className="text-gray-700 font-medium whitespace-nowrap">
            {status === "loading" ? "Loading..." : user?.name || "Guest"}
          </span>
          <ChevronUp className="text-gray-400" size={16} />
        </div>
      </div>
    </header>
  );
};
```

#### Authentication Flow in Components
```javascript
// Auth.jsx - Authentication component with Redux
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, registerThunk } from "../redux/features/auth/authThunks";
import { useNavigate } from "react-router-dom";

export default function AuthComponent({ isAuth, setIsAuth }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleLogin = () => {
    dispatch(loginThunk({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        setIsAuth(true);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleRegister = () => {
    dispatch(registerThunk(formData))
      .unwrap()
      .then(() => {
        setIsAuth(true);
        navigate("/");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  return (
    <div className="auth-container">
      {/* Form UI */}
      {status === "loading" && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
```

## Routing

### Route Structure

```jsx
<Routes>
  <Route path="/auth" element={<Auth />} />
  {isAuth ? (
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="links" element={<Links />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="qr" element={<QR />} />
      <Route path="pages" element={<Pages />} />
      <Route path="campaigns" element={<Campaigns />} />
      <Route path="domains" element={<Domains />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  ) : (
    <Route path="*" element={<Navigate to="/auth" />} />
  )}
</Routes>
```

### Protected Routes
All main application routes require authentication. Unauthenticated users are redirected to `/auth`.

## Styling

### Tailwind CSS Configuration

The application uses Tailwind CSS with custom color variables:

```css
:root {
  --clr-main: #819A91;
  --clr-soft: #A7C1A8;
  --clr-light: #D1D8BE;
  --clr-bg: #EEEFE0;
}
```

### Component Styling Patterns

- **Layout**: Flexbox and Grid for responsive layouts
- **Colors**: Consistent color palette with semantic naming
- **Spacing**: Tailwind spacing scale for consistency
- **Typography**: Responsive text sizing and weights
- **Interactive Elements**: Hover states and transitions

## API Integration

### Axios Configuration

```javascript
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true
});
```

### Request/Response Interceptors

- **Request**: Add authentication headers
- **Response**: Handle errors and token refresh
- **Error Handling**: Centralized error processing

## Development

### Environment Variables

```env
VITE_API_URL=http://localhost:5000/api
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Development Server

- **Hot Reload**: Instant updates during development
- **Port**: Runs on `http://localhost:5173`
- **Proxy**: API requests proxied to backend

## Build and Deployment

### Production Build

```bash
npm run build
```

Generates optimized static files in the `dist/` directory.

### Deployment Considerations

- Update `VITE_API_URL` for production backend
- Configure proper CORS settings
- Set up proper routing for SPA
- Optimize assets and enable compression

## Performance Optimizations

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Dynamic imports for components
- **Asset Optimization**: Vite's built-in optimizations
- **Bundle Analysis**: Use `npm run build -- --analyze`

## Testing

### Testing Strategy (Planned)

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: API integration testing
- **E2E Tests**: End-to-end user flows
- **Visual Tests**: Component visual regression testing

## Accessibility

- **Semantic HTML**: Proper HTML structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **ES6+ Features**: Transpiled for compatibility
- **Mobile Responsive**: Works on all device sizes
