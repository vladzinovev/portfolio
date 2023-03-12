import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=' py-8'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href='#'>
            <img src={Logo} alt=''/>
          </a>
          
          <Link
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer items-center"
          >
            <button className='btn btn-sm'>Work with me</button>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
