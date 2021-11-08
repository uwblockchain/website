import logo from "../../../images/logos/society_white_logo.png";

function Nav({ toggle }: any) {
  return (
    <div className="bg-indigo-900 h-auto flex items-center justify-between px-4 lg:px-12 py-2 font-semibold">
      <img className="w-12 h-12" src={logo}></img>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-4 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        onClick={toggle}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className="hidden md:block">
        <a href="#" className="text-white no-underline hover:underline px-4">
          Home
        </a>
        <a href="#faq" className="text-white no-underline hover:underline px-4">
          FAQ
        </a>
        <a
          href="#about"
          className="text-white no-underline hover:underline px-4"
        >
          About
        </a>
      </div>
    </div>
  );
}

export default Nav;
