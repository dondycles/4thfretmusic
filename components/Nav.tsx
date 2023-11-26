"use client";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import fflogo from "@/public/4flogo.png";
import Image from "next/image";
import { songs } from "@/data/songs";
import { useTheme } from "@/store";
import { FaLightbulb, FaMoon } from "react-icons/fa";
export default function Nav() {
  const theme = useTheme();
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
        <Button as={Link} href="/" className="font-bold text-xs text-white">
          HOME
        </Button>
        <Dropdown showArrow>
          <DropdownTrigger>
            <Button className="font-bold text-xs text-white">LYRICS</Button>
          </DropdownTrigger>
          <DropdownMenu>
            {songs.map((song) => {
              return (
                <DropdownItem
                  as={Link}
                  href={"/" + song.title.toLowerCase().replace(/\s/g, "")}
                  variant="shadow"
                  color="primary"
                  key={song.title}
                  className="hover:text-white"
                >
                  {song.title}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <Button
          onClick={() => {
            theme.toggleMode(theme.mode === "dark" ? "light" : "dark");
          }}
          className="text-white"
          isIconOnly
        >
          {theme.mode === "light" ? <FaLightbulb /> : <FaMoon />}
        </Button>
      </ButtonGroup>
    </nav>
  );
}
