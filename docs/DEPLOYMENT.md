# Deployment Guide

## Overview

This guide covers deployment strategies for both development and production environments, including various hosting platforms and configuration requirements.

## Environment Setup

### Development Environment

#### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git
- Code editor (VS Code recommended)

#### Local Development Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd url-shortener
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

2. **Environment Configuration**
   
   Backend `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/url-shortener
   JWT_SECRET=your-super-secret-jwt-key-min-32-chars
   APP_URL=http://localhost:5000/
   NODE_ENV=development
   ```
   
   Frontend `.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

### Production Environment

#### Environment Variables

Backend Production `.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/url-shortener
JWT_SECRET=super-secure-production-secret-key-min-32-characters
APP_URL=https://your-domain.com/
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

Frontend Production `.env`:
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Deployment Platforms

### Backend Deployment

#### Railway (Recommended)

1. **Setup Railway Account**
   - Sign up at [railway.app](https://railway.app)
   - Connect your GitHub account

2. **Deploy Backend**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   cd backend
   railway init
   railway up
   ```

3. **Configure Environment Variables**
   - Go to Railway dashboard
   - Add all production environment variables
   - Set up MongoDB database or connect to Atlas

4. **Custom Domain (Optional)**
   - Add custom domain in Railway settings
   - Update APP_URL environment variable

#### Heroku

1. **Install Heroku CLI**
   ```bash
   # Install Heroku CLI
   npm install -g heroku
   
   # Login
   heroku login
   ```

2. **Create and Deploy**
   ```bash
   cd backend
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set MONGO_URI=your-mongodb-uri
   heroku config:set JWT_SECRET=your-jwt-secret
   heroku config:set APP_URL=https://your-app-name.herokuapp.com/
   
   # Deploy
   git push heroku main
   ```

#### DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean App Platform
   - Connect GitHub repository
   - Select backend folder

2. **Configure Build Settings**
   ```yaml
   name: url-shortener-backend
   services:
   - name: api
     source_dir: /backend
     github:
       repo: your-username/your-repo
       branch: main
     run_command: npm start
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: MONGO_URI
       value: your-mongodb-uri
     - key: JWT_SECRET
       value: your-jwt-secret
   ```

### Frontend Deployment

#### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd frontend
   vercel
   
   # Follow prompts to configure
   # Set build command: npm run build
   # Set output directory: dist
   ```

3. **Environment Variables**
   - Add `VITE_API_URL` in Vercel dashboard
   - Point to your deployed backend URL

#### Netlify

1. **Build and Deploy**
   ```bash
   cd frontend
   npm run build
   
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

2. **Configure Redirects**
   Create `frontend/public/_redirects`:
   ```
   /*    /index.html   200
   ```

#### GitHub Pages

1. **Build for Production**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy with GitHub Actions**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - name: Setup Node.js
         uses: actions/setup-node@v2
         with:
           node-version: '18'
       - name: Install and Build
         run: |
           cd frontend
           npm install
           npm run build
       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./frontend/dist
   ```

## Database Deployment

### MongoDB Atlas (Recommended)

1. **Create Cluster**
   - Sign up at [mongodb.com](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Choose appropriate tier (M0 for free tier)

2. **Configure Access**
   - Create database user
   - Add IP addresses to whitelist (0.0.0.0/0 for all IPs)
   - Get connection string

3. **Connection String Format**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
   ```

### Self-Hosted MongoDB

1. **Server Setup**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install mongodb
   
   # Start MongoDB
   sudo systemctl start mongodb
   sudo systemctl enable mongodb
   ```

2. **Security Configuration**
   ```bash
   # Create admin user
   mongo
   use admin
   db.createUser({
     user: "admin",
     pwd: "secure-password",
     roles: ["userAdminAnyDatabase"]
   })
   ```

## Docker Deployment

### Backend Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start application
CMD ["npm", "start"]
```

### Frontend Dockerfile

```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/url-shortener
      - JWT_SECRET=your-jwt-secret
      - APP_URL=http://localhost:5000/
    depends_on:
      - mongo

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    environment:
      - VITE_API_URL=http://localhost:5000/api

  mongo:
    image: mongo:5
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## CI/CD Pipeline

### GitHub Actions

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Test Backend
      run: |
        cd backend
        npm install
        npm test
    
    - name: Test Frontend
      run: |
        cd frontend
        npm install
        npm run lint
        npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to Production
      run: |
        # Add deployment commands here
        echo "Deploying to production..."
```

## Monitoring and Logging

### Application Monitoring

1. **Health Check Endpoint**
   ```javascript
   app.get('/health', (req, res) => {
     res.status(200).json({
       status: 'OK',
       timestamp: new Date().toISOString(),
       uptime: process.uptime()
     });
   });
   ```

2. **Error Tracking**
   - Integrate Sentry for error tracking
   - Set up log aggregation (LogRocket, DataDog)

### Performance Monitoring

1. **Application Performance**
   - New Relic or AppDynamics
   - Custom metrics and dashboards

2. **Database Monitoring**
   - MongoDB Atlas monitoring
   - Query performance analysis

## Security Considerations

### Production Security Checklist

- [ ] Use HTTPS for all communications
- [ ] Implement rate limiting
- [ ] Set secure HTTP headers
- [ ] Use environment variables for secrets
- [ ] Enable CORS with specific origins
- [ ] Implement input validation
- [ ] Use secure session management
- [ ] Regular security updates
- [ ] Database access restrictions
- [ ] API authentication and authorization

### SSL/TLS Configuration

1. **Let's Encrypt (Free)**
   ```bash
   # Install Certbot
   sudo apt install certbot
   
   # Get certificate
   sudo certbot certonly --standalone -d your-domain.com
   ```

2. **Cloudflare (Recommended)**
   - Add domain to Cloudflare
   - Enable SSL/TLS encryption
   - Configure security settings

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check CORS_ORIGIN environment variable
   - Verify frontend URL in backend CORS config

2. **Database Connection**
   - Verify MongoDB URI format
   - Check network connectivity
   - Validate credentials

3. **Environment Variables**
   - Ensure all required variables are set
   - Check for typos in variable names
   - Verify values are properly escaped

4. **Build Failures**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Verify all dependencies are listed

### Debugging Commands

```bash
# Check application logs
heroku logs --tail
railway logs

# Test database connection
mongo "mongodb+srv://cluster.mongodb.net/test" --username username

# Verify environment variables
printenv | grep -E "(MONGO_URI|JWT_SECRET|APP_URL)"
```
