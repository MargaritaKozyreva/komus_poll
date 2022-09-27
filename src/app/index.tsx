import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "@pages/main/Main";

import Modal from "@features/Modal/containers/ModalContainer";
import { PrivatePage } from "@pages/private";

import store from "@shared/api/store";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/view_doc.html?mode=komus_poll" element={<Main />} />
          <Route
            path="/komus_poll"
            element={
                <Main />
            }
          />
          <Route
            path="/komus_poll/finish"
            element={
              <PrivatePage>
               <div>...</div>
              </PrivatePage>
            }
          />
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

export default App;
