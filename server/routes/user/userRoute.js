
const express = require('express');
const route = express.Router();
route.get('/', (req, res) => {
    res.render('home');
  });
  route.get('/about', (req, res) => {
    res.render('about');
  });
  route.get('/home-02',(req,res)=>{
    res.render('home-02')
  })
  route.get('/home-03',(req,res)=>{
    res.render('home-03')
  })
  

  route.get('/blog-detail', (req, res) => {
    res.render('blog-detail');
  });
  route.get('/blog', (req, res) => {
    res.render('blog');
  });
  route.get('/contact', (req, res) => {
    res.render('contact');
  });
  route.get('/product-detail', (req, res) => {
    res.render('product-detail');
  });
  route.get('/product', (req, res) => {
    res.render('product');
  });
  route.get('/shoping-cart', (req, res) => {
    res.render('shoping-cart');
  });
  route.get('/user-login', (req, res) => {
    res.render('user-login');
  });
  
  




module.exports =route
