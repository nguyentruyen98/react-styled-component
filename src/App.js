import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GlobalStyle from "modules/common/components/GlobalStyle";
import Header from "modules/common/components/Header";
import Page from "modules/common/components/Page";
import SideBar from "modules/common/components/SideBar";
import { ModalProvider } from "modules/common/components/Modal";
import { NotificationProvider } from "modules/common/components/Notification";

import routes, { mainRoutes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalProvider>
        <NotificationProvider>
          <Header />
          <Page style={{ marginTop: "-3.5rem" }}>
            <SideBar>
              {mainRoutes.map(({ path, icon, activeIcon, label }, index) => (
                <SideBar.Item
                  key={path}
                  as={Link}
                  to={path}
                  label={label}
                  Icon={icon}
                  ActiveIcon={activeIcon}
                  active={index === 1}
                />
              ))}
            </SideBar>
            <Routes>
              {routes.map(({ content, path }) => (
                <Route key={path} path={path} element={content} />
              ))}
              <Route
                path="*"
                element={<Page.Content>Not found: 404</Page.Content>}
              />
            </Routes>
          </Page>
        </NotificationProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
