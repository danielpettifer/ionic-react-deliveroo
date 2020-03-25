export interface Restaurant {
  status: string;
  name: string;
  rating: number;
  ratingCount: number;
  food: string;
  distance: number;
  deliveryCost: number;
  deliveryTime: string;
  bundle: boolean;
  image: string;
  id: number;
}

const restaurants: Restaurant[] = [
  {
    id: 0,
    status: 'Open',
    name: 'Rusty Bike',
    rating: 4.4,
    ratingCount: 50,
    food: 'Thai, Curry',
    distance: 0.2,
    deliveryCost: 1.49,
    deliveryTime: '20-30',
    bundle: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
  {
    id: 1,
    status: 'Open',
    name: 'KFC',
    rating: 3.1,
    ratingCount: 710,
    food: 'Fried Chicken',
    distance: 0.1,
    deliveryCost: 1.12,
    deliveryTime: '5-10',
    bundle: false,
    image: 'https://www.joc.com/sites/default/files/field_feature_image/KFC_0.png'
  },
  {
    id: 2,
    status: 'Open',
    name: 'McDonalds',
    rating: 3.2,
    ratingCount: 230,
    food: 'Burgers, Fast food',
    distance: 0.3,
    deliveryCost: 1.12,
    deliveryTime: '5-10',
    bundle: false,
    image: 'https://lh3.googleusercontent.com/3IG0-2cDV9OEHkIExMxrJhn50QkB39j3YETcPg6SGSqaHJMm3ZLClGLJfSgEjCARMh5yN8vGibboQptIGf8hCO2hgTA=w1000'
  },
  {
    id: 3,
    status: 'Open',
    name: 'HotBox Spitlafields',
    rating: 4.6,
    ratingCount: 1230,
    food: 'Barbecue',
    distance: 2.4,
    deliveryCost: 3.52,
    deliveryTime: '30-35',
    bundle: false,
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25208994.jpg'
  }
];

export const getRestaurants = () => restaurants;

export const getRestaurant = (id: number) => restaurants.find(m => m.id === id);
