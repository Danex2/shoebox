import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Stack,
  Checkbox,
  RadioGroup,
  HStack,
  Radio,
  CheckboxGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import MultiSelect from "react-multi-select-component";
import { getSession } from "next-auth/client";
import Option from "@/components/Option";
import { ReactText, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLocale } from "@/lib/getLocale";

export default function Create() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const [serverList, setServerList] = useState(null);
  const [region, setRegion] = useState("US");
  const [selected, setSelected] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

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

  const [clickInputs, setClickInputs] = useState<{
    languages: ReactText[];
    faction: ReactText;
    interests: ReactText[];
  }>({ languages: ["english"], faction: "Horde", interests: ["pve"] });

  const onSubmit = (data) => {
    fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        languages: clickInputs.languages,
        faction: clickInputs.faction,
        interests: clickInputs.interests,
        region,
        days: selected.map((d) => d.value),
      }),
    }).then((response) => {
      if (!response.ok) {
        toast({
          title: "Oh no!",
          description:
            "There was an error creating the post, make sure you do not already have an active post and try again.",
          duration: 4000,
          status: "error",
          isClosable: true,
        });

        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
        }, 4000);
      } else {
        router.push("/");
      }
    });
  };

  return (
    <AppContainer
      title="Create"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <AppContent py={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={10}>
            <FormControl id="title" isRequired>
              <FormLabel>{t.create.guildName}</FormLabel>
              <Input
                type="text"
                maxLength={24}
                autoComplete="off"
                borderColor="gray.700"
                {...register("guildName")}
                name="title"
              />
            </FormControl>
            <Stack direction={{ base: "column", lg: "row" }}>
              <FormControl id="region" isRequired>
                <FormLabel>{t.create.region}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  onChange={(e) => setRegion(e.target.value)}
                  name="region"
                >
                  <Option value="us" name="US" />
                  <Option value="kr" name="KR" />
                  <Option value="eu" name="EU" />
                  <Option value="tw" name="TW" />
                </Select>
              </FormControl>
              <FormControl id="server" isRequired>
                <FormLabel>{t.create.server}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  {...register("server")}
                  name="server"
                >
                  {serverList?.map(({ id, slug, name }) => (
                    <Option key={id} value={slug} name={name} />
                  ))}
                </Select>
              </FormControl>
              <FormControl id="discipline" isRequired>
                <FormLabel>{t.create.discipline}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  {...register("discipline")}
                  name="discipline"
                >
                  <Option value="casual" name="Casual" />
                  <Option value="hardcore" name="Hardcore" />\
                  <Option value="semi-hardcore" name="Semi-hardcore" />
                </Select>
              </FormControl>
            </Stack>
            <Stack direction={{ base: "column", lg: "row" }}>
              <FormControl id="days" isRequired>
                <FormLabel>{t.create.days}</FormLabel>
                <MultiSelect
                  options={[
                    { label: "Monday", value: "monday" },
                    { label: "Tuesday", value: "tuesday" },
                    { label: "Wednesday", value: "wednesday" },
                    { label: "Thursday", value: "thursday" },
                    { label: "Friday", value: "friday" },
                    { label: "Saturday", value: "saturday" },
                    { label: "Sunday", value: "sunday" },
                  ]}
                  value={selected}
                  onChange={setSelected}
                  labelledBy={"Select"}
                />
              </FormControl>
              <FormControl id="time" isRequired>
                <FormLabel>{t.create.time}</FormLabel>
                <Input
                  type="time"
                  borderColor="gray.700"
                  {...register("time")}
                  name="time"
                  style={{ background: "#2D3748" }}
                />
              </FormControl>
              <FormControl id="duration" isRequired>
                <FormLabel>{t.create.duration}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  {...register("duration")}
                  name="duration"
                >
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
            <Textarea
              placeholder={t.create.placeholderText}
              borderColor="gray.700"
              size="sm"
              isRequired
              rows={15}
              {...register("description")}
              name="description"
            />
            <FormControl id="languages" isRequired>
              <FormLabel>{t.create.languages}</FormLabel>
              <CheckboxGroup
                colorScheme="blue"
                defaultValue={["english"]}
                onChange={(e) =>
                  setClickInputs({
                    ...clickInputs,
                    languages: e,
                  })
                }
              >
                <Stack spacing={3} direction={{ base: "column", lg: "row" }}>
                  <Checkbox value="english">English</Checkbox>
                  <Checkbox value="french">French</Checkbox>
                  <Checkbox value="italian">Italian</Checkbox>
                  <Checkbox value="german">German</Checkbox>
                  <Checkbox value="russian">Russian</Checkbox>
                  <Checkbox value="korean">Korean</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl as="fieldset" isRequired id="faction">
              <FormLabel as="legend">{t.create.faction}</FormLabel>
              <RadioGroup
                defaultValue="Horde"
                {...register("faction")}
                name="faction"
                onChange={(e) =>
                  setClickInputs({
                    ...clickInputs,
                    faction: e,
                  })
                }
              >
                <HStack spacing={4}>
                  <Radio value="Horde">Horde</Radio>
                  <Radio value="Alliance">Alliance</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl id="interests" isRequired>
              <FormLabel>{t.create.interests}</FormLabel>
              <CheckboxGroup
                colorScheme="blue"
                defaultValue={["pve"]}
                onChange={(e) =>
                  setClickInputs({
                    ...clickInputs,
                    interests: e,
                  })
                }
              >
                <HStack>
                  <Checkbox value="pve">PvE</Checkbox>
                  <Checkbox value="pvp">PvP</Checkbox>
                  <Checkbox value="rp">RP</Checkbox>
                </HStack>
              </CheckboxGroup>
            </FormControl>
            <Button
              colorScheme="blue"
              isLoading={submitting ? true : false}
              size="2xl"
              w={{ base: "full", lg: 1 / 5 }}
              py={3}
              type="submit"
            >
              {t.create.submitButton}
            </Button>
          </Stack>
        </form>
      </AppContent>
    </AppContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: process.env.REDIRECT_URL,
      },
    };
  }

  return {
    props: {},
  };
};
