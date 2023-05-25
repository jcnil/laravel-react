# Silent4Business Challange

## Solucion

Para esta solucion se uso el Framework laravel en su version 9 y se uso la version 18.2.0 para React, el problema plantea que se debe usar MySQL en mi caso use PostgreSQL

## Carpeta api

Dentro de esta carpeta esta el backend de la aplicacion como una api usando el Framework laravel 9

### Instalacion

Se debe agregar el nombre de la base de datos donde se pretende crear la table, el usurio y su respectivo password en el archivo .env de la carpeta api

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

Se debe realizar la migracion de la estructura de datos creada en la api de laravel, usando el siguiente comando

 `php artisan migrate`

Luego se debe levantar el servidor `php artisan serve`

## Carpeta ui

Dentro de esta carpeta esta el frontend de la aplicacion usando React 18.2.0

Se debe instalar los paquetes que ya estan en el archivo package.json, usando el siguiente comando

`npm install`

luego se debe ejecutar el siguiente comando para levantar la interfaz

`npm start`

## Challenge Solucionado por

* **José Nicolielly** - - [jcnil](https://github.com/jcnil/laravel-react)

