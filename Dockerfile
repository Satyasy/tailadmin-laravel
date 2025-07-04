FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libonig-dev libxml2-dev libzip-dev \
    libpq-dev libjpeg-dev libpng-dev libfreetype6-dev \
    nodejs npm default-mysql-client \
    && docker-php-ext-install pdo pdo_mysql \
    && apt-get clean

# Install Composer (latest)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install latest Node.js (stable) via `n`
RUN npm install -g n && n stable && npm cache clean --force

# Set working directory
WORKDIR /var/www

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Set NPM registry mirror and install Node dependencies
RUN npm config set registry https://registry.npmmirror.com/ \
    && npm install --fetch-timeout=60000 --cache-min=86400

# Expose PHP-FPM port
EXPOSE 9000

# Default command
CMD ["php-fpm"]
