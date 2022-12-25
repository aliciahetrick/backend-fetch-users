//cd into folder
//`npm init -y`
//`npm i express`
//`touch index.js`

const express = require('express')
const app = express()
// console.dir(app)
// in terminal `node index.js` returns app object with many methods

// at this point haven't started server or started listening for requests

//app.listen takes a port to listen on in the first param
//second param is a callback function, that will run when the app starts listening
app.listen(3000, () => {
  console.log('listening on port 3000')
})
//run `node index.js` again

//request running locally

//in browser `http://localhost:3000/`
//page will display `Cannot GET /`
//this means we did not get a response but there is a server in place

//app.use method, anytime there is an incoming request
//the callback inside app.use will run
// `app.use(() => {
//   console.log('we got a new request')
// })`
//to restart server by pressing control + c
//`node index.js` in terminal
//refresh browser page -- should still display `Cannot GET /`
//terminal will update with app.use message

//every time a request hits the server, app.use will run again

//`app.use` takes two params request & repsonse
//both are objects made by express
// `app.use((req, res) => {
//   // console.dir(req)
//   // res.send('Hello, we got your request, this is a response')
//   // res.send({ name: 'alicia', age: 29 })
//   // res.send('<h1> this is an h1 </h1>')
// })`
//objects passed into res.send() will return as JSON
//remember to restart the server
//res.send message will appear in the browser

//////////////////////////////////////////////

// Express Routing: taking an incoming request and a path that is requested
// and matchhing that to a response

// path /dogs -> "woof"
// path / -> "welcome to our homepage"

// called the "root" route
app.get('/', (req, res) => {
  res.send('welcome to the homepage')
})

app.get('/dogs', (req, res) => {
  // console.log('dog request')
  res.send('woof')
})
//will output in the terminal only when the correct path is accessed

//will not output to the browser because the browser only supports get requests
//need to use postman to see the post response
app.post('/cats', (req, res) => {
  res.send('post request to /cats')
})

//if you want to handle paths that are not specified in the code...
//always needs to be last
//because you can only execute one res.send()
//routes are matched in order

// app.get('*', (req, res) => {
//   res.send(`I don't know that path!`)
// })

//////////////////////////////////////////////

// Express router - defining a generic patterns instead of an exact match
// Example: reddit.com/r/puppies or reddit.com/r/dogs
// want to dynamically update route using patterns
// inside of path string use colon (:) to designate something as a variable

// in the request object there is a method called params
// subreddit is a property set to whatever path you type in
app.get('/r/:subreddit/:postId', (req, res) => {
  console.log(req.params)
  const { subreddit, postId } = req.params
  //line above is called destructuring
  //means req.params.subreddit
  res.send(`this is the ${subreddit} subreddit, and the post ID: ${postId}`)
})

//////////////////////////////////////////////

// Query Strings
// portion of the url that comes after a ?
// can include information as key/values pairs as part of a query string

// request object has a property called query
app.get('/search', (req, res) => {
  console.log(req.query)
  const { q } = req.query
  if (!q) {
    res.send('nothing found if nothing searched!')
  } else {
    res.send(`search results for: ${q}`)
  }
})
//format for path in browser: http://localhost:3000/search?q=cat&color=green
//object that prints in terminal { q: 'cat', color: 'green' }

//////////////////////////////////////////////

// Auto-restart with Nodemon
// express does not automatically update when code is changed
// have to restart the server manually
// nodemon is the solution for this

//run nodemon instead of node and it will automatically watch for changes

// `npm i -g nodemon` - installs nodemon globally
// run `nodemon index.js` to watch for changes
