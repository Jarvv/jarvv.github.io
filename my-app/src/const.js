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
      company_name: "ARCADE",
      icon: arcade,
      iconBg: "#3df4de",
      date: "August 2021 - Current",
      points: [
        "Unity.",
        "Design patterns.",
        "WebAR.",
        "Code Reviews.",
      ],
    },
    {
      title: "AR Developer",
      company_name: "ARCADE",
      icon: arcade,
      iconBg: "#c2007f",
      date: "August 2019 - August 2021",
      points: [
        "Unity.",
        "Design patterns.",
        "WebAR.",
        "Code Reviews.",
      ],
    },
  ];

export {navLinks, skills, experiences}