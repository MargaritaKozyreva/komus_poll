import { UserData } from './user';
import { PollData } from "./poll";
import { RemoteCatalogData } from './remote_catalog';
export const UserContext = new UserData();
export const PollContext = new PollData();
export const RemoteCatalogContext = new RemoteCatalogData();