#!/bin/bash

set -e

echo "Starting TailAdmin Laravel installation..."

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

# Install composer dependencies
echo "Installing composer dependencies..."
composer install --no-dev --optimize-autoloader

# Copy environment file
echo "Setting up environment file..."
cp .env.example .env

# Generate application key
echo "Generating application key..."
php artisan key:generate

# Configure database settings for Docker environment
echo "Configuring database settings..."
sed -i 's/DB_CONNECTION=mysql/DB_CONNECTION=mysql/g' .env
sed -i 's/DB_HOST=127.0.0.1/DB_HOST=mysql/g' .env
sed -i 's/DB_PORT=3306/DB_PORT=3306/g' .env
sed -i 's/DB_DATABASE=laravel/DB_DATABASE=tailadmin_laravel/g' .env
sed -i 's/DB_USERNAME=root/DB_USERNAME=laravel/g' .env
sed -i 's/DB_PASSWORD=/DB_PASSWORD=password/g' .env

# Wait for database to be ready (for Docker environment)
echo "Waiting for database connection..."
sleep 10

# Run database migrations and seeders
echo "Running database migrations..."
php artisan migrate --force

echo "Running database seeders..."
php artisan db:seed --force

# Create storage link
echo "Creating storage link..."
php artisan storage:link

# Build frontend assets
echo "Building frontend assets..."
npm run build

# Clear and cache config
echo "Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "TailAdmin Laravel installation completed successfully!"
