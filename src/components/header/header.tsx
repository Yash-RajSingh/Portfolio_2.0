import { HEADER, PROFILE } from "@/data/siteContent";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Container } from "../shared/sharedElements";
import {
  HeaderBar,
  Brand,
  Logo,
  Actions,
  GithubLink,
  ThemeToggle,
} from "./headerElements";

export function Header() {
  const { resolved, toggle } = useThemeMode();

  return (
    <HeaderBar>
      <Container>
        <Brand href="#">
          <Logo>{HEADER.logo}</Logo>
          {PROFILE.name}
        </Brand>
        <Actions>
          <GithubLink href={HEADER.github.href} target="_blank" rel="noreferrer">
            {HEADER.github.label}
          </GithubLink>
          <ThemeToggle
            onClick={toggle}
            aria-label={HEADER.themeToggleAria}
            title={HEADER.themeToggleAria}
          >
            <span aria-hidden>{HEADER.themeIcon[resolved]}</span>
          </ThemeToggle>
        </Actions>
      </Container>
    </HeaderBar>
  );
}
