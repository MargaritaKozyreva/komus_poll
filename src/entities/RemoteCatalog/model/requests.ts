import { RemoteCatalogContext } from "@api/dataContext/fake";
import { RemoteCatalogTypes, RemoteCatalogVariants } from "./types";

export const getRemoteCatalogData = async(catalogName: string, searchStr?: string) => {
  const data = await RemoteCatalogContext.getRemoteCatalogData({
    catalogName, searchStr
  });
  return data;
};
