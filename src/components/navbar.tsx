import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  return (
    <div
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      }
    >
      <div>
        <Link
          href={"/"}
          className={
            "text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          }
        >
          <span className={"text-white mr-1"}>holus-bolus</span>
          <span
            className={
              "w-12 rounded bg-white text-black flex items-center justify-center"
            }
          >
            .dev
          </span>
        </Link>
      </div>
      <div>
        <button
          className={"w-10 h-8 flex flex-col justify-between z-50 relative"}
        >
          <div className={"w-10 h-1 bg-white rounded"}></div>
          <div className={"w-10 h-1 bg-white rounded"}></div>
          <div className={"w-10 h-1 bg-white rounded"}></div>
        </button>
        <ul className="menu-items absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
          {links.map((link) => (
            <Link key={uuidv4()} href={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
