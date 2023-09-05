import { IProduct } from "../interfaces/IProduct";

export function generateDummyProducts(numProducts: number): IProduct[] {
  const dummyProducts: IProduct[] = [];

  for (let i = 1; i <= numProducts; i++) {
    dummyProducts.push({
      "S/N": `SN${i}`,
      Date: `2023-09-${i}`,
      productName: `Product ${i}`,
      productImage: [
        "https://randomuser.me/api/portraits/women/65.jpg",
        "https://randomuser.me/api/portraits/men/25.jpg",
        "https://randomuser.me/api/portraits/women/25.jpg",
        "https://randomuser.me/api/portraits/men/55.jpg",
        "https://via.placeholder.com/300/09f/fff.png"
      ],
      productCategory: `Category ${i}`,
      weight: `${i} lbs`,
      amount: `$${i * 10}`
    });
  }

  return dummyProducts;
}
