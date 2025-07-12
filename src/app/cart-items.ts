import type {OrderSummaryItemType} from "@/app/order-summary-item";

const cartItems: OrderSummaryItemType[] = [
  {
    id: "1",
    name: "Training shoes",
    href: "#",
    price: 49.99,
    color: "black",
    size: "42",
    quantity: 1,
    imageSrc: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/1.png",
  },
  {
    id: "2",
    name: "Sneakers",
    href: "#",
    price: 29.99,
    color: "red",
    size: "42",
    quantity: 1,
    imageSrc: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/2.png",
  },
  {
    id: "3",
    name: "Running shoes",
    href: "#",
    price: 39.99,
    color: "blue",
    size: "42",
    quantity: 2,
    imageSrc: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/3.png",
  },
];

export default cartItems;
