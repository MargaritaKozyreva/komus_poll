import { TableColumnsType, TransformDataType } from '@src/entities/RemoteCatalog/helpers/types';
import { RemoteCatalogTypes } from "@src/entities/RemoteCatalog/model/types";
import RemoteCatalog from "@src/entities/RemoteCatalog/ui/RemoteCatalog";
import { RemoteFieldsType } from '@src/shared/api/types';
import React from "react";

export enum ModalKey {
  Default = "DEFAULT",
  RemoteCatalog = "REMOTE_CATALOG",
}

export type ModalKeyToPayload = {
  [ModalKey.Default]: null;
  [ModalKey.RemoteCatalog]: {
    readonly catalogName: string;
    readonly rows: React.Key[];
    readonly setRows: React.Dispatch<React.SetStateAction<React.Key[]>>;
    readonly buttonAction: () => void
  };
};

export const MODAL_KEY_TO_COMPONENT_MAP: {
  [key in ModalKey]: React.FC<ModalKeyToPayload[key]>;
} = {
  [ModalKey.Default]: (payload) => null,
  [ModalKey.RemoteCatalog]: payload => {
    console.log(payload)
    return <RemoteCatalog {...payload} />;
  },
};

// export function openModal<K extends ModalKey>(
// 	key: K,
// 	payload: ModalKeyToPayload[K]
// ): ModalKeyToPayload[K];

// const Component = MODAL_KEY_TO_COMPONENT_MAP['PROCESS'];

// const payload = openModal(ModalKey.Process, {
// 	eventId: 1
// });
