# Contributing Guide

## Welcome Contributors! 🎉

Thank you for your interest in contributing to the URL Shortener project! This guide will help you get started with contributing to the codebase.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Process](#contributing-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js (v16 or higher)
- MongoDB (local or Atlas account)
- Git
- Code editor (VS Code recommended)
- Basic knowledge of React and Node.js

### Development Setup

1. **Fork the Repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/url-shortener.git
   cd url-shortener
   ```

2. **Set Up Remote**
   ```bash
   # Add the original repo as upstream
   git remote add upstream https://github.com/ORIGINAL_OWNER/url-shortener.git
   ```

3. **Install Dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Copy example environment files and configure:
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   ```

5. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

## Contributing Process

### 1. Choose an Issue

- Browse [open issues](https://github.com/OWNER/url-shortener/issues)
- Look for issues labeled `good first issue` for beginners
- Comment on the issue to express interest
- Wait for assignment before starting work

### 2. Create a Branch

```bash
# Update your fork
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 3. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add tests for new functionality
- Update documentation as needed

### 4. Commit Changes

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add URL validation to shortening service

- Add URL format validation
- Implement error handling for invalid URLs
- Add unit tests for validation logic

Closes #123"
```

### 5. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
```

## Coding Standards

### JavaScript/React Standards

#### Code Style

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Use destructuring for objects and arrays

#### Naming Conventions

```javascript
// Variables and functions: camelCase
const userName = 'john';
const getUserData = () => {};

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';

// Components: PascalCase
const UserProfile = () => {};

// Files: camelCase for utilities, PascalCase for components
// userUtils.js, UserProfile.jsx
```

#### Component Structure

```jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  // Hooks at the top
  const [state, setState] = useState(null);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // Event handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

ComponentName.defaultProps = {
  prop2: 0
};

export default ComponentName;
```

### Backend Standards

#### API Design

```javascript
// Controller structure
export const controllerName = wrapAsync(async (req, res) => {
  const { param1, param2 } = req.body;
  
  // Validation
  if (!param1) {
    return res.status(400).json({ error: 'param1 is required' });
  }
  
  // Business logic (delegate to service)
  const result = await serviceName(param1, param2);
  
  // Response
  res.status(200).json(result);
});
```

#### Error Handling

```javascript
// Use the wrapper for async functions
export const asyncFunction = wrapAsync(async (req, res) => {
  // Function logic
});

// Custom error classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}
```

### CSS/Styling Standards

#### Tailwind CSS Usage

```jsx
// Prefer utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-800">Title</h2>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
    Action
  </button>
</div>

// Use responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

## Testing Guidelines

### Frontend Testing

```javascript
// Component testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  test('renders user name', () => {
    render(<UserProfile name="John Doe" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<UserProfile onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Backend Testing

```javascript
// Service testing
import { createShortUrl } from '../services/shortUrl.service';
import { jest } from '@jest/globals';

describe('Short URL Service', () => {
  test('creates short URL successfully', async () => {
    const url = 'https://example.com';
    const userId = 'user123';
    
    const result = await createShortUrl(url, userId);
    
    expect(result).toHaveProperty('shortUrl');
    expect(result.shortUrl).toMatch(/^[a-zA-Z0-9]+$/);
  });
});
```

### Test Coverage

- Aim for 80%+ test coverage
- Test critical business logic
- Include edge cases and error scenarios
- Test API endpoints with integration tests

## Pull Request Process

### PR Checklist

Before submitting a pull request, ensure:

- [ ] Code follows the style guidelines
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] Commit messages are descriptive
- [ ] No merge conflicts exist
- [ ] PR description explains the changes

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests pass locally
- [ ] Documentation updated
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests
2. **Code Review**: Maintainers review the code
3. **Feedback**: Address any requested changes
4. **Approval**: PR approved by maintainers
5. **Merge**: PR merged into main branch

## Issue Reporting

### Bug Reports

Use the bug report template:

```markdown
**Bug Description**
Clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Node.js version: [e.g., 16.14.0]

**Screenshots**
Add screenshots if applicable.
```

### Feature Requests

```markdown
**Feature Description**
Clear description of the proposed feature.

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other relevant information.
```

## Development Tips

### Useful Commands

```bash
# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Check types (if using TypeScript)
npm run type-check

# Build for production
npm run build
```

### Debugging

- Use browser dev tools for frontend debugging
- Use `console.log` sparingly, prefer debugger
- Use MongoDB Compass for database inspection
- Use Postman for API testing

### Git Best Practices

```bash
# Keep commits atomic and focused
git commit -m "fix: resolve URL validation issue"

# Use conventional commit messages
# feat: new feature
# fix: bug fix
# docs: documentation
# style: formatting
# refactor: code restructuring
# test: adding tests
# chore: maintenance

# Rebase before pushing
git rebase upstream/main
git push origin feature-branch
```

## Getting Help

- **Discord/Slack**: Join our community chat
- **GitHub Discussions**: Ask questions and discuss ideas
- **Issues**: Report bugs and request features
- **Email**: Contact maintainers directly

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation
- Community highlights

Thank you for contributing to the URL Shortener project! 🚀
