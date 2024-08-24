import image1 from '../Productimage/product (1).png';
import image2 from '../Productimage/product (2).png';
import image3 from '../Productimage/product (3).png';
import image4 from '../Productimage/product (4).png';
import image5 from '../Productimage/product (5).png';
import image6 from '../Productimage/product (6).png';
import image7 from '../Productimage/product (7).png';
import image8 from '../Productimage/product (8).png';
import image9 from '../Productimage/product (9).png';
import image10 from '../Productimage/product (10).png';
import image11 from '../Productimage/product (11).png';
import image12 from '../Productimage/product (12).png';
import image13 from '../Productimage/product (13).png';
import image14 from '../Productimage/product (14).png';
import image15 from '../Productimage/product (15).png';
import image16 from '../Productimage/product (16).png';
import image17 from '../Productimage/product (17).png';
import image18 from '../Productimage/product (18).png';
import image19 from '../Productimage/product (19).png';
import image20 from '../Productimage/product (20).png';
import image21 from '../Productimage/product (21).png';
import image22 from '../Productimage/product (22).png';
import image23 from '../Productimage/product (23).png';
import image24 from '../Productimage/product (24).png';
import image25 from '../Productimage/product (25).png';
import image26 from '../Productimage/product (26).png';
import image27 from '../Productimage/product (27).png';
import image28 from '../Productimage/product (28).png';
import image29 from '../Productimage/product (29).png';
import image30 from '../Productimage/product (30).png';

export const ProductData = [
  {
    id: '1001',
    image: image1,
    price: 500,
    name: 'Light Beer',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Refreshing light beer with a crisp taste.',
    category: 'Beer',
    stock: 25,
    supplier: 'Brewery Co.',
    reviews: [
      { user: 'Tom', comment: 'Perfect for a casual drink.', rating: 4 },
      { user: 'Sara', comment: 'Not strong enough for my taste.', rating: 3 },
    ],
    deals: 'yes',
    discount: '10%',
    discount_price: '',
    tags: ['Beer', 'Light', 'Refreshing'],
  },
  {
    id: '1002',
    image: image2,
    price: 600,
    name: 'Amber Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Smooth amber ale with caramel and nutty flavors.',
    category: 'Ale',
    stock: 15,
    supplier: 'Aleworks Inc.',
    reviews: [
      { user: 'Liam', comment: 'Smooth and flavorful.', rating: 4 },
      { user: 'Sophia', comment: 'A bit too malty.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Ale', 'Amber', 'Smooth'],
  },
  {
    id: '1003',
    image: image3,
    price: 550,
    name: 'Pale Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Bright and hoppy pale ale with citrus notes.',
    category: 'Ale',
    stock: 20,
    supplier: 'Brewery Co.',
    reviews: [
      { user: 'Ella', comment: 'Hoppy and fresh.', rating: 4 },
      { user: 'Mason', comment: 'Not enough flavor.', rating: 3 },
    ],
    deals: 'yes',
    discount: '5%',
    discount_price: '',
    tags: ['Ale', 'Hoppy', 'Citrus'],
  },
  {
    id: '1004',
    image: image4,
    price: 750,
    name: 'Stout',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Rich stout with coffee and chocolate flavors.',
    category: 'Stout',
    stock: 18,
    supplier: 'Strong Brew Co.',
    reviews: [
      { user: 'Aiden', comment: 'Intense and rich.', rating: 5 },
      { user: 'Olivia', comment: 'Very strong flavor.', rating: 4 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Stout', 'Coffee', 'Chocolate'],
  },
  {
    id: '1005',
    image: image5,
    price: 400,
    name: 'Wheat Beer',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Light wheat beer with fruity and citrus notes.',
    category: 'Wheat Beer',
    stock: 30,
    supplier: 'Brewery Co.',
    reviews: [
      { user: 'Ethan', comment: 'Crisp and fruity.', rating: 4 },
      { user: 'Isabella', comment: 'A bit too light.', rating: 3 },
    ],
    deals: 'yes',
    discount: '8%',
    discount_price: '',
    tags: ['Wheat Beer', 'Fruity', 'Citrus'],
  },
  {
    id: '1006',
    image: image6,
    price: 550,
    name: 'Porter',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Smooth porter with roasted malt and chocolate flavors.',
    category: 'Porter',
    stock: 22,
    supplier: 'Porter House',
    reviews: [
      { user: 'Nina', comment: 'Rich and smooth.', rating: 4 },
      { user: 'John', comment: 'A bit too heavy.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Porter', 'Roasted', 'Chocolate'],
  },
  {
    id: '1007',
    image: image7,
    price: 700,
    name: 'IPA',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Hoppy IPA with a blend of citrus and pine flavors.',
    category: 'IPA',
    stock: 12,
    supplier: 'Hopworks',
    reviews: [
      { user: 'Lucas', comment: 'Hoppy and bitter.', rating: 4 },
      { user: 'Mia', comment: 'Too bitter for my taste.', rating: 3 },
    ],
    deals: 'yes',
    discount: '6%',
    discount_price: '',
    tags: ['IPA', 'Hoppy', 'Citrus'],
  },
  {
    id: '1008',
    image: image8,
    price: 620,
    name: 'Pilsner',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Crisp and refreshing pilsner with floral notes.',
    category: 'Pilsner',
    stock: 25,
    supplier: 'Pilsner Brewery',
    reviews: [
      { user: 'Emma', comment: 'Crisp and refreshing.', rating: 4 },
      { user: 'James', comment: 'Very smooth.', rating: 4 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Pilsner', 'Crisp', 'Floral'],
  },
  {
    id: '1009',
    image: image9,
    price: 650,
    name: 'Beer',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Farmhouse Beer with spicy and fruity notes.',
    category: 'Beer',
    stock: 16,
    supplier: 'Farmhouse Brewery',
    reviews: [
      { user: 'Ethan', comment: 'Spicy and complex.', rating: 4 },
      { user: 'Sophia', comment: 'Too spicy for my liking.', rating: 3 },
    ],
    deals: 'yes',
    discount: '7%',
    discount_price: '',
    tags: ['Beer', 'Spicy', 'Fruity'],
  },
  {
    id: '1010',
    image: image10,
    price: 700,
    name: 'Bock',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Strong bock with caramel and toasty malt flavors.',
    category: 'Bock',
    stock: 20,
    supplier: 'Beer',
    reviews: [
      { user: 'Lucas', comment: 'Strong and flavorful.', rating: 5 },
      { user: 'Liam', comment: 'Too strong for me.', rating: 4 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Bock', 'Caramel', 'Toasty'],
  },
  {
    id: '1011',
    image: image11,
    price: 550,
    name: 'Brown Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Rich brown ale with caramel and nutty flavors.',
    category: 'Ale',
    stock: 18,
    supplier: 'Brown Aleworks',
    reviews: [
      { user: 'Mia', comment: 'Nutty and smooth.', rating: 4 },
      { user: 'Oliver', comment: 'A bit too sweet.', rating: 3 },
    ],
    deals: 'yes',
    discount: '5%',
    discount_price: '',
    tags: ['Ale', 'Brown', 'Nutty'],
  },
  {
    id: '1012',
    image: image12,
    price: 620,
    name: 'Beer',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Strong Beer with intense malt and fruit flavors.',
    category: 'Beer',
    stock: 10,
    supplier: 'Strong Ale Co.',
    reviews: [
      { user: 'Sophie', comment: 'Intense and warming.', rating: 4 },
      { user: 'Jacob', comment: 'Too strong for my taste.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Beer', 'Strong', 'Fruity'],
  },
  {
    id: '1013',
    image: image13,
    price: 680,
    name: 'Lambic',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Unique lambic with wild yeast and fruit flavors.',
    category: 'Lambic',
    stock: 14,
    supplier: 'Wild Yeast Brewery',
    reviews: [
      { user: 'Emma', comment: 'Wild and fruity.', rating: 4 },
      { user: 'Noah', comment: 'Too sour for my taste.', rating: 3 },
    ],
    deals: 'yes',
    discount: '6%',
    discount_price: '',
    tags: ['Lambic', 'Wild Yeast', 'Fruity'],
  },
  {
    id: '1014',
    image: image14,
    price: 800,
    name: 'Sour Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Sour ale with a tart and tangy flavor profile.',
    category: 'Sour Ale',
    stock: 8,
    supplier: 'Sour Brewery',
    reviews: [
      { user: 'Mason', comment: 'Tart and refreshing.', rating: 4 },
      { user: 'Lily', comment: 'Too tangy for my taste.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Sour Ale', 'Tart', 'Tangy'],
  },
  {
    id: '1015',
    image: image15,
    price: 450,
    name: 'Cider',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Crisp apple cider with a sweet and fruity taste.',
    category: 'Cider',
    stock: 35,
    supplier: 'Apple Orchards',
    reviews: [
      { user: 'Ava', comment: 'Sweet and crisp.', rating: 4 },
      { user: 'William', comment: 'A bit too sweet.', rating: 3 },
    ],
    deals: 'yes',
    discount: '10%',
    discount_price: '',
    tags: ['Cider', 'Apple', 'Fruity'],
  },
  {
    id: '1016',
    image: image16,
    price: 580,
    name: 'Golden Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Bright golden ale with mild bitterness and fruity notes.',
    category: 'Ale',
    stock: 28,
    supplier: 'Golden Brewery',
    reviews: [
      { user: 'Henry', comment: 'Mild and refreshing.', rating: 4 },
      { user: 'Megan', comment: 'A bit too mild.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Ale', 'Golden', 'Fruity'],
  },
  {
    id: '1017',
    image: image17,
    price: 700,
    name: 'Belgian Dubbel',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Rich Belgian Dubbel with dark fruit and caramel notes.',
    category: 'Belgian',
    stock: 12,
    supplier: 'Belgian Brewery',
    reviews: [
      { user: 'Olivia', comment: 'Rich and complex.', rating: 4 },
      { user: 'James', comment: 'Very strong flavors.', rating: 4 },
    ],
    deals: 'yes',
    discount: '7%',
    discount_price: '',
    tags: ['Belgian', 'Dubbel', 'Caramel'],
  },
  {
    id: '1018',
    image: image18,
    price: 650,
    name: 'Vienna Lager',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Smooth Vienna Lager with toasty malt and caramel flavors.',
    category: 'Lager',
    stock: 22,
    supplier: 'Vienna Brewery',
    reviews: [
      { user: 'Isabella', comment: 'Smooth and toasty.', rating: 4 },
      { user: 'Benjamin', comment: 'A bit too light.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Lager', 'Vienna', 'Toasty'],
  },
  {
    id: '1019',
    image: image19,
    price: 720,
    name: 'Rye IPA',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Bold Rye IPA with spicy and hoppy flavors.',
    category: 'IPA',
    stock: 15,
    supplier: 'Rye Brewery',
    reviews: [
      { user: 'Ethan', comment: 'Bold and spicy.', rating: 4 },
      { user: 'Sophia', comment: 'Too spicy for my taste.', rating: 3 },
    ],
    deals: 'yes',
    discount: '8%',
    discount_price: '',
    tags: ['IPA', 'Rye', 'Spicy'],
  },
  {
    id: '1020',
    image: image20,
    price: 630,
    name: 'Milk Stout',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Smooth milk stout with creamy and sweet flavors.',
    category: 'Stout',
    stock: 20,
    supplier: 'Milk Brewery',
    reviews: [
      { user: 'Emily', comment: 'Creamy and sweet.', rating: 4 },
      { user: 'Jack', comment: 'Too sweet for my taste.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Stout', 'Milk', 'Creamy'],
  },
  {
    id: '1021',
    image: image21,
    price: 550,
    name: 'Brown Porter',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Robust brown porter with dark malt flavors.',
    category: 'Porter',
    stock: 25,
    supplier: 'Porter Works',
    reviews: [
      { user: 'Aiden', comment: 'Robust and rich.', rating: 4 },
      { user: 'Mia', comment: 'Too intense for me.', rating: 3 },
    ],
    deals: 'yes',
    discount: '5%',
    discount_price: '',
    tags: ['Porter', 'Brown', 'Robust'],
  },
  {
    id: '1022',
    image: image22,
    price: 680,
    name: 'Fruit Lambic',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Tart fruit lambic with a blend of berries and citrus.',
    category: 'Lambic',
    stock: 12,
    supplier: 'Fruit Brewery',
    reviews: [
      { user: 'Lucas', comment: 'Tart and fruity.', rating: 4 },
      { user: 'Olivia', comment: 'Too sour for me.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Lambic', 'Fruit', 'Tart'],
  },
  {
    id: '1023',
    image: image23,
    price: 750,
    name: 'Imperial Stout',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Bold imperial stout with rich coffee and chocolate flavors.',
    category: 'Stout',
    stock: 10,
    supplier: 'Imperial Brew',
    reviews: [
      { user: 'Ella', comment: 'Rich and bold.', rating: 5 },
      { user: 'Ethan', comment: 'Very intense.', rating: 4 },
    ],
    deals: 'yes',
    discount: '10%',
    discount_price: '',
    tags: ['Stout', 'Imperial', 'Coffee'],
  },
  {
    id: '1024',
    image: image24,
    price: 620,
    name: 'Blonde Ale',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Light and crisp blonde ale with a hint of malt sweetness.',
    category: 'Ale',
    stock: 30,
    supplier: 'Blonde Brewery',
    reviews: [
      { user: 'Mason', comment: 'Light and refreshing.', rating: 4 },
      { user: 'Sophia', comment: 'A bit too light.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Ale', 'Blonde', 'Crisp'],
  },
  {
    id: '1025',
    image: image25,
    price: 690,
    name: 'Amber Lager',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Malty amber lager with caramel and toasty notes.',
    category: 'Lager',
    stock: 20,
    supplier: 'Amber Brewery',
    reviews: [
      { user: 'Isabella', comment: 'Malty and rich.', rating: 4 },
      { user: 'Lucas', comment: 'A bit too sweet.', rating: 3 },
    ],
    deals: 'yes',
    discount: '7%',
    discount_price: '',
    tags: ['Lager', 'Amber', 'Malty'],
  },
  {
    id: '1026',
    image: image26,
    price: 570,
    name: 'Belgian Tripel',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Strong Belgian Tripel with fruity and spicy notes.',
    category: 'Belgian',
    stock: 15,
    supplier: 'Tripel Brewery',
    reviews: [
      { user: 'Oliver', comment: 'Fruity and complex.', rating: 4 },
      { user: 'Emma', comment: 'Strong and spicy.', rating: 4 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Belgian', 'Tripel', 'Fruity'],
  },
  {
    id: '1027',
    image: image27,
    price: 710,
    name: 'Wheat Beer',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Refreshing wheat beer with light citrus and spice notes.',
    category: 'Wheat Beer',
    stock: 18,
    supplier: 'Wheat Brewery',
    reviews: [
      { user: 'Jack', comment: 'Light and refreshing.', rating: 4 },
      { user: 'Emily', comment: 'A bit too light.', rating: 3 },
    ],
    deals: 'yes',
    discount: '6%',
    discount_price: '',
    tags: ['Wheat Beer', 'Citrus', 'Spicy'],
  },
  {
    id: '1028',
    image: image28,
    price: 680,
    name: 'Barrel-aged Stout',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Rich barrel-aged stout with hints of bourbon and vanilla.',
    category: 'Stout',
    stock: 12,
    supplier: 'Barrel Brewery',
    reviews: [
      { user: 'Sophia', comment: 'Rich and complex.', rating: 4 },
      { user: 'Ethan', comment: 'Too intense.', rating: 3 },
    ],
    deals: 'no',
    discount: '',
    discount_price: '',
    tags: ['Stout', 'Barrel-aged', 'Vanilla'],
  },
  {
    id: '1029',
    image: image29,
    price: 720,
    name: 'IPA Mix Pack',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Mixed pack of various IPA styles.',
    category: 'IPA',
    stock: 20,
    supplier: 'IPA Brewery',
    reviews: [
      { user: 'Ava', comment: 'Great variety.', rating: 4 },
      { user: 'William', comment: 'Nice selection of IPAs.', rating: 4 },
    ],
    deals: 'yes',
    discount: '8%',
    discount_price: '',
    tags: ['IPA', 'Mix', 'Variety'],
  },
  {
    id: '1030',
    image: image30,
    price: 680,
    name: 'Chocolate Stout',
    rating: [
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star'
        aria-hidden='true'
      ></i>,
      <i
        className='fa fa-star-half-o'
        aria-hidden='true'
      ></i>,
    ],
    description: 'Smooth stout with rich chocolate flavors.',
    category: 'Stout',
    stock: 15,
    supplier: 'Chocolate Brewery',
    reviews: [
      { user: 'Liam', comment: 'Rich and chocolatey.', rating: 4 },
      { user: 'Sophia', comment: 'Too rich for me.', rating: 3 },
    ],
    deals: 'yes',
    discount: '7%',
    discount_price: '',
    tags: ['Stout', 'Chocolate', 'Rich'],
  },
];

