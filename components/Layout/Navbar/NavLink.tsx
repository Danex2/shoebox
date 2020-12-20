import Link from "next/link";
import { Text } from "@chakra-ui/react";

type NavLinkProps = {
  href?: string;
  name?: string;
};

export default function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link href={href}>
      <Text
        as="a"
        fontWeight="semibold"
        fontSize="sm"
        textTransform="uppercase"
        cursor="pointer"
        transition="color 0.5s ease-in-out"
        _hover={{
          color: "gray.400",
        }}
      >
        {name}
      </Text>
    </Link>
  );
}
