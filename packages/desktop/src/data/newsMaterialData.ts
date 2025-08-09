export interface NewsItem {
  id: number;
  date: string;
  title: string;
  desc: string;
  images: string[];
}

export interface MaterialItem extends NewsItem {
  downloadLink?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2025-07-18',
    title: 'RORO与艺术家林夕合作开展文化沙龙',
    desc: '本月RORO在上海举办文化沙龙，邀请多位年轻艺术家交流分享。',
    images: ['/images/news1-1.jpg', '/images/news1-2.jpg'],
  },
  {
    id: 2,
    date: '2025-07-25',
    title: 'RORO发起“你为ROROSPHERE起名”投票活动',
    desc: '我们收集了上百条命名建议，邀请大家投票选择最喜欢的中文名。',
    images: ['/images/news2.jpg'],
  },
];

export const materialItems: MaterialItem[] = [
  {
    id: 1,
    date: '2025-07-20',
    title: 'RORO限量版实体邀请函设计',
    desc: '采用高级纸张与烫金工艺，邀请函设计兼具艺术与质感。',
    images: ['/images/material1.jpg'],
    downloadLink: '/downloads/invitation.pdf',
  },
  {
    id: 2,
    date: '2025-07-28',
    title: 'RORO定制风车周边上线',
    desc: '趣味又环保的风车周边产品，限时发售，快来领取！',
    images: ['/images/material2.jpg'],
  },
];

