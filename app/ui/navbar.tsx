"use client";

import Link from "next/link";
import { CustomFlowbiteTheme, Navbar } from "flowbite-react";
import MotherLogo from "@/app/ui/motherLogo";

const linkStyle: CustomFlowbiteTheme["navbar"] = {
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "text-white dark:text-white md:text-gray-800",
      off:
        "border-b border-gray-100 text-secondaryColor hover:opacity-50 dark:border-gray-700 " +
        "dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent " +
        "md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-secondaryColor hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

export function NavigationBar() {
  return (
    <Navbar
      theme={linkStyle}
      fluid
      className="fixed top-0 w-full bg-primaryColor"
    >
      <Navbar.Brand as={Link} href="/">
        <MotherLogo />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">News</Navbar.Link>
        <Navbar.Link href="/">Articles</Navbar.Link>
        <Navbar.Link href="/">Shop</Navbar.Link>
        <Navbar.Link href="/">About the Game</Navbar.Link>
        <Navbar.Link href="/">Newsletter</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
