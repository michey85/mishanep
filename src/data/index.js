// eslint-disable
import JSImg from '../assets/js.jpg';
import ReactImg from '../assets/react.png';
import WebToolsImg from '../assets/webtools-cover-v1.png';
import WebCoderImg from '../assets/webcoder-course-cover.jpg';
import MoodleImg from '../assets/moodle-course-cover.jpg';
import PugImg from '../assets/pug-course-cover.jpg';
import WPImg from '../assets/wordpress-course-cover.jpg';
import RRImg from '../assets/redux-course.jpg';
import TSImg from '../assets/ts.png';

export const courses = [
  {
    id: 0,
    title: 'Фундаментальный JavaScript',
    subtitle: 'С практикой и проектами',
    description: 'Современный JavaScript с основ до продвинутых техник. Для начинающих и желающих закрыть пробелы.',
    tags: ['JavaScript'],
    link: 'https://www.udemy.com/course/fundamental-javascript/?couponCode=BCF771BE95E9E35AA8E3',
    stepik: 'https://stepik.org/z/114165',
    poster: JSImg,
  },
  {
    id: 1,
    title: 'React для начинающих',
    subtitle: '+3 проекта в портфолио',
    description: 'React 17 от азов до создания полноценного SPA-приложения - с роутингом и продвинутым управлением состоянием.',
    tags: ['React', 'JavaScript', 'SPA'],
    link: 'https://www.udemy.com/course/react-from-scratch/?couponCode=55F32EDFBA017D11E261',
    stepik: 'https://stepik.org/z/114197',
    poster: ReactImg,
  },
  {
    id: 2,
    title: 'Redux для управления состоянием',
    subtitle: '+2 проекта на React+Redux',
    description: 'Освойте принципы работы Redux - на классическом и современном вариантах использования.',
    tags: ['Redux', 'React', 'JavaScript'],
    link: 'https://www.udemy.com/course/redux-react/?couponCode=3CBD6D31808A51B22EC9',
    stepik: 'https://stepik.org/z/113714',
    poster: RRImg,
  },
  {
    id: 3,
    title: 'TypeScript для разработки',
    subtitle: 'Добавьте строгости коду',
    description: 'От базовых типов до создания серьезных приложений на современном стеке.',
    tags: ['TypeScript', 'Redux', 'React'],
    link: 'https://www.udemy.com/course/modern-typescript/?couponCode=FD60716D3FD44DFCF447',
    stepik: 'https://stepik.org/a/121859',
    poster: TSImg,
  },
  {
    id: 4,
    title: 'Инструменты разработчика',
    subtitle: 'Git, SSH, Webpack и другие',
    description: 'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка, терминал, лайфхаки и многое другое.',
    tags: ['NPM', 'Terminal', 'Git'],
    link: 'https://www.udemy.com/course/webtools/?couponCode=31DC33FB85C42666D3DD',
    stepik: 'https://stepik.org/z/114174',
    poster: WebToolsImg,
  },
  {
    id: 5,
    title: 'Компетенция Верстальщик',
    subtitle: 'С нуля до верстки макетов',
    description: 'Освойте минимально необходимые технологии современной верстки сайтов и начните работать веб-разработчиком в IT сфере!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.udemy.com/course/web-coder/?couponCode=5A169B53667CEEC4DAA0',
    stepik: 'https://stepik.org/z/120081',
    poster: WebCoderImg,
  },
  {
    id: 6,
    title: 'Шаблонизатор Pug (jade)',
    subtitle: 'Ускорь свою верстку в несколько раз',
    description: 'Прокачайте свои навыки HTML-верстки, освоив современный инструмент веб-разработки - шаблонизатор/препроцессор Pug.',
    tags: ['Pug', 'HTML', 'JavaScript'],
    link: 'https://www.udemy.com/course/pugjade-html/?couponCode=EE3D0E1754166EFAE5A3',
    stepik: 'https://stepik.org/z/120077',
    poster: PugImg,
  },
  {
      id: 7,
      title: 'Moodle 3 для администраторов',
      subtitle: 'Своя обучающая платформа',
      description:
          'Получите необходимые навыки для создания собственной обучающей платформы с готовой системой Moodle.',
      tags: ['LMS', 'CMS', 'Moodle'],
      link:
          'https://www.udemy.com/course/moodle3-admin/?couponCode=DD0F3B70AE2183632C8D',
      poster: MoodleImg,
  },
  {
      id: 8,
      title: 'Создание сайтов без программирования',
      subtitle: 'Сайты на WordPress - от простых до сложных',
      description: 'Сделайте сайт себе - визитку, портфолио или небольшой магазин или получите профессию фринсера.',
      tags: ['CMS', 'WordPress'],
      link: 'https://www.udemy.com/course/wordpress-pcgramota/?couponCode=B5FB521D0D1B1D02AC39',
      poster: WPImg,
  },
];

export const bio = `Действующий веб-разработчик и опытный преподаватель. Веду направления по созданию сайтов: от самых основ до профессий веб-мастера, верстальщика и frontend-разработчика.
Много лет работал в НТВ-Плюс, в настоящее время участвую в разработке современных веб-сервисов для автодилеров в Kodix Automotive.`;

export const youtubeList = [
  {
    id: 1,
    title: 'Фундаментальный JS',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdznAXu9WxE5NWfPwp22XWnM7',
    poster: 'https://i.ytimg.com/vi/l7fHH0YA7vY/hqdefault.jpg',
  },
  {
    id: 2,
    title: 'Pro React',
    link:
            'https://www.youtube.com/watch?v=-CdrHAImYfk&list=PLiZoB8JBsdzkClMnvcedplvSF_JPhvopM',
    poster: 'https://i.ytimg.com/vi/-CdrHAImYfk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU1AGKVmC3_Im7Kc3MrZ3N5qAUlA',
  },
  {
    id: 3,
    title: 'Основы TypeScript',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil',
    poster: 'https://i.ytimg.com/vi/G7fNaZwIoiM/hqdefault.jpg',
  },
  {
    id: 4,
    title: 'React + Redux',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdznQv3kAEvTzDP2qjaUI8Vo7',
    poster: 'https://i.ytimg.com/vi/C0fBnil_Im4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLfEnXpIWKO6UO5W2mnwrE3xmISw',
  },
  {
    id: 5,
    title: 'CSS Grid',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzk7yebGLJSgZiGXty6YDPBD',
    poster: 'https://i.ytimg.com/vi/01SzD20gJUU/hqdefault.jpg',
  },
  {
    id: 6,
    title: 'Ramda JS',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzkqsILPvz5jw2-OJ5rw6ukH',
    poster: 'https://i.ytimg.com/vi/XkNynJBruKY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJAvF9H-qLX66F73RTsyFXVY3l7A',
  },
  {
    id: 7,
    title: 'React Router v6',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE',
    poster: 'https://i.ytimg.com/vi/0auS9DNTmzE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBryXqrCbMINMKX0ZceZ8dAu6iMrg',
  },
  {
    id: 8,
    title: 'Анимации в React',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzkn1yqxUaprfLYzdS-1jhJE',
    poster: 'https://i.ytimg.com/vi/_94vYQtaz1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi4hTk2pz5eXKMuyjaxpPaprS3ig',
  },
  {
    id: 9,
    title: 'Инструменты Разработчика',
    link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzlI0lIfk2zsf3F46FUkNaKC',
    poster: 'https://i.ytimg.com/vi/GNuPi_7df4k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcfICEixZubdxraSpAqZpc2VzD7A',
  },
];
