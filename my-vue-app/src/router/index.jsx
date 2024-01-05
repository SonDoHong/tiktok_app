import { HeaderOnly } from "../component/layout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";

// Public route
const publicRoute = [
    {path: '/', element: Home},
    {path: '/following', element: Following},
    {path: '/profile', element: Profile, layout: null},
    {path: '/upload', element: Upload, layout: HeaderOnly},
]

const privateRoute = [

]

export { publicRoute, privateRoute }