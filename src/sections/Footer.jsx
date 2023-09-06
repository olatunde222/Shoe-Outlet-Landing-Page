import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerImage" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for new term at your nearest Nkie store. Get your
            perfect size in store. Get rewards{" "}
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media) => (
              <div
                key={""}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) =>(
            <div key={link}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{link.title}</h4>
              <ul>{link.links.map((section) => (
                <li key={section.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                  <a href="">{section.name}</a>
                </li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-2 font-montserrat">
          <img src={copyrightSign} alt="copyImage" width={20} height={20} className="rounded-full m-0" />
          <p className=" hover:text-slate-300 font-montserrat">Copyright. All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat hover:text-slate-300">Terms and Conditions</p>
      </div>


    </footer>
  );
};

export default Footer;
