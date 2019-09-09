const initialState = {
  items: [
    {
      positions: [0],
      href: '/',
      name: 'Главная',
    },
    {
      positions: [0, 1],
      href: '/catalog',
      name: 'Каталог',
    },
    {
      positions: [0, 1],
      href: '/about',
      name: 'О магазине',
    },
    {
      positions: [0, 1],
      href: '/contacts',
      name: 'Контакты',
    },
  ],
};

export default function navLinksReducer(state = initialState) {
  return { ...state };
}
