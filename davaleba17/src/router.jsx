import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Factid from "./pages/FactId ";
import LinkLayout from "./layouts/LinkLayout";
// import { Children } from "react";


const router= [
  
    {
        element: <LinkLayout/>,
        path :'/',
        children:[  {
            element: <MainPage/>,
            path :'/main'
        }, 
        {
            element: <AboutPage/>,
            path :'/about'
        }, 
        {
            element: <Factid/>,
            path :'/faceId'
        }, ]
    }, 

 ]

    

export default router;
