import { useState } from "react";
import Link from "next/link";
import Container from "@components/Container"

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: 'Internet', href: '/posts' },
    { text: 'Books', href: '/posts' },
    { text: 'Open Source', href: '/posts' }
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 flex lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className="w-6/12 lg:w-2/12 flex items-center justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
              Epictetus
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className={`w-full lg:w-7/12 h-full lg:h-auto fixed lg:static top-0 lg:bg-none bg-gradient-to-b from-gray-600 to-gray-900 p-10 lg:p-0 transition-all ${offcanvas ? 'left-0' : '-left-full'}`}>
            <button className="absolute lg:hidden top-10 right-10" onClick={() => setOffcanvas(false)}>
              <img src="/x.svg" width={24} />
            </button>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-14 lg:items-center">
              <li>
                <Link href="/posts" className="hover:underline">UI Design</Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">Front-End</Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">Back-End</Link>
              </li>
              <li className="relative">
                <a className="flex items-center hover:underline cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                  Lainnya
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {dropdownList.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href} className="flex py-3 px-6 hover:bg-gray-700/60">{text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={`absolute lg:static w-full lg:w-3/12 left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
            <div className="relative">
              <button className="absolute lg:hidden top-3 right-3" onClick={() => setSearch(false)}>
                <img src="/x.svg" width={24} />
              </button>
              <input type="text" className="w-full bg-gray-700 py-3 px-6 rounded-lg lg:rounded-full pl-12 bg-search" placeholder="Search ..." />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
