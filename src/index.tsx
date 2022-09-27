import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "@pages/main/Main";

import Modal from "@features/Modal/containers/ModalContainer";
import { PrivatePage } from "@pages/private";

import store from "@shared/api/store";
import "./app/index.scss";
import RemoteCatalog from "./entities/RemoteCatalog/ui/RemoteCatalog";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/komus_poll/start" element={<div>Start Page</div>} />
          <Route
            path="/komus_poll"
            element={
              <PrivatePage>
                <Main />
              </PrivatePage>
            }
          />
          {/* <Route
            path="/komus_poll/catalog"
            element={
              <PrivatePage>
                <RemoteCatalog
                  catalogName={"collaborators"}
                  setRows={() => {}}
                  buttonAction={() => {}}
                />
              </PrivatePage>
            }
          /> */}
          <Route
            path="*"
            element={<div className="not-found">Страницы не существует</div>}
          />
        </Routes>
      </BrowserRouter>
      <Modal />
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("komus-poll"));
