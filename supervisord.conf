[supervisord]
nodaemon=true
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid
user=root

[program:laravel-serve]
command=php artisan serve --host=0.0.0.0 --port=9000
directory=/var/www
autostart=true
autorestart=true
user=www-data
stdout_logfile=/var/log/supervisor/laravel-serve.log
stderr_logfile=/var/log/supervisor/laravel-serve-error.log
environment=LARAVEL_SAIL="1"

[program:vite-dev]
command=npm run hot
directory=/var/www
autostart=true
autorestart=true
user=www-data
stdout_logfile=/var/log/supervisor/vite-dev.log
stderr_logfile=/var/log/supervisor/vite-dev-error.log
environment=LARAVEL_SAIL="1"
