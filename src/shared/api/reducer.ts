import { userReducers } from "@entities/User/model/slices";
import { modalReducers } from '@features/Modal/redux/ModalSlices';
import { combineReducers } from "@reduxjs/toolkit";
import { remoteCatalogReducers } from '@entities/RemoteCatalog/model/slices';
import { questionReducer } from '@src/features/Question/model/slices';
import { pollReducers } from '@src/widgets/Poll/model/slices';

const rootReducer = combineReducers({
  user: userReducers,
  modal: modalReducers,
  remoteCatalog: remoteCatalogReducers,
  questionInfo: questionReducer,
  poll: pollReducers
});

export default rootReducer;
