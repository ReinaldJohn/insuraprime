import Hero from "../assets/images/hero.webp";

const Header = () => {
  return (
    <header>
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
                <p className="mr-6 font-bold">Login Now!</p>
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
            src={Hero}
            alt=""
            className="inline-block h-full w-full max-w-[640px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
