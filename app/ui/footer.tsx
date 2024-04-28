import {
  CustomFlowbiteTheme,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const customFooterTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "w-full bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
  },
};

export function PageFooter() {
  return (
    <Footer
      theme={customFooterTheme}
      container
      className="bg-primaryColor text-secondaryColor"
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
