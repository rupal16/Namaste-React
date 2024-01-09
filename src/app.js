import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [
//             React.createElement("h1", {}, "Hello World"),
//             React.createElement("h1", {}, "Hello World")
//         ]
//     )
// )

// console.log(parent )

const App = () => {
    return (
        <div>
            <div>Hello World</div>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    }
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} /> ); 