import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeModeContext, type ThemeMode } from "./hooks/useThemeMode";
import { Header } from "@components/header/header";
import { Hero } from "@components/hero/hero";
import { Stats } from "@components/stats/stats";
import { Timeline } from "@components/timeline/timeline";
import { Projects } from "@components/projects/projects";
import { Wins } from "@components/wins/wins";
import { About } from "@components/about/about";
import { Contact } from "@components/contact/contact";
import { PivotPanel } from "@components/pivotPanel/pivotPanel";
import { Container, MobileBlock } from "@components/shared/sharedElements";

const STORAGE_KEY = "portfolio:theme-mode";

const systemDark = matchMedia("(prefers-color-scheme: dark)");

function savedMode(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "auto") return saved;
  } catch {
  }
  return "auto";
}

function App() {
  const [mode, setModeState] = useState<ThemeMode>(savedMode);
  const [osDark, setOsDark] = useState(systemDark.matches);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => setOsDark(e.matches);
    systemDark.addEventListener("change", onChange);
    return () => systemDark.removeEventListener("change", onChange);
  }, []);

  const resolved = mode === "auto" ? (osDark ? "dark" : "light") : mode;

  function setMode(next: ThemeMode) {
    setModeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  }

  const toggle = () => setMode(resolved === "light" ? "dark" : "light");

  return (
    <ThemeModeContext.Provider value={{ mode, resolved, setMode, toggle }}>
      <ThemeProvider theme={resolved === "dark" ? darkTheme : theme}>
        <GlobalStyle />
        <Header />
        <main>
          <Hero />
          <Stats />
          <MobileBlock>
            <Container style={{ paddingTop: "1.5rem" }}>
              <PivotPanel />
            </Container>
          </MobileBlock>
          <Timeline />
          <Projects />
          <Wins />
          <About />
          <Contact />
        </main>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
