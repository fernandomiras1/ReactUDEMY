import { FC } from "react";
import { useForm } from "react-hook-form";
import { Grid, Input, Button } from "@nextui-org/react";

import { FormDoubleSchema } from "../../types/download-qr-schema";

interface Props {
  handleGenerateSubmit: (formState: FormDoubleSchema) => void;
}

export const FormDoubleQR: FC<Props> = ({ handleGenerateSubmit }) => {
  const { register, getValues, handleSubmit } = useForm<FormDoubleSchema>({
    defaultValues: {
      xContentFirstQR: 280,
      yContentFirstQR: 450,
      xNameFirstQR: 160,
      yNameFirstQR: 1120,
      xContentSecondQR: 1520,
      yContentSecondQR: 450,
      xNameSecondQR: 1405,
      yNameSecondQR: 1120,
    },
  });

  const {
    xContentFirstQR,
    yContentFirstQR,
    xNameFirstQR,
    yNameFirstQR,
    xContentSecondQR,
    yContentSecondQR,
    xNameSecondQR,
    yNameSecondQR,
  } = getValues();

  return (
    <form onSubmit={handleSubmit(handleGenerateSubmit)} noValidate>
      <Grid.Container gap={4} justify="center" style={{ marginTop: "20px" }}>
        <Grid xs={3}>
          <Input
            rounded
            status="primary"
            type="number"
            initialValue={String(xContentFirstQR)}
            labelPlaceholder="Content First in X"
            {...register("xContentFirstQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            status="primary"
            type="number"
            initialValue={String(yContentFirstQR)}
            labelPlaceholder="Content First in Y"
            {...register("yContentFirstQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            type="number"
            status="success"
            initialValue={String(xNameFirstQR)}
            labelPlaceholder="Label First in X"
            {...register("xNameFirstQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            type="number"
            status="success"
            initialValue={String(yNameFirstQR)}
            labelPlaceholder="Label First in Y"
            {...register("yNameFirstQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            status="primary"
            type="number"
            initialValue={String(xContentSecondQR)}
            labelPlaceholder="Content Second in X"
            {...register("xContentSecondQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            type="number"
            status="primary"
            initialValue={String(yContentSecondQR)}
            labelPlaceholder="Content Second in Y"
            {...register("yContentSecondQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            type="number"
            status="success"
            initialValue={String(xNameSecondQR)}
            labelPlaceholder="Label Second in X"
            {...register("xNameSecondQR")}
          />
        </Grid>
        <Grid xs={3}>
          <Input
            rounded
            type="number"
            status="success"
            initialValue={String(yNameSecondQR)}
            labelPlaceholder="Label Second in Y"
            {...register("yNameSecondQR")}
          />
        </Grid>

        <Grid xs={2}>
          <Button shadow color="primary" type="submit" size="xs">
            Generate
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};
