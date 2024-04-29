import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import { defineAsyncComponent, ref, shallowRef } from 'vue'

const SubImageSlider = defineAsyncComponent(() => import('@/components/subs/SubImageSlider.vue'))
const SubDropDownMenu = defineAsyncComponent(() => import( '@/components/subs/SubDropDownMenu.vue'))
const SubAnimateDropDownMenu = defineAsyncComponent(() => import( '@/components/subs/SubAnimateDropDownMenu.vue'))
const SubResponsiveTab = defineAsyncComponent(() => import( '@/components/subs/SubResponsiveTab.vue'))
const SubSideBarToggleMenu = defineAsyncComponent(() => import( '@/components/subs/SubSideBarToggleMenu.vue'))
const SubTabCard = defineAsyncComponent(() => import( '@/components/subs/SubTabCard.vue'))
const SubResponsiveTimeline = defineAsyncComponent(() => import( '@/components/subs/SubResponsiveTimeline.vue'))
const SubGreenTimeline = defineAsyncComponent(() => import( '@/components/subs/SubGreenTimeline.vue'))
const SubMultiLevelAccordion = defineAsyncComponent(() => import( '@/components/subs/SubMultiLevelAccordion.vue'))
const SubSoundBoard = defineAsyncComponent(() => import( '@/components/subs/SubSoundBoard.vue'))
const SubDadJokes = defineAsyncComponent(() => import( '@/components/subs/SubDadJokes.vue'))
const SubDrinkWater = defineAsyncComponent(() => import( '@/components/subs/SubDrinkWater.vue'))
const SubContentPlaceHolder = defineAsyncComponent(() => import( '@/components/subs/SubContentPlaceHolder.vue'))
const SubStickyNavigation = defineAsyncComponent(() => import( '@/components/subs/SubStickyNavigation.vue'))
const SubDoubleClickHeart = defineAsyncComponent(() => import( '@/components/subs/SubDoubleClickHeart.vue'))
const SubFeedBackUIDesign = defineAsyncComponent(() => import( '@/components/subs/SubFeedBackUIDesign.vue'))
const SubFormInputWave = defineAsyncComponent(() => import( '@/components/subs/SubFormInputWave.vue'))
const SubGithubProfiles = defineAsyncComponent(() => import( '@/components/subs/SubGithubProfiles.vue'))
const SubHoverBoard = defineAsyncComponent(() => import( '@/components/subs/SubHoverBoard.vue'))
const SubImageCarousel = defineAsyncComponent(() => import( '@/components/subs/SubImageCarousel.vue'))
const SubIncrementingCounter = defineAsyncComponent(() => import( '@/components/subs/SubIncrementingCounter.vue'))
const SubMobileTabNavigation = defineAsyncComponent(() => import( '@/components/subs/SubMobileTabNavigation.vue'))
const SubPasswordGenerator = defineAsyncComponent(() => import( '@/components/subs/SubPasswordGenerator.vue'))
const SubProgressSteps = defineAsyncComponent(() => import( '@/components/subs/SubProgressSteps.vue'))
const SubQuizApp = defineAsyncComponent(() => import( '@/components/subs/SubQuizApp.vue'))
const SubToastNotification = defineAsyncComponent(() => import( '@/components/subs/SubToastNotification.vue'))
const SubTodoList = defineAsyncComponent(() => import( '@/components/subs/SubTodoList.vue'))
const SubVerifyAccountUI = defineAsyncComponent(() => import( '@/components/subs/SubVerifyAccountUI.vue'))
const SubDoubleVerticalSlider = defineAsyncComponent(() => import( '@/components/subs/SubDoubleVerticalSlider.vue'))
const SubSimpleTimer = defineAsyncComponent(() => import( '@/components/subs/SubSimpleTimer.vue'))

export const items = ref([
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://codepen.io/AMKohn/pen/DZYKEV',
    titleCn: '轮播图',
    titleEn: 'Image Slider',
    component: shallowRef(SubImageSlider),
    category: '首页'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://codepen.io/andornagy/pen/ALbdbJ',
    titleCn: '下拉菜单条',
    titleEn: 'DropDown Menu',
    component: shallowRef(SubDropDownMenu),
    category: '首页'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://codepen.io/hkmDesigner/pen/gmzvQj',
    titleCn: '动画下拉菜单条',
    titleEn: 'Animated DropDown Menu',
    component: shallowRef(SubAnimateDropDownMenu),
    category: '首页'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://codepen.io/imprakash/pen/epZvbQ',
    titleCn: '响应式选项卡',
    titleEn: 'Responsive Tab',
    component: shallowRef(SubResponsiveTab),
    category: '首页'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://codepen.io/plavookac/pen/qomrMw',
    titleCn: '可收放侧边菜单',
    titleEn: 'Sidebar toggle menu',
    component: shallowRef(SubSideBarToggleMenu),
    category: '首页'
  },
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://codepen.io/wallaceerick/pen/nRyxPz',
    titleCn: '选项卡片',
    titleEn: 'tab card',
    component: shallowRef(SubTabCard),
    category: '首页'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://codepen.io/nsom/pen/Vbopjw',
    titleCn: '响应式时间轴',
    titleEn: 'Responsive Timeline',
    component: shallowRef(SubResponsiveTimeline),
    category: '详情页'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://codepen.io/P233/pen/nbgRXw',
    titleCn: '绿色时间轴',
    titleEn: 'Green Timeline',
    component: shallowRef(SubGreenTimeline),
    category: '详情页'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://codepen.io/nathanlong/pen/kVyONE',
    titleCn: '多级手风琴',
    titleEn: 'Multi-level Accordion',
    component: shallowRef(SubMultiLevelAccordion),
    category: '首页'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://50projects50days.com/projects/sound-board/',
    titleCn: '发声按钮',
    titleEn: 'Sound Board',
    component: shallowRef(SubSoundBoard),
    category: '单词app'
  },
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://50projects50days.com/projects/dad-jokes/',
    titleCn: '爹爹讲笑话',
    titleEn: 'DadJokes',
    component: shallowRef(SubDadJokes),
    category: '小程序'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://50projects50days.com/projects/drink-water/',
    titleCn: '水瓶特效',
    titleEn: 'DrinkWater',
    component: shallowRef(SubDrinkWater),
    category: '游戏效果'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://50projects50days.com/projects/content-placeholder/',
    titleCn: '加载占位特效',
    titleEn: 'ContentPlaceHolder',
    component: shallowRef(SubContentPlaceHolder),
    category: '效果'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://50projects50days.com/projects/sticky-navigation/',
    titleCn: '顶栏固定特效',
    titleEn: 'StickyNavigation',
    component: shallowRef(SubStickyNavigation),
    category: '效果'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://50projects50days.com/projects/double-click-heart/',
    titleCn: '喜欢按钮特效',
    titleEn: 'DoubleClickHeart',
    component: shallowRef(SubDoubleClickHeart),
    category: '效果'
  },
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://50projects50days.com/projects/feedback-ui-design/',
    titleCn: '问卷调查',
    titleEn: 'FeedBack-UI-Design',
    component: shallowRef(SubFeedBackUIDesign),
    category: '小程序'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://50projects50days.com/projects/form-input-wave/',
    titleCn: '登录框效果',
    titleEn: 'Form Input Wave',
    component: shallowRef(SubFormInputWave),
    category: '小程序'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://50projects50days.com/projects/github-profiles/',
    titleCn: 'github简介',
    titleEn: 'Github Profiles',
    component: shallowRef(SubGithubProfiles),
    category: '小程序'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://50projects50days.com/projects/hover-board/',
    titleCn: '动态格子',
    titleEn: 'Hover board',
    component: shallowRef(SubHoverBoard),
    category: '小程序'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://50projects50days.com/projects/image-carousel/',
    titleCn: '图片换页',
    titleEn: 'Image Carousel',
    component: shallowRef(SubImageCarousel),
    category: '小程序'
  },
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://50projects50days.com/projects/incrementing-counter/',
    titleCn: '跳动计数效果',
    titleEn: 'Incrementing Counter',
    component: shallowRef(SubIncrementingCounter),
    category: '小程序'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://50projects50days.com/projects/mobile-tab-navigation/',
    titleCn: '移动tab导航',
    titleEn: 'Mobile Tab Navigation',
    component: shallowRef(SubMobileTabNavigation),
    category: '小程序'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://50projects50days.com/projects/password-generator/',
    titleCn: '密码生成器',
    titleEn: 'Password Generator',
    component: shallowRef(SubPasswordGenerator),
    category: '小程序'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://50projects50days.com/projects/progress-steps/',
    titleCn: '步进动画',
    titleEn: 'Password Generator',
    component: shallowRef(SubProgressSteps),
    category: '小程序'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://50projects50days.com/projects/quiz-app/',
    titleCn: '测验问卷',
    titleEn: 'Quiz App',
    component: shallowRef(SubQuizApp),
    category: '小程序'
  },
  {
    icon: shallowRef(DocumentationIcon),
    url: 'https://50projects50days.com/projects/toast-notification/',
    titleCn: '气泡通知',
    titleEn: 'Toast Notification',
    component: shallowRef(SubToastNotification),
    category: '小程序'
  },
  {
    icon: shallowRef(ToolingIcon),
    url: 'https://50projects50days.com/projects/todo-list/',
    titleCn: 'todo应用',
    titleEn: 'Todo List',
    component: shallowRef(SubTodoList),
    category: '小程序'
  },
  {
    icon: shallowRef(EcosystemIcon),
    url: 'https://50projects50days.com/projects/verify-account-ui/',
    titleCn: '验证码',
    titleEn: 'VerifyAccountUI',
    component: shallowRef(SubVerifyAccountUI),
    category: '小程序'
  },
  {
    icon: shallowRef(CommunityIcon),
    url: 'https://50projects50days.com/projects/double-vertical-slider/',
    titleCn: '双向垂直滑动图',
    titleEn: 'Double Vertical Slider',
    component: shallowRef(SubDoubleVerticalSlider),
    category: '小程序'
  },
  {
    icon: shallowRef(SupportIcon),
    url: 'https://50projects50days.com/projects/simple-timer/',
    titleCn: '简单计数器',
    titleEn: 'Simple Timer',
    component: shallowRef(SubSimpleTimer),
    category: '小程序'
  }
])
