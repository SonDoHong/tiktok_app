import Header from "./component/Header"
import Sidebar from "./component/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <Sidebar />

                <div className="content">
                    {children}
                </div>
            </div>            
        </div>
    )
}

export default DefaultLayout