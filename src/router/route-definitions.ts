import About from "@/views/About.vue";
import SignUp from "@/views/auth/sign-up.vue";
import Contact from "@/views/Contact.vue";
import Home from "@/views/home.vue";

export const ROUTES_DEFINITIONS = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/auth/sign-up",
    name: "sign-up",
    component: SignUp,
  },
];
