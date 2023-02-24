import { Grid, Text, Card, Radio } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  title: string;
  message: string;
}

export const UICard: FC<Props> = ({ title, message }) => {
  return (
    <Card css={{ p: "$6", mw: "400px", textAlign: "center", display: "flex" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {title}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{message}</Text>
      </Card.Body>
    </Card>
  );
};
