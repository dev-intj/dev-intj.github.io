import Logo from '../../assets/images/logo.svg';
import FeatherIcon from "feather-icons-react";

const NavBar = () => {
    return (
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                {/*<Logo className="w-20 h-20" fill="white" />*/}
                <FeatherIcon icon="menu" size={24} className="fill-white stroke-white" />
            </div>
        </div>
    )
};

export default NavBar;