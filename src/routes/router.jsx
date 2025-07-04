import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import UpdateBook from "../pages/AllBooks/UpdateBook";
import Novel from "../pages/Home/Categories/Novel";
import History from "../pages/Home/Categories/History";
import Thriller from "../pages/Home/Categories/Thriller";
import Fiction from "../pages/Home/Categories/Fiction";
import BookDetails from "../pages/shared/BookDetails";
import MyBorrow from "../pages/My-orders/MyBorrow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        //path: '',
        index: true,

        loader: () => fetch("https://library-server-self-theta.vercel.app/books"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <Home></Home>,
      },
      {
        path: "addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },

      {
        path: "allBook",

        loader: () => fetch("https://library-server-self-theta.vercel.app/books"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateBook/:id",
        loader: ({ params }) =>
          fetch(`https://library-server-self-theta.vercel.app/updateBook/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <UpdateBook></UpdateBook>,
      },
      
      {
        path: "/bookDetails/:id",
        loader: ({ params }) => fetch(`https://library-server-self-theta.vercel.app/bookDetails/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/categorywiseBook/Fiction",
        loader: () => fetch("https://library-server-self-theta.vercel.app/categorywiseBook/Fiction"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <Fiction></Fiction>,
      },

      {
        path: "/categorywiseBook/novel",
        loader: () => fetch("https://library-server-self-theta.vercel.app/categorywiseBook/Novel"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <Novel></Novel>,
      },

      {
        path: "/categorywiseBook/History",
        loader: () => fetch("https://library-server-self-theta.vercel.app/categorywiseBook/History"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <History></History>,
      },

      {
        path: "/categorywiseBook/Thriller",
        loader: () => fetch("https://library-server-self-theta.vercel.app/categorywiseBook/Thriller"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <Thriller></Thriller>,
      },

      // {
      //   path: 'my-orders',
      //     element: (
      //       <PrivateRoute>
      //           <MyBorrow></MyBorrow>
      //       </PrivateRoute>
      //   )

      // }


      {
        path: '/my-orders',
        //path: 'my-orders/:email',
        //   loader: ({ params }) => fetch(`https://library-server-self-theta.vercel.app/my-orders/${params.email}`),
        // hydrateFallbackElement: (
        //   <span className="loading loading-bars loading-xl"></span>
        // ),
        element: (
            <PrivateRoute>
                <MyBorrow></MyBorrow>
            </PrivateRoute>
        ),
      },

      
      

      
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

