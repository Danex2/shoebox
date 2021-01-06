import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type GuildProps = {
  guild: {
    guildName: string;
    region: string;
    time: string;
    duration: string;
    description: string;
    interests: string[];
    languages: string[];
    discipline: string;
    faction: string;
    server: string;
  };
};

export default function GuildCard({ guild }: GuildProps) {
  return (
    <Box
      bg="gray.700"
      borderRadius={5}
      overflow="hidden"
      display="flex"
      flexDir="column"
    >
      <Box py={2} px={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Text as="h2" fontWeight="bold" fontSize="lg">
            {guild.guildName}
          </Text>
          <Text as="p" fontSize="sm" fontWeight="semibold">
            {guild.region}
          </Text>
        </Box>
        <Text isTruncated noOfLines={3} mt={5}>
          {guild.description}
        </Text>
        <Link href="/">
          <Text>Apply</Text>
        </Link>
      </Box>
      <Stack
        bg="gray.900"
        py={3}
        mt="auto"
        px={2}
        fontSize="sm"
        fontWeight="semibold"
        spacing={3}
        direction="row"
      >
        {guild.languages.map((language) => (
          <Badge>{language}</Badge>
        ))}
        <Badge>{guild.faction}</Badge>
        <Badge>{guild.server}</Badge>
        {guild.interests.map((interests) => (
          <Badge>{interests}</Badge>
        ))}
        <Badge>{guild.discipline}</Badge>
      </Stack>
    </Box>
  );
}
