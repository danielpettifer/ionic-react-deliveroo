export interface Category {
  name: string;
  image: string;
  id: number;
}

const categories: Category[] = [
  {
    name: 'Chinese',
    image: 'https://www.thespruceeats.com/thmb/cVIMAwzKdR_GY6bDvivKPkQUyr8=/2733x2733/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
    id: 0
  },
  {
    name: 'Pizza',
    image: 'https://www.marcos.com/uploads/2018/03/7201_Marcos_AllMeat_RetinaMed_2.jpg',
    id: 1
  },
  {
    name: 'Burgers',
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5.jpg',
    id: 2
  },
  {
    name: 'Fried Chicken',
    image: 'https://sweetandsavorymeals.com/wp-content/uploads/2019/07/Korean-Fried-Chicken-3.jpg',
    id: 3
  },
  {
    name: 'Italian',
    image: 'https://cdn.shopify.com/s/files/1/0421/0685/products/a7b48ec0-8074-4f85-9a83-d11140d2bb9e_1024x1024.jpg?v=1560350806',
    id: 4
  },
  {
    name: 'Tapas',
    image: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Easy-Spanish-Tapas.jpg',
    id: 5
  }
];

export const getCategories = () => categories;

export const getCategory = (id: number) => categories.find(m => m.id === id);
