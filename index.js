const express = require('express');
const app = express();

//Logging middleware
app.use((req, res, next)=>{
  console.log(`${req.method} request made to ${req.url}`);
  next();
})

// ✅ GET /products
app.get('/products', (req, res) => {
  res.send("<h1>Here is the list of all products.</h1>");
});

// ✅ POST /products
app.post('/products', (req, res) => {
  res.send("<h1>A new product has been added.</h1>");
});

// ✅ GET /categories
app.get('/categories', (req, res) => {
  res.send("<h1>Here is the list of all categories.</h1>");
});

// ✅ POST /categories
app.post('/categories', (req, res) => {
  res.send("<h1>A new category has been created.</h1>");
});

// ✅ Wildcard Route (handles undefined routes)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// ✅ Start Server
app.listen(4000, () => {
  console.log('🚀 Server is running on http://localhost:4000');
});
