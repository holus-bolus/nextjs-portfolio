import Link from "next/link";
import { useState } from "react";
import NavLink from "@/interfaces/NavLinkProps";
import { usePathname } from "next/navigation";

const Navlink = ({ title, url }: NavLink) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Link
      className={`rounded p-1 ${pathName === url && "bg-black text-white"}`}
      href={url}
    >
      {title}
    </Link>
  );
};

export default Navlink;
