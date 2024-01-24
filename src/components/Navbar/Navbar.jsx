import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="h-14 grid grid-cols-3 items-center bg-lime-200 px-14">
            <div className="order-1">

            </div>
            <nav className="order-2 flex justify-center items-center gap-3" >
                <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Signup
                </NavLink>
                <NavLink
                    to="/signin"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Signin
                </NavLink>
            </nav>
            <div className="order-3">

            </div>
        </div>
    );
};

export default Navbar;