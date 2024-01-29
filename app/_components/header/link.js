"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const pathname = usePathname();
  return (
    <li className={pathname == href ? "active" : ""}>
      <Link href={href} className="text-black leading-6">
        {children}
      </Link>
    </li>
  );
}
