import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Member({ data }: { data: any }) {
  return (
    <div className="relative bg-primary/5 w-screen max-w-[240px] rounded-lg overflow-hidden flex flex-col gap-2 self-stretch">
      <div className="rounded overflow-hidden">
        <Image src={data.img} alt={data.name} quality={100} priority />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full bg-gradient-to-b from-transparent to-primary/90 p-2 gap-2">
        <Chip
          size="lg"
          className="font-agbalumo bg-background/50 text-white text-center text-xl"
          classNames={{ base: "max-w-full" }}
          color="default"
        >
          {data.name}
        </Chip>
        <p className="  bottom-4  z-10 flex flex-wrap gap-1 justify-center text-xs">
          {data.roles.map((role: any) => {
            return (
              <span className=" pr-2  flex items-center gap-1">{role}</span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
