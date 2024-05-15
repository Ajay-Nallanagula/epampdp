import { IProduct } from "../models/Product";

const Atta: IProduct = {
  category: "Atta",
  productId: "Atta_01",
  group: "Groceries",
  brands: [
    {
      brandName: "Ashirwad",
      brandId: "Ashirwad_001",
      desc: "Used fo making rotis, caution dont use as talcum powder!",
      category: "Atta",
      variants: [
        {
          id: "10",
          name: "Atta 1Kg",
          weight: 1,
          weightedIn: "Kgs",
          isDefault: true,
          price: 100,
          image: "/images/AttaImage.png",
          category: "Atta",
        },
        {
          id: "11",
          name: "Atta 10Kg",
          weight: 10,
          weightedIn: "Kgs",
          price: 1000,
          image: "/images/AttaImage.png",
          category: "Atta",
        },
      ],
    },
  ],
};

const Oil: IProduct = {
  category: "Oil",
  productId: "Oil_01",
  group: "Groceries",
  brands: [
    {
      brandName: "Sunflower",
      brandId: "Sunflower_001",
      desc: "Used fo making dishes, not otherwise!",
      category: "Oil",
      variants: [
        {
          id: "7",
          image: "/images/Sunflower.png",
          name: "Sunflower 2Ltrs",
          weight: 2,
          weightedIn: "Ltrs",
          isDefault: true,
          price: 200,
          category: "Oil",
        },
        {
          id: "8",
          image: "/images/Sunflower.png",
          name: "Sunflower 5Ltrs",
          weight: 5,
          weightedIn: "Ltrs",
          price: 600,
          category: "Oil",
        },
      ],
    },
  ],
};

const BakeryFood: IProduct = {
  category: "Bread",
  productId: "Bakery_01",
  group: "Bakery",
  brands: [
    {
      brandName: "FABS",
      brandId: "FABS_001",
      desc: "Used fo making rotis, caution dont use as talcum powder!",
      category: "Bread",
      variants: [
        {
          id: "15",
          name: "Burger",
          weight: 1,
          weightedIn: "gms",
          isDefault: true,
          price: 100,
          image: "/images/Burger.png",
          category: "Bread",
        },
      ],
    },
  ],
};

const allProductsApi = () =>
  new Promise<IProduct[] | []>((resolve, reject) => {
    const AllProducts: IProduct[] = [Atta, Oil, BakeryFood];
    return resolve(AllProducts);
  });

export const allProducts: IProduct[] = [Atta, Oil, BakeryFood];

export default allProductsApi;
