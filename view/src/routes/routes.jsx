import AddForm from "../Page/AddForm";
import Home from "../Page/Home";
import Root from "../Page/Root";



const ROUTES = [
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addform",
                element:<AddForm/>
            }
        ]
    }
]

export default ROUTES