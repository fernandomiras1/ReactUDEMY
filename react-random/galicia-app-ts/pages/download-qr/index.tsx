import React, { Fragment, useEffect, useRef } from "react";
import { Loading, Card, Grid, Text, Link, Button } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { useDelay } from "../../hooks/useDelay";
import { UICard } from "../../components/ui";
import {
  downloadMultipleQR,
  downloadQRCode,
} from "../../utils/download-qr-code";

const DownloadQrPage = () => {
  const onDownloadSimpleQR = () => {
    console.log("onDownloadSimpleQR");

    const dataDownloadQR = [
      {
        name: "Sucursal San Justo - QR SJ 1",
        content:
          "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
      },
    ];
    downloadQRCode(dataDownloadQR[0].content, `${dataDownloadQR[0].name}`);
  };

  const onDownloadDobleQR = () => {
    console.log("Descagar Doble QR");
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
    downloadMultipleQR(dataDownloadQR);
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
      </Grid.Container>
      <Card css={{ mw: "400px" }}>
        <Card.Body>
          <Text>A basic card</Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default DownloadQrPage;
