import Image from "next/image";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div className={"h-1/2 lg:h-full lg:2-1/2 relative"}>
        <Image
          src={"/img.png"}
          alt={"The hero image"}
          width={300}
          height={250}
          className={"object-contain"}
        ></Image>
      </div>
      <div
        className={
          "h-1/2 flex flex-col lg:flex-row gap-8 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
        }
      >
        <h1 className={"text-4xl font-bold md:text-6xl"}>
          Crafting Digital experiences, Designing Tomorrow
        </h1>
        <p className="md:text-xl">Welcome to my digital canvas </p>
        <div className={"flex gap-4"}>
          <button
            className={"p-4 rounded-lg ring-1 ring-black bg-black text-white"}
          >
            View my work
          </button>
          <button className={"p-4 rounded-lg ring-1 ring-black"}>
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
