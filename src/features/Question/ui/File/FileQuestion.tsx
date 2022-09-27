import { QuestionType } from "@src/shared/api/types";
import { Upload } from "@src/shared/ui/Upload/Upload";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";

const FileQuestion: React.FC<QuestionType> = (props) => {
  const [fileList, setFileList] = useState([]);
  const [state, setState] = useState<QuestionResponse<any[]>>();

  useEffect(() => {
    setState({
      type: QuestionVariants.FILE,
      id: props.question_id,
      value: fileList,
    });
  }, [JSON.stringify(fileList)]);

  console.log("file checked", state);

  return (
    <div>
      <Upload
        fetchUrl="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        fileList={fileList}
        setFileList={setFileList}
      />
    </div>
  );
};

export { FileQuestion };
