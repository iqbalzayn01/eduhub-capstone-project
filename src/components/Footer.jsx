import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
      <div className="flex justify-between border-b-4 py-[2rem]">
        <div className="flex space-x-[2rem]">
          <div className="flex flex-col space-y-[0.7rem]">
            <h4 className="font-semibold">Company</h4>
            <ul className="flex flex-col space-y-[0.7rem]">
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
          </div>
          <div className="flex flex-col space-y-[0.7rem]">
            <h4 className="font-semibold">Support</h4>
            <ul className="flex flex-col space-y-[0.7rem]">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contoct Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[5rem] space-y-4">
          <h4 className="font-semibold">Social Media</h4>
          <div className="flex space-x-[2.5rem]">
            <a
              href="#"
              className="h-8 w-8 h-8 w-8 flex items-center justify-center text-2xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="h-8 w-8 h-8 w-8 flex items-center justify-center text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="h-8 w-8 h-8 w-8 flex items-center justify-center text-2xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-[2rem]">
        <p className="font-semibold">
          Copyright © 2024 InsightGathers. All Rights Reserved.
        </p>
        <div className="flex space-x-3 font-semibold">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Police</a>
        </div>
      </div>
    </div>
  );
}
