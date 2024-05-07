import { IProduct } from "../models/Product";

const Atta: IProduct = {
  name: "Atta",
  productId: "Atta_01",
  category: "Groceries",
  brands: [
    {
      brand: "Ashirwad",
      brandId: "Ashirwad_001",
      desc: "Used fo making rotis, caution dont use as talcum powder!",
      variants: [
        {
          id: "10",
          name: "Atta 1Kg",
          weight: 1,
          weightedIn: "Kgs",
          isDefault: true,
          price: 100,
          image: "Atta image url will come here",
        },
        {
          id: "11",
          name: "Atta 10Kg",
          weight: 10,
          weightedIn: "Kgs",
          price: 1000,
          image: "Atta image url will come here",
        },
      ],
    },
  ],
};

const Oil: IProduct = {
  name: "Oil",
  productId: "Oil_01",
  category: "Groceries",
  brands: [
    {
      brand: "Sunflower",
      brandId: "Sunflower_001",
      desc: "Used fo making dishes, not otherwise!",
      variants: [
        {
          id: "7",
          image: "Oil image Url will come here",
          name: "Sunflower 2Ltrs",
          weight: 2,
          weightedIn: "Ltrs",
          isDefault: true,
          price: 200,
        },
        {
          id: "8",
          image: "Oil image Url will come here",
          name: "Sunflower 5Ltrs",
          weight: 5,
          weightedIn: "Ltrs",
          price: 600,
        },
      ],
    },
  ],
};

const BakeryFood: IProduct = {
  name: "Bread",
  productId: "Bakery_01",
  category: "Bakery",
  brands: [
    {
      brand: "FABS",
      brandId: "FABS_001",
      desc: "Used fo making rotis, caution dont use as talcum powder!",
      variants: [
        {
          id: "15",
          name: "Burger",
          weight: 1,
          weightedIn: "gms",
          isDefault: true,
          price: 100,
          image: "Burger image url will come here",
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

export default allProductsApi;
