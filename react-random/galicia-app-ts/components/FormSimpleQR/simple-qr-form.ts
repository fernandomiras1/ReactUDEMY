type InputNames = "xContentQR" | "yContentQR" | "xNameQR" | "yNameQR";

type StatusInput =
  | "primary"
  | "success"
  | "default"
  | "secondary"
  | "warning"
  | "error"
  | undefined;

type InputDynamics = {
  id: number;
  name: InputNames;
  label: string;
  status: StatusInput;
};

export const formsSimpleInputs: InputDynamics[] = [
  {
    id: 1,
    name: "xContentQR",
    label: "Content in X",
    status: "primary",
  },
  {
    id: 2,
    name: "yContentQR",
    label: "Content in Y",
    status: "primary",
  },
  {
    id: 3,
    name: "xNameQR",
    label: "Label in X",
    status: "success",
  },
  {
    id: 4,
    name: "yNameQR",
    label: "Label in Y",
    status: "success",
  },
];
