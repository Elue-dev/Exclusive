import About from "@/views/about.vue";
import SignUp from "@/views/auth/sign-up.vue";
import Contact from "@/views/contact.vue";
import Home from "@/views/home.vue";

export const ROUTES_DEFINITIONS = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/auth/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];
