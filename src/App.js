import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/app.style";
import { Button } from "./components/button.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"), 
    [currentTheme]
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>      
    </ThemeProvider>
  );
}

export default App;
