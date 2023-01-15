// export const DB_ADDRESS = "http://f0762515.xsph.ru";
export const DB_ADDRESS = "http://localhost:8088";

export const DB_HEADERS = {
    Accept: 'application/json',
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
};

export const LOGO_TEXT = "The brand";

export const RUBRICS = [
    { name: 'Man', inner: ['Accessories', 'Bags', 'Denim', 'T-Shirts'] },
    { name: 'Woman', inner: ['Accessories', 'Jackets&Coats', 'Polos', 'T-Shirts', 'Shirts'] },
    { name: 'Kids', inner: ['Accessories', 'Jackets&Coats', 'Polos', 'T-Shirts', 'Shirts', 'Bags'] }
];

export const SERVICE_NAV = [
    {
        name: 'Category',
        items: [
            'Accessories',
            'Bags',
            'Denim',
            'Hoodies & Sweatshirts',
            'Jackets & Coats',
            'Polos',
            'Shirts',
            'Shoes',
            'Sweaters & Knits',
            'T-Shirts',
            'Tanks']
    },
    {
        name: 'Brand',
        items: [
            'Brand Name',
            'Another Brand Name',
            'More Brands']
    },
    {
        name: 'Designer',
        items: [
            'Designer',
            'Some Designer',
            'Awesome Designer']
    },
];

export const FILTERS = [
    { name: 'Trending now', items: ['Most trendy clothes', 'Fasional trend', 'Trend of the year', 'Seasonal trend'] },
    { name: 'Size', items: ['XXL', 'XL', 'S', 'M', 'L'] },
    { name: 'Price', items: ['Cheap & Economy', 'Medium', 'Premium'] },
]

export const FEATURES = [
    { name: 'Free Delivery', text: 'Worldwide delivery on all. Authorit tively morph next-generation innovtionwith extensive models.' },
    { name: 'Sales & discounts', text: 'Worldwide delivery on all. Authorit tively morph next-generation innovtionwith extensive models.' },
    { name: 'Quality assurance', text: 'Worldwide delivery on all. Authorit tively morph next-generation innovtionwith extensive models.' },
]