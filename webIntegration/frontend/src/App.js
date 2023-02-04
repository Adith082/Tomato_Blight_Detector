import style1 from  "./App.module.css";
// import SortableList from "./components/SortableList";
import DragDropFiles from "./components/DragDropFiles";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./components/Result/Result";
import { useState } from "react";
const App = () => {
    const [getVal,setVal]=useState({})
    const valueHandler=(value)=>{
        // console.log(value.previewUrl)
        // console.log(value.val.class)
        setVal(value)
    }
    return (
        <BrowserRouter>
        
        <Routes>
        <Route path="/" exect element={<LandingPage/>}/>
        <Route path="/detector" exect element={<DragDropFiles getValue={valueHandler}/>}/>
        <Route path="/result" exect element={<Result value={getVal}/>}/>
        </Routes>
        
        </BrowserRouter>
      
      
    )
};

export default App;