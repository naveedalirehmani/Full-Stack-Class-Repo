import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from './store'

const root = ReactDOM.createRoot(document.getElementById("root"));

// const h1 = React.createElement('h1',{className:"testClassName"},"hellow worldasdf")

// root.render(<h1>render this is root</h1>)

// what is react
// why use react
// jsx
// why use jsx
// React.createElement('h1',{className:"testClasName"},"createElement")
// React elements.
// const h1 = {
//   type:'h1',
//   props:{
//     className:'greetingsignsings',
//     children:"heelow worlds test"
//   }
// }
// ReactDOM.createRoot(document.getELementById('root'));

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
