import { ABOUT } from "@/data/siteContent";
import { Container, Section, SectionTitle } from "../shared/sharedElements";
import { Reveal } from "../shared/reveal";
import { HobbyArt } from "./hobbyArt";
import { Layout, Text, Code, Hobbies, HobbyCard } from "./aboutElements";

export function About() {
  return (
    <Section id={ABOUT.id}>
      <Container>
        <Reveal>
          <Layout>
            <Text>
              <SectionTitle>{ABOUT.title}</SectionTitle>
              <p>{ABOUT.hobbies}</p>
              <Code>{ABOUT.code}</Code>
            </Text>
            <Hobbies>
              {ABOUT.hobbyCards.map((h, i) => (
                <HobbyCard key={h.id} $i={i}>
                  <HobbyArt id={h.id} />
                  <strong>{h.label}</strong>
                  <span>{h.caption}</span>
                </HobbyCard>
              ))}
            </Hobbies>
          </Layout>
        </Reveal>
      </Container>
    </Section>
  );
}
