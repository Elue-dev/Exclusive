import Flash1 from "@/assets/svg/flash-1.svg";
import Flash2 from "@/assets/svg/flash-2.svg";
import Flash3 from "@/assets/svg/flash-3.svg";
import Flash4 from "@/assets/svg/flash-4.svg";
import type { Product } from "@/types/product";

export const FLASH_SALES: Product[] = [
  {
    id: 1,
    image: Flash1,
    percentageOff: 40,
    title: "HAVIT HV-G92 Gamepad",
    price: 160,
    avgRating: 5,
    numRatings: 88,
  },
  {
    id: 2,
    image: Flash2,
    percentageOff: 35,
    title: "AK-900 Wired Keyboard",
    price: 1160,
    avgRating: 4,
    numRatings: 75,
  },
  {
    id: 3,
    image: Flash3,
    percentageOff: 30,
    title: "IPS LCD Gaming Monitor",
    price: 400,
    avgRating: 5,
    numRatings: 99,
  },
  {
    id: 4,
    image: Flash4,
    percentageOff: 25,
    title: "S-Series Comfort Chair ",
    price: 400,
    avgRating: 4.5,
    numRatings: 99,
  },
  {
    id: 5,
    image: Flash4,
    percentageOff: 25,
    title: "S-Series Comfort Chair ",
    price: 400,
    avgRating: 4.5,
    numRatings: 99,
  },
];
