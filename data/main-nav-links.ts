export interface MainNavLink {
  href: string;
  text: string;
  exact?: boolean;
}

const mainNavLinks: MainNavLink[] = [
  {
    href: "/",
    text: "Home",
    exact: true,
  },
  {
    href: "/about-me",
    text: "About me",
  },
  {
    href: "/curriculum",
    text: "Curriculum",
  },
  {
    href: "/projects",
    text: "Projects",
  },
];

export default mainNavLinks;
