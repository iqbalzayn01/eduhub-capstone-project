export default function Navbar() {
  return (
    <nav className="mb-[2rem] mt-[1rem]">
      <div className="flex justify-between items-center">
        <div className="text-[2rem] font-extrabold">EduHub</div>
        <ul className="flex space-x-[1.5rem]">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          {/* NOT LOGIN */}
          {/* <button className="py-[0.6rem] px-4 bg-white border border-black rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]">
            Sign In
          </button>
          <button className="py-[0.6rem] px-4 text-[#CDFE05] bg-[#000000] rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]">
            Sign Up
          </button> */}

          {/* LOGIN */}
          <a
            href="#"
            className="flex justify-center items-center space-x-[1rem]"
          >
            <span>My Dashboard</span>
            <img
              src="../public/images/dashboard.jpg"
              alt="Dashboard Icon"
              className="h-[3rem] w-[3rem] rounded-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
