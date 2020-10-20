# My-Bank-API
This is just a Simple API made for exercise the content learned in this Module

## API Made using:
- [Express.js](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [Winston](https://www.npmjs.com/package/winston)
- [Swagger-UI-Express](https://www.npmjs.com/package/swagger-ui-express)

### How use this API
It is as simple as it looks, starting from the point where you should already know Insomnia (if you don't, try to download it, you will need it, [Link](https://insomnia.rest/download/)) and you have Node.JS installed in your computer (if you don't have, download it, you will need it, [Link](https://nodejs.org/en/)) you just need to do the following:

- Clone This code
- Open with your preferred editor
- Open "My-Bank-API" folder in your favorite Shell 
- Run ``npm install`` 
- Run ``npm start``
- Create The following requests at Insomnia:
  - **POST** in URI `"http://localhost:3000/account/create"`
  - **GET** in URI `"http://localhost:3000/account/search/all"`
  - **GET** in URI `"http://localhost:3000/account/search/:id"`
  - **DELETE** in URI `"http://localhost:3000/account/delete/:id"`
  - **PUT** in URI `"http://localhost:3000/account/edit/:id"`
  - **PATCH** in URI `"http://localhost:3000/account/updateBalance/:id"`
- Run That requests, yay! 😄🙌




> #### ``Thanks For Reading This "Article"!``

>     Copyright © 2020 KuryKat