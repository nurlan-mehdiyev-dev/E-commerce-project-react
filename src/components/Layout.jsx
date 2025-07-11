import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(){
    return(
        <div className="app">
            <Header />
            <main style={{minHeight: "70vh"}}>
                <Outlet />
            </main>
           <Footer />

        </div>
    )
}