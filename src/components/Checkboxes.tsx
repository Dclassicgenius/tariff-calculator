import { Checkbox, FormControl, FormGroup, Stack } from "@mui/material";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  setAdditionalServices,
  setAdditionalServicesCost,
} from "../store/TariffSlice";

const Checkboxes = () => {
  const additionalServices = useSelector(
    (state: RootState) => state.tariffConfigurator.additionalServices
  );

  const dispatch = useDispatch();

  const handleCheckboxChange = (value: number) => {
    const updatedAdditionalServices = additionalServices.includes(value)
      ? additionalServices.filter((service) => service !== value)
      : [...additionalServices, value];

    const updatedAdditionalServicesCost = updatedAdditionalServices.reduce(
      (sum, service) => sum + service,

      0
    );

    dispatch(setAdditionalServices(updatedAdditionalServices));

    dispatch(setAdditionalServicesCost(updatedAdditionalServicesCost));
  };

  return (
    <>
      <p className={styles.BlackText}>Wi-Fi роутер</p>
      <FormControl sx={{ mt: 3 }}>
        <FormGroup>
          <Stack
            direction="row"
            spacing={1}
            sx={{ m: 1 }}
            alignItems={"center"}
          >
            <Checkbox
              value={99}
              checked={additionalServices.includes(99)}
              onChange={() => handleCheckboxChange(99)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                background: "#FFF",
                padding: "0px",
                borderRadius: "4px",
                color: "transparent",
                "&.Mui-checked": {
                  color: "#7A5CFA",
                },
                mr: 1,
              }}
            />
            <p className={styles.Wifi}>
              Аренда <span>99 </span>₽/мес.
            </p>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ m: 1 }}
            alignItems={"center"}
          >
            <Checkbox
              value={2600}
              checked={additionalServices.includes(2600)}
              onChange={() => handleCheckboxChange(2600)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                background: "#FFF",
                padding: "0px",
                borderRadius: "4px",
                color: "transparent",
                "&.Mui-checked": {
                  color: "#7A5CFA",
                },
                mr: 1,
              }}
            />
            <p className={styles.Wifi}>
              Выкупить <span>2 600 </span>₽
            </p>
          </Stack>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Checkboxes;
