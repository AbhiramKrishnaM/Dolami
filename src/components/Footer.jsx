function FooterSection() {
  return (
    <footer className="bg-white mb-10">
      <div className="w-full max-w-screen-xl flex items-center flex-col  mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center sm:justify-between  w-full">
          <img
            src="/logo/logo-basic.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />

          <ul className="flex flex-wrap items-center justify-center  text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-3" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Avatown
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default FooterSection;
