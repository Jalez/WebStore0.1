=======
# Group 
Jaako Rajala, jaakko.rajala@tuni.fi, 428219, 
responsible for: Project development/planning/etc, (Need to add more? short description of duties)
Jin Luo, jin.luo@tuni.fi, 245096, 
responsible for: project planning, project implementation 



# WebDev1 coursework assignment

A web shop with vanilla HTML, CSS. Using mongoDB. 

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

- [ ] TODO: describe the system, important buzzwords include MVC and REST.
UML diagrams..?


### Sequence diagram(s)

![Sequence diagram](/UMLdiagrams/seqDiag.png)

## Tests and documentation

1. [The link to the issue with a brief description of the issue itself as title](The issues url)
     - [Link to the tested file with relative path as name](The files url)
     - [Link to the tests with relative path as name](The tests url)


## Security concerns

TODO: list the security threats represented in the course slides.
Document how your application protects against the threats.
You are also free to add more security threats + protection here, if you will.
