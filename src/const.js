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
            `Designed and built platform architecture across Next.js, NestJS and FastAPI services, creating a scalable foundation for product and client delivery.`,
            `Developed and shipped real-time conversational voice AI with multi-user session support.`,
            `Established AWS infrastructure and containerised deployment workflows for the platform, enabling reliable delivery from development through to production.`,
            `Delivered educational projects for cultural institution clients, building web frontends in React, TypeScript and Three.js from prototype through to release.`,
            `Led technical direction across client delivery and product development, aligning stakeholders, design and engineering on architecture, scope and implementation.`,
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
            `Tracked down resource leaks in Three.js and React Three Fiber scenes that were degrading mobile performance over time, reworking disposal and rendering patterns to stabilise memory usage.`,
            `Authored custom glTF extensions using gltf-transform for metadata, shaders and hidden surface removal, solving asset rendering issues the existing pipeline couldn't handle.`,
            `Implemented tiered LODs and progressive loading in the avatar build pipeline, reducing file sizes and cutting load times during asset switching.`,
            `Defined API contracts and shared data schemas across multiple client applications, improving consistency so avatars rendered the same way regardless of platform.`,
            `Partnered with non-engineering stakeholders to turn requirements into workable technical plans for new asset integrations.`,
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
            `Established CI/CD pipelines with automated testing, reducing manual release work and improving delivery reliability.`,
            `Mentored junior developers through structured code reviews, raising code quality and encouraging developers to take ownership of their work.`,
            `Created an internal Unity SDK for AR and UI development, improving consistency across projects and speeding up client delivery.`,
            `Led integration of AR into an existing native client app with addressable asset delivery, allowing new content to ship without requiring a full app release.`,
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
            `Developed multiplayer web applications for client projects using the MERN stack, including real-time features over WebSockets.`,
            `Delivered WebAR experiences for brand activations in React and Three.js, collaborating with design teams on interactive campaigns.`,
            `Authored project and process documentation that improved onboarding and made handovers between developers more efficient.`,
            `Developed a dynamic recognition system for frequently changing content, enabling the application to scale beyond static reference-based approaches.`,
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
            `Developed AR and VR applications in Unity with gameplay mechanics, locomotion systems and educational features for public-facing installations.`,
            `Managed cross-platform deployment and optimised rendering for consistent performance across target devices.`,
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
