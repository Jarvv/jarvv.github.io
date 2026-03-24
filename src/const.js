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
    about: `I'm a software engineer with a background in interactive and real-time applications, now focused on building platforms that deliver AI-driven experiences across web and mobile. I'm comfortable across the stack from React and Three.js frontends to multi-service cloud infrastructure.`,
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
        company_name: '1UP Studios / Dwel',
        icon: oneUp,
        iconBg: '#3df4de',
        date: 'January 2025 - Present',
        headline:
            'Leading the technical shift from a creative studio toward Dwel: a platform for building guided interactive experiences powered by contextual AI agents across web and mobile.',
        points: [
            `Technical lead on EdTech learning experiences, built web frontends in React, TypeScript and Three.js on educational campaigns for cultural institutions.`,
            `Drove technical strategy from discovery prototypes through delivery sprints, aligning stakeholders, design and engineering on scope and implementation.`,
            `Architected a client-agnostic platform (Next.js, NestJS, FastAPI) serving both web and mobile clients via shared backend services, enabling a single experience to be delivered across multiple client applications.`,
            `Designed and managed production-grade infrastructure on AWS with containerised deployments and CI/CD via GitHub Actions, establishing a repeatable release pipeline ahead of launch.`,
            `Mentored team members on shipping production-ready AI-enabled features within a broader product architecture.`,
        ],
    },
    {
        title: '3D Software Engineer',
        company_name: 'Ready Player Me',
        icon: readyPlayerMe,
        iconBg: '#3df4de',
        date: 'August 2024 - January 2025',
        headline:
            'As part of the Avatar and Content Tech team, shipped features across NestJS backend services and web rendering workflows, improving cross-platform interoperability and performance.',
        points: [
            `Optimised backend build pipelines by introducing configurable quality tiers and progressive loading strategies, reducing payload sizes and improving perceived load times.`,
            `Defined cross-platform API contracts and data schemas consumed by multiple client applications, ensuring consistent data parsing and rendering behaviour across platforms.`,
            `Worked across disciplines with artists to define specifications for new features, bridging technical and creative workflows.`,
            `Improved performance and resource usage in existing React-based web applications by resolving memory leaks, managing resource disposal, and implementing efficient rendering techniques.`,
        ],
    },
    {
        title: 'Senior Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'July 2022 - August 2024',
        headline:
            'Led delivery of web and mobile projects for agency clients, while driving team growth and technical strategy, mentoring developers and introducing testing and CI/CD practices.',
        points: [
            `Established CI/CD pipelines for GitHub Actions using testing frameworks and automated build processes. Improved code quality and deployment efficiency through frequent and reliable app updates.`,
            `Mentored junior developers, raised engineering standards through code review practices, fostering a culture of code ownership and continuous improvement across the team.`,
            `Led integration of interactive features into existing native client applications, collaborating with external development teams on plugin architecture and implementation.`,
            `Designed and integrated custom RESTful and third-party APIs for native apps, focusing on content management and data operations.`,
            `Developed ML-enhanced application features using OpenCV for real-time feature recognition from large datasets, and integrated ML libraries for interactive, context-aware applications.`,
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
            `Developed multiplayer web applications using the MERN stack, featuring real-time functionality with WebSockets.`,
            `Authored comprehensive documentation for projects and processes, facilitating seamless onboarding of new team members.`,
            `Collaborated with design and development teams on WebAR projects for brand activations, using React and Three.js to create engaging user experiences.`,
            `Ramped up across frontend, backend and infrastructure to support project needs during early agency growth, becoming a generalist across the stack.`,
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
