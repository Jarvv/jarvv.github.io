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
    about: `I'm a software engineer with a background in XR and real-time 3D, now focused on building platforms that deliver interactive, AI-driven experiences across web and immersive environments. Comfortable across the stack from Three.js frontends to multi-service cloud infrastructure.`,
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
            `Technical lead on EdTech learning experiences, built web frontends in React, TypeScript and Three.js on educational campaigns for cultural institutions.`,
            `Drove technical strategy from discovery prototypes through delivery sprints, aligning stakeholders, design and engineering on scope and implementation.`,
            `Architected a client-agnostic platform (Next.js, NestJS, FastAPI) serving both web and Unity/XR clients via shared backend services, enabling a single experience to be delivered across multiple client applications.`,
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
            'As part of the Avatar and Content Tech team, delivered new avatar features through backend pipelines and rendering workflows, enabling interoperable avatars across platforms with consistent performance and visual quality.',
        points: [
            `Optimised asset and avatar build pipelines by introducing configurable LODs and adjustable quality configurations, improving actual and perceived load times with reduced file sizes and progressive loading.`,
            `Improved rendering performance and resource usage in legacy React Three Fiber scenes by resolving memory leaks, managing resource disposal, and implementing efficient GPU optimisation techniques.`,
            `Worked in a tech-art capacity with artists to define asset specifications for integrations and develop new avatar features, bridging technical and creative workflows.`,
            `Enabled advanced custom glTF features, including authoring extensions for metadata, shaders and hidden surface removal through gltf-transform.`,
        ],
    },
    {
        title: 'Senior Augmented Reality Developer',
        company_name: 'ARCADE XR',
        icon: arcade,
        iconBg: '#3df4de',
        date: 'August 2021 - August 2024',
        headline:
            'Led delivery of XR projects and cross-platform integrations, for Unity and the web. Driving team growth and technical strategy, mentoring developers, introducing robust testing and CI/CD practices.',
        points: [
            `Enabled CI/CD pipelines for Unity Cloud Build using integrated testing frameworks and automated build processes. Improved code quality and deployment efficiency through frequent and reliable app updates.`,
            `Mentored junior developers, raised engineering standards through code review practices, fostering a culture of code ownership and continuous improvement across the team.`,
            `Led the integration of AR experiences through Unity as a Library for existing native client applications, collaborated with external developers on plugin implementation.`,
            `Developed AI and ML enhanced AR capabilities using OpenCV in Unity for feature-recognition from large archives in real-time and integrated ML libraries for interactive, location-based virtual mirror applications.`,
            `Designed and integrated custom RESTful and third-party APIs for native apps, focusing on content management and data operations.`,
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
            `Created in-house development tools in Unity using design patterns such as MVC and MVVM for AR and UI, unifying the team’s development process and enhancing collaboration among developer roles.`,
            `Authored comprehensive documentation for projects and processes, facilitating seamless onboarding of new team members.`,
            `Collaborated with design and development teams on WebAR projects for brand activations, using React and Three.js to create engaging user experiences.`,
            `Ramped up on Unity, WebXR and backend development to support project needs during early agency growth, becoming a generalist across the stack.`,
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
        source_code_link: 'https://www.8thwall.com/1upstudios/ng-learning-centre',
        source_image: webAR,
    },
    {
        name: 'The Hundred',
        description:
            'A series of WebAR experiences built in Three.js, featuring a considered lighting setup for realistic material response, animation controllers for transitions and user playback, and GLSL shaders for enhanced visual effects.',
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
        source_code_link: 'https://www.8thwall.com/1upstudios/thehundred',
        source_image: webAR,
    },
    {
        name: 'Unity MVVM',
        description:
            'An example AR furniture app, demonstrating how data binding using the Model-View-ViewModel design pattern can be implemented with UI Toolkit.',
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
