import { RootRoute, Route, Router } from '@tanstack/react-router';
import App from './App';
import WelcomePage from './tanstack_pages/WelcomePage';
import ContactPage from './tanstack_pages/ContactPage';
import Demo from './Demo';
import ArticleDetailPage from './pages_directory/ArticleDetailPage';
import ArticleListPage from './pages_directory/ArticleListPage';
import InfoPage from './pages_directory/InfoPage';
import ProductListPage from './pages_shop/ProductListPage';
import ShopLayout from './pages_shop/ShopLayout';
import ShoppingCartPage from './pages_shop/ShoppingCartPage';
import NotFoundPage from './NotFoundPage';
import UserListPage from './pages_user/UserListPage';
import UserDetailPage from './pages_user/UserDetailPage';

// Root route wraps the App layout component
const rootRoute = new RootRoute({ component: App });

// Index route rendered at "/"
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: WelcomePage,
});

// Contact route rendered at "/contact"
const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const demoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/demo',
  component: Demo,
});

const infoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/info',
  component: InfoPage,
});

const articlesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: ArticleListPage,
});

const articleDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles/$articleId', // note: $ not :
  component: ArticleDetailPage,
});

const shopRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: ShopLayout,
});

// children hang off shopRoute, not rootRoute:
const shopIndexRoute = new Route({
  getParentRoute: () => shopRoute,
  path: '/',
  component: ProductListPage,
});

const cartRoute = new Route({
  getParentRoute: () => shopRoute,
  path: '/cart',
  component: ShoppingCartPage,
});

const userListRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UserListPage,
});

export const userDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users/$userId',
  component: UserDetailPage,
})

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

shopRoute.addChildren([shopIndexRoute, cartRoute]);
// Assemble the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  contactRoute,
  demoRoute,
  infoRoute,
  articlesRoute,
  articleDetailRoute,
  shopRoute,
  userListRoute,
  userDetailRoute,
  notFoundRoute,
]);

// Create and export the router instance
export const router = new Router({ routeTree });
