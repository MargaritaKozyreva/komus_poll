import { RemoteFieldsType } from '@src/shared/api/types';

export type TableColumnsType = {
    title: string;
    dataIndex: string;
    key: string;
}

export type TransformDataType = {
    dataSource: RemoteFieldsType[] | any[];
    columns: TableColumnsType[];
  }