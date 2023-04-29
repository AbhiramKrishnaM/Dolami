import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className="w-full  p-5  flex items-center justify-between">
      <img src="/logo/logo-basic.png" className="w-[15%]" />

      <div className="flex items-center gap-4">
        <form className="flex items-center">
          <label for="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   "
              placeholder="Search Market place"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Search
          </button>
        </form>

        <div className="relative p-1 rounded-lg bg-[#161719] text-white cursor-pointer">
          <Icon
            icon="material-symbols:notifications-outline"
            className="w-7 h-7 rounded-full"
          />

          <div className=" rounded-full h-4 w-4 flex items-center justify-center bg-red-500 border border-white absolute -top-2 -right-2">
            <span className="text-xs">3</span>
          </div>
        </div>

        <div className="relative p-1 rounded-lg bg-[#161719] text-white cursor-pointer">
          <Icon
            icon="material-symbols:shopping-cart-outline-rounded"
            className="w-7 h-7 rounded-full"
          />

          <div className=" rounded-full h-4 w-4 flex items-center justify-center bg-red-500 border border-white absolute -top-2 -right-2">
            <span className="text-xs">1</span>
          </div>
        </div>

        <div>
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="User icon"
            className="w-10 h-10 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
