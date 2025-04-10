import FrontImg from '../assets/Front.png';
import JSPackageImg from '../assets/js-react-package.png';
import JSImg from '../assets/js.jpg';
import ReactImg from '../assets/react.png';
import RRImg from '../assets/redux-course.jpg';
import TestingImg from '../assets/testing.png';
import TSImg from '../assets/ts.png';
import WebCoderImg from '../assets/webcoder-course-cover.jpg';
import WebToolsImg from '../assets/webtools-cover-v1.png';

const STEPIK_UTM = '?utm_source=mishanep&utm_medium=link&utm_campaign=directlink';

export const courses = [
  {
    id: 10,
    title: 'Пакет курсов Frontend',
    subtitle: 'Шесть курсов для освоения профессии',
    description:
      'Пройдите путь от основ HTML до создания современных приложений на React и Redux.',
    tags: ['HTML', 'JavaScript', 'React'],
    stepik: 'https://stepik.org/a/180789' + STEPIK_UTM,
    poster: FrontImg,
  },
  {
    id: 9,
    title: 'Пакет курсов JS/React',
    subtitle: '4 курса для фронтенд-разработчика',
    description: 'JavaScript, React, Redux и создание тестов к ним.',
    tags: ['JavaScript', 'React', 'Redux'],
    stepik: 'https://stepik.org/a/204117' + STEPIK_UTM,
    poster: JSPackageImg,
  },
  {
    id: 0,
    title: 'Фундаментальный JavaScript',
    subtitle: 'С практикой и проектами',
    description:
      'Современный JavaScript с основ до продвинутых техник. Для начинающих и желающих закрыть пробелы.',
    tags: ['JavaScript'],
    link: 'https://www.udemy.com/course/fundamental-javascript/?couponCode=9809C41314BB642C1B61',
    stepik: 'https://stepik.org/a/114165' + STEPIK_UTM,
    poster: JSImg,
  },
  {
    id: 1,
    title: 'React для начинающих',
    subtitle: 'Практика и 3 проекта в портфолио',
    description:
      'React 17 от азов до создания полноценного SPA-приложения - с роутингом и продвинутым управлением состоянием.',
    tags: ['React', 'JavaScript', 'SPA'],
    link: 'https://www.udemy.com/course/react-from-scratch/?couponCode=6DD29972339360DC6DE5',
    stepik: 'https://stepik.org/a/114197' + STEPIK_UTM,
    poster: ReactImg,
  },
  {
    id: 2,
    title: 'Redux для управления состоянием',
    subtitle: '+2 проекта на React+Redux',
    description:
      'Освойте принципы работы Redux - на классическом и современном вариантах использования.',
    tags: ['Redux', 'React', 'JavaScript'],
    link: 'https://www.udemy.com/course/redux-react/?couponCode=0ACDA212A89897D4A7F0',
    stepik: 'https://stepik.org/a/113714' + STEPIK_UTM,
    poster: RRImg,
  },
  {
    id: 3,
    title: 'TypeScript для разработки',
    subtitle: 'Добавьте строгости коду',
    description:
      'От базовых типов до создания серьезных приложений на современном стеке.',
    tags: ['TypeScript', 'Redux', 'React'],
    link: 'https://www.udemy.com/course/modern-typescript/?couponCode=227795BA59F47BB8ACE9',
    stepik: 'https://stepik.org/a/121859' + STEPIK_UTM,
    poster: TSImg,
  },
  {
    id: 8,
    title: 'Тестирование JS и React приложений',
    subtitle: 'Для серьезного кода',
    description:
      'Освойте Jest и Testing Library - стандарты на рынке тестовых инструментов. Пишите тесты для своих проектов!',
    tags: ['JavaScript', 'React', 'Jest'],
    link: 'https://www.udemy.com/course/draft/5177956/?couponCode=BC67A3296C117586D4F7',
    poster: TestingImg,
    stepik: 'https://stepik.org/a/200433' + STEPIK_UTM,
  },
  {
    id: 4,
    title: 'Инструменты разработчика',
    subtitle: 'Git, SSH, Webpack и другие',
    description:
      'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка, терминал, лайфхаки и многое другое.',
    tags: ['NPM', 'Terminal', 'Git'],
    link: 'https://www.udemy.com/course/webtools/?couponCode=67C9967EDBB8DBA12E16',
    stepik: 'https://stepik.org/a/114174' + STEPIK_UTM,
    poster: WebToolsImg,
  },
  {
    id: 5,
    title: 'Компетенция Верстальщик',
    subtitle: 'С нуля до верстки макетов',
    description:
      'Освойте минимально необходимые технологии современной верстки сайтов и начните работать веб-разработчиком в IT сфере!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.udemy.com/course/web-coder/?couponCode=D877B104D1243D950C6A',
    stepik: 'https://stepik.org/a/120081' + STEPIK_UTM,
    poster: WebCoderImg,
  },
];
