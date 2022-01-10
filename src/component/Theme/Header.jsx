import { headerRoutes } from '../../utils/constant';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  >
                <Link className="navbar-brand" to="/">ENS Tutorial</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            headerRoutes.map((item, i) => {
                                return (
                                    <li className="nav-item" key={i} >
                                        <Link className="nav-link" to={item?.path}>{item?.text} </Link>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header;
