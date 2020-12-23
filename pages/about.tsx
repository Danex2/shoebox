import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { Text } from "@chakra-ui/react";

export default function About() {
  return (
    <AppContainer title="About" mt={20}>
      <AppContent>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
          What exactly is warcraftguilds?
        </Text>
        <Text as="p">
          Warcraftguilds is a tool I made in my spare time to make it easier to
          find a guild in world of warcraft. The current systems are okay if you
          just want to jump into a random guild but I wanted to provide ways to
          filter even further to help people find a guild that matches them
          perfectly.
        </Text>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2} mt={10}>
          Can I request X feature?
        </Text>
        <Text as="p">
          I'm not taking feature requests currently because I want to focus on
          making sure the website is usable and accessible to everyone.
        </Text>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2} mt={10}>
          Does this website collect my data?
        </Text>
        <Text as="p">
          Other than using your discord account to log in (the only data that is
          saved are your discord username, the email you used to sign up to
          discord and your discord avatar image) we do not store anything else
          related to your discord account and will never send you emails.
        </Text>
      </AppContent>
    </AppContainer>
  );
}
