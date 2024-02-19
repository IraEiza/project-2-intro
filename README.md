# project-2-intro

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION        | POST PARAMS                                                                         | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup        | `userName`, `readline`, `email`, `password`, `phone`                                | { token: `token` }
POST   | /auth/login      | -     | all  | User Login         | `email`, `password`                                                                 | { token: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION        | POST PARAMS                                                                         | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------------------------------------------|--------------------
GET    | /users           | YES   | all  | Get All Users      |                                                                                     | { data: [`users`] }
GET    | /users/:id       | YES   | user | Get One User       | `userName`, `readline`, `email`, `password`, `phone`                                | { token: `token` }
GET    | /users/:id/tweets| YES   | user | Get All users tweets      | `params`                                                                     | { data: [`tweets`] }
POST   |                  | -     | user | Create New User    | `userName`, `readline`, `email`, `password`, `phone`                                | { token: `token` }
PUT    | /users/:id       | YES   | admin | Update User       | `userName`, `readline`, `email`, `password`, `description`, `phone`                 | data: `user` }
PUT    | /users/me        | YES   | user  | Update my user    | `userName`, `readline`, `email`, `password`, `phone`                                | 
DELETE |                  | -     | user | Delete User        | `userName`, `readline`, `email`, `password`, `phone`                                | 
