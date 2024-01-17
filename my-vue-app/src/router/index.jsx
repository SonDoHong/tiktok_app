import { HeaderOnly } from "../component/layout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import routesConfig from '../config/routes'

// Public route
const publicRoute = [
    {path: routesConfig.home, element: Home},
    {path: routesConfig.following, element: Following, layout: null},
    {path: routesConfig.profile, element: Profile},
    {path: routesConfig.upload, element: Upload, layout: HeaderOnly},
]

const privateRoute = [

]

export { publicRoute, privateRoute }