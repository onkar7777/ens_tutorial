import Header from "./Header";
import Footer from "./Footer";

const TheTheme = ({children})=>{
    return (
        <>
            <Header />
                { children }
            <Footer />
        </>
    )
}

export default TheTheme;