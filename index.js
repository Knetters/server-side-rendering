// Import the required modules
import express from "express";

// Create a new Express app
const app = express();

const url = 'https://whois.fdnd.nl/api/v1/squad/'

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files from the public directory
app.use(express.static("public"));

// Create a route for the index page
app.get('/', function (request, response) {

  fetchJson(url).then((data) => {
    response.render('index', data)

    console.log(data)
  })
});

// Set the port number and start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Application available on: http://localhost:${port}`);
});

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}