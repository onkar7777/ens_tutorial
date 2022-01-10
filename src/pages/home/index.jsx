import TheTheme from "../../component/Theme";
import Banner from "./component/banner";
import Tutorial from "./component/tutorials";
const Home = () => {
    return (
        <>
            <TheTheme>
                <Banner />
                <Tutorial sectionname={'Tutorials'} />
            </TheTheme>
        </>
    )
}

export default Home;