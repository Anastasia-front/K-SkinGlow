export const WEBSITE_NAME = 'K-SkinGlow';

export const routes = {
  cart: { path: '/cart', title: 'Cart', id: 'cart' },
  catalog: { path: '/catalog', title: 'Catalog', id: 'catalog' },
  category: { path: '/category/:name', title: 'Category', id: 'category' },
  favorites: { path: '/favorites', title: 'Favorites', id: 'favorites' },
  home: { path: '/', title: 'Home', id: 'home' },
  orderDelivery: { path: '/order-delivery', title: 'Order & Delivery', id: 'orderDelivery' },
  product: { path: '/product', title: 'Product', id: 'product' },
};

export const links = [
  {
    text: routes.home.title,
    link: routes.home.path,
  },
  {
    text: routes.catalog.title,
    link: routes.catalog.path,
  },
  {
    text: routes.favorites.title,
    link: routes.favorites.path,
  },
  {
    text: routes.orderDelivery.title,
    link: routes.orderDelivery.path,
  },
  {
    text: routes.product.title,
    link: routes.product.path,
  },

  {
    text: routes.cart.title,
    link: routes.cart.path,
  },
  {
    text: routes.category.title,
    link: routes.category.path,
  },
];

export const headerNavigationLinks = [
  {
    text: routes.catalog.title,
    link: routes.catalog.path,
  },
  {
    text: routes.orderDelivery.title,
    link: routes.orderDelivery.path,
  },
];
