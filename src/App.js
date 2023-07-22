import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateFlashCard from "./pages/CreateFalshCard";
import MyFlashCard from "./pages/MyFlashCard";
import AppLayOut from "./pages/AppLayOut";
import CardDetails from "./pages/CardDetails";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <CreateFlashCard />,
        },
        {
          path: "/MyFlashCard",
          element: <MyFlashCard />,
        },
        {
          path: "/MyFlashCard/:groupId",
          element: <CardDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
