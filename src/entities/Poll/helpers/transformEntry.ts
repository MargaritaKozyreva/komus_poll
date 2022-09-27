import { QuestionVariants } from '@src/features/Question/ui/types';
import { ResponceQuestionType, QuestionType } from "@src/shared/api/types";

const toJson = xml => {
  var convert = require("xml-js");

  const options = {
    compact: true,
    ignoreComment: true,
  };
  const jsonText = convert.xml2json(xml, options);
  return jsonText;
};

export const transformQuestionDataResponce = (
  responceQuestions: ResponceQuestionType[]
): QuestionType[] => {
  return responceQuestions.map(data => {
    let tempObj: QuestionType = {
      question_id: Number(data.question_id),
      question_title: data.question_title,
      question_type: data.question_type,
      is_multiple: data.is_multiple === "1",
      image_id: data.image_id,
      required: data.required === '1',
    };

    if(data.question_type === QuestionVariants.LINK){
      tempObj.catalog = data.catalog
    }

    if (data.hasOwnProperty("entries")) {
      const entries = JSON.parse(toJson(data.entries));
      const arrayTransformEntries = entries.entries.entry.map(item => {
        return {
          id: Number(item.id._text),
          value: item.value._text,
        };
      });

      tempObj.entries = arrayTransformEntries;
    }

    return tempObj;
  });
};
