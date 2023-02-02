import articleOne from "../assets/atricle_1.png";
import articleTwo from "../assets/atricle_2.png";
import articleThree from "../assets/atricle_3.png";
import userOne from "../assets/user_1.png";
import userTwo from "../assets/user_2.png";
import userThree from "../assets/user_3.png";
import userFour from "../assets/user_4.png";

export const links = [
  {
    id: 2,
    type: "articles",
    name: "Article",
  },
  {
    id: 3,
    type: "events",
    name: "Event",
  },
  {
    id: 4,
    type: "educatoins",
    name: "Education",
  },
  {
    id: 5,
    type: "jobs",
    name: "Job",
  },
];

export const posts = [
  {
    id: 1,
    type: "articles",
    img: articleOne,
    userImg: userOne,
    userName: "Sarthak Kamra",
    name: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    info: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    views: "1.4K",
  },
  {
    id: 2,
    type: "educations",
    img: articleTwo,
    userImg: userTwo,
    userName: "Sarah West",
    name: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    info: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    views: "4.8K",
  },
  {
    id: 3,
    type: "events",
    img: articleThree,
    userImg: userThree,
    userName: "Ronal Jones",
    name: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    location: "Ahmedabad, India",
    views: "800",
    button: {
      type: "event",
      text: "Visit Website",
      color: "red",
    },
    info_2: "Fri, 12 Oct, 2018",
  },
  {
    id: 4,
    type: "jobs",
    img: null,
    userImg: userFour,
    userName: "Joseph Gray",
    name: "💼️ Job",
    title: "Software Developer",
    views: "1.7K",
    location: "Noida, India",
    button: {
      type: "job",
      text: "Apply on Timesjobs",
      color: "green",
    },
    info_2: "Innovaccer Analytics Private Ltd.",
  },
];
