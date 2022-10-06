import { QuestionResponse } from '@src/features/Question/ui/types';

export function allStorage(): Record<
    QuestionResponse<unknown>["id"],
    QuestionResponse<unknown>
> {
    let archive: QuestionResponse<unknown> | {} = {};
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }

    return archive as Record<
        QuestionResponse<unknown>["id"],
        QuestionResponse<unknown>
    >;
}

export const onCheckAnswerHandler = () => {
    const allLocalStorage = Object.values(allStorage());
    // let isAllRequiredAnswerCorrectly = false;
    if (allLocalStorage.length > 0) {
        const emptyValueAnswers = allLocalStorage.filter(
            item =>
                item.isRequired &&
                (item.value === "" ||
                    item.value === 0 ||
                    (item.value instanceof Array && item.value.length === 0) ||
                    (item.value instanceof Object &&
                        Object.keys(item.value).length === 0))
        );
        return emptyValueAnswers
        //isAllRequiredAnswerCorrectly = emptyValueAnswers.length === 0;
        //console.log("+++emptyValueAnswers is ", emptyValueAnswers);
    } else {
        return []
        // isAllRequiredAnswerCorrectly = true;
    }
    // console.log(
    //     "+++isAllRequiredAnswerCorrectly is " + isAllRequiredAnswerCorrectly
    // );
    // return isAllRequiredAnswerCorrectly;
};