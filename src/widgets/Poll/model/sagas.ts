// import { takeEvery, put, call } from 'redux-saga/effects';
// import { FinanceDTO } from '../dataContext/FinanceDTO';
// import { financeContext } from '../dataContext/FinanceContext';
// import { financeActions } from '../redux/financeSlices';
// import { SagaDataRequest } from '../../../core/ts/types';
// import { PollContext } from '@src/shared/api/dataContext/fake';
// import { pollActions } from './slices';
// import { PollDTO } from '@src/shared/api/dto';

// const getQuestionInfo = function* (pollId: string): SagaDataRequest<PollDTO> {
// 	try {
// 		const { data } = yield call(() => PollContext.getPoll({pollId: pollId}));
// 		yield put(pollActions.getQuestionInfo(data));
// 	} catch (e) {
// 		yield put(financeActions.getAccountsError);
// 	}
// };

// const getTransactionsSaga = function* (): SagaDataRequest<FinanceDTO.Transaction[]> {
// 	try {
// 		const { data } = yield call(financeContext.getTransactions);
// 		yield put(financeActions.getTransactionsSuccess(data));
// 	} catch (e) {
// 		yield put(financeActions.getAccountsError);
// 	}
// };

// export const financeSaga = function* () {
// 	yield takeEvery(financeActions.getAccountsRequest, getAccountsSaga);
// 	yield takeEvery(financeActions.getTransactionsRequest, getTransactionsSaga);
// };