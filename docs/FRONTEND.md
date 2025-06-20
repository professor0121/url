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
{
  auth: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  urls: {
    userUrls: [],
    currentUrl: null,
    loading: false,
    error: null
  }
}
```

### Key Actions

- `login()`: Authenticate user
- `logout()`: Clear user session
- `createShortUrl()`: Generate shortened URL
- `fetchUserUrls()`: Get user's URLs
- `updateUrlStats()`: Update click statistics

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
