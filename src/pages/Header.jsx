import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <Link><img src="https://th.bing.com/th/id/OIP.JoTau08BSEDi3Qfi701hgwHaE8?rs=1&pid=ImgDetMain" alt="The Simpons" width={180} /></Link>
                </div>
                <div className="col">
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Family" className="nav-link">Family</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/History" className="nav-link">History</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;