export interface InstructionTranslation {
  p1: string;
  p2: string;
  attention: string;
}

export interface FormItemTranslation {
  roomNum: string;
  numOfPeople: string;
  time: string;
}

export interface ConfirmTranslation {
  title: string;
  message: string;
}

export interface ToastTranslation {
  title: string;
  description: string;
}

export interface ButtonTranslation {
  submit: string;
  save: string;
}

export interface Translations {
  [key: string]: {
    instruction: InstructionTranslation;
    formItem: FormItemTranslation;
    congestion: string;
    confirm: ConfirmTranslation;
    toast: ToastTranslation;
    button: ButtonTranslation;
  };
}
