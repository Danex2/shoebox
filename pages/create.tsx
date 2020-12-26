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
} from "@chakra-ui/react";
import { getSession } from "next-auth/client";
import Option from "@/components/Option";
import { ReactText, useState } from "react";
import { useRouter } from "next/router";
import { getLocale } from "@/lib/getLocale";

export default function Create() {
  const { register, handleSubmit, errors } = useForm();

  const router = useRouter();

  const { locale } = router;

  const t = getLocale(locale);

  const [clickInputs, setClickInputs] = useState<{
    languages: ReactText[];
    faction: ReactText;
    interests: ReactText[];
  }>({ languages: [], faction: "", interests: [] });

  const onSubmit = (data) => {
    console.log({ ...data, ...clickInputs });
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
                ref={register}
                name="title"
              />
            </FormControl>
            <Stack direction={{ base: "column", lg: "row" }}>
              <FormControl id="region" isRequired>
                <FormLabel>{t.create.region}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  ref={register}
                  name="region"
                >
                  <Option value="na" name="NA" />
                  <Option value="kr" name="KR" />
                  <Option value="eu" name="EU" />
                  <Option value="cn" name="CN" />
                </Select>
              </FormControl>
              <FormControl id="server" isRequired>
                <FormLabel>{t.create.server}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  ref={register}
                  name="server"
                >
                  <Option value="illidan" name="Illidan" />
                </Select>
              </FormControl>
              <FormControl id="discipline" isRequired>
                <FormLabel>{t.create.discipline}</FormLabel>
                <Select
                  borderColor="gray.700"
                  bg="gray.700"
                  ref={register}
                  name="discipline"
                >
                  <Option value="casual" name="Casual" />
                  <Option value="hardcore" name="Hardcore" />\
                  <Option value="semi-hardcore" name="Semi-hardcore" />
                </Select>
              </FormControl>
            </Stack>
            <Textarea
              placeholder={t.create.placeholderText}
              borderColor="gray.700"
              size="sm"
              isRequired
              rows={15}
              ref={register}
              name="description"
            />
            <FormControl id="languages">
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
                  <Checkbox value="chinese">Chinese</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl as="fieldset" isRequired id="faction">
              <FormLabel as="legend">{t.create.faction}</FormLabel>
              <RadioGroup
                defaultValue="Horde"
                ref={register}
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
            <FormControl id="interests">
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
              size="2xl"
              w={{ base: "full", lg: 1 / 5 }}
              py={3}
              type="submit"
            >
              Create
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
