import NavLink from "./link";
import Search from "../ui/searchInput";
import Icons from "@/app/_assets/icons";
import navLinks from "@/app/_utils/nav";

export default function Nav() {
  return (
    <div className="container">
      <nav className="pt-10 flex items-center justify-between">
        <h1 className="text-2xl font-inter font-bold leading-6 tracking-[0.72px]">
          Exclusive
        </h1>
        <ul className="inline-flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Search name="search" title="What are you looking for?" />
          <div className="inline-flex items-center gap-4">
            {Icons.ic_favorite}
            {Icons.ic_cart}
          </div>
        </div>
      </nav>
    </div>
  );
}
