import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="src\assets\images\header-logo.svg"
            alt="headerLogo"
            height={29}
            width={130}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"> {navLinks.map((links) => (
            <li key={links.label}>
                <a href={links.href} className="font-montserrat leading-normal text-lg text-slate-gray">{links.label}</a>
            </li>
        ))}
        </ul>
        <div className="max-lg:block hidden">
            <img src="src\assets\icons\hamburger.svg" alt="hanburgerImage" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
