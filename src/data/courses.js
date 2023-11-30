import FrontImg from '../assets/Front.png';
import JSImg from '../assets/js.jpg';
import MoodleImg from '../assets/moodle-course-cover.jpg';
import PugImg from '../assets/pug-course-cover.jpg';
import ReactImg from '../assets/react.png';
import RRImg from '../assets/redux-course.jpg';
import TSImg from '../assets/ts.png';
import WebCoderImg from '../assets/webcoder-course-cover.jpg';
import WebToolsImg from '../assets/webtools-cover-v1.png';

const STEPIK_UTM = '?utm_source=mishanep&utm_medium=link&utm_campaign=directlink';

export const courses = [
  {
    id: 8,
    title: 'Пакет курсов Frontend',
    subtitle: 'Шесть курсов для освоения профессии',
    description:
      'Пройдите путь от основ HTML до создания современных приложений на React и Redux.',
    tags: ['HTML', 'JavaScript', 'React'],
    stepik: 'https://stepik.org/a/180789' + STEPIK_UTM,
    poster: FrontImg,
  },
  {
    id: 0,
    title: 'Фундаментальный JavaScript',
    subtitle: 'С практикой и проектами',
    description:
      'Современный JavaScript с основ до продвинутых техник. Для начинающих и желающих закрыть пробелы.',
    tags: ['JavaScript'],
    link: 'https://www.udemy.com/course/fundamental-javascript/?couponCode=B4E76A80AA7485704976',
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
    link: 'https://www.udemy.com/course/react-from-scratch/?couponCode=630040711CFCA02FF309',
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
    link: 'https://www.udemy.com/course/redux-react/?couponCode=DF96ED09956C7BFCFAFC',
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
    link: 'https://www.udemy.com/course/modern-typescript/?couponCode=FC63B0D1DE69F6193727',
    stepik: 'https://stepik.org/a/121859' + STEPIK_UTM,
    poster: TSImg,
  },
  {
    id: 4,
    title: 'Инструменты разработчика',
    subtitle: 'Git, SSH, Webpack и другие',
    description:
      'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка, терминал, лайфхаки и многое другое.',
    tags: ['NPM', 'Terminal', 'Git'],
    link: 'https://www.udemy.com/course/webtools/?couponCode=C3BC036E9B2A605FCB97',
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
    link: 'https://www.udemy.com/course/web-coder/?couponCode=7AC2184B8CDD7E0B10C7',
    stepik: 'https://stepik.org/a/120081' + STEPIK_UTM,
    poster: WebCoderImg,
  },
  {
    id: 6,
    title: 'Шаблонизатор Pug',
    subtitle: 'Ускорь свою верстку в несколько раз',
    description:
      'Прокачайте свои навыки HTML-верстки, освоив современный инструмент веб-разработки - шаблонизатор/препроцессор Pug.',
    tags: ['Pug', 'HTML', 'JavaScript'],
    link: 'https://www.udemy.com/course/pugjade-html/?couponCode=07075576CD18C3BACE77',
    stepik: 'https://stepik.org/a/120077' + STEPIK_UTM,
    poster: PugImg,
  },
  {
    id: 7,
    title: 'Moodle 3 для администраторов',
    subtitle: 'Обучающая платформа',
    description:
      'Получите необходимые навыки для создания собственной обучающей платформы с готовой системой Moodle.',
    tags: ['LMS', 'CMS', 'Moodle'],
    link: 'https://www.udemy.com/course/moodle3-admin/?couponCode=1A4555DA7A2C39216F1A',
    poster: MoodleImg,
  },
];
