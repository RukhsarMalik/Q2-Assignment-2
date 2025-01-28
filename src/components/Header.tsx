'use client';

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 w-full md:h-28 h-auto bg-[#055085]">
      {/* Header section */}
      <div className="flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Sindh Government Logo"
            width={90}
            height={113}
            className="w-[60px] h-auto md:w-[90px] relative top-10"
          />
        </div>

        {/* Title */}
        <div className="text-center text-sm">
          <h1 className="text_shadow hidden text-[14px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
            Tuition Free Program
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-5 text-[#FAF9F6] md:flex lg:gap-10">
          <a href="#" className="text-sm lg:text-md xl:text-lg font-semibold hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-sm lg:text-md xl:text-lg font-semibold hover:text-gray-300">
            Apply
          </a>
          <a href="#" className="text-sm lg:text-md xl:text-lg font-semibold hover:text-gray-300">
            Jobs
          </a>
          <a href="#" className="text-sm lg:text-md xl:text-lg font-semibold hover:text-gray-300">
            Result
          </a>
          <a href="#" className="text-sm lg:text-md xl:text-lg font-semibold hover:text-gray-300">
            Courses
          </a>
        </nav>

        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-[#FAF9F6] text-2xl focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#055085] text-[#FAF9F6] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          className="text-xl p-4 focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
          ✖
        </button>
        <nav className="flex flex-col gap-5 px-6 mt-10">
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Apply
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Jobs
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Result
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Courses
          </a>
        </nav>
      </div>
    </div>
  );
}
