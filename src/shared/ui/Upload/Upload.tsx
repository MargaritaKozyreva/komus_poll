import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload as UploadAntd } from "antd";
import "antd/dist/antd.css";
import { Button } from '../Button';
import { Button as AntdButton} from 'antd'

type UploadProps = {
  fetchUrl: string;
  fileList: any[]
  setFileList: React.Dispatch<React.SetStateAction<any[]>>
};

export const Upload: React.FC<UploadProps> = props => {
  const [uploading, setUploading] = useState(false);
  console.log('##fileList ', props.fileList)
  const handleUpload = () => {
    const formData = new FormData();
    props.fileList.forEach(file => {
      formData.append("files[]", file);
    });

    setUploading(true);

    fetch(props.fetchUrl, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then((resJson) => console.log(resJson))
      .then(() => {
        props.setFileList([]);
        message.success("Ваши файлы успешно отправлены.");
      })
      .catch(() => {
        message.error("Не удалось отправить файлы.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const attr = {
    onRemove: file => {
      const index = props.fileList.indexOf(file);
      const newFileList = props.fileList.slice();
      newFileList.splice(index, 1);
      props.setFileList(newFileList);
    },
    beforeUpload: file => {
      props.setFileList([...props.fileList, file]);
      return false;
    },
    fileList: props.fileList,
  };
  return (
    <>
      <UploadAntd {...attr}>
        <AntdButton icon={<UploadOutlined />}>Выберите файлы</AntdButton>
      </UploadAntd>
      <Button
        onClick={handleUpload}
        disabled={props.fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? "Загрузка" : "Отправить"}
      </Button>
    </>
  );
};
