import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Social } from "../components/Socials";
import { socials } from "../constants";

interface TariffConfiguratorState {
  telephone: string;
  operator: string;
  minutes: number;
  sms: number;
  internet: number;
  additionalServices: number[];
  additionalServicesCost: number;
  socials: Social[];
  socialsCost: number;
  isPhoneNumberValid: boolean;
  totalCost: number;
}

const initialState: TariffConfiguratorState = {
  telephone: "",
  operator: "Оператор №1",
  minutes: 100,
  sms: 0,
  internet: 5,
  additionalServices: [],
  additionalServicesCost: 0,
  socials: socials,
  socialsCost: 0,
  isPhoneNumberValid: true,
  totalCost: 0,
};

const tariffConfiguratorSlice = createSlice({
  name: "tariffConfigurator",

  initialState,

  reducers: {
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },

    setSms: (state, action: PayloadAction<number>) => {
      state.sms = action.payload;
    },
    setTelephone: (state, action: PayloadAction<string>) => {
      state.telephone = action.payload;
    },

    setOperator: (state, action: PayloadAction<string>) => {
      state.operator = action.payload;
    },

    setInternet: (state, action: PayloadAction<number>) => {
      state.internet = action.payload;
    },

    setAdditionalServices: (state, action: PayloadAction<number[]>) => {
      state.additionalServices = action.payload;
    },

    setAdditionalServicesCost: (state, action: PayloadAction<number>) => {
      state.additionalServicesCost = action.payload;
    },

    setSocials: (state, action: PayloadAction<Social[]>) => {
      state.socials = action.payload;
    },

    setSocialsCost: (state, action: PayloadAction<number>) => {
      state.socialsCost = action.payload;
    },

    setIsPhoneNumberValid: (state, action: PayloadAction<boolean>) => {
      state.isPhoneNumberValid = action.payload;
    },

    setTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
  },
});

export const {
  setMinutes,
  setSms,
  setInternet,
  setAdditionalServices,
  setTelephone,
  setOperator,
  setSocials,
  setTotalCost,
  setAdditionalServicesCost,
  setIsPhoneNumberValid,
  setSocialsCost,
} = tariffConfiguratorSlice.actions;

export default tariffConfiguratorSlice.reducer;
