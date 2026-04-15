import {
    webAR,
    arcade,
    sheffield,
    react,
    learningCentre,
    github,
    editor,
    three,
    readyPlayerMe,
    nodejs,
    oneUp,
    avatar,
    hundred,
    unity,
    editor2,
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
    about: `I'm a software engineer with a background in interactive and real-time applications, now focused on building platforms that deliver AI-driven experiences across web and mobile. Experienced across the stack from React and Three.js frontends to multi-service cloud infrastructure.`,
}

const skills = [
    {
        title: 'Full-Stack Developer',
        icon: nodejs,
    },
    {
        title: 'Frontend Developer',
        icon: react,
    },
    {
        title: 'Unity Developer',
        icon: unity,
    },
    {
        title: '3D Software Engineer',
        icon: three,
    },
]

const experiences = [
    {
        title: 'Senior Software Developer',
        company_name: '1UP Studios',
        icon: oneUp,
        iconBg: '#3df4de',
        date: 'January 2025 - Present',
        headline:
            'Leading the technical shift from creative studio delivery toward a product platform for AI-powered interactive experiences.',
        points: [
            `Led technical direction across client delivery and product development, aligning stakeholders, design and engineering on architecture, scope and implementation.`,
            `Architected a multi-service platform using React, Next.js, NestJS and FastAPI to support shared experiences across web and mobile clients.`,
            `Designed and managed AWS infrastructure and containerised deployments, establishing reliable delivery workflows across product and client work.`,
            `Built and shipped AI platform features, including real-time voice interactions powered by ASR, TTS and LLM services.`,
        ],
    },
    {
        title: '3D Software Engineer',
        company_name: 'Ready Player Me',
        icon: readyPlayerMe,
        iconBg: '#3df4de',
        date: 'August 2024 - January 2025',
        headline:
            'Shipped features across NestJS backend services and web rendering workflows for a cross-platform avatar delivery pipeline.',
        points: [
            `Optimised avatar build pipelines through configurable quality tiers and progressive loading, reducing payload sizes and improving load times across consuming applications.`,
            `Defined API contracts and shared data schemas consumed by multiple client applications, improving consistency in cross-platform data handling.`,
            `Collaborated with artists and engineers to define asset specifications and develop new features, bridging technical and creative workflows.`,
            `Improved performance and memory usage in Three.js and React Three Fiber web applications by resolving resource leaks and implementing more efficient rendering patterns.`,
        ],
    },
    {
        title: 'Senior Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'July 2022 - August 2024',
        headline:
            'Led delivery of web and mobile client projects while driving technical standards and engineering practices across the team.',
        points: [
            `Established CI/CD pipelines, automated testing and build processes, improving release reliability and deployment cadence.`,
            `Mentored junior developers through structured code reviews, improving code quality and building stronger ownership practices.`,
            `Designed and integrated custom RESTful and third-party APIs for native applications, supporting content management and data operations.`,
        ],
    },
    {
        title: 'Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#c2007f',
        date: 'August 2019 - July 2022',
        headline:
            'Built foundational tools and practices for application development during early agency growth, with a focus on tooling, internal processes and client-facing web applications.',
        points: [
            `Developed multiplayer web applications using the MERN stack, including real-time features over WebSockets.`,
            `Built client-facing web experiences in React and Three.js in collaboration with design and development teams.`,
            `Worked across frontend, backend and infrastructure to support project delivery, becoming a generalist across the stack.`,
        ],
    },
    {
        title: 'Undergraduate Researcher',
        company_name: 'University of Sheffield',
        icon: sheffield,
        iconBg: '#3df4de',
        date: 'June 2018 - September 2018',
        headline:
            'Worked across a multi-departmental team to create various AR/VR applications, contributing to research on how immersive technologies can aid cultural regeneration projects.',
        points: [
            `Created AR/VR applications in Unity with interactive features like gameplay mechanics, locomotion systems, and educational hotspots.`,
            `Managed cross-platform deployment processes and optimised rendering settings, ensuring the best performance and fidelity across all target devices and platforms.`,
        ],
    },
]

const projects = [
    {
        name: 'R3F Avatar Builder',
        description: 'An avatar builder example built with Three.js and React Three Fiber.',
        tags: [
            {
                name: 'gLTF',
                color: 'blue-text-gradient',
            },
            {
                name: 'react-three-fiber',
                color: 'green-text-gradient',
            },
            {
                name: 'react',
                color: 'pink-text-gradient',
            },
        ],
        image: avatar,
        source_code_link: 'https://github.com/Jarvv/r3f-avatar-builder',
        source_image: github,
    },
    {
        name: 'Keeper of Paintings: Canvas Quest',
        description:
            'An EdTech activation built for the National Gallery, featuring physics, particles, states and a robust UI <-> AR event system utilising React and Three.js.',
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
                name: 'three.js',
                color: 'pink-text-gradient',
            },
        ],
        image: learningCentre,
        source_code_link:
            'https://www.1upstudios.tech/blog/canvas-quest-launches-at-the-national-gallery',
        source_image: webAR,
    },
    {
        name: 'The Hundred',
        description:
            'A series of AR experiences built in Three.js and Unity, featuring a considered lighting setup for realistic material response, animation controllers for transitions and user playback, and GLSL shaders for enhanced visual effects.',
        tags: [
            {
                name: 'lighting',
                color: 'blue-text-gradient',
            },
            {
                name: 'animation',
                color: 'green-text-gradient',
            },
            {
                name: 'GLSL',
                color: 'pink-text-gradient',
            },
        ],
        image: hundred,
        source_code_link:
            'https://www.skysports.com/the-hundred/news/36890/12371669/the-hundred-play-with-avatars-of-crickets-top-players-with-sky-sports-amazing-ar-technology',
        source_image: webAR,
    },
    {
        name: 'Unity MVVM',
        description:
            'An example AR furniture app, demonstrating how data binding using the Model-View-ViewModel design pattern can be implemented with UI Toolkit.',
        tags: [
            {
                name: 'ui-toolkit',
                color: 'blue-text-gradient',
            },
            {
                name: 'mvvm',
                color: 'green-text-gradient',
            },
            {
                name: 'ar-foundation',
                color: 'pink-text-gradient',
            },
        ],
        image: editor,
        source_code_link: 'https://github.com/Jarvv/UI-Toolkit-MVVM',
        source_image: github,
    },
    {
        name: 'DI MOBA',
        description:
            'Creep & turret system built with VContainer DI, demonstrating Strategy, Factory, Object Pool, and Observer patterns with feature-based architecture, assembly-enforced boundaries, and full unit test coverage.',
        tags: [
            {
                name: 'unity',
                color: 'blue-text-gradient',
            },
            {
                name: 'vcontainer',
                color: 'green-text-gradient',
            },
            {
                name: 'design-patterns',
                color: 'pink-text-gradient',
            },
        ],
        image: editor2,
        source_code_link: 'https://github.com/Jarvv/DI-Moba',
        source_image: github,
    },
]

export { navLinks, hero, skills, experiences, projects }
