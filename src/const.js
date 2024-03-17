import {
    unity,
    webAR,
    arcade
} from "./assets"

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const hero = {
  name: "James",
  about: `I'm a developer of all things Spatial. Specialising in crafting immersive, playful experiences that leverage AR/MR/XR technologies through headsets, native apps and the web. Passionate about redefining how we play and interact with the world around us, combining techinical expertise with a creative vision to deliver enaging solutions for brands, sports, heritage and more.`
}

const skills = [
    {
        title: "Unity Developer",
        icon: unity,
    },
    {
        title: "WebAR Developer",
        icon: webAR,
    },
];

const experiences = [
    {
      title: "Senior AR Developer",
      company_name: "ARCADE Ltd",
      icon: arcade,
      iconBg: "#3df4de",
      date: "August 2021 - Current",
      points: [
        "Unity.",
        "Design patterns.",
        "Led the implememtation of CI/CD workflows through GitHub Actions for web and Unity projects, improving deployment efficiency and code quality..",
        "Played a vital role in the integration of external AR frameworks to new and existing native and web apps.",
        "Actively mentored junior developers, encourageing participation through code reviews and fostering a culture of continuous improvements and code ownership.",
      ],
    },
    {
      title: "AR Developer",
      company_name: "ARCADE Ltd",
      icon: arcade,
      iconBg: "#c2007f",
      date: "August 2019 - August 2021",
      points: [
        "Developed a suite of in-house development tools following industry standard designs patterns for emerging Unity AR and UI packages.",
        "Published WebAR projects through a variety of platforms and frameworks, including 8thWall and Zappar. ",
        "Embraced continuous learning, rapidly adapting to new technologies and methodoligies, crucial for the startup's initial growth and success in shaping the development team.",
      ],
    },
  ];

export {navLinks, hero, skills, experiences}