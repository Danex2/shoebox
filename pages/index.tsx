import AppCpntainer from "@/components/Layout/AppContainer";
import {
  Grid,
  Text,
  Checkbox,
  HStack,
  CheckboxGroup,
  FormLabel,
  FormControl,
  Radio,
  Select,
  Input,
  Stack,
  RadioGroup,
  Box,
  Button,
} from "@chakra-ui/react";
import GuildCard from "@/components/GuildCard";
import Option from "@/components/Option";
import MultiSelect from "react-multi-select-component";
import { useEffect, useState } from "react";
import { getLocale } from "@/lib/getLocale";
import { useRouter } from "next/router";

export default function Home() {
  const guilds = [
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
    {
      guildName: "Dead Meme Dream Team",
      interests: ["PvP", "PvE", "RP"],
      time: "19:00",
      duration: "3",
      discipline: "Hardcore",
      faction: "Horde",
      region: "NA",
      languages: ["English", "German"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      server: "Illidan",
    },
  ];

  const [serverList, setServerList] = useState(null);
  const router = useRouter();
  const [region, setRegion] = useState("US");
  const { locale } = router;

  const t = getLocale(locale);

  useEffect(() => {
    fetch("https://us.battle.net/oauth/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_BATTLENET_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_BATTLENET_CLIENT_SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        fetch(
          `https://${region}.api.blizzard.com/data/wow/realm/index?namespace=dynamic-${region}&locale=en_US`,
          {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setServerList(
              data.realms.sort((a, b) => (a.name < b.name ? -1 : 1))
            );
          })
      );
  }, [region]);

  return (
    <AppCpntainer title="Home">
      <Grid
        templateColumns={{ base: "1fr", lg: "min(300px) 1fr" }}
        gap={4}
        maxW="1480px"
        mx="auto"
        px={5}
        pb={10}
      >
        <form>
          <Stack
            spacing={10}
            bg="gray.900"
            px={5}
            py={8}
            borderRadius={5}
            mt={10}
          >
            <Stack direction={{ base: "column" }}>
              <FormControl id="region" isRequired>
                <FormLabel>{t.create.region}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  name="region"
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <Option value="us" name="US" />
                  <Option value="kr" name="KR" />
                  <Option value="eu" name="EU" />
                  <Option value="tw" name="TW" />
                </Select>
              </FormControl>
              <FormControl id="server" isRequired>
                <FormLabel>{t.create.server}</FormLabel>
                <Select borderColor="gray.700" bg="gray.700" name="server">
                  {serverList?.map(({ id, slug, name }) => (
                    <Option key={id} value={slug} name={name} />
                  ))}
                </Select>
              </FormControl>
              <FormControl id="discipline" isRequired>
                <FormLabel>{t.create.discipline}</FormLabel>
                <Select borderColor="gray.700" bg="gray.700" name="discipline">
                  <Option value="casual" name="Casual" />
                  <Option value="hardcore" name="Hardcore" />\
                  <Option value="semi-hardcore" name="Semi-hardcore" />
                </Select>
              </FormControl>
              <FormControl id="time" isRequired>
                <FormLabel>{t.create.time}</FormLabel>
                <Input
                  type="time"
                  borderColor="gray.700"
                  name="time"
                  style={{ background: "#2D3748" }}
                />
              </FormControl>
              <FormControl id="duration" isRequired>
                <FormLabel>{t.create.duration}</FormLabel>
                <Select borderColor="gray.700" bg="gray.700" name="duration">
                  {Array.from({ length: 15 }, (_, i) => (
                    <Option
                      key={i}
                      value={`${i + 1}`}
                      name={`${i + 1} hour (s)`}
                    />
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl id="languages" isRequired>
                <FormLabel>{t.create.languages}</FormLabel>
                <CheckboxGroup colorScheme="blue" defaultValue={["english"]}>
                  <Stack spacing={3} direction={{ base: "column", lg: "row" }}>
                    <Checkbox value="english">English</Checkbox>
                    <Checkbox value="french">French</Checkbox>
                    <Checkbox value="korean">Korean</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>
              <FormControl as="fieldset" isRequired id="faction">
                <FormLabel as="legend">{t.create.faction}</FormLabel>
                <RadioGroup defaultValue="Horde" name="faction">
                  <HStack spacing={4}>
                    <Radio value="Horde">Horde</Radio>
                    <Radio value="Alliance">Alliance</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl id="interests" isRequired>
                <FormLabel>{t.create.interests}</FormLabel>
                <CheckboxGroup colorScheme="blue" defaultValue={["pve"]}>
                  <HStack>
                    <Checkbox value="pve">PvE</Checkbox>
                    <Checkbox value="pvp">PvP</Checkbox>
                    <Checkbox value="rp">RP</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </FormControl>
              <Button colorScheme="blue" size="sm" type="submit">
                Filter
              </Button>
            </Stack>
          </Stack>
        </form>
        <Grid
          templateColumns={{ lg: "1fr", xl: "repeat(2, 1fr)" }}
          gap={4}
          autoRows="min(250px)"
          mt={10}
          pb={{ base: 10, lg: 0 }}
        >
          {guilds.map((guild) => (
            <GuildCard guild={guild} />
          ))}
        </Grid>
      </Grid>
    </AppCpntainer>
  );
}
