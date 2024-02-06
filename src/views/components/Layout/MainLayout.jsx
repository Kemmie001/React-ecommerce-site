import Footer from "../footer/Footer";
import Header from "../header/Header";
import Whatsapp from "../whatsapp/Whatsapp";

const MainLayout = ({children}) => {
    return ( 
        <>
        <Header />
        {children}
        <Whatsapp/>
        <Footer />
        </>
     );
}
 
export default MainLayout;