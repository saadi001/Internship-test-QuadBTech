import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/Home/Movies/MovieDetails";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/movieDetails/:id',
                    element: <MovieDetails></MovieDetails>,
                    loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
               }
          ]
     }
])