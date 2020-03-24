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
    status: 'Open',
    name: 'Rusty Bike',
    rating: 1.6,
    ratingCount: 50,
    food: 'Thai, Curry',
    distance: 0.2,
    deliveryCost: 1.49,
    deliveryTime: '15-20',
    bundle: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 0
  },
  {
    status: 'Open',
    name: 'KFC',
    rating: 4.2,
    ratingCount: 50,
    food: 'Fried Chicken',
    distance: 1.3,
    deliveryCost: 3.12,
    deliveryTime: '30-40',
    bundle: false,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 1
  }
];

export const getRestaurants = () => restaurants;

export const getRestaurant = (id: number) => restaurants.find(m => m.id === id);
