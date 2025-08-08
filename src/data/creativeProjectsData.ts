export interface CreativeProject {
  id: number;
  title: string;
  desc: string;
  author: string;
  contact?: string; // 微信或邮箱联系方式，方便联系
  date: string; // ISO日期字符串
  details?: string; // 详情页更丰富介绍，可以是html或者markdown纯文本
}

export const approvedProjects: CreativeProject[] = [
  {
    id: 1,
    title: '艺术共创计划',
    desc: '聚合家庭与青少年力量，打造原创艺术。',
    author: 'RORO 团队',
    contact: 'wechat:roro_team',
    date: '2025-07-15',
    details:
      '这是艺术共创计划的详细介绍，包含项目背景、参与方式、成果展示等。欢迎大家积极参与，共同创造！',
  },
  {
    id: 2,
    title: '生活美学探索',
    desc: '激励个性成长，打造生活方式品牌。',
    author: '社区成员 小芳',
    contact: 'email:xiaofang@example.com',
    date: '2025-07-25',
    details:
      '生活美学探索项目通过多样化活动激发青少年个性成长。包括工作坊、展览、线上分享等丰富内容。',
  },
];

