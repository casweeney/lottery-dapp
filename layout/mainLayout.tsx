import Header from "./header";
import Footer from "./footer";

const MainLayout = ({children}:any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;