import { QuestionType } from "@src/shared/api/types";
import { Upload } from "@src/shared/ui/Upload/Upload";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";

const FileQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.FILE,
    id: props.question_id,
    isRequired: props.required,
    value: [],
  };

  const [fileList, setFileList] = useState([]);
  const [state, setState] = useState<QuestionResponse<any[]>>(initialState);

  useEffect(() => {
    const _state = {
      ...state,
      value: fileList,
    };
    setState(_state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(_state));
  }, [JSON.stringify(fileList)]);

  console.log("file checked", state);

  return (
    <div
      className={`checked ${
        props.required && state.value.length === 0 ? `required` : ``
      }`}
    >
      <Upload
        fetchUrl="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        fileList={fileList}
        setFileList={setFileList}
      />
    </div>
  );
};

export { FileQuestion };
