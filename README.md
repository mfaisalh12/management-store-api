# Management Book Store API

## Stacks

- NodeJS
- ExpressJS
- MySQL
- Sequelize ORM
- Multer

## Management Book

- [x] Management Categories
- [x] Management Books
- [x] Management Checkout
- [x] Management Transaction

## Requirement

For running this project please install nodejs and mysql

## Getting Started to the development

- Clone the repository :

  ```
  git clone https://github.com/elfinsanjaya12/be-book-cashier/
  ```

- Switch to the repo folder :

  ```
  cd management-store-api
  ```

- Install all the dependencies using `npm` or you can using `yarn` :

  ```
  npm install or yarn install
  ```

- Set configuration database like on your environtment system,to the config file on mode `development` in file `app/config/database.json` :

  ```
  "development": {
      "username": "DATABASE_USER_NAME",
      "password": "DATABASE_PASSWORD",
      "database": "DATABASE_NAME",
      "host": "DATABASE_HOST",
      "dialect": "mysql"
    },
  ```

- Run the server :

  ```
  npm run start or npm run dev
  ```

You can now access the server at http://localhost:3000

## Link API

https://documenter.getpostman.com/view/14600341/2s93CPprdK
