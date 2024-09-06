import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./utils/store";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

//import { Suspense, lazy } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: (
          <>
            <SearchResults />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
