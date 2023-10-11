import styles from "./Form.module.scss";
import purpleThumb from "../assets/purpleThumb.svg";
import blackThumb from "../assets/blackThumb.svg";
import RangeSlider from "./RangeSlider";
import { minuteMarks } from "../constants";
import { internetMarks } from "../constants";
import { smsMarks } from "../constants";
import Checkboxes from "./Checkboxes";
import Socials from "./Socials";
import Button from "./Button";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  setInternet,
  setMinutes,
  setSms,
  setTotalCost,
} from "../store/TariffSlice";
import { useEffect } from "react";

const Form = () => {
  const telephone = useSelector(
    (state: RootState) => state.tariffConfigurator.telephone
  );

  const additionalServices = useSelector(
    (state: RootState) => state.tariffConfigurator.additionalServices
  );

  const socialsServices = useSelector(
    (state: RootState) => state.tariffConfigurator.socials
  );

  const operator = useSelector(
    (state: RootState) => state.tariffConfigurator.operator
  );
  const minutes = useSelector(
    (state: RootState) => state.tariffConfigurator.minutes
  );

  const sms = useSelector((state: RootState) => state.tariffConfigurator.sms);

  const internet = useSelector(
    (state: RootState) => state.tariffConfigurator.internet
  );

  const additionalServicesCost = useSelector(
    (state: RootState) => state.tariffConfigurator.additionalServicesCost
  );

  const totalSocialCost = useSelector(
    (state: RootState) => state.tariffConfigurator.socialsCost
  );

  const totalCost = useSelector(
    (state: RootState) => state.tariffConfigurator.totalCost
  );

  const isPhoneNumberValid = useSelector(
    (state: RootState) => state.tariffConfigurator.isPhoneNumberValid
  );

  const dispatch = useDispatch();

  const handleMinutesChange = (event: Event, newValue: number | number[]) => {
    dispatch(setMinutes(newValue as number));
  };

  const handSmsChange = (event: Event, newValue: number | number[]) => {
    dispatch(setSms(newValue as number as number));
  };

  const handleInternetChange = (event: Event, newValue: number | number[]) => {
    dispatch(setInternet(newValue as number as number));
  };

  useEffect(() => {
    let totalCost = 0;

    if (minutes === 100) {
      totalCost += 10;
    } else if (minutes === 200) {
      totalCost += 20;
    } else if (minutes === 300) {
      totalCost += 30;
    } else if (minutes === 600) {
      totalCost += 40;
    }

    totalCost += sms * 0.1;

    totalCost += internet * 5;
    totalCost += additionalServicesCost;

    totalCost += totalSocialCost;

    dispatch(setTotalCost(totalCost));
  }, [
    minutes,
    sms,
    internet,
    additionalServicesCost,
    totalSocialCost,
    dispatch,
  ]);

  const handleSubmit = () => {
    const tariff = {
      minutes,
      sms,
      internet,
      telephone,
      operator,
      additionalServices,
      socialsServices,
      totalCost,
    };

    isPhoneNumberValid && telephone.length > 0
      ? alert(JSON.stringify(tariff))
      : alert("Phone number is not valid");
  };

  return (
    <form className={styles.Form}>
      <h1 className={styles.Heading}>Настройте тариф</h1>

      <Input />

      <RangeSlider
        min={100}
        max={600}
        step={null}
        label="Минуты"
        trackColor="#7A5CFA"
        image={purpleThumb}
        marks={minuteMarks}
        type="мин."
        value={minutes}
        handleChange={handleMinutesChange}
      />
      <RangeSlider
        min={0}
        max={150}
        step={null}
        label="Смс"
        trackColor="#7A5CFA"
        image={purpleThumb}
        marks={smsMarks}
        type=""
        value={sms}
        handleChange={handSmsChange}
      />

      <RangeSlider
        min={5}
        max={25}
        step={null}
        label="Интернет"
        trackColor="#000000"
        image={blackThumb}
        marks={internetMarks}
        type="ГБ"
        value={internet}
        handleChange={handleInternetChange}
      />

      <div>
        <Checkboxes />
      </div>

      <Socials />

      <Button handleClick={handleSubmit} value={totalCost} />
    </form>
  );
};

export default Form;
