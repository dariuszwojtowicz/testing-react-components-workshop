import * as React from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';

export const RoutedApp = () => {
  const location = useLocation() as any;
  return (
    <div>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/info">
          <h1>
            Info
          </h1>
        </Route>
        <Route>
          <h1>
            {location.location
              ? location.location.pathname
              : location.pathname}
          </h1>
        </Route>
      </Switch>
    </div>
  );
}
