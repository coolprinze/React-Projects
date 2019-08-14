import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AgentRoute = ({ component: Component, props, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        props.isAuthenticated && props.user.role.id === 2 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AgentRoute;   