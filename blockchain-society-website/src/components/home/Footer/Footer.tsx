import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function Footer() {
  return (
    <div className="h-52 pt-4 divide-y">
      <div className="mb-4">
        <p className="text-xl font-bold">CONTACT US</p>
        <p>
          Want to get involved? Want to learn more? Have questions or comments?
          Reach out to us!
        </p>
        <a
          href="mailto: blockchn@uw.edu"
          className="no-underline text-black font-semibold "
        >
          <p className="m-0 p-0">blockchn@uw.edu</p>
        </a>
        <div
          className="fb-like my-4"
          data-href="https://www.facebook.com/BlockchainSocietyUW"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-share="true"
        ></div>
        <div className="flex justify-center">
          <IconContext.Provider value={{ size: "36px" }}>
            <Tippy content="LinkedIn" placement="bottom">
              <a
                className="text-blue-900"
                href="https://www.linkedin.com/company/blockchain-society/"
                target="_blank"
                title="Linkedin"
                id="myButton"
              >
                <FaLinkedin id="myButton" className="mr-4" />
              </a>
            </Tippy>
            <Tippy content="Facebook" placement="bottom">
              <a
                className="text-blue-900 hover:text-blue-900"
                href="https://www.facebook.com/BlockchainSocietyUW"
                target="_blank"
              >
                <FaFacebookSquare className="mr-4" />
              </a>
            </Tippy>
            <Tippy content="Twitter" placement="bottom">
              <a
                className="text-blue-500 hover:text-blue-500"
                href="https://twitter.com/udubblockchain"
                target="_blank"
              >
                <FaTwitterSquare className="mr-4" />
              </a>
            </Tippy>
            <Tippy content="Instagram" placement="bottom">
              <a
                className="text-pink-700 hover:text-pink-700"
                href="https://www.instagram.com/uwblockchain/?hl=en"
                target="_blank"
              >
                <FaInstagramSquare className="mr-4" />
              </a>
            </Tippy>
            <Tippy content="Github" placement="bottom">
              <a
                className="text-purple-700 hover:text-purple-700"
                href="https://github.com/uwblockchain"
                target="_blank"
              >
                <FaGithubSquare className="mr-4" />
              </a>
            </Tippy>
          </IconContext.Provider>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:mx-10 py-4">
        <p>© UW Blockchain Society. 2021. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
