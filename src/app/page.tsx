import Image from "next/image";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div className={"h-1/2"}>
        <Image
          src={"/img.png"}
          alt={"The hero image"}
          width={300}
          height={250}
        ></Image>
      </div>
      <div className={"h-1/2"}></div>
    </div>
  );
}
