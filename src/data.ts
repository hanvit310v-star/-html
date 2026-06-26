import video123 from './assets/123.mp4';

export const getImageUrl = (path: string | undefined) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  return `${import.meta.env.BASE_URL}${path}`;
};

export const CATEGORIES = ['All', 'Web Design', 'Mobile UI', 'Branding'];

export const PROJECTS = [
  {
    id: 1,
    title: '29CM 웹 초기 사용자 이탈 개선 UX/UI 리디자인',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80',
    video: video123,
    portfolioSections: [
      { id: 'about', title: 'About', image: '29CM/1-about.webp' },
      { id: 'project-background', title: 'Background', image: '29CM/2-1-project background.webp' },
      { id: 'project-background-2', title: 'Project Background 2', image: '29CM/2-project background.webp', hideFromToc: true },
      { id: 'research', title: 'Research', image: '29CM/3-research.webp' },
      { id: 'home', title: 'Home', parentTitle: 'UI Design', image: '29CM/4-home.webp' },
      { id: 'category', title: 'Category', parentTitle: 'UI Design', image: '29CM/5-category.webp' },
      { id: 'search-bar', title: 'Search Bar', parentTitle: 'UI Design', image: '29CM/6-search bar.webp' },
      { id: 'product-listing-page', title: 'Product Listing Page', parentTitle: 'UI Design', image: '29CM/7-product listing page.webp' },
      { id: 'filter', title: 'Filter', parentTitle: 'UI Design', image: '29CM/8-filter.webp' },
      { id: 'product-detail-page', title: 'Product Detail Page', parentTitle: 'UI Design', image: '29CM/9-product detail page.webp' },
      { id: 'purchase-section', title: 'Purchase Section', parentTitle: 'UI Design', image: '29CM/10-purchase section.webp' },
      { id: 'review', title: 'Review', parentTitle: 'UI Design', image: '29CM/11-review.webp' },
      { id: 'responsive-web-design', title: 'Responsive Web Design', image: '29CM/12-responsive web design.webp' },
      { id: 'outcome', title: 'Outcome', image: '29CM/13-outcome.webp' },
      { id: 'last', title: 'Last', image: '29CM/14-last.webp' },
    ],
    tools: ['Ps', 'Figma'],
    detailSubtitle: 'WEB Design',
    solution: 'Redesigned UX/UI to lower the initial entry barrier and improve the user retention rate.',
    contribution: 'UX/UI Design 100%',
    duration: '2025.08 ~ 2025.10 (2개월)',
    retrospective: '기존 사용성을 해치지 않으면서 새로운 가치를 전달하는 것의 중요성을 배웠습니다. 특히 사용자 테스트를 통해 가설을 검증하는 과정이 프로젝트의 완성도를 높이는 데 큰 도움이 되었습니다.',
    portfolioImage: undefined,
  },
  {
    id: 2,
    title: '추모, 고령 사용자 사용성 개선 UX/UI 기업 프로젝트',
    category: 'Web Design',
    image: 'Choomo/1.Project Overview.webp',
    tools: ['Figma', 'Xd'],
    detailSubtitle: 'Web Design',
    solution: 'Designed an intuitive B2B fintech dashboard to easily grasp complex financial data.',
    contribution: 'UX/UI Design 100%',
    duration: '2023.05 - 2023.08 (4개월)',
    retrospective: '복잡한 금융 데이터를 사용자가 직관적으로 파악할 수 있도록 정보 계층을 설계하고 시각화하는 방법에 대해 깊이 고민해볼 수 있는 프로젝트였습니다.',
    portfolioImage: undefined,
    portfolioSections: [
      { id: 'overview', title: 'Project Overview', image: 'Choomo/1.Project Overview.webp' },
      { id: 'status-issue', title: 'Issue', parentTitle: 'Status Board', image: 'Choomo/2-1.Issue.webp' },
      { id: 'status-solution', title: 'Solution', parentTitle: 'Status Board', image: 'Choomo/2-2.Solution.webp' },
      { id: 'status-solution-1', title: 'Solution 1', parentTitle: 'Status Board', image: 'Choomo/2-2.Solution-1.webp', hideFromToc: true },
      { id: 'admin-issue', title: 'Issue', parentTitle: 'Management Page (Admin)', image: 'Choomo/3-1.Issue.webp' },
      { id: 'admin-solution', title: 'Solution', parentTitle: 'Management Page (Admin)', image: 'Choomo/3-2.Solution.webp' },
      { id: 'result', title: 'Result', image: 'Choomo/4.Result.webp' }
    ]
  },
  {
    id: 3,
    title: 'CGV 앱 영화 경험 고도화 UX/UI 프로젝트',
    category: 'Mobile UI',
    image: 'CGV/1.Project Overview.webp',
    tools: ['Figma'],
    detailSubtitle: 'Mobile UI',
    solution: '개인화된 앱 사용 경험 및 관람 영화에 대한 감상을 보존·공유하고자 하는 니즈 확인, 사용자 맞춤 추천 기반 UI 설계를 통한 예매 흐름의 편의성 확보 및 커뮤니티 기능 개설을 통한 영화 관람 이후의 사용자 경험 확대를 통해 ‘단순 영화 예매 플랫폼’으로서 고착된 앱의 정체성에 대한 한계를 극복하고자 하였음. 이후 실제 CGV 서비스에 ‘씨네톡’ 이라는 커뮤니티 기능의 도입을 확인하며, 프로젝트에서 제안한 솔루션의 타당성과 시장 적합성을 간접적으로 검증',
    contribution: 'UX/UI Design 100%',
    duration: '2025.05 ~ 2025.06 (1개월)',
    retrospective: '사용자 맞춤 추천 기반 UI 설계와 커뮤니티 기능 기획을 통해 단순 예매를 넘어선 영화 경험 확장을 고민해 볼 수 있었습니다.',
    portfolioImage: undefined,
    portfolioSections: [
      { id: 'overview', title: 'Project Overview', image: 'CGV/1.Project Overview.webp' },
      { id: 'research', title: 'Research', image: 'CGV/2.Research.webp' },
      { id: 'strategy', title: 'Strategy', image: 'CGV/3.Strategy.webp' },
      { id: 'user-flow', title: 'User Flow', image: 'CGV/4.User Flow.webp' },
      { id: 'home', title: 'Home', parentTitle: 'UI Design', image: 'CGV/5-1.Home.webp' },
      { id: 'community', title: 'Community', parentTitle: 'UI Design', image: 'CGV/5-2.Community.webp' },
      { id: 'last', title: 'Last', image: 'CGV/6.Last.webp', hideFromToc: true }
    ]
  }
];
