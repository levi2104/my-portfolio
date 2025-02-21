import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import Greeting from './04.Expressions/Greeting'
// import ProductInfo from './04.Expressions/ProductInfo'
import App from "./App";
// import Timer from "./17.useRef Hook/Timer";
// import App from './App.jsx'  //importing App component from App.jsx
// import Header from './02.components/header.jsx'
// import Footer from './02.components/footer.jsx'
// import MainContent from './02.components/MainContent.jsx'

//rendering App component and using it to our UI.

//selecting div with id of root and rendering app component inside it

//calling our App component

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <App />
      
      {/* <Header/>
    <MainContent/>
    <Footer/> */}
    </StrictMode>

    {/* <Timer /> */}
  </>
);
