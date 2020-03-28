export interface MenuItem {
  status: string;
  name: string;
  description: string;
  price: number;
  popular: boolean;
  image: string;
  restaurantId: number;
  id: number;
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    restaurantId: 0,
    status: 'available',
    name: 'Salt Beef Bagel',
    description: 'Salt beef with gherkins and mustard',
    price: 6.80,
    popular: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
  {
    id: 1,
    restaurantId: 0,
    status: 'available',
    name: 'Salt Beef Melt Bagel',
    description: 'Salt beef with gherkins and mustard',
    price: 6.80,
    popular: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
  {
    id: 2,
    restaurantId: 0,
    status: 'available',
    name: 'Egg & Avocado Bagel',
    description: 'Salt beef with gherkins and mustard',
    price: 6.80,
    popular: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
  {
    id: 3,
    restaurantId: 0,
    status: 'available',
    name: 'Bacon & Guacamole',
    description: 'Salt beef with gherkins and mustard',
    price: 6.80,
    popular: true,
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg'
  },
];

export const getMenuItems = () => menuItems;

export const getMenuItem = (id: number) => menuItems.find(i => i.id === id);
