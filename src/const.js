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
    about: `I'm a developer specialising in creating immersive experiences through web and AR technologies, with a focus on full-stack development using React, Next.js and Typescript. Proven track record of delivering full-stack solutions across various sectors, including brands, sports, and cultural institutions.`,
}

const skills = [
    {
        title: 'Full Stack Developer',
        icon: next,
    },
    {
        title: 'Frontend Developer',
        icon: react,
    },
    {
        title: 'WebAR Developer',
        icon: webAR,
    },
    {
        title: 'Unity Developer',
        icon: unity,
    },
]

const experiences = [
    {
        title: 'Senior AR Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'August 2021 - Current',
        points: [
            `Enabled CI/CD pipelines through GitHub Actions, reducing time to market for new features by facilitating frequent and reliable updates.`,
            `Actively mentored 3 junior developers, encouraging participation through code reviews and fostering a culture of continuous improvements and code ownership.`,
            `Designed and implemented custom and third-party APIs for native Unity applications, focusing on content management and data operations.`,
            `Led the integration of AR experiences through Unity as a Library for existing native client applications, collaborating with external developers on plugin implementation.`,
        ],
    },
    {
        title: 'AR Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#c2007f',
        date: 'August 2019 - August 2021',
        points: [
            `Developed multiplayer browser games using React and Node.js, featuring real-time functionality with WebSockets and Redis for server-authoritative actions.`,
            `Authored comprehensive documentation for projects and processes, facilitating seamless onboarding of new team members.`,
            `Created in-house development tools in Unity utilising the MVC design pattern for AR and UI to unify the team's development process, enhancing the ability for collaboration between different developer roles.`,
            `Collaborated with design and development teams on WebAR projects for brand activations, using React and Three.js to create engaging user experiences.`,
            `Embraced continuous learning across new technologies and core business strategies, crucial for the agency's initial growth and instrumental in shaping the development team.`,
        ],
    },
    {
        title: 'Undergraduate Researcher',
        company_name: 'University of Sheffield',
        icon: sheffield,
        iconBg: '#3df4de',
        date: 'June 2018 - September 2018',
        points: [
            `Worked across a multi-departmental team to create various AR/VR applications that were used in the University’s Festival of the Mind exhibition.`,
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
        name: 'Next Product Model Viewer',
        description:
            'An ecommerce site built using Next.js, Prisma, Tailwind and Stripe for payments. Allowing users to upload and view 3D models to view in 3D and AR.',
        tags: [
            {
                name: 'supabase',
                color: 'blue-text-gradient',
            },
            {
                name: 'prisma',
                color: 'green-text-gradient',
            },
            {
                name: 'nextjs',
                color: 'pink-text-gradient',
            },
        ],
        image: next,
        source_code_link: 'https://github.com/Jarvv/next-product-viewer',
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
]

export { navLinks, hero, skills, experiences, projects }
