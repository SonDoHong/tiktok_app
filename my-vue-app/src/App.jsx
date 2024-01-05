import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoute } from "./router";
import { DefaultLayout } from './component/layout'

function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    let Layout = DefaultLayout;

                    const Page = route.element;

                    if(route.layout) {
                        Layout = route.layout
                    } else if(route.layout === null) {
                        Layout = Fragment
                    }

                    return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
                })}
            </Routes>
        </Router>
    );
}

export default App;
