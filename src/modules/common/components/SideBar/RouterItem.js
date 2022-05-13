import React from "react";
import { Link, useMatch } from "react-router-dom";

import Item from "./Item";

const RouterItem = ({ href, ...props }) => {
  const match = useMatch({ path: href, exact: true });

  return <Item as={Link} to={href} active={!!match} {...props} />;
};

export default RouterItem;
