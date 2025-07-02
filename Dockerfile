FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libonig-dev libxml2-dev libzip-dev \
    libpq-dev libjpeg-dev libpng-dev libfreetype6-dev \
    libmcrypt-dev libonig-dev libssl-dev \
    nodejs npm

# Install Composer (latest)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js (latest stable via n package)
RUN npm install -g n && n stable

# Set working directory
WORKDIR /var/www

COPY . .

RUN composer install
RUN npm config set registry https://registry.npmmirror.com/ \
  && npm install --fetch-timeout=60000 --cache-min=86400
COPY .env.example .env
RUN php artisan key:generate
RUN php artisan migrate --seed --force
RUN php artisan storage:link

EXPOSE 9000
CMD ["php-fpm"]
