import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { getLocale } from "@/lib/getLocale";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  const { locale } = router;

  const t = getLocale(locale);

  return (
    <AppContainer title="About" mt={{ lg: 20 }} py={{ base: 10, lg: 0 }}>
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
