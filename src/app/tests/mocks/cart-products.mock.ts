import { ICartProduct } from 'src/app/shared/models';

export const cartProductsMock: ICartProduct[] = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    quantity: 1,
    total: 549,
    discountedPrice: 549,
    discountPercentage: 12.96,
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 6,
    title: 'MacBook Pro',
    price: 1749,
    discountPercentage: 11.02,
    quantity: 1,
    total: 1749,
    discountedPrice: 1749,
    image: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  },
  {
    id: 11,
    title: 'perfume Oil',
    price: 13,
    discountPercentage: 8.4,
    total: 13,
    discountedPrice: 13,
    quantity: 1,
    image: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  },
  {
    id: 16,
    title: 'Hyaluronic Acid Serum',
    price: 19,
    discountPercentage: 13.31,
    total: 19,
    discountedPrice: 19,
    quantity: 1,
    image: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
  },
  {
    id: 21,
    title: '- Daal Masoor 500 grams',
    price: 20,
    discountPercentage: 4.81,
    total: 20,
    discountedPrice: 20,
    quantity: 1,
    image: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
  },
];