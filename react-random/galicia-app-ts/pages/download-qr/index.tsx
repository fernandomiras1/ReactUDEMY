import React, { useState } from "react";
import {
  Grid,
  Text,
  Button,
  Input,
  Modal,
  useModal,
  Textarea,
  Spacer,
} from "@nextui-org/react";
import { Layout } from "../../components/layouts";

import {
  generateElementDobleQRCode,
  downloadMultipleQR,
  downloadQRCode,
} from "../../utils/download-qr-code";
import { useForm } from "../../hooks/useForm";
import { confettiEffect } from "../../utils/canvas-confetti";
import { QR_NAVE_B64 } from "../../utils/qr-code-template";
import { ErrorMessage } from "../../components/ui/ErrorMessage";

const dataDownloadQR = [
  {
    qrName: "Sucursal San Justo - QR SJ 1",
    qr: "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
  },
  {
    qrName: "Sucursal San Justo - QR SJ 2",
    qr: "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
  },
];
export type formData = {
  xContentQR: number;
  yContentQR: number;
  xNameQR: number;
  yNameQR: number;
  imgBase64: string;
};

const formData: formData = {
  xContentQR: 500,
  yContentQR: 950,
  xNameQR: 430,
  yNameQR: 1620,
  imgBase64: QR_NAVE_B64,
};

const DownloadQrPage = () => {
  const { setVisible, bindings } = useModal();
  const [base64, setbase64] = useState(formData.imgBase64);
  const [isError, setIsError] = useState(false);
  const { formState, onInputChange } = useForm(formData);

  const { xContentQR, yContentQR, xNameQR, yNameQR, imgBase64 }: any =
    formState;

  const onDownloadSimpleQR = () => {
    console.log("onDownloadSimpleQR");
    confettiEffect();
    // downloadQRCode(dataDownloadQR[0].qr, `${dataDownloadQR[0].qrName}`);
  };

  const onDownloadDobleQR = () => {
    console.log("Descagar Doble QR");
    downloadMultipleQR(dataDownloadQR);
  };

  const onGenerateElementSimpleQR = () => {
    // generateElementSimpleQRCode(
    //   dataDownloadQR[0].qr,
    //   `${dataDownloadQR[0].qrName}`,
    //   formState as formData
    // ).then((b64) => {
    //   console.log("Imagen", b64);
    //   setbase64(b64);
    //   setVisible(true);
    // });
    setVisible(true);
  };

  const onGenerateElementDobleQR = () => {
    generateElementDobleQRCode(dataDownloadQR).then((b64) => {
      setbase64(b64);
      setVisible(true);
    });
  };

  const onGenerate = () => {
    console.log("form formState", formState);
    downloadQRCode(
      dataDownloadQR[0].qr,
      `${dataDownloadQR[0].qrName}`,
      formState as formData,
      false
    )
      .then((b64: any) => {
        setIsError(false);
        setbase64(b64);
        // setVisible(true);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };

  return (
    <Layout title="Delay Page">
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
          <Button color="gradient" onClick={onDownloadDobleQR}>
            Doble
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

      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <Textarea
            fullWidth
            placeholder="Imagen en base64"
            labelPlaceholder="Imagen en base64"
            name="imgBase64"
            initialValue={imgBase64}
            onChange={onInputChange}
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
          <Button color="gradient" onClick={onGenerateElementDobleQR}>
            Generate Element Doble QR
          </Button>
        </Grid>
      </Grid.Container>

      <Modal
        scroll
        width="900px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Grid.Container
              gap={2}
              justify="center"
              style={{ marginTop: "20px" }}
            >
              <Grid xs={2}>
                <Input
                  clearable
                  underlined
                  type="number"
                  labelPlaceholder="Content in X"
                  name="xContentQR"
                  initialValue={xContentQR}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid xs={2}>
                <Input
                  clearable
                  underlined
                  type="number"
                  name="yContentQR"
                  labelPlaceholder="Content in Y"
                  initialValue={yContentQR}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid xs={2}>
                <Input
                  clearable
                  underlined
                  type="number"
                  name="xNameQR"
                  labelPlaceholder="Label in X"
                  initialValue={xNameQR}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid xs={2}>
                <Input
                  clearable
                  underlined
                  type="number"
                  name="yNameQR"
                  labelPlaceholder="Label in Y"
                  initialValue={yNameQR}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid xs={2}>
                <Button shadow color="primary" onClick={onGenerate} size="xs">
                  Generate
                </Button>
              </Grid>
            </Grid.Container>

            {/* <button onClick={onGenerate}>Generate</button> */}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div id="modal-description">
            {isError ? (
              <Grid.Container justify="center">
                <ErrorMessage title={"Error"} message={"Couldn't load image"} />
              </Grid.Container>
            ) : (
              <img src={base64} alt="" />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default DownloadQrPage;
