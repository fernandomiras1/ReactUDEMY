import { NextPage } from "next";
import { Grid } from "@nextui-org/react";

import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <h1>HOLA</h1>
        </Grid>
        <Grid xs={6}>
          <h1>HOLA 2</h1>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default HomePage;
