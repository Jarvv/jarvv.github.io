import {
    unity,
    webAR,
    arcade,
    sheffield,
    react,
    next,
    openformat,
    rituals,
    github,
    editor,
} from './assets'

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
    about: `I'm a developer specialising in creating immersive experiences through XR technologies,
        redefining how we interact and play within the world around us. I have a proven track
        record of delivering engaging solutions across various sectors, including brands, sports,
        and cultural institutions.`,
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
            `Setup full CI/CD pipelines for web and Unity projects through both GitHub Actions and Unity Gaming Services using integrated testing frameworks and automated build processes. Improving code quality and deployment efficiency through frequent and reliable app updates.`,
            `Actively mentored junior developers, encouraging participation through code reviews and fostering a culture of continuous improvements and code ownership.`,
            `Led the integration of AR experiences through Unity as a Library for existing client applications, collaborating with external developers implementing plugins for seamless integration.`,
        ],
    },
    {
        title: 'AR Developer',
        company_name: 'ARCADE',
        icon: arcade,
        iconBg: '#c2007f',
        date: 'August 2019 - August 2021',
        points: [
            `Created in-house development tools utilising industry standard design patterns for Unity AR and UI to unify and simplify the development process, enhancing the team's ability for collaboration.`,
            `Published WebAR projects through 8thWall and ZapWorks, combining frontend expertise with Three.js libraries for physics, particles and shaders.`,
            `Embraced continuous learning, rapidly adapting to new technologies and methodologies, crucial for the agency's initial growth and success in shaping the development team.`,
        ],
    },
    {
        title: 'SURE',
        company_name: 'University of Sheffield',
        icon: sheffield,
        iconBg: '#3df4de',
        date: 'June 2018 - September 2018',
        points: [
            `Worked across a multi-departmental team to create various AR/VR that were used in the University's Festival of the Mind exhibition.`,
        ],
    },
]

const projects = [
    {
        name: 'Web 2.9',
        description:
            'Using Web3 technologies through the OpenFormat SDK to authenticate users to a Web 2 backend via their wallet.',
        tags: [
            {
                name: 'reactjs',
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
        description:
            'An example AR furniture app, demonstrating how data binding can be implemented with UI Toolkit.',
        tags: [
            {
                name: 'unity',
                color: 'blue-text-gradient',
            },
            {
                name: 'c_sharp',
                color: 'green-text-gradient',
            },
            {
                name: 'design-patterns',
                color: 'pink-text-gradient',
            },
        ],
        image: editor,
        source_code_link: 'https://github.com/Jarvv/UI-Toolkit-MVVM',
        source_image: github,
    },
    {
        name: 'The Ritual Of Sakura',
        description:
            'A brand activation built in the 8thWall editor for an in-store popup, featuring physics, particles, states and a robust UI <-> AR event system.',
        tags: [
            {
                name: '8thWall',
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
