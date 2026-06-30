# Use Node.js 22 LTS
FROM node:22-alpine

# Create application directory
WORKDIR /app

# Copy package files first (better Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose Express port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]