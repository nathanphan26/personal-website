import  { Outlet, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div class="col-md-3">
            <section id="navbar" class="py-1">
                <ul class="nav flex-column">
                    <li class="nav-item">
                    <NavLink end className={'nav-link'} to="/">
                        About Me
                    </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className={ 'nav-link' } to="/professional">
                        Professional<br/>Experience
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className={ 'nav-link' } to="/projects">
                        Projects
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className={ 'nav-link' } to="/education">
                        Education
                        </NavLink>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar;