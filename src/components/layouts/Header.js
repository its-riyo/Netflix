import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/NetflixLogo.png";

export default function Header () {
    return (
        <header className=" w-full py-4 px-12 flex justify-between items-center bg-ThemeColor">
            <div>
                <a href="/">
                    <img className=" max-w-[110px]" src={logo} alt="logo" />
                </a>
            </div>

            <div>
                <div className=' text-white text-[18px]'>
                    <FontAwesomeIcon className='  cursor-pointer' icon={ faMagnifyingGlass } />
                    <FontAwesomeIcon className="  mx-4 cursor-pointer" icon={faBell} />
                    <FontAwesomeIcon className="  cursor-pointer" icon={ faUser} />
                </div>
            </div>
        </header>
    );
}