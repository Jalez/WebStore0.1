const responseUtils = require('./utils/responseUtils');
const { acceptsJson } = require('./utils/requestUtils');
const { renderPublic } = require('./utils/render');
const {getCurrentUser} = require('./auth/auth');

const {routeToProductPage, routeToSpecificProduct} = require("./controllers/products");
const { routeToAllUsers, routeToUserOperations, routeToUserRegister } = require("./controllers/users");
const { routeToPostOrder, routeToGetOrders } = require("./controllers/orders");

/**
 * Known API routes and their allowed methods
 *
 * Used to check allowed methods and also to send correct header value
 * in response to an OPTIONS request by sendOptions() (Access-Control-Allow-Methods)
 */
const allowedMethods = {
  '/api/register': ['POST'],
  '/api/users': ['GET'],
  '/api/products':['GET', 'POST'], //newly added for exercise 9
  '/api/orders':['POST', 'GET'] //newly added for exercise 9 / JR: Modified "cart" to "orders"
};

/**
 * Send response to client options request.
 *
 * @param {string} filePath pathname of the request URL
 * @param {http.ServerResponse} response the response to be sent to the user
 */
const sendOptions = (filePath, response) => {
  if (filePath in allowedMethods) {
    response.writeHead(204, {
      'Access-Control-Allow-Methods': allowedMethods[filePath].join(','),
      'Access-Control-Allow-Headers': 'Content-Type,Accept',
      'Access-Control-Max-Age': '86400',
      'Access-Control-Expose-Headers': 'Content-Type,Accept'
    });
    return response.end();
  }

  return responseUtils.notFound(response);
};

/**
 * Does the url have an ID component as its last part? (e.g. /api/users/dsf7844e)
 *
 * @param {string} url filePath
 * @param {string} prefix the prefix of the url
 * @returns {boolean} the boolean whether the url have an ID component as its last part
 */
const matchIdRoute = (url, prefix) => {
  const idPattern = '[0-9a-z]{8,24}';
  const regex = new RegExp(`^(/api)?/${prefix}/${idPattern}$`);
  return regex.test(url);
};

/**
 * Does the URL match /api/users/{id}
 *
 * @param {string} url filePath
 * @returns {boolean} the boolean judging whether the URL match /api/users/{id}
 */
const matchUserId = url => {
  return matchIdRoute(url, 'users');
};
/**
 * Does the URL match /api/products/{id}
 *
 * @param {string} url filePath
 * @returns {boolean} the boolean judging whether the URL match /api/prodcts/{id}
 */
const matchProductId = url => {
  return matchIdRoute(url, 'products');
};

/**
 * Does the URL match /api/orders/{id}
 *
 * @param {string} url filePath
 * @returns {boolean} the boolean judging whether the URL match /api/prodcts/{id}
 */
const matchOrderId = url => {
  return matchIdRoute(url, 'orders');
};

// eslint-disable-next-line complexity
const handleRequest = async (request, response) => {
  const { url, headers } = request;
  let { method } = request;
  method = method.toUpperCase();

  const filePath = new URL(url, `http://${headers.host}`).pathname;
  
  //JR: In the coming functions, we'll need the currentUser details. 
  //JL/JR(slight fix for 10.1): Get the current user as a mongoose document object from the database. 
  const currentUser =await getCurrentUser(request);

  //Respond "204 No Content" to an OPTIONS request
  //Should respond with correct Allow headers to an options request
  // See: http://restcookbook.com/HTTP%20Methods/options/
  if (method === 'OPTIONS') return sendOptions(filePath, response);

  // serve static files from public/ and return immediately
  if (method === 'GET' && !filePath.startsWith('/api')) {
    const fileName = filePath === '/' || filePath === '' ? 'index.html' : filePath;
    return renderPublic(fileName, response);
  }

   // Default to 404 Not Found if unknown url
  if (!(filePath in allowedMethods) && !(filePath.includes("/api/users")) && !(filePath.includes("/api/products")) && !(filePath.includes("/api/orders"))) return responseUtils.notFound(response);
  
  
  //JR: Does the URL match /api/users/{id}?
  if (matchUserId(filePath)) {
    await routeToUserOperations(request, response, currentUser, filePath, method);
  }

  //JL: route for a specific product
  if (matchProductId(filePath)) {
    await routeToSpecificProduct(request, response, currentUser, filePath, method);
  }

  //JR: route for specific order
  if (matchOrderId(filePath)) {
    await routeToGetOrders(request, response, currentUser, filePath, method);
  }

  // if not accept JSON (this route is put after routeToUserOperations and routeToSpecificProduct)
  if (!acceptsJson(request)) {
    return responseUtils.contentTypeNotAcceptable(response);
  }

  // Default to 404 Not Found if unknown url (this route is put after routeToUserOperations and routeToSpecificProduct)
  if (!(filePath in allowedMethods)) return responseUtils.notFound(response);

  // Check for allowable methods (405 if true)
  if (!allowedMethods[filePath].includes(method)) {
    return responseUtils.methodNotAllowed(response);
  }

  // register new user
  if (filePath === '/api/register' && method === 'POST') {
    await routeToUserRegister(request, response);
  }
  
  //if no user respond with Basic Auth Challenge
  if (!currentUser){
    return responseUtils.basicAuthChallenge(response);
  }

  // GET all users
  if (filePath === '/api/users' && method === 'GET') {
    await routeToAllUsers( response, currentUser);
  }

  //JL: route for products.html (all products)
  if (filePath === '/api/products' && (method === 'GET' || method === 'POST') ) {
    await routeToProductPage(request, response, currentUser, method);
  }

  //JL:new route added for cart.html/ changed to be for "orders"
  //JR: GET all users
  if (filePath === '/api/orders' && method === 'GET') {
    await routeToGetOrders(request, response, currentUser, filePath, method);
  }

  //JR Adding a new order to the database: 
  if(filePath === '/api/orders' && method === 'POST') {
    await routeToPostOrder(request, response, currentUser);
  }
};


module.exports = { handleRequest };