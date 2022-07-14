interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_API_URL: string;
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface QueryDTO {
  id?: string;
  current?: number;
  pageSize?: number;
  sorter?: string;
  [name: string]: any;
}

interface ShowDTO {
  id: string;
}

interface RemoveDTO {
  ids: string[];
}

interface UpdateDTO {
  id: string;
  [name: string]: string | string[] | number;
}
interface CreateDTO {
  id: string;
  [name: string]: string | string[] | number;
}

interface ResponseData {
  data: any;
  message: string;
  code: number;
}

interface ResponseResult {
  code: number;
  message: string;
  status: "success" | "error";
  data: ResponseData;
}

interface UserInfo {
  username?: string;
  avatar?: string;
  name?: string;
  createTime?: string;
  id?: string;
}

interface MenuItem {
  title: string;
  to: string;
  icon?: any;
  children?: MenuItem[];
}

interface MenuClick {
  item: {
    title: string;
  };
  key: string;
  keyPath: string[];
}

interface DataType {
  action: string;
  consumeTime: number;
  createTime: string;
  deleteTime: string;
  id: string;
  ip: string;
  method: string;
  params: string;
  status: number;
  updateTime: string;
  userId: string;
}
