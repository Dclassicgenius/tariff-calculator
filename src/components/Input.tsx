import { FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  setTelephone,
  setOperator,
  setIsPhoneNumberValid,
} from "../store/TariffSlice";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

const Input = () => {
  const telephone = useSelector(
    (state: RootState) => state.tariffConfigurator.telephone
  );
  const operator = useSelector(
    (state: RootState) => state.tariffConfigurator.operator
  );

  const isPhoneNumberValid = useSelector(
    (state: RootState) => state.tariffConfigurator.isPhoneNumberValid
  );

  const dispatch = useDispatch();
  const handlePhoneNumberChange = (event: InputMaskChangeEvent) => {
    const phoneNumber = event.target.value ?? "";
    const phoneNumberPattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    dispatch(setIsPhoneNumberValid(phoneNumberPattern.test(phoneNumber)));
    dispatch(setTelephone(phoneNumber));
  };

  const handleOperatorChange = (event: SelectChangeEvent) => {
    dispatch(setOperator(event.target.value));
  };

  return (
    <>
      <div>
        <p className={styles.BlackText}>Телефон</p>
        <InputMask
          className={`${styles.InputMask} ${
            isPhoneNumberValid ? "" : styles.Error
          }`}
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          value={telephone}
          onChange={handlePhoneNumberChange}
        />

        <p
          className={`${styles.Validation} ${
            isPhoneNumberValid ? "" : styles.Error
          } `}
        >
          {!isPhoneNumberValid
            ? "Phone number is not valid"
            : "Обязательное поле"}
        </p>
      </div>
      <div>
        <p className={styles.BlackText}>Оператор</p>
        <FormControl
          size="small"
          sx={{
            my: 1,
            backgroundColor: "#FFF",
            width: "197px",
            "&:hover fieldset": {
              border: "1.5px solid #7A5CFA!important",
              borderRadius: 1,
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "1.5px solid #7A5CFA!important",
            },
          }}
        >
          <Select onChange={handleOperatorChange} value={operator}>
            <MenuItem
              value="Оператор №1"
              sx={{
                color: "#86969C",
                "&.Mui-selected": { backgroundColor: "#7A5CFA" },
                "&:hover": { backgroundColor: "#7A5CFA" },
                "&:focus": { backgroundColor: "#7A5CFA", color: "#FFF" },
              }}
            >
              Оператор №1
            </MenuItem>
            <MenuItem
              value="Оператор №2"
              sx={{
                color: "#86969C",
                "&.Mui-selected": { backgroundColor: "#7A5CFA" },
                "&:hover": { backgroundColor: "#7A5CFA" },
                "&:focus": { backgroundColor: "#7A5CFA", color: "#FFF" },
              }}
            >
              Оператор №2
            </MenuItem>
            <MenuItem
              value="Оператор №3"
              sx={{
                color: "#86969C",
                "&.Mui-selected": { backgroundColor: "#7A5CFA" },
                "&:hover": { backgroundColor: "#7A5CFA" },
                "&:focus": { backgroundColor: "#7A5CFA", color: "#FFF" },
              }}
            >
              Оператор №3
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Input;
