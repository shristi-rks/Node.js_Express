# Node.js_Express

Node.js and express exercises/practice

 My first express server

Requirements:

1. Hello world route
Create a node.js server to port 3000 that you can start with "npm start" command (use npm init for example) and install express.js framework. Create a GET route to "/hello" that sends the following JSON object back to the client:

{
    msg: "Hello world"
}
Note: To test routes without front-end, it is recommended to use an application such as Postman.

2. ID echoing
Add a second GET route to "/echo/:id". This route should send the id back to the client in a JSON object in property "id". For example, if connecting to "/echo/dog" the backend would respond with:

{
    id: "dog"
}

Notes: In Express.js, when you define a route with a parameter using a colon (:) prefix, such as /echo/:id, the value specified in the URL for that parameter can be accessed through the req.params object.

In this case, req.params.id retrieves the value of the id parameter from the URL. For example, if the client makes a request to /echo/dog, req.params.id will be set to "dog"

3. POST request
Create a POST route to "/sum". This route takes an array of numbers from the "numbers" property of the request body, and sums them and sends them back to the client.

example request:

{
    numbers: [1, 2, 3]
}
example response:

{
    sum: 6
}

4. Static folder
Let's make the server able to serve an actual website. Create a static folder and add index.html file to it. This file should contain a h1 tag with the text "Hello world" inside. The HTML file should be accessible from <http://localhost:3000/>

5. Front-end and back-end communication
Add an input field (textarea or input tag) with an id of input-text and a button with an id of submit-data to index.html. When pressing the button, the website should send the contents of the input field in a JSON object to the POST route "/list". The backend should save the text to a list and respond with the list of words.

Example request:

{
    text: "foo"
}
Example respond:

{
    list: ["foo"]
}

Example request 2:

{
    text: "bar"
}
Example respond:

{
    list: ["foo", "bar"]
}

Notes: $nodemon --ignore 'data/*' index.js (so that nodemon ignores everything inside the folder data)
-note that if the list.json file is empty it will show Json.parse erro

Useful documents and links:
Postman
Express hello world example
Route parameters
express.json()
