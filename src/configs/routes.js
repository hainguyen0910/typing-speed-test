import TypingSpeed from "containers/TypingSpeed";
import TextPractice from "containers/TextPractice";
import Home from "containers/Home";

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Typing speed test",
    path: "/typing-speed-test",
    exact: true,
    component: TypingSpeed,
  },
  {
    name: "Text Practice",
    path: "/text-practice",
    exact: true,
    component: TextPractice,
  },
];
