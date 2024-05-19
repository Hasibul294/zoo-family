const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 bg-white ">
      <nav className=" px-4 lg:px-3 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo section  */}
          <div>
            <img
              src="https://flight.zoo.family/front_asset/img/6593b7cb75748.gif"
              alt="zoo family logo"
              className="w-[135px] h-[45px]"
            />
          </div>

          {/* User section  */}
          <div className="flex items-center space-x-6">
            <div className=" text-orange-500 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>+8801978-569290</p>
            </div>
            <button className="flex items-center space-x-1 font-['Arial'] px-14 py-1 bg-orange-500 rounded-md text-white font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-xs">Account</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
