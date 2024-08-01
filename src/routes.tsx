import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Homepage from './pages/Home/Homepage';
import About from './pages/About/About';
import Privacy from './pages/Privacy/Privacy';


  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'',
        element:<Homepage/>,
      },
      {
        path:'about',
        element:<About/>
      }, 
      {
        path: 'privacy',
        element: <Privacy/>
      }
    ]

    }
  
])

  

export default router;


