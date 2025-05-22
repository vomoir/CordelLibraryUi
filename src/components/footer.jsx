export default function Footer() {
  const routes = [
    {
      name: "Terms and Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Privacy Policty",
      path: "/privacy-policy",
    },
  ];
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy;VomSoft 2025 All rights reserved</small>
      <nav>
        <ul className="flex gap-x-3 sm:gap-x-8">
          {routes.map((route) => (
            <li
              key={route.path}
              className="text-white/50 hover:text-white transition"
            >
              {/* <Link to={route.path}>{route.name}</Link> */}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
