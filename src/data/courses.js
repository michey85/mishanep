import FrontImg from '../assets/Front.png';
import JSImg from '../assets/js.jpg';
import MoodleImg from '../assets/moodle-course-cover.jpg';
import PugImg from '../assets/pug-course-cover.jpg';
import ReactImg from '../assets/react.png';
import RRImg from '../assets/redux-course.jpg';
import TSImg from '../assets/ts.png';
import WebCoderImg from '../assets/webcoder-course-cover.jpg';
import WebToolsImg from '../assets/webtools-cover-v1.png';

export const courses = [
  {
    id: 8,
    title: 'Пакет курсов Frontend',
    subtitle: 'Шесть курсов для освоения профессии',
    description:
      'Пройдите путь от основ HTML до создания современных приложений на React и Redux.',
    tags: ['HTML', 'JavaScript', 'React'],
    stepik:
      'https://stepik.org/a/180789?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: FrontImg,
  },
  {
    id: 0,
    title: 'Фундаментальный JavaScript',
    subtitle: 'С практикой и проектами',
    description:
      'Современный JavaScript с основ до продвинутых техник. Для начинающих и желающих закрыть пробелы.',
    tags: ['JavaScript'],
    link: 'https://www.udemy.com/course/fundamental-javascript/?couponCode=20E322FCF50AD045AA5D',
    stepik:
      'https://stepik.org/a/114165?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: JSImg,
  },
  {
    id: 1,
    title: 'React для начинающих',
    subtitle: 'Практика и 3 проекта в портфолио',
    description:
      'React 17 от азов до создания полноценного SPA-приложения - с роутингом и продвинутым управлением состоянием.',
    tags: ['React', 'JavaScript', 'SPA'],
    link: 'https://www.udemy.com/course/react-from-scratch/?couponCode=03291ACF707DC2689CA9',
    stepik:
      'https://stepik.org/z/114197?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: ReactImg,
  },
  {
    id: 2,
    title: 'Redux для управления состоянием',
    subtitle: '+2 проекта на React+Redux',
    description:
      'Освойте принципы работы Redux - на классическом и современном вариантах использования.',
    tags: ['Redux', 'React', 'JavaScript'],
    link: 'https://www.udemy.com/course/redux-react/?couponCode=474831C17FF7CB90E876',
    stepik:
      'https://stepik.org/z/113714?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: RRImg,
  },
  {
    id: 3,
    title: 'TypeScript для разработки',
    subtitle: 'Добавьте строгости коду',
    description:
      'От базовых типов до создания серьезных приложений на современном стеке.',
    tags: ['TypeScript', 'Redux', 'React'],
    link: 'https://www.udemy.com/course/modern-typescript/?couponCode=F3A5F47F7EA74DE3CFB3',
    stepik:
      'https://stepik.org/a/121859?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: TSImg,
  },
  {
    id: 4,
    title: 'Инструменты разработчика',
    subtitle: 'Git, SSH, Webpack и другие',
    description:
      'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка, терминал, лайфхаки и многое другое.',
    tags: ['NPM', 'Terminal', 'Git'],
    link: 'https://www.udemy.com/course/webtools/?couponCode=C0633EDC4E2EA6EDED90',
    stepik:
      'https://stepik.org/z/114174?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: WebToolsImg,
  },
  {
    id: 5,
    title: 'Компетенция Верстальщик',
    subtitle: 'С нуля до верстки макетов',
    description:
      'Освойте минимально необходимые технологии современной верстки сайтов и начните работать веб-разработчиком в IT сфере!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.udemy.com/course/web-coder/?couponCode=F11C9E9F70A9D3DA9613',
    stepik:
      'https://stepik.org/z/120081?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: WebCoderImg,
  },
  {
    id: 6,
    title: 'Шаблонизатор Pug',
    subtitle: 'Ускорь свою верстку в несколько раз',
    description:
      'Прокачайте свои навыки HTML-верстки, освоив современный инструмент веб-разработки - шаблонизатор/препроцессор Pug.',
    tags: ['Pug', 'HTML', 'JavaScript'],
    link: 'https://www.udemy.com/course/pugjade-html/?couponCode=61E720E3A9CB89A05483',
    stepik:
      'https://stepik.org/z/120077?utm_source=mishanep&utm_medium=link&utm_campaign=directlink',
    poster: PugImg,
  },
  {
    id: 7,
    title: 'Moodle 3 для администраторов',
    subtitle: 'Обучающая платформа',
    description:
      'Получите необходимые навыки для создания собственной обучающей платформы с готовой системой Moodle.',
    tags: ['LMS', 'CMS', 'Moodle'],
    link: 'https://www.udemy.com/course/moodle3-admin/?couponCode=155924F02CE76D6E6544',
    poster: MoodleImg,
  },
];
