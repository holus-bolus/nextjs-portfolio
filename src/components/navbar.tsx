import Link from "next/link";

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
    </div>
  );
};

export default Navbar;
