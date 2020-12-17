import { Badge, Box, GridItem, HStack, Image, Text } from "@chakra-ui/react";

type GuildProps = {
  guild: {
    guildName: string;
    guildBanner: string;
    region: string;
    description: string;
    interests: string[];
    language: string[];
    discipline: string;
    faction: string;
    server: string;
  };
};

export default function GuildCard({ guild }: GuildProps) {
  return (
    <>
      <h1>{guild}</h1>
    </>
  );
}
