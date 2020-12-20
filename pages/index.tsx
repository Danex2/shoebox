import AppCpntainer from "@/components/Layout/AppContainer";
import { Grid, Text, Container } from "@chakra-ui/react";
import GuildCard from "@/components/GuildCard";

export default function Home() {
  const guilds = [
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
    {
      guildName: "Limit",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Area-52",
    },
    {
      guildName: "Vodkaz",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
    {
      guildName: "Echo",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
    {
      guildName: "Serenity",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
    {
      guildName: "Variance",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
    {
      guildName: "Exorsus",
      interests: ["PvP", "PvE", "RP"],
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      language: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      guildBanner:
        "https://aie-guild.org/wp-content/uploads/2015/02/WoW-Guild-Banner.jpg",
      server: "Illidan",
    },
  ];

  return (
    <AppCpntainer title="Home">
      <Text fontSize="6xl" fontWeight="bold" data-cy="search-text">
        Search
      </Text>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={4}
        templateRows="auto"
      ></Grid>
    </AppCpntainer>
  );
}
