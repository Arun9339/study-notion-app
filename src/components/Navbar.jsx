
import Logo from "../assets/Logo.svg";

import { Link } from "react-router-dom";


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedeIn = props.isLoggedIn;

    return (
        <div className="flex justify-evenly">
            <Link to="/">
                <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"> </img>
            </Link>

            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex ml-5 mr-3 gap-3">{
                !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }

                {
                      !isLoggedIn &&
                    <Link to="/signup">
                        <button>
                            Signup
                        </button>
                    </Link>
                }


                {
                      isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedeIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }

                {
                      isLoggedIn &&
                    <Link to="/Dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;