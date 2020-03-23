export interface Order {
  status: string;
  name: string;
  total: string;
  datetime: string;
  image: string;
  id: number;
}

const orders: Order[] = [
  {
    status: 'Delivered',
    name: 'Sichuan Folk',
    total: '23.18',
    datetime: '21 March 2020',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 0
  },
  {
    status: 'Delivered',
    name: 'Xi\'an Street Foods',
    total: '23.18',
    datetime: '21 March 2020',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 1
  }
];

export const getOrders = () => orders;

export const getOrder = (id: number) => orders.find(m => m.id === id);
