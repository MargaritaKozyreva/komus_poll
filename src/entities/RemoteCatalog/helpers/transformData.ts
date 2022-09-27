import { RemoteCatalogDTO } from "@src/shared/api/dto";
import { RemoteFieldsType } from "@src/shared/api/types";
import { TransformDataType } from "./types";

export const transformRemoteCatalog = (
  catalogName: string,
  dataSource: RemoteCatalogDTO["results"],
  columns: RemoteCatalogDTO["columns"]
): TransformDataType => {
  const newColumns = columns
    .map(item => {
      const columnItem =  {
        title: item.title,
        dataIndex: item.data,
        key: item.data,
      };

      return columnItem
    })
    .filter(item => item.title);

  const newDataSource = (dataSource as RemoteFieldsType[]).map((item, i) => {
    return {
      key: item.id,
      d0: item.d0,
      d1: item.d1,
      d2: item.d2,
      d3: item.d3,
      d5: item.d5,
      d6: item.d6,
      d7: item.d7,
      d8: item.d8,
      d9: item.d9,
      d10: item.d10,
      d11: item.d11,
      d13: item.d13,
      d14: item.d14,
      d15: item.d15,
      d16: item.d16,
      d17: item.d17,
      d18: item.d18,
      d19: item.d19,
      d20: item.d20,
    };
  });

  return { dataSource: newDataSource, columns: newColumns };
};
