import ReactImg from '../assets/react.png';
import WebToolsImg from '../assets/webtools-cover-v1.png';
import WebCoderImg from '../assets/webcoder-course-cover.jpg';
import MoodleImg from '../assets/moodle-course-cover.jpg';
import PugImg from '../assets/pug-course-cover.jpg';
import WPImg from '../assets/wordpress-course-cover.jpg';

export const courses = [
    {
        id: 1,
        title: 'React для начинающих',
        subtitle: '+3 проекта в портфолио',
        description:
            'React 17 от азов до создания полноценного SPA-приложения - с роутингом и продвинутым управлением состоянием.',
        tags: ['React', 'JavaScript', 'SPA'],
        link:
            'https://www.udemy.com/course/react-from-scratch/?couponCode=9E62D890B49968E622B2',
        poster: ReactImg,
    },
    {
        id: 2,
        title: 'Инструменты разработчика',
        subtitle: 'Git, SSH, Webpack и другие',
        description:
            'Освойте множество крутых инструментов в одном курсе! Контроль версий, сборка и многое другое.',
        tags: ['NPM', 'Terminal', 'Git'],
        link:
            'https://www.udemy.com/course/webtools/?couponCode=9971F80ECF79B6936A7D',
        poster: WebToolsImg,
    },
    {
        id: 3,
        title: 'Компетенция Верстальщик',
        subtitle: 'С нуля до верстки макетов',
        description:
            'Освойте необходимые технологии современной верстки сайтов и начните работать в сфере веб-разработки!',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link:
            'https://www.udemy.com/course/web-coder/?couponCode=2D7000A7C41D134D63A3',
        poster: WebCoderImg,
    },
    {
        id: 4,
        title: 'Moodle 3 для администраторов',
        subtitle: 'Своя обучающая платформа',
        description:
            'Получите необходимые навыки для создания собственной обучающей платформы с готовой системой Moodle.',
        tags: ['LMS', 'CMS', 'Moodle'],
        link:
            'https://www.udemy.com/course/moodle3-admin/?couponCode=40F132E66CB97BF3E7AE',
        poster: MoodleImg,
    },
    {
        id: 5,
        title: 'Шаблонизатор Pug',
        subtitle: 'Ускорь свою верстку в несколько раз',
        description:
            'Прокачайте свои навыки HTML-верстки, освоив современный инструмент веб-разработки - шаблонизатор/препроцессор Pug.',
        tags: ['Pug', 'HTML', 'JavaScript'],
        link:
            'https://www.udemy.com/course/pugjade-html/?couponCode=B84B40B63FF9B445A0AE',
        poster: PugImg,
    },
    {
        id: 6,
        title: 'Создание сайтов без программирования',
        subtitle: 'Сайты на WordPress - от простых до сложных',
        description:
            'Сделайте сайт себе - визитку, портфолио или небольшой магазин или получите профессию фринсера.',
        tags: ['CMS', 'WordPress'],
        link:
            'https://www.udemy.com/course/wordpress-pcgramota/?couponCode=A6C7A0E1E04697212D7C',
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
        title: 'Основы TypeScript',
        link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil',
        poster: 'https://i.ytimg.com/vi/G7fNaZwIoiM/hqdefault.jpg',
    },
    {
        id: 3,
        title: 'CSS Grid',
        link:
            'https://www.youtube.com/playlist?list=PLiZoB8JBsdzk7yebGLJSgZiGXty6YDPBD',
        poster: 'https://i.ytimg.com/vi/01SzD20gJUU/hqdefault.jpg',
    },
];
