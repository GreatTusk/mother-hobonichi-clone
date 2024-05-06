import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

export function PurchaseButton() {
  return (
    <Button gradientDuoTone="pinkToOrange">
      <HiShoppingCart className="mr-2 h-5 w-5" />
      Buy now
    </Button>
  );
}
