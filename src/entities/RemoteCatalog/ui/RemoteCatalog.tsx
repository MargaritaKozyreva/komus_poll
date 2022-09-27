import React, { useState, useEffect } from "react";
import { Checkbox, Input, Table } from "antd";
import { Button } from "@shared/ui";
import { TransformDataType } from "../helpers/types";
import { actions, slices } from "../model";
import useDebounce from "@src/shared/helpers/hooks/useDebounce";
import { transformRemoteCatalog } from "../helpers/transformData";
import { WithSkeleton } from "@src/shared/ui/WithSkeleton";
import { RemoteFieldsType } from "@src/shared/api/types";
import { useDispatch, useSelector } from "react-redux";

type RemoteCatalogProps = {
  rows: React.Key[];
  catalogName: string;
  setRows: React.Dispatch<React.SetStateAction<any>>;
  buttonAction: () => void;
};

const RemoteCatalog: React.FC<RemoteCatalogProps> = props => {
  const [isShowChecked, showChecked] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [transformData, setTransformData] = useState<TransformDataType>(null);
  const [transformDataSort, setTransformDataSort] =
    useState<TransformDataType>(null);
  const debouncedValue = useDebounce(searchValue, 500);

  const dispatch = useDispatch();

  const remoteCatalog = useSelector(
    (state: { remoteCatalog: slices.RemoteCatalogState }) => state.remoteCatalog
  );

  useEffect(() => {
    dispatch(
      actions.getRemoteCatalogData({
        catalogName: props.catalogName,
        searchStr: searchValue,
      })
    );
  }, [dispatch, debouncedValue]);

  useEffect(() => {
    if (transformData !== null) {
      if (isShowChecked) {
        const filterDataSource = (
          transformData.dataSource as RemoteFieldsType[]
        ).filter(source => props.rows.includes(source.key));
        setTransformDataSort({
          dataSource: filterDataSource,
          columns: transformData.columns,
        });
      } else {
        setTransformDataSort(null);
      }
    }
  }, [isShowChecked]);

  useEffect(() => {
    if (remoteCatalog.entity) {
      setTransformData(
        transformRemoteCatalog(props.catalogName, remoteCatalog.entity.results, remoteCatalog.entity.columns)
      );
    }
  }, [remoteCatalog.entity]);

  const onHandleRows = (
    selectedRowKeys,
    selectedRows: Array<{ [key: string]: any; key: string }>
  ) => {
    props.setRows(selectedRows);
  };

  return (
    <>
      {transformData && (
        <>
          <Input
            placeholder="Поиск"
            value={searchValue}
            onChange={e => {
              const currValue = e.target.value;
              setSearchValue(currValue);
            }}
          />
          {/* <Checkbox
            onChange={() => showChecked(!isShowChecked)}
            value={isShowChecked}
          >
            Показать выбранные
          </Checkbox> */}
        </>
      )}
      <WithSkeleton isLoading={remoteCatalog.isLoading} isEmpty={remoteCatalog.entity === null}>
        <h3>Выберите элемент</h3>
        {transformData && (
          <Table
            dataSource={
              transformDataSort
                ? transformDataSort.dataSource
                : transformData.dataSource
            }
            columns={transformData.columns}
            pagination={{
              pageSizeOptions: ["5", "10"],
              pageSize: 10,
            }}
            scroll={{
              y: 540,
            }}
            rowSelection={{
              type: "checkbox",
              onChange: onHandleRows,
              defaultSelectedRowKeys: props.rows,
            }}
          />
        )}
        <Button onClick={props.buttonAction}>Добавить</Button>
      </WithSkeleton>
    </>
  );
};

export default RemoteCatalog;
