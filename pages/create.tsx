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

export default function Create() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <AppContainer
      title="Create"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <AppContent py={{ base: 10, lg: 0 }}>
        <form>
          <Stack spacing={10}>
            <FormControl id="title" isRequired>
              <FormLabel>Guild Name</FormLabel>
              <Input
                type="text"
                maxLength={24}
                autoComplete="off"
                borderColor="gray.700"
              />
            </FormControl>
            <Stack direction={{ base: "column", lg: "row" }}>
              <FormControl id="region" isRequired>
                <FormLabel>Region</FormLabel>
                <Select borderColor="gray.700" bg="gray.700">
                  <option style={{ background: "#2D3748" }}>NA</option>
                  <option style={{ background: "#2D3748" }}>KR</option>
                  <option style={{ background: "#2D3748" }}>CN</option>
                  <option style={{ background: "#2D3748" }}>EU</option>
                </Select>
              </FormControl>
              <FormControl id="server" isRequired>
                <FormLabel>Server</FormLabel>
                <Select borderColor="gray.700" bg="gray.700">
                  <option style={{ background: "#2D3748" }}>Illidan</option>
                  <option style={{ background: "#2D3748" }}>Area-52</option>
                  <option style={{ background: "#2D3748" }}>Sargeras</option>
                  <option style={{ background: "#2D3748" }}>Stormscale</option>
                </Select>
              </FormControl>
              <FormControl id="discipline" isRequired>
                <FormLabel>Discipline</FormLabel>
                <Select borderColor="gray.700" bg="gray.700">
                  <option style={{ background: "#2D3748" }}>Hardcore</option>
                  <option style={{ background: "#2D3748" }}>
                    Semi-hardcore
                  </option>
                  <option style={{ background: "#2D3748" }}>Casual</option>
                </Select>
              </FormControl>
            </Stack>
            <Textarea
              placeholder="Tell us a little bit about your guild!"
              borderColor="gray.700"
              size="sm"
              isRequired
              rows={15}
            />
            <FormControl id="languages">
              <FormLabel>Languages Spoken</FormLabel>
              <Stack spacing={3} direction={{ base: "column", lg: "row" }}>
                <Checkbox defaultIsChecked>English</Checkbox>
                <Checkbox>French</Checkbox>
                <Checkbox>Italian</Checkbox>
                <Checkbox>German</Checkbox>
                <Checkbox>Russian</Checkbox>
                <Checkbox>Korean</Checkbox>
                <Checkbox>Chinese</Checkbox>
              </Stack>
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Faction</FormLabel>
              <RadioGroup defaultValue="Horde">
                <HStack spacing={4}>
                  <Radio value="Horde">Horde</Radio>
                  <Radio value="Alliance">Alliance</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl id="interests">
              <FormLabel>Interests</FormLabel>
              <CheckboxGroup colorScheme="blue" defaultValue={["pve"]}>
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
