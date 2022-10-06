export enum QuestionActions {
    ADD_QUESTION_STATE = 'ADD_QUESTION_STATE'
}

export const addQuestionStateAction = (payload) => ({ type: QuestionActions.ADD_QUESTION_STATE, payload })