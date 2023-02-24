import mergeImages from "merge-images";
import { QR_NAVE_B64 } from "./qr-code-template";
import { QR_NAVE_DOUBLE } from "./qr-code-template-doble";

export function downloadMultipleQR(content: any[]) {
  const firstQR = content[0];
  const secondQR = content[1];
  console.log(firstQR);
  console.log(secondQR);
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
      { src: QR_NAVE_DOUBLE },
      {
        src: `data:image/png;base64,${firstQR.qr}`,
        x: 280,
        y: 450,
      },
      {
        src: `data:image/png;base64,${secondQR.qr}`,
        x: 1520,
        y: 450,
      },
      {
        src: `${imgTextA}`,
        x: 160,
        y: 1120,
      },
      {
        src: `${imgTextB}`,
        x: 1405,
        y: 1120,
      },
    ])
      .then((b64) => {
        let a = document.createElement("a");
        a.href = b64;
        a.download = `${firstQR.qrName} - ${secondQR.qrName}.png`;
        a.click();
        resolve(true);
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

export function downloadQRCode(content: string, qrName: string) {
  return new Promise((resolve, reject) => {
    const c = document.createElement("canvas");
    const base64Canvas = getTextBase64({ c, qrName });

    mergeImages([
      {
        src: QR_NAVE_B64,
      },
      {
        src: `data:image/png;base64,${content}`,
        x: 500,
        y: 950,
      },
      {
        src: `${base64Canvas}`,
        x: 430,
        y: 1620,
      },
    ])
      .then((b64) => {
        let a = document.createElement("a");
        a.href = b64;
        a.download = `${qrName}.png`;
        a.click();
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
