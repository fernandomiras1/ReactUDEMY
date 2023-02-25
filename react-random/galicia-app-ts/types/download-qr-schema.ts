export type FormSimpleSchema = {
  xContentQR: number;
  yContentQR: number;
  xNameQR: number;
  yNameQR: number;
};

export type FormImagesSchema = {
  imageSimpleBase64: string;
  imageDoubleBase64: string;
};

export type FormDoubleSchema = {
  xContentFirstQR: number;
  yContentFirstQR: number;
  xNameFirstQR: number;
  yNameFirstQR: number;
  xContentSecondQR: number;
  yContentSecondQR: number;
  xNameSecondQR: number;
  yNameSecondQR: number;
};

export type QRSimpleSchema = FormSimpleSchema &
  Readonly<{
    imageBase64: string;
  }>;

export type QRDoubleSchema = FormDoubleSchema &
  Readonly<{
    imageBase64: string;
  }>;

export type FormQRSchema = QRSimpleSchema & QRDoubleSchema;
