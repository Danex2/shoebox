import AppCpntainer from "@/components/Layout/AppContainer";
import {
  Grid,
  Box,
  Text,
  Container,
  HStack,
  Badge,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  const guilds = [
    {
      name: "Dead Meme Dream Team Dead Meme Dream",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
              <Box display="flex" px={5} pt={5} mb={5} alignItems="start">
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  src={guild.guildBanner}
                  alt={`${guild.name}'s guild banner`}
                  mr={5}
                  borderRadius={5}
                />
                <Box display="flex" alignItems="baseline" mb={3} w="full">
                  <Text fontWeight="bold" fontSize="2xl">
                    {guild.name}
                  </Text>
                  <Badge fontSize="sm" fontWeight="bold" ml="auto">
                    {guild.region}
                  </Badge>
                </Box>
              </Box>
              <Text
                as="p"
                noOfLines={3}
                px={5}
                mb={5}
                textAlign="justify"
                fontWeight="semibold"
              >
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
