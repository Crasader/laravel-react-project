# laravel-react-project

It's a simple react and laravel project for learn.

# :closed_book: Getting Started

:fire: Go to download the project with :
```
git clone https://github.com/mikayilsrt/laravel-react-project.git
cd laravel-react-project
composer install
npm install && npm run watch
```
:eyes: Go change .env file for connect the project on database.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dbname
DB_USERNAME=root
DB_PASSWORD=
```
:boom: Lately, add the migration and launch the server, with **php artisan**.
```
php artisan migrate
php artisan serve
```