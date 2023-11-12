"use client";
import { Button, ButtonGroup, Link } from "@nextui-org/react";
import fflogo from "@/public/4flogo.png";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className="w-full py-4 md:py-8  px-4 sm:px-16 md:px-32 lg:px-64 flex justify-between border-b-[1px] border-primary/20 z-50 backdrop-blur-sm">
      <Link href="/" color="primary">
        <Image
          alt="4th Fret"
          src={fflogo}
          width={32}
          height={32}
          quality={100}
        />
      </Link>
      <ButtonGroup
        size="sm"
        color="primary"
        variant="shadow"
        radius="full"
        className="gap-[1px]"
      >
        <Button
          as={Link}
          href="#discography"
          className="font-bold text-xs uppercase"
        >
          Discography
        </Button>
        <Button
          as={Link}
          href="#members"
          className="font-bold text-xs uppercase"
        >
          Members
        </Button>
      </ButtonGroup>
    </nav>
  );
}
