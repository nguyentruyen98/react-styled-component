import React from "react";
import { useLocation } from "react-router-dom";
import Page from "modules/common/components/Page";

const SamplePage = () => {
  const { pathname } = useLocation();
  return <Page.Content>{`Pathname: ${pathname}`}</Page.Content>;
};

export default SamplePage;
