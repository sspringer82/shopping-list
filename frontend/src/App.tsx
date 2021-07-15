import "./App.css";
import { Grid, Card, CardContent } from "@material-ui/core";
import List from "./List";
import Prompt from "./Prompt";

function App() {
  return (
    <>
      <Prompt />
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8} sm={12}>
          <Card>
            <CardContent style={{ padding: 0 }}>
              <List />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </>
  );
}

export default App;
