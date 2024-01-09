import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';


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
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: <Error />,
    },
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} /> ); 