import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer items-center font-primary font-bold text-[28px]"
          >
            <p className="mb-[-4px] bg-gradient-to-r text-transparent bg-clip-text from-[#FF56F6] to-[#42A6E3]">
              VLADISLAV
            </p>
            <p className="">ZINOVIEV</p>
          </Link>

          <Link
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer items-center"
          >
            <button className="btn btn-sm">My portfolio</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
