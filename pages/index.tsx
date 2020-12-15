import AppCpntainer from "@/components/Layout/AppContainer";
import {
  Grid,
  Box,
  Text,
  Container,
  HStack,
  Badge,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  const guilds = [
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
    {
      name: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Rank 1 worldwide guild, we at limit strive to be the best each mythic race and will only recruit the best. If you want to be a part of an experience that could change your life apply at limit.gg",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
    },
  ];

  return (
    <AppCpntainer title="Home">
      <Container maxW="6xl" pt={3}>
        <Text fontSize="6xl" fontWeight="bold">
          Search
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} templateRows="auto">
          {guilds.map((guild, index) => (
            <Box key={index} bg="gray.700" borderRadius={3} overflow="hidden">
              <Box
                display="flex"
                alignItems="baseline"
                justifyContent="space-between"
                mb={3}
                px={4}
                py={3}
              >
                <Text fontWeight="bold" fontSize="2xl">
                  {guild.name}
                </Text>
                <Badge fontSize="xs" fontWeight="bold">
                  {guild.region}
                </Badge>
              </Box>
              <Text as="p" noOfLines={3} mb={4} px={4} py={3}>
                {guild.description}
              </Text>
              <HStack
                spacing={3}
                bg="gray.900"
                px={2}
                py={3}
                display="flex"
                justifyContent="center"
              >
                {guild.interests.map((interest) => (
                  <Badge fontSize="sm" fontWeight="bold" key={interest}>
                    {interest}
                  </Badge>
                ))}
                <Badge fontSize="sm" fontWeight="bold">
                  {guild.faction}
                </Badge>
                {guild.language.map((language) => (
                  <Badge fontSize="sm" fontWeight="bold" key={language}>
                    {language}
                  </Badge>
                ))}
                <Badge fontSize="sm" fontWeight="bold">
                  {guild.discipline}
                </Badge>
              </HStack>
            </Box>
          ))}
        </Grid>
      </Container>
    </AppCpntainer>
  );
}
