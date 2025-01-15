import { createBrowserRouter,RouterProvider } from 'react-router';
import ROUTES from './routes/routes';
import './App.css'
const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
