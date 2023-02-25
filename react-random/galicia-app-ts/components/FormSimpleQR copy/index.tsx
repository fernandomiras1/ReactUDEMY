import { FC } from "react";
import { useForm } from "react-hook-form";
import { Grid, Input, Button, Modal } from "@nextui-org/react";

import { FormSimpleSchema } from "../../types/download-qr-schema";
import { formsSimpleInputs } from "../FormSimpleQR/simple-qr-form";

interface Props {
  handleGenerateSubmit: (formState: FormSimpleSchema) => void;
}

export const FormSimpleQR: FC<Props> = ({ handleGenerateSubmit }) => {
  const { register, getValues, handleSubmit } = useForm<FormSimpleSchema>({
    defaultValues: {
      xContentQR: 500,
      yContentQR: 950,
      xNameQR: 430,
      yNameQR: 1620,
    },
  });
  return (
    <form onSubmit={handleSubmit(handleGenerateSubmit)} noValidate>
      <Grid.Container gap={2} justify="center" style={{ marginTop: "20px" }}>
        {formsSimpleInputs.map(({ id, name, label }) => (
          <Grid xs={2}>
            <Input
              key={id}
              clearable
              underlined
              type="number"
              initialValue={`${getValues()[name]}`}
              labelPlaceholder={label}
              {...register(name)}
            />
          </Grid>
        ))}

        <Grid xs={2}>
          <Button shadow color="primary" type="submit" size="xs">
            Generate
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};
