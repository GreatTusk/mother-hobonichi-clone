import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import MotherLogo from "@/app/ui/motherLogo";
import { navbar_theme } from "@/app/lib/themes";

export function NavigationBar() {
  return (
    <Navbar
      theme={navbar_theme}
      fluid
      className="fixed top-0 z-50 w-full bg-primaryColor"
    >
      <NavbarBrand as={Link} href="/">
        <MotherLogo />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/">News</NavbarLink>
        <NavbarLink href="/">Articles</NavbarLink>
        <NavbarLink href="/">Shop</NavbarLink>
        <NavbarLink href="/">About the Game</NavbarLink>
        <NavbarLink href="/">Newsletter</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
