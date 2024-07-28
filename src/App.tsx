import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="goldenrod">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="red">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
