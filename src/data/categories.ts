export interface Category {
  name: string;
  image: string;
  id: number;
}

const categories: Category[] = [
  {
    name: 'Chinese',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 0
  },
  {
    name: 'Pizza',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 1
  },
  {
    name: 'Burgers',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 2
  },
  {
    name: 'Fried Chicken',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 3
  },
  {
    name: 'Italian',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 4
  },
  {
    name: 'Tapas',
    image: 'https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg',
    id: 5
  }
];

export const getCategories = () => categories;

export const getCategory = (id: number) => categories.find(m => m.id === id);
