export interface IFields {
  label: string;
  placeholder: string;
  type: "text" | "number";
}

export interface IFarm {
  farmName: string;
  farmCity: string;
  farmState: string;
}

export interface IAccountProfile {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  farms: IFarm[];
}
