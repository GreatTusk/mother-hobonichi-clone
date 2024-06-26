import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { footer_theme } from "@/app/lib/themes";

export function PageFooter() {
  return (
    <Footer
      theme={footer_theme}
      container
      className="bottom-0 bg-primaryColor text-secondaryColor"
    >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand href="/" src="/logo.png" alt="Flowbite Logo" name="" />
          <FooterLinkGroup className="text-secondaryColor">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright
          className="text-secondaryColor"
          href="#"
          by="Flowbite™"
          year={2024}
        />
      </div>
    </Footer>
  );
}
