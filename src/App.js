import React, { lazy, Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Nav from './components/AppBar/Nav';
import routes from './routes';
// import NotFoundView from './views/NotFoundView';
import Loader from './components/Loader/Loader';
import s from './index.css';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => (
  <div>
    <Nav />
    <Suspense fallback={<Loader />}>
      <div className={s.container}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieId} component={MovieDetailsPage} />
          {/* <Route component={NotFoundView} /> */}
          <Route component={HomePage} />
        </Switch>
      </div>
    </Suspense>
  </div>
);

export default App;