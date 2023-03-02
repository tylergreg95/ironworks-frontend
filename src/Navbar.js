import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">IronWorks</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-link">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="exercises" className="nav-link">Library</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="calendar" className="nav-link">Calendar</Link>
                    </li>  
                    <li className="nav-link">
                        <Link to="new-workout" className="nav-link">New Workout</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="view-workout" className="nav-link">View Workout</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="settings" className="nav-link">Settings</Link>
                    </li>
                </ul>
                <Link to="logout" className="btn btn-secondary" style={{marginLeft: "auto", marginRight: 0}}>Log Out</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;