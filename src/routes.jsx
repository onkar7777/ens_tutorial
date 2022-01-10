import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Cources from './pages/cources';

const AllRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact  path="/cources/:id" element={<Cources />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRouter;