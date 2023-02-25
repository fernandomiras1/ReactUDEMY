import { Grid, Button, Modal } from "@nextui-org/react";
import { FC, useState } from "react";
import { ErrorMessage } from "../../components/ui/ErrorMessage";

import {
  downloadMultipleQR,
  downloadQRCode,
} from "../../utils/download-qr-code";
import { dataDownloadQR } from "../../utils/mock-qr";
import {
  FormDoubleSchema,
  FormQRSchema,
  FormSimpleSchema,
  QRDoubleSchema,
  QRSimpleSchema,
} from "../../types/download-qr-schema";
import { FormSimpleQR } from "../FormSimpleQR";
import { FormDoubleQR } from "../FormDoubleQR";

interface Props {
  bindings: {
    open: boolean;
    onClose: () => void;
  };
  imageBase64: string;
  onModalClose: () => void;
  hasQRSimple: boolean;
}

export const ModalGenerateQR: FC<Props> = ({
  bindings,
  imageBase64,
  hasQRSimple,
  onModalClose,
}) => {
  const [isError, setIsError] = useState(false);
  const [base64, setBase64] = useState(imageBase64);

  const onGenerateSimpleQR = (formState: FormSimpleSchema) => {
    console.log("form formState 123", formState);

    const simpleSchema: QRSimpleSchema = {
      ...formState,
      imageBase64,
    };

    downloadQRCode(
      dataDownloadQR[0].qr,
      `${dataDownloadQR[0].qrName}`,
      simpleSchema,
      false
    )
      .then((b64: any) => {
        setIsError(false);
        setBase64(b64);
        // setVisible(true);
      })
      .catch(() => setIsError(true));
  };

  const onGenerateDoubleQR = (formState: FormDoubleSchema) => {
    console.log("onGenerateDoubleQR -->", formState);

    const doubleSchema: QRDoubleSchema = {
      ...formState,
      imageBase64,
    };

    downloadMultipleQR(dataDownloadQR, doubleSchema, false)
      .then((b64: any) => {
        setIsError(false);
        setBase64(b64);
      })
      .catch(() => setIsError(true));
  };

  return (
    <>
      <Modal
        scroll
        width="900px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          {hasQRSimple ? (
            <FormSimpleQR handleGenerateSubmit={onGenerateSimpleQR} />
          ) : (
            <FormDoubleQR handleGenerateSubmit={onGenerateDoubleQR} />
          )}
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
          <Button auto flat color="error" onPress={onModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
