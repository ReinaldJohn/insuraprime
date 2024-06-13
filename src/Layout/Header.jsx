import Logo from "./src/assets/logo/logo.webp";

const Header = () => {
  return (
    <header>
      <section>
        <div className="h-auto w-screen">
          <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
            <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
              <a href="#">
                <img src={Logo} width={200} height={80} alt="" />
              </a>

              <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
                <a
                  href="#"
                  className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
                >
                  About
                </a>
                <a
                  href="#"
                  className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 lg:pb-0 lg:hover:bg-gray-50 lg:hover:text-gray-800"
                >
                  States
                </a>
              </div>

              <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                <a
                  href="#"
                  className="relative mr-5 inline-block rounded-xl border border-[#1353FE] bg-white px-8 py-4 text-center font-semibold text-[#1353FE] [box-shadow:rgb(0,0,0)_6px_6px] hover:border-black md:mr-6"
                >
                  Login
                </a>
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

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              InsuraPrime Insurance Brokerage, Inc.
            </h1>
            <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
              We are insurance professionals and contractors who developed an
              easy-to-use online platform for artisan and general contractors.
              Our goal is to help brokers quickly submit, rate, quote, and bind
              policies while advising on coverages. Our program offers a
              tailored CGL solution for small contractors, making informed
              decisions simple and fast.
            </p>

            <div className="flex items-center">
              <a
                href="#"
                className="mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
              >
                <p className="mr-6 font-bold">Let&apos;s Talk</p>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-none"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <img
            src={"src/assets/images/hero.webp"}
            alt=""
            className="inline-block h-full w-full max-w-[640px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
