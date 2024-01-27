import {createBrowserRouter} from "react-router-dom";
import IndexPage from "../pages/indexPage";
import NotFoundPage from "../pages/notFoundPage";


const root = createBrowserRouter([
    {
        path:'',
        element:<IndexPage/>
    },

    {
        path:'*',
        element:<NotFoundPage/>
    }


])

export default root