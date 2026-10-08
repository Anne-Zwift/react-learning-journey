import { RootRoute, Route, Router } from '@tanstack/react-router';
import { createElement } from 'react';
import App from './App';
import WelcomePage from './tanstack_pages/WelcomePage';
import ContactPage from './tanstack_pages/ContactPage';
import Demo from './Demo';
//import ArticleDetailPage from './pages_directory/ArticleDetailPage';
//import ArticleListPage from './pages_directory/ArticleListPage';
import InfoPage from './pages_directory/InfoPage';
import ProductListPage from './pages_shop/ProductListPage';
import ShopLayout from './pages_shop/ShopLayout';
import ShoppingCartPage from './pages_shop/ShoppingCartPage';
import NotFoundPage from './NotFoundPage';
import UserListPage from './pages_user/UserListPage';
import UserDetailPage from './pages_user/UserDetailPage';
import TownListPage from './pages_towns/TownListPage';
import ArticleDisplayPage from './pages_articles/ArticleDisplayPage';
import { fetchArticleById } from './api/mockApi';
import ThemePage from './pages_theme/ThemePage';
import CounterPage from './pages_counter/CounterPage';
import ReduxUserPage from './pages_user/ReduxUserPage';
import UserProfileLoader from './components/UserProfileLoader';
import CartSummary from './components/CartSummary';
import CartSummaryRTK from './components/CartSummaryRTK';


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

/*const articlesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: ArticleListPage,
});*/

/*const articleDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles/$articleId', // note: $ not :
  component: ArticleDetailPage,
});*/

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
});

export const townsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/towns',
  component: TownListPage,
  validateSearch: (search) => ({
    filter: typeof search.filter === 'string' ? search.filter : undefined,
  }),
});

export const articlesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles/$articleId',
  component: ArticleDisplayPage,

  loader: async ({ params }) => {
    const article = await fetchArticleById(params.articleId);
    return { article };
  },

  pendingComponent: () => createElement('div', null, 'Pending...'),

  errorComponent: ({ error }: { error: unknown }) =>
    createElement('div', null, `Could not load article: ${error instanceof Error ? error.message : String(error)}`),
});

const themeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/theme',
  component: ThemePage,
});

const counterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/counter',
  component: CounterPage,
});

const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/redux-user',
  component: ReduxUserPage,
});

const userProfileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/user-profile',   // distinct from /redux-user and /users
  component: UserProfileLoader,
});

const shoppingCartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shopping-cart',   // distinct from /redux-user and /users
  component: CartSummary,
});

const shoppingCartRTKRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shopping-cartRTK',   // distinct from /redux-user and /users
  component: CartSummaryRTK,
});

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
  //articlesRoute,
  //articleDetailRoute,
  shopRoute,
  userListRoute,
  userDetailRoute,
  townsRoute,
  articlesRoute,
  themeRoute,
  counterRoute,
  userRoute,
  userProfileRoute,
  shoppingCartRoute,
  shoppingCartRTKRoute,
  notFoundRoute,
]);

// Create and export the router instance
export const router = new Router({ routeTree });
