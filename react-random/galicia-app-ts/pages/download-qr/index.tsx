import {
  Grid,
  Text,
  Button,
  useModal,
  Textarea,
  Spacer,
} from "@nextui-org/react";
import { Layout } from "../../components/layouts";

import {
  downloadMultipleQR,
  downloadQRCode,
} from "../../utils/download-qr-code";

import { confettiEffect } from "../../utils/canvas-confetti";
import { QR_NAVE_B64 } from "../../utils/qr-code-template";
import { ModalGenerateQR } from "../../components/ModalGenerateQR";
import { useState } from "react";
import { dataDownloadQR } from "../../utils/mock-qr";
import { useForm } from "react-hook-form";
import { FormImagesSchema } from "../../types/download-qr-schema";
import { QR_NAVE_DOUBLE } from "../../utils/qr-code-template-double";

const DownloadQrPage = () => {
  const { setVisible, bindings } = useModal();

  const [hasQRSimple, sethasQRSimple] = useState(true);
  const { register, getValues } = useForm<FormImagesSchema>({
    defaultValues: {
      imageSimpleBase64: QR_NAVE_B64,
      imageDoubleBase64: QR_NAVE_DOUBLE,
    },
  });
  const { imageSimpleBase64, imageDoubleBase64 } = getValues();

  const onDownloadSimpleQR = () => {
    confettiEffect();
    downloadQRCode(dataDownloadQR[0].qr, `${dataDownloadQR[0].qrName}`);
  };

  const onDownloadDoubleQR = () => {
    confettiEffect();
    downloadMultipleQR(dataDownloadQR);
  };

  const onGenerateElementSimpleQR = () => {
    sethasQRSimple(true);
    setVisible(true);
  };

  const onGenerateElementDoubleQR = () => {
    sethasQRSimple(false);
    setVisible(true);
  };

  return (
    <Layout title="Download QR">
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Download QR
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Button color="gradient" onClick={onDownloadSimpleQR}>
            Simple
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" onClick={onDownloadDoubleQR}>
            Double
          </Button>
        </Grid>
      </Grid.Container>

      <Spacer y={0.5} />
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Generate Visualization
      </Text>

      <Grid.Container gap={4} justify="center">
        <Grid xs={6}>
          <Textarea
            fullWidth
            placeholder="Simple QR Image"
            labelPlaceholder="Simple QR Image"
            initialValue={imageSimpleBase64}
            {...register("imageSimpleBase64")}
            status="primary"
            rows={6}
          />
        </Grid>

        <Grid xs={6}>
          <Textarea
            fullWidth
            placeholder="Double QR Image"
            labelPlaceholder="Double QR Image"
            initialValue={imageDoubleBase64}
            {...register("imageDoubleBase64")}
            status="primary"
            rows={6}
          />
        </Grid>
        <Grid>
          <Button color="gradient" onClick={onGenerateElementSimpleQR}>
            Generate Element Simple QR
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" onClick={onGenerateElementDoubleQR}>
            Generate Element Double QR
          </Button>
        </Grid>
      </Grid.Container>

      <ModalGenerateQR
        bindings={bindings}
        imageBase64={hasQRSimple ? imageSimpleBase64 : imageDoubleBase64}
        hasQRSimple={hasQRSimple}
        onModalClose={() => setVisible(false)}
      />
    </Layout>
  );
};

export default DownloadQrPage;
