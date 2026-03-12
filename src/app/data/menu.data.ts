import { MenuSection } from '../models/menu.model';

export const MENU_DATA: MenuSection[] = [
  {
    id: 'breakfast',
    title: 'Завтраки',
    items: [
      { id: 'breakfast-1', title: 'Омлет', value: 120, selected: false },
      { id: 'breakfast-2', title: 'Сырники', value: 180, selected: true },
      { id: 'breakfast-3', title: 'Каша', value: 90, selected: false },
      { id: 'breakfast-4', title: 'Кофе', value: 110, selected: true },
    ],
  },
  {
    id: 'lunch',
    title: 'Обеды',
    items: [
      { id: 'lunch-1', title: 'Суп', value: 160, selected: false },
      { id: 'lunch-2', title: 'Паста', value: 240, selected: true },
      { id: 'lunch-3', title: 'Салат', value: 140, selected: false },
      { id: 'lunch-4', title: 'Курица с рисом', value: 260, selected: false },
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    items: [
      { id: 'dessert-1', title: 'Чизкейк', value: 190, selected: false },
      { id: 'dessert-2', title: 'Маффин', value: 130, selected: false },
      { id: 'dessert-3', title: 'Мороженое', value: 150, selected: true },
      { id: 'dessert-4', title: 'Эклер', value: 170, selected: false },
    ],
  },
];
