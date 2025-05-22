import Logo from "./Logo";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];
export default function Header() {
  const activePathname = useLocation(); //<== hook

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "hover:text-white relative transition flex items-center",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
            >
              {/* <Link to={route.path}>{route.name}</Link> */}
              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
