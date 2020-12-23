import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import en from "../translations/en";
import fr from "../translations/fr";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  const { locale } = router;

  const t = locale === "en" ? en : fr;

  return (
    <AppContainer title="About" mt={20}>
      <AppContent>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
          {t.q1}
        </Text>
        <Text as="p">{t.q1a}</Text>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2} mt={10}>
          {t.q2}
        </Text>
        <Text as="p">{t.q2a}</Text>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2} mt={10}>
          {t.q3}
        </Text>
        <Text as="p">{t.q3a}</Text>
      </AppContent>
    </AppContainer>
  );
}
