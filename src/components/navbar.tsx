"use client";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Navlink from "@/components/navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
  };
  return (
    <div
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
      }
    >
      <div className={"hidden md:flex gap-2 w-1/3"}>
        {links.map(
          (link) =>
            link.url && (
              <Navlink key={link.url} url={link.url} title={link.title} />
            ),
        )}
      </div>
      <div className={"md:hidden lg:flex w-1/3"}>
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
        <Link href={"#"}>
          <Image
            src={"/github.png"}
            alt={"The github icon"}
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className={"md:hidden gap-4 w-1/3"}>
        <button
          className={"w-10 h-8 flex flex-col justify-between z-50 relative"}
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
        </button>
        {open && (
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="menu-items absolute
             top-0 left-0 w-screen h-screen bg-black text-white flex flex-col
             justify-center items-center gap-8 text-4xl z-40"
          >
            {links.map(
              (link) =>
                link.url && (
                  <Link key={uuidv4()} href={link.url}>
                    {link.title}
                  </Link>
                ),
            )}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
