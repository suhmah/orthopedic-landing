import type { RouteObject } from 'react-router-dom';
import { OrthopedicPage } from '../../features/orthopedic/presentation/pages/OrthopedicPage';
import { ProductDetailsPage } from '../../features/productDetails/presentation/pages/ProductDetailsPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <OrthopedicPage />,
  },
  {
    path: '/produto/:id',
    element: <ProductDetailsPage />,
  },
];
