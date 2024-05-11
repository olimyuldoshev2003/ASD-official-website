// eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Volunteers from "./pages/Volunteers/Volunteers";
import Location from "./pages/Location/Location";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

//For AOS animation
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

//For animate.css
// import "animate.css";



function App() {
  // const { t, i18n } = useTranslation();

  // // eslint-disable-next-line no-unused-vars
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  //For AOS animation
  // useEffect(() => {
  //   AOS.init();
  // }, []);

   const router = createBrowserRouter([
     {
       path: "/",
       element: <Layout />,
       children: [
         {
           index: true,
           element: <Home />,
         },
         {
           path: "volunteers",
           element: <Volunteers />,
         },
         {
           path: "location",
           element: <Location />,
         },
         {
           path: "about",
           element: <About />,
         },
         {
           path: "forgetPassword",
           element:<ForgetPassword/>
         }
       ],
     },
     {
       path: "*",
       element:<NotFound/>
     }
   ]);

   return (
     <div>
       <RouterProvider router={router} />
     </div>
   );
}

export default App;
