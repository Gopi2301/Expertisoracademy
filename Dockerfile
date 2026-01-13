# Dockerfile

# Stage 1: Build the frontend
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build arguments for Vite
ARG VITE_API_URL
ARG VITE_SSO_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_SSO_URL=$VITE_SSO_URL

# Build the application
RUN npm run build

# Stage 2: Serve with PHP/Apache
FROM php:8.2-apache

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Copy built frontend assets from the builder stage
COPY --from=builder /app/dist /var/www/html

# Copy API files
COPY api /var/www/html/api

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
