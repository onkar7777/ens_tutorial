import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <>

            <footer className="page-footer font-small blue bg-dark text-white">


                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <Link to="/"> ENS Enterprises</Link>
                </div>

            </footer>

        </>
    )
}

export default Footer;
