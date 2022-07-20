import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react'
import { Home } from "./pages/Home/Home";
import { CreateUser } from "./pages/CreateUser/CreateUser";
import { ListRecipeFood } from "./pages/ListRecipeFood/ListRecipeFood";
import { CreateRecipeFood } from "./pages/CreateRecipeFood/CreateRecipeFood";

import {AuthProvider} from "./contexts/authContext";

export const App = () => {

  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="/user/new" element={<CreateUser/>}/>
          <Route path="/recipes/new" element={<CreateRecipeFood/>} />
          <Route path="/recipes" element={<ListRecipeFood/>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  )
}

