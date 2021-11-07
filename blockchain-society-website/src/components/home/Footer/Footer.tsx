import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import "../../../styles/variables/Palette.scss";

function Footer() {
  return (
    <div className="h-52 mt-4 divide-y">
      <div>
        <p className="text-xl font-bold">CONTACT US</p>
        <p>Want to get involved? Want to learn more? Have questions or comments? Reach out to us!</p>
        <a
          href="mailto: blockchn@uw.edu"
          className="no-underline text-black font-semibold mr-4"
        >
          <p>blockchn@uw.edu</p>
        </a>
      </div>
      <div className="lg:flex lg:justify-between lg:mx-10 py-4">
        <p>© UW Blockchain Society. 2021. All rights reserved.</p>

        <div className="flex justify-center">
          <IconContext.Provider value={{ size: "36px" }}>
            <FaFacebookSquare className="mr-4 transform hover:scale-110" />
            <FaTwitterSquare className="mr-4 transform hover:scale-110" />
            <FaInstagramSquare className="mr-4 transform hover:scale-110" />
            <FaGithubSquare className="mr-4 transform hover:scale-110" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Footer;
