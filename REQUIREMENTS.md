# API endpoint For User Service

- POST /api/user/create

  {"email" : "mohamed@gmail.com" , "password" : "admin" , "first_name" : "mohamed" , "last_name" : "emad"}

  `Create new User`

- POST /api/user/login

  {"email" : "mohamed@gmail.com" , "password" : "admin"}

  `login by email and password`

- GET /api/user/show/:id

  `Show user by id`

- GET /api/user/index

  `Show all users`

# API endpoint For Product Service

- POST /api/product/create

  { "name" : "iphone13" , "price" : 1000 , "category" : "phones"}

  `Create new product`

- GET /api/product

  `Show all products to specific category by category query`

- GET /api/product/show/:id

  `Show product by id`

- GET /api/product/index

  `Show all products`

- GET /api/product/best

  `Show Top 5 most popular products`

# API endpoint For Order Service

- POST /api/order/create

  {"user_id" : 1 , "product_id" : 1 , "quantity" : 5}

  `Create new order`

- GET /api/order

  `Show all completed orders`

- GET /api/order/show/:id

  `Show order by id`

- GET /api/order/index

  `Show all orders`

- GET /api/order/:id/status

  `Update order status from active to completed`

# DATABASE SCHEMA

![](https://res.cloudinary.com/micro-services/image/upload/v1650204411/database_schema.jpg)
