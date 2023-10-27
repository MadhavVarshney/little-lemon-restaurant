import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div style={{ "min-height": "472px" }}>
                {children}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout;