FROM ubuntu:22.04

# Install system dependencies
RUN apt update -y && \
    DEBIAN_FRONTEND=noninteractive apt install -y \
    apache2 \
    php \
    php-fpm \
    php-cli \
    php-xml \
    php-mbstring \
    php-curl \
    php-mysql \
    php-gd \
    php-zip \
    php-bcmath \
    php-tokenizer \
    php-json \
    php-pdo \
    php-pdo-mysql \
    npm \
    nodejs \
    unzip \
    nano \
    curl \
    git \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php

# Create application directory
RUN mkdir -p /var/www/tailadmin-laravel

# Copy application files
COPY . /var/www/tailadmin-laravel

# Set working directory
WORKDIR /var/www/tailadmin-laravel

# Copy and run install script
COPY install.sh /var/www/tailadmin-laravel/install.sh
RUN chmod +x /var/www/tailadmin-laravel/install.sh
RUN ./install.sh

# Set proper permissions
RUN chown -R www-data:www-data /var/www/tailadmin-laravel
RUN chmod -R 755 /var/www/tailadmin-laravel/storage
RUN chmod -R 755 /var/www/tailadmin-laravel/bootstrap/cache

# Expose port
EXPOSE 8000

# Start the application
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
