import BEforFE from '../assets/be-for-fe.png';
import WebCoderImg from '../assets/css-course.png';
import FrontImg from '../assets/fe-package-course.png';
import TestingImg from '../assets/jest-course.png';
import JSImg from '../assets/js-course.png';
import MoodleImg from '../assets/moodle-course-cover.jpg';
import ReactImg from '../assets/react-course.png';
import JSPackageImg from '../assets/react-js-package.png';
import RRImg from '../assets/redux-course.png';
import WebToolsImg from '../assets/tools-course.png';
import TSImg from '../assets/ts-course.png';

const STEPIK_UTM = '&utm_source=mishanep&utm_medium=link&utm_campaign=directlink';

export const courses = [
  {
    id: 11,
    title: 'Node.js для фронта',
    subtitle: 'Первый шаг в бэкенд-разработку',
    description:
      'Для тех, кто знаком с фронтендом и хочет сделать первые шаги к бэкенду.',
    tags: ['Node.js', 'JavaScript', 'Express'],
    stepik: 'https://stepik.org/a/233860?' + STEPIK_UTM,
    poster: BEforFE,
  },
  {
    id: 10,
    title: 'Пакет курсов Frontend',
    subtitle: 'Шесть курсов для освоения профессии',
    description:
      'Пройдите путь от основ HTML до создания современных приложений на React и Redux.',
    tags: ['HTML', 'JavaScript', 'React'],
    stepik: 'https://stepik.org/a/180789/pay?promo=ef86527315e76eb2' + STEPIK_UTM,
    poster: FrontImg,
  },
  {
    id: 9,
    title: 'Пакет курсов JS/React',
    subtitle: '4 курса для фронтенд-разработчика',
    description: 'JavaScript, React, Redux и создание тестов к ним.',
    tags: ['JavaScript', 'React', 'Redux'],
    stepik: 'https://stepik.org/a/204117/pay?promo=baca7b8bc3c20e6c' + STEPIK_UTM,
    poster: JSPackageImg,
  },
  {
    id: 0,
    title: 'Фундаментальный JavaScript',
    subtitle: 'С практикой и проектами',
    description:
      'Современный JavaScript с основ до продвинутых техник. Для начинающих и желающих закрыть пробелы.',
    tags: ['JavaScript'],
    link: 'https://www.udemy.com/course/fundamental-javascript/?couponCode=8BC517310C0C7A6CC99C',
    stepik: 'https://stepik.org/a/114165/pay?promo=38372f32d2084180' + STEPIK_UTM,
    poster: JSImg,
  },
  {
    id: 1,
    title: 'React для начинающих',
    subtitle: 'Практика и 3 проекта в портфолио',
    description:
      'React 17 от азов до создания полноценного SPA-приложения - с роутингом и продвинутым управлением состоянием.',
    tags: ['React', 'JavaScript', 'SPA'],
    link: 'https://www.udemy.com/course/react-from-scratch/?couponCode=09EEBB256BA7BE23A830',
    stepik: 'https://stepik.org/a/114197/pay?promo=bddbfaedb8b7f553' + STEPIK_UTM,
    poster: ReactImg,
  },
  {
    id: 2,
    title: 'Redux для управления состоянием',
    subtitle: '+2 проекта на React+Redux',
    description:
      'Освойте принципы работы Redux - на классическом и современном вариантах использования.',
    tags: ['Redux', 'React', 'JavaScript'],
    link: 'https://www.udemy.com/course/redux-react/?couponCode=75C584497ABCD88FE616',
    stepik: 'https://stepik.org/a/113714/pay?promo=211744aa2ef4c1d2' + STEPIK_UTM,
    poster: RRImg,
  },
  {
    id: 3,
    title: 'TypeScript для профессионалов',
    subtitle: 'Добавьте строгости коду',
    description:
      'От базовых типов до создания серьезных приложений на современном стеке.',
    tags: ['TypeScript', 'Redux', 'React'],
    link: 'https://www.udemy.com/course/modern-typescript/?couponCode=696E6F58455E238EB221',
    stepik: 'https://stepik.org/a/121859/pay?promo=8734bcd69b1208a7' + STEPIK_UTM,
    poster: TSImg,
  },
  {
    id: 8,
    title: 'Тестирование JS и React приложений',
    subtitle: 'Для серьезного кода',
    description:
      'Освойте Jest и Testing Library - стандарты на рынке тестовых инструментов. Пишите тесты для своих проектов!',
    tags: ['JavaScript', 'React', 'Jest'],
    link: 'https://www.udemy.com/course/draft/5177956/?couponCode=A8F83C0C0D70C67A97A5',
    poster: TestingImg,
    stepik: 'https://stepik.org/a/200433/pay?promo=5c95f79f9e7cb43c' + STEPIK_UTM,
  },
  {
    id: 4,
    title: 'Инструменты разработчика',
    subtitle: 'Git, SSH, Webpack и другие',
    description:
      'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка, терминал, лайфхаки и многое другое.',
    tags: ['NPM', 'Terminal', 'Git'],
    link: 'https://www.udemy.com/course/webtools/?couponCode=C05F3C8015A253CB9D07',
    stepik: 'https://stepik.org/a/114174/pay?promo=d00ea00cd146a8db' + STEPIK_UTM,
    poster: WebToolsImg,
  },
  {
    id: 5,
    title: 'Компетенция Верстальщик',
    subtitle: 'С нуля до верстки макетов',
    description:
      'Освойте минимально необходимые технологии современной верстки сайтов и начните работать веб-разработчиком в IT сфере!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.udemy.com/course/web-coder/?couponCode=A2190CE50196CF59D84C',
    stepik: 'https://stepik.org/a/120081/pay?promo=3f0293d99c3b90bd' + STEPIK_UTM,
    poster: WebCoderImg,
  },
  {
    id: 7,
    title: 'Moodle 3 для администраторов',
    subtitle: 'Своя обучающая платформа',
    description:
      'Получите необходимые навыки для создания собственной обучающей платформы с готовой системой Moodle.',
    tags: ['LMS', 'CMS', 'Moodle'],
    link: 'https://www.udemy.com/course/moodle3-admin/?couponCode=125AE5E59C7E2AF66854',
    poster: MoodleImg,
  },
];
