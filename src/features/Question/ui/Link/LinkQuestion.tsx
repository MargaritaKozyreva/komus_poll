import { QuestionType } from "@src/shared/api/types";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import { httpService } from "@src/shared/service/service";
import { modalActions } from "@src/features/Modal/redux/ModalSlices";
import { ModalKey } from "@src/features/Modal/components/ModalController";
import { useDispatch, useSelector } from "react-redux";
import { slices } from "@src/entities/RemoteCatalog/model";
import Column from "antd/lib/table/Column";
import { DeleteOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import styles from "./styles.module.scss";
import { Button } from "@shared/ui";

const LinkQuestion: React.FC<QuestionType> = props => {
  const [rows, setRows] = useState<any>([]);
  const [state, setState] = useState<QuestionResponse<any[]>>({
    type: QuestionVariants.LINK,
    id: props.question_id,
    value: [],
  });

  useEffect(() => {
    setState({
      type: QuestionVariants.LINK,
      id: props.question_id,
      value: rows.map(row => row.key),
    });
  }, [JSON.stringify(rows)]);

  console.log("link checked", state);

  const dispatch = useDispatch();

  const remoteCatalog = useSelector(
    (state: { remoteCatalog: slices.RemoteCatalogState }) => state.remoteCatalog
  );

  const showModal = () => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.RemoteCatalog,
        withBackground: true,
        payload: {
          catalogName: props.catalog,
          rows: rows.map(row => row.key),
          setRows: setRows,
          buttonAction: () => dispatch(modalActions.hideModal()),
        },
      })
    );
  };

  const handleOk = () => {
    // async function postData(url = "", collection_code = "") {
    //   let formData = new FormData();
    //   formData.append("collection_code", collection_code);
    //   formData.append("user_id", "6999540982056371435");
    //   formData.append(
    //     "parameters",
    //     "catalog_name=collaborator;paging_size=100"
    //   );

    //   const data =
    //     "limit=100&collection_code=uni_catalog_list&parameters=parent_field_name%3D%3Bdisp_first_only%3Dfalse%3Bsecid%3D95179F90D4218809C87DF20572DCE518%3Bdisp_icon%3Dfalse%3Bsource_type%3D%3Bpaging_size%3D100%3Bdisp_paging%3Dtrue%3Bsearch%3D%3Bfilter_conditions%3D%3Bfilter_id%3D%252523empty%252523%3Blist_columns%3D%3Blist_headers%3D%3Bcol_cells%3D%3Bcol_headers%3D%3Bdata_fields%3D%3Bis_data_grid%3Dtrue%3Bdisp_check_box%3Dfalse%3Blink_open%3D%3Blink_action%3D%3Blink_prop%3D%3Blink_mode%3D%3Blink_field_name%3D%3Blink_field_index%3D%3Blink_object_field%3DPrimaryKey%3Bdisp_link%3Dfalse%3Bsort_direct%3D%252B%3Bsort_field_name%3D%3Bsort_index%3D%3Bdisp_sort%3Dtrue%3Bshow_all%3Dtrue%3Barray_link_field%3Did%3Barray_selected%3D%2523empty%2523%3Barray%3D%3Bdisp_array%3Dfalse%3Bexternal_eval%3D%3Bxquery_qual%3D%3Bopen_doc%3Dfalse%3Bcheck_access%3Dfalse%3Bview_type%3D%3Bcatalog_name%3Dcollaborator&referer_url=http%253A%252F%252F172.16.3.123%253A81%252Fdlg_select_inline_frame.html&page=1&start=0";
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "no-cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "include", // include, *same-origin, omit
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: data, // body data type must match "Content-Type" header
    //   });
    //   return response; // parses JSON response into native JavaScript objects
    // }

    // postData(
    //   "http://172.16.3.123:81/pp/Ext/extjs_json_collection_data.html",
    //   "uni_catalog_list"
    // ).then(data => console.log(data));

    httpService("GET", "getCatalog", "catalog_name=collaborator").then(data =>
      console.log(data)
    );
  };

  const onHandleDeleteRow = (value, record, index) => {
    console.log(value);
    const newRows = rows.filter(row => row.key !== value.key);
    setRows(newRows);
  };

  return (
    <div className={styles.root}>
      <Button onClick={showModal}>Выбрать</Button>
      {(remoteCatalog.entity && rows && (
        <Table dataSource={rows} className={styles.table}>
          {remoteCatalog.entity.columns.map(column => (
            <Column title={column.title} dataIndex={column.data} key={column.data} />
          ))}
          <Column
            title="Действия"
            key="action"
            render={(value, record, index) => (
              <Space
                size="middle"
                onClick={() => onHandleDeleteRow(value, record, index)}
                style={{
                  cursor: "pointer",
                }}
              >
                <DeleteOutlined />
                <a>Удалить</a>
              </Space>
            )}
          />
        </Table>
      ))}
    </div>
  );
};

export { LinkQuestion };
