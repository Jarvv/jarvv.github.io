import { unity, webAR, arcade, sheffield, react, next, openformat, rituals, github } from './assets'

const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const hero = {
    name: 'James',
    about: `I’m a developer specialising in creating immersive experiences through AR/MR/XR technologies, redefining how we interact and play within the world around us. I have a proven track record of delivering engaging solutions across various sectors, including brands, sports, and cultural institutions.`,
}

const skills = [
    {
        title: 'Unity Developer',
        icon: unity,
    },
    {
        title: 'WebAR Developer',
        icon: webAR,
    },
    {
        title: 'Frontend Developer',
        icon: react,
    },
    {
        title: 'Next.js Developer',
        icon: next,
    },
]

const experiences = [
    {
        title: 'Senior AR Developer',
        company_name: 'ARCADE',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'August 2021 - Current',
        points: [
            'Led the implementation of CI/CD workflows for web and Unity projects, improving deployment efficiency and code quality.',
            'Played a vital role in the integration of external AR frameworks to new and existing native and web apps.',
            'Actively mentored junior developers, encouraging participation through code reviews and fostering a culture of continuous improvements and code ownership.',
        ],
    },
    {
        title: 'AR Developer',
        company_name: 'ARCADE',
        icon: arcade,
        iconBg: '#c2007f',
        date: 'August 2019 - August 2021',
        points: [
            'Developed a suite of in-house development tools following industry standard design patterns for emerging Unity AR and UI packages.',
            'Published WebAR projects through a variety of platforms and frameworks, including 8thWall and Zappar.',
            'Embraced continuous learning, rapidly adapting to new technologies and methodologies, crucial for the startup’s initial growth and success in shaping the development team.',
        ],
    },
    {
        title: 'SURE',
        company_name: 'University of Sheffield',
        icon: sheffield,
        iconBg: '#3df4de',
        date: 'June 2018 - September 2018',
        points: [
            'Worked collaboratively across a multi-departmental team to create various AR/VR applications that were used in University of Sheffield’s Festival of the Mind exhibition.',
        ],
    },
]

const projects = [
    {
        name: 'Web 2.9',
        description: '',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'nextjs',
                color: 'green-text-gradient',
            },
            {
                name: 'web3',
                color: 'pink-text-gradient',
            },
        ],
        image: openformat,
        source_code_link: 'https://github.com/Jarvv/next-web2.9',
        source_image: github,
    },
    {
        name: 'Unity MVVM',
        description: '',
        tags: [
            {
                name: 'unity',
                color: 'blue-text-gradient',
            },
            {
                name: 'c#',
                color: 'green-text-gradient',
            },
            {
                name: 'design-patterns',
                color: 'pink-text-gradient',
            },
        ],
        image: openformat,
        source_code_link: 'https://github.com/Jarvv/mvcvm',
        source_image: github,
    },
    {
        name: 'The Ritual Of Sakura',
        description: '',
        tags: [
            {
                name: '8thwall',
                color: 'blue-text-gradient',
            },
            {
                name: 'typescript',
                color: 'green-text-gradient',
            },
            {
                name: 'THREE.js',
                color: 'pink-text-gradient',
            },
        ],
        image: rituals,
        source_code_link: 'https://www.8thwall.com/arcade/theritualofsakura',
        source_image: webAR,
    },
]

export { navLinks, hero, skills, experiences, projects }
