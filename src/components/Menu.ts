import {
  HomeOutlined,
  ShopOutlined,
  MedicineBoxOutlined,
  UserOutlined,
  SettingOutlined,
  SolutionOutlined,
  TeamOutlined,
  PullRequestOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
export const MenuItem: MenuItem[] = [
  {
    title: "系统首页",
    to: "/shop/home",
    icon: HomeOutlined,
  },
  {
    title: "商品管理",
    to: "/shop/product",
    icon: ShopOutlined,
  },
  {
    title: "商品属性管理",
    to: "/shop/productAttr",
    icon: MedicineBoxOutlined,
  },
  {
    title: "系统管理",
    to: "/system",
    icon: SettingOutlined,
    children: [
      {
        title: "角色管理",
        to: "/system/role",
        icon: TeamOutlined,
      },
      {
        title: "权限管理",
        to: "/system/permission",
        icon: SolutionOutlined,
      },
      {
        title: "用户管理",
        to: "/system/user",
        icon: UserOutlined,
      },
      {
        title: "请求日志管理",
        to: "/system/reqLog",
        icon: PullRequestOutlined,
      },
      {
        title: "上传资源管理",
        to: "/system/assets",
        icon: UploadOutlined,
      },
    ],
  },
];
