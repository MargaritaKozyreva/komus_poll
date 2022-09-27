import { userReducers } from "@entities/User/model/slices";
import { modalReducers } from '@features/Modal/redux/ModalSlices';
import { combineReducers } from "@reduxjs/toolkit";
import { remoteCatalogReducers } from '@entities/RemoteCatalog/model/slices';

const rootReducer = combineReducers({
  user: userReducers,
  modal: modalReducers,
  remoteCatalog: remoteCatalogReducers
});

export default rootReducer;
