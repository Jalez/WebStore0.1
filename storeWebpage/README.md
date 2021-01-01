=======
# Authors:

Jaako Rajala, jaakko.rajala@tuni.fi, 
responsible for: Project development/planning/implementation

Jin Luo, jin.luo@tuni.fi, 
responsible for: project planning, project implementation 



# WebDev1 coursework assignment

A web shop with vanilla HTML, CSS.


### The project structure

```
.
├── index.js                            --> connects to database, starts the server. 
├── package.json                        --> holds various metadata relevant to the project.
├── routes.js                           --> Directs HTTP requests to controllers, returns the responses (MVC)
│
├── auth                                --> authentication
│   └──  auth.js                        --> checks upon login that details are valid (IE: authentication). 
│
├── controllers                         --> CONTROLLERS (MVC)
│   ├── products.js                     --> controller for product (the model)
│   ├── orders.js                       --> controller for order (the model) //Added file
│   └── users.js                        --> controller for user (the model)
│
├── models                              --> MongoDB database collection schemas, models (MVC). 
│   ├── user.js                         --> Schema model for users -
│   ├── product.js                      --> Schema model for products - //Added file
│   └── order.js                        --> Schema model for user orders - //Added file
│                               
├── public                              --> Contents for client side presentation
│   ├── img                             --> 
│   ├── js                              --> javascript codes running on the client sides
│   └── css                             --> CSS files used to format the webpage
│
├── utils                               --> utils: used by routes and controllers
│   ├── requestUtils.js                 --> Contains request content handlers and validators. 
│   └── responseUtils.js                --> Contains the headers for responses. 
│
├── test                                --> tests
│   ├── auth                            --> Tests for authentication(OR Authorization?)
│   ├── controllers                     --> Tests for controllers
│   |   ├──products.test.js             --> Tests controllers/products.js functionality. 
│   |   └──users.test.js                --> Tests controllers/users.js functionality
│   |
│   └── own                             --> Own tests
│       ├── routeHelperFunction.js      --> Tests the Added route helper functions //Added file
│       ├── controllers                 --> Own tests for controllers
│       │   ├── products.test.js        --> Tests functionality of products controller - [x] //Added file
│       │   └── orders.test.js          --> Tests functionality of orders controller - [ ] //Added file
│       │
│       └── models                      --> Own tests for models
│           ├── product.test.js         --> Tests Schema model for product - [x] //Added file
│           └── order.test.js           --> Tests Schema model for order - [x] //Added file
│
└── 


```
- [ ] describe **added** files here and give them short descriptions

## The architecture 

- [ ] TODO: describe the system, important buzzwords include MVC and REST, using UML diagrams etc.


### Sequence diagram(s)

## Tests and documentation

## Security concerns

TODO: list the security threats represented in the course slides.
Document how the application protects against the threats.
