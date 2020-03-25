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
    rating: 4.6,
    ratingCount: 50,
    food: 'Thai, Curry',
    distance: 0.2,
    deliveryCost: 1.49,
    deliveryTime: '15-20',
    bundle: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
  {
    id: 1,
    status: 'Open',
    name: 'KFC',
    rating: 0.1,
    ratingCount: 710,
    food: 'Fried Chicken',
    distance: 0.1,
    deliveryCost: 3.12,
    deliveryTime: '30-40',
    bundle: false,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
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
    deliveryTime: '10-15',
    bundle: false,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  }
];

export const getRestaurants = () => restaurants;

export const getRestaurant = (id: number) => restaurants.find(m => m.id === id);
