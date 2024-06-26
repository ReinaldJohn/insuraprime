import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.webp";
const Navbar = () => {
  return (
    <section>
      <div className="h-auto w-screen">
        <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            <a href="#">
              <img src={Logo} width={200} height={80} alt="" />
            </a>

            <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
              <Link
                to={"/"}
                className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              >
                Home
              </Link>
              <Link
                to={"/terms-and-conditions"}
                className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              >
                About
              </Link>
              <Link
                to={"/privacy-policy"}
                className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 lg:pb-0 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              >
                States
              </Link>
            </div>

            <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
              <Link
                to="#"
                className="relative mr-5 inline-block rounded-xl border border-[#1353FE] bg-white px-8 py-4 text-center font-semibold text-[#1353FE] [box-shadow:rgb(0,0,0)_6px_6px] hover:border-black md:mr-6"
              >
                Login
              </Link>
            </div>

            <a href="#" className="absolute right-5 lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
