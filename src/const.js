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
    name: 'James',
    about: `I'm a software engineer with 6+ years of Unity and real-time 3D experience across AR, VR and mobile. Background spanning XR app development, avatar systems, and multi-platform deployment, with strong full-stack skills across web and cloud infrastructure.`,
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
            'Leading the technical shift from a creative studio toward Dwel: a platform for building guided interactive experiences powered by contextual AI agents across web and XR.',
        points: [
            `Architected a client-agnostic platform (Next.js, NestJS, FastAPI) serving both web and Unity/XR clients via shared backend services, enabling a single experience to be delivered across multiple client applications.`,
            `Technical lead on EdTech learning experiences, built web frontends in React, TypeScript and Three.js on educational campaigns for cultural institutions.`,
            `Drove technical strategy from discovery through delivery, leading standups and sprint reviews alongside the project manager, aligning engineering, design and stakeholders on scope and priorities.`,
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
            'As part of the Avatar and Content Tech team, shipped avatar features and pipeline improvements, enabling interoperable avatars across platforms with consistent performance and visual quality.',
        points: [
            `Optimised asset and avatar build pipelines by introducing configurable LODs and adjustable quality configurations, improving actual and perceived load times with reduced file sizes and progressive loading.`,
            `Defined cross-platform API contracts and glTF extension schemas consumed by Unity clients, ensuring consistent avatar rendering and metadata parsing across platforms.`,
            `Improved rendering performance and resource usage in real-time 3D scenes by resolving memory leaks, managing resource disposal, and implementing efficient GPU optimisation techniques.`,
            `Worked in a tech-art capacity with artists to define asset specifications for integrations and develop new avatar features, bridging technical and creative workflows.`,
        ],
    },
    {
        title: 'Senior Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'August 2021 - August 2024',
        headline:
            'Led delivery of XR projects and cross-platform integrations for Unity and the web, targeting iOS and Android across a range of mobile hardware capabilities, while driving team growth and technical strategy.',
        points: [
            `Architected Unity client applications using MVVM patterns with UI Toolkit and dependency injection, collaborating with designers on a shared Figma component set mapped directly to UI Toolkit components.`,
            `Led the integration of AR experiences into native client applications using Unity as a Library, implementing remote asset delivery to enable over-the-air content updates.`,
            `Established CI/CD pipelines using Unity Cloud Build, Unity Gaming Services and GitHub Actions, improving build reliability and deployment cadence across mobile and XR targets.`,
            `Mentored junior developers, raised engineering standards through code review practices, fostering a culture of code ownership and continuous improvement across the team.`,
            `Developed AI and ML enhanced AR capabilities using OpenCV in Unity for real-time feature recognition from large archives, and integrated ML libraries for interactive, location-based applications.`,
        ],
    },
    {
        title: 'Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#c2007f',
        date: 'August 2019 - August 2021',
        headline:
            'Built foundational tools and practices for AR app development during early agency growth, with a focus on tooling and internal processes for efficient project delivery.',
        points: [
            `Built AR applications in Unity using AR Foundation, developing internal tooling and reusable workflows that became the team's standard approach to project delivery.`,
            `Profiled and optimised AR experiences for mobile using Unity Profiler, managing memory usage and GPU performance to maintain stable frame rates across a range of devices.`,
            `Authored project documentation and onboarding guides, enabling the team to scale as the agency grew.`,
            `Ramped up across Unity, XR and full-stack development during early agency growth, becoming a generalist across the stack.`,
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
            `Managed cross-platform deployment processes and optimised rendering settings ensuring best performance and fidelity across all target devices and platforms.`,
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
            'An EdTech activation built for the National Gallery, featuring physics, particles, states and a robust UI <-> AR event system utlising React and Three.js.',
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
