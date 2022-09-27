import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { RemoteCatalogDTO } from '../../dto';
import { uniCollaboratorsCatalog, uniResourcesCatalog, uniOrgsCatalog, uniActiveTestLearningCatalog } from "./items";

export class RemoteCatalogData {
  getRemoteCatalogData(payload: {
    catalogName: string;
    searchStr?: string;
  }): ResponseResult<RemoteCatalogDTO> {
    const data = httpServiceMock(uniActiveTestLearningCatalog);
    return data;
  }
}
