import { HeaderOnly } from "../component/layout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Live from "../pages/Live";
import config from "../config";

// Public route
// layout {
//     DefaultLayout,
//     headerOnly,
//     null
// }
const publicRoute = [
    {path: config.routes.home, element: Home},
    {path: config.routes.following, element: Following},
    {path: config.routes.profile, element: Profile},
    {path: config.routes.upload, element: Upload, layout: HeaderOnly},
    {path: config.routes.live, element: Live},
]

const privateRoute = [

]

export { publicRoute, privateRoute }