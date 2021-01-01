=======
# Group 

Member1:  Jaako Rajala, jaakko.rajala@tuni.fi, 428219, 
responsible for: Project development/planning/implementation

Member2:  Jin Luo, jin.luo@tuni.fi, 245096, 
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

- [ ] TODO: describe the system, important buzzwords include MVC and REST.
UML diagrams would be highly appreciated.


### Sequence diagram(s)

![Sequence diagram](/UMLdiagrams/seqDiag.png)

## Tests and documentation

- [ ] TODO: Links to at least 10 of your group's GitLab issues, and their associated Mocha tests and test files. 

During the last weeks of working on the project, we named several issues regarding its last stages, and used Gitlabs own issue board to document these. 

We'll be using the following template to name the issues found: 

1. [The link to the issue with a brief description of the issue itself as title](The issues url)
     - [Link to the tested file with relative path as name](The files url)
     - [Link to the tests with relative path as name](The tests url)

### The Issues: 

- [x] 1. [Using the database, I want there to be a valid list of products available](https://course-gitlab.tuni.fi/webdev1-2020-2021/webdev1-group-71/-/issues/2)
     - [models\product.js](models/product.js)
     - [test\own\models\product.test.js](/test/own/models/product.test.js)
- [x] 2. [Using the database, I want there to be a valid list of orders available](https://course-gitlab.tuni.fi/webdev1-2020-2021/webdev1-group-71/-/issues/11)
     - [models\order.js](models/order.js)
     - [test\own\models\order.test.js](/test/own/models/product.test.js) 
- [x] 3. [As a developer, I want the program to use the database products-collection when user is looking at products.](https://course-gitlab.tuni.fi/webdev1-2020-2021/webdev1-group-71/-/issues/12)
     - [controllers\products.js](controllers/products.js)
     - [test\own\controllers\products.test.js](test/own/controllers/products.test.js)
- [x] 4. [As a developer, I want the program to use the database orders-collection when user is submitting orders.](https://course-gitlab.tuni.fi/webdev1-2020-2021/webdev1-group-71/-/issues/13)
     - [controllers\orders.js](controllers/orders.js)
     - [test\own\controllers\orders.test.js](test/own/controllers/orders.test.js)
- [x] 5. [Complete tests for own/routeHelperFuncrion.test.js](https://course-gitlab.tuni.fi/webdev1-2020-2021/webdev1-group-71/-/issues/14)
     - [functions tested are in controllers\users.js](controllers/users.js)
     - [functions tested are in controllers\products.js](controllers/products.js)
     - [test\own\routeHelperFuncrion.test.js](test/own/routeHelperFuncrion.test.js)

## Security concerns

TODO: list the security threats represented in the course slides.
Document how your application protects against the threats.
You are also free to add more security threats + protection here, if you will.

>>>>>>> fcd512a9c3494bbbbafecc75e42058a31e07037b

<<<<<<< HEAD

# OLD README DATA (TO BE DELETED)
**22.11.2020 10 Not completely done, but can be submitted**
1. added some small issues. And solved those issues. These issues may not be necessary. 
I just added some functions in controllers/products.js and controllers/users.js, so that route.js can be shorter.

2. created tests for those issues. The tests have not been completed yet, but no matter it passes the tests or not, it will pass the exercise.

3. Even though the tests have not been finished yet, it passes the exercise.

4. Added the continuous integration in GitLab. Note that, even though the commits go through the automatic test, the runner currently does nothing.  

5. Functional programming checked with fp-lint. Bugs fixed.


**12.11.2020 9.5 DONE** 
1. auth/auth.js:
- modified getCurrentUser function.

2. index.js
- load the database address
- connect to the database

3. models/user.js
-  modified checkPassword function

4. routes.js
- replaced all the methods from utils/user.js

**11.11.2020 9.3 & 9.4 DONE**

**9.3:**
1. .env
-  Add key-value pair to environment of DBURL.

2. models/db.js:
- Add Default URL for database.
- Read environment using dotenv-library
- getDbUrl(): return either DBURL or defaultDBURL (if no DBURL). 

**9.4:**
1. models/user.js:
- added bcrypt salt. 
- new Schema: userSchema(): Defines schematypes for paths: name, email, password, etc. (for the database)
- encrypt(password): encrypts the given password, using bcrypt.
- checkPassword(password): Compares oldHash and newHash using salt. 

**09.11.2020 9.1 DONE**
TO DO: 9.3, 9.4, 9.5
1. routes.js: 
- Add new routes for the products page and cart page **DONE**

2. public/js/cart.js: 
- Add a new javascript file controlling the cart page **DONE**

3. public/js/products.js: 
- Add a new javascript file controlling the products page **DONE**

4. public/js/utils.js: 
- Add some functions handling product modification in the cart  **DONE**

5. utils/products.js: 
- Add a new utility file for products related operations  **DONE**


**01.11.2020 ESLint check DONE**

**01.11.2020 8.5 DONE**

1. routes.js: **DONE**
- Implement view, update and delete a single user by ID (GET, PUT, DELETE) **DONE**

2. public/js/utils.js: **DONE**
- Implement deleteResource() **DONE**

3. public/js/adminUsers.js: **DONE**
- Updating/modifying and deleting existing users **DONE**

**30.10.2020 8.4 DONE**

1. utils/requestUtils.js: **DONE**
- getCredentials(): Parse user credentials from the "Authorization" request header **DONE**

2. utils/responseUtils.js: **DONE**
- basicAuthChallenge(): Send proper headers for basic authentication challenge **DONE**

3. auth/auth.js: **DONE**
- getCurrentUser(): Get current user based on the "Authorization" request header **DONE**

4. routes.js.js: **DONE**
- Add authentication to user listing (only allowed to users with role "admin") **DONE**

**30.10.2020 8.3 DONE**

TODO:
8.4 User Authentication
8.5 Modifying and Deleting Users


**30.10.2020 8.3. Almost done**

1. utils/users.js:  **DONE**
- emailInUse(): Check if there already exists a user with a given email - **Done**
- getUser(): Get user whose email and password match the provided values - **Done**
- getUserById(): Find user by user id - **Done**
- deleteUserById(): Delete user with a given id - **Done**
- getAllUsers(): Retrieve all users - **Done**
- saveNewUser(): Save new user - **Done**
- updateUserRole(): Update user's role - **Done**
- validateUser(): Validate user before saving  - **Done** 

2. utils/requestUtils.js **DONE**
- acceptsJson(): Check if the client accepts JSON as a response based on "Accept" request header - **Done**
- isJson(): Check whether request "Content-Type" is JSON or not - **Done**

3. routes.js **DONE**
- Return all users as JSON  - **Done**
- Implement registration  - **Done**

4. public/js/utils.js
- Implement getJSON()  - **Done**
- Implement postOrPutJSON()  - **Done**
5. public/js/adminUsers.js  **DONE**
- List all users (use <template id="user-template"> in users.html)  - **Done**
6. public/js/register.js
- Implement user registration (handle form submitting) - **Done**

**27.10.2020 Several functionalities added to users.js**

Hey guys,

Let's meet up in discord incase we need to chat about the assignments and hash out a good workflow. I've set up a channel, link here:

https://discord.gg/8mSkVa

- Jaakko
