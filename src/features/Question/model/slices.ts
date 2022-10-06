import { QuestionResponse } from '../ui/types';
import { QuestionActions } from './actions';

export type QuestionState = {
    entity: QuestionResponse<any>[]
};

const initialState: QuestionState = {
    entity: [],
};

export const questionReducer = (state: QuestionState = initialState, action: { payload: QuestionResponse<any>, type: QuestionActions }) => {
    switch (action.type) {
        case QuestionActions.ADD_QUESTION_STATE: {
            const repeatQuestion = state.entity.find((elem) => {
                return elem.id === action.payload.id
            });
            if (repeatQuestion) {
                if (JSON.stringify(repeatQuestion.value) !== JSON.stringify(action.payload.value)) {
                    const newStateEntity = state.entity.filter((elem) => elem.id !== repeatQuestion.id)
                    return { ...state, entity: [...newStateEntity, action.payload] }
                } else {
                    return state
                }
            } else {
                return { ...state, entity: [...state.entity, action.payload] }
            }

        }

        default: return state
    }
}