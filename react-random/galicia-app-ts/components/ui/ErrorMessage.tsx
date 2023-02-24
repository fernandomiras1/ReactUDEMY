import { Grid, Text, Card } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  title: string;
  message: string;
}

export const ErrorMessage: FC<Props> = ({ title, message }) => {
  return (
    <Card
      variant="bordered"
      css={{ p: "$6", mw: "400px", textAlign: "center", display: "flex" }}
    >
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text
              h1
              size={40}
              css={{
                textGradient: "45deg, $red800 -10%, $red600 50%",
              }}
              weight="bold"
            >
              {title}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text color="primary" h4>
          {message}
        </Text>
      </Card.Body>
    </Card>
  );
};
