import Link from "next/link";
import { Text } from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  name: string;
};

export default function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link href={href}>
      <Text
        as="a"
        fontWeight="semibold"
        fontSize="sm"
        textTransform="uppercase"
        py={2}
        px={3}
        borderRadius={3}
        transition="background 0.2s ease-in-out"
        cursor="pointer"
        _hover={{
          bg: "blue.700",
        }}
      >
        {name}
      </Text>
    </Link>
  );
}
