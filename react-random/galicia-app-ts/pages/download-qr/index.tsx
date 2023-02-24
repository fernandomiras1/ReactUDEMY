import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Loading,
  Card,
  Grid,
  Text,
  Link,
  Button,
  Image,
  Modal,
  useModal,
  Container,
} from "@nextui-org/react";
import { Layout } from "../../components/layouts";

import {
  generateElementDobleQRCode,
  downloadMultipleQR,
  downloadQRCode,
} from "../../utils/download-qr-code";
import { useForm } from "../../hooks/useForm";

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
};

const formData: formData = {
  xContentQR: 500,
  yContentQR: 950,
  xNameQR: 430,
  yNameQR: 1620,
};

const DownloadQrPage = () => {
  const { setVisible, bindings } = useModal();
  const [base64, setbase64] = useState("");
  const { formState, onInputChange } = useForm(formData);

  const { xContentQR, yContentQR, xNameQR, yNameQR }: any = formState;

  const onDownloadSimpleQR = () => {
    console.log("onDownloadSimpleQR");
    downloadQRCode(dataDownloadQR[0].qr, `${dataDownloadQR[0].qrName}`);
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
      console.log("Imagen", b64);
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
    ).then((b64: any) => {
      console.log("Imagen", b64);
      setbase64(b64);
      // setVisible(true);
    });
  };

  return (
    <Layout title="Delay Page">
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Button color="gradient" onClick={onDownloadSimpleQR}>
            Simple QR download
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" onClick={onDownloadDobleQR}>
            Doble QR download
          </Button>
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
            <Container>
              ContentQR:
              <input
                type="text"
                placeholder="xContentQR"
                name="xContentQR"
                value={xContentQR}
                onChange={onInputChange}
              />
              <input
                type="text"
                placeholder="yContentQR"
                name="yContentQR"
                value={yContentQR}
                onChange={onInputChange}
              />
            </Container>
            <Container>
              NameQR:
              <input
                type="text"
                placeholder="xNameQR"
                name="xNameQR"
                value={xNameQR}
                onChange={onInputChange}
              />
              <input
                type="text"
                placeholder="yNameQR"
                name="yNameQR"
                value={yNameQR}
                onChange={onInputChange}
              />
            </Container>
            <button onClick={onGenerate}>Generate</button>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div id="modal-description">
            <img src={base64} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default DownloadQrPage;
