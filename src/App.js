import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const getAuthors = async () =>{
  try {
      const response = await fetch("http://localhost:3001/authors");
      const authors = await response.json()
      console.log(authors)
    
  } catch (error) {
    console.log(error)
    
  }
}
 useEffect(()=>{
getAuthors()
 },[])
 
 return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
