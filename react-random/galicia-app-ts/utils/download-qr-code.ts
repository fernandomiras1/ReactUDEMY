import mergeImages from "merge-images";
import { QRDoubleSchema, QRSimpleSchema } from "../types/download-qr-schema";
import { QR_NAVE_B64 } from "./qr-code-template";
import { QR_NAVE_DOUBLE } from "./qr-code-template-double";

export function downloadMultipleQR(
  content: any[],
  position?: QRDoubleSchema,
  download = true
) {
  const firstQR = content[0];
  const secondQR = content[1];

  return new Promise((resolve, reject) => {
    const imgTextA = getTextBase64({
      c: document.createElement("canvas"),
      qrName: firstQR.qrName,
    });
    const imgTextB = getTextBase64({
      c: document.createElement("canvas"),
      qrName: secondQR.qrName,
    });

    mergeImages([
      { src: position?.imageBase64 || QR_NAVE_DOUBLE },
      {
        src: `data:image/png;base64,${firstQR.qr}`,
        x: position?.xContentFirstQR || 280,
        y: position?.yContentFirstQR || 450,
      },
      {
        src: `data:image/png;base64,${secondQR.qr}`,
        x: position?.xContentSecondQR || 1520,
        y: position?.yContentSecondQR || 450,
      },
      {
        src: `${imgTextA}`,
        x: position?.xNameFirstQR || 160,
        y: position?.yNameFirstQR || 1120,
      },
      {
        src: `${imgTextB}`,
        x: position?.xNameSecondQR || 1405,
        y: position?.yNameSecondQR || 1120,
      },
    ])
      .then((b64) => {
        let a = document.createElement("a");
        a.href = b64;
        if (download) {
          a.download = `${firstQR.qrName} - ${secondQR.qrName}.png`;
          a.click();
          return resolve(true);
        }

        resolve(a);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getTextBase64({ c, width = 850, height = 100, qrName }: any) {
  const ctx = c.getContext("2d");
  c.width = width;
  c.height = height;
  ctx.font = "32px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "black";
  ctx.fillText(qrName, width / 2, 30);
  ctx.textBaseline = "top";
  return c.toDataURL("image/jpeg", 1);
}

export function downloadQRCode(
  content: string,
  qrName: string,
  position?: QRSimpleSchema,
  download = true
) {
  return new Promise((resolve, reject) => {
    const c = document.createElement("canvas");
    const base64Canvas = getTextBase64({ c, qrName });

    mergeImages([
      {
        src: position?.imageBase64 || QR_NAVE_B64,
      },
      {
        src: `data:image/png;base64,${content}`,
        x: position?.xContentQR || 500,
        y: position?.yContentQR || 950,
      },
      {
        src: `${base64Canvas}`,
        x: position?.xNameQR || 430,
        y: position?.yNameQR || 1620,
      },
    ])
      .then((b64) => {
        let a = document.createElement("a");
        a.href = b64;

        if (download) {
          a.download = `${qrName}.png`;
          a.click();
          return resolve(true);
        }

        resolve(a);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
