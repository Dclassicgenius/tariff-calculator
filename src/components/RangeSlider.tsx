import { Box, Slider } from "@mui/material";
import styles from "./Form.module.scss";

type RangeSliderProps = {
  marks: { value: number; label: string }[];
  image: string;
  min: number;
  max: number;
  step: number | null;
  type: string;
  trackColor: string;
  label: "Минуты" | "Интернет" | "Смс";
  value: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
};
const RangeSlider = ({
  marks,
  image,
  min,
  max,
  step,
  type,
  trackColor,
  label,
  value,
  handleChange,
}: RangeSliderProps) => {
  function valuetext(value: number) {
    return `${value} ${type}`;
  }

  return (
    <div>
      <p className={styles.BlackText}>{label}</p>
      <Box sx={{ width: "100%", px: 2, my: 3.5 }}>
        <Slider
          getAriaValueText={valuetext}
          min={min}
          max={max}
          step={step}
          value={value}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleChange}
          sx={{
            "& .MuiSlider-thumb": {
              backgroundImage: `url(${image})`,
              height: 30,
              width: 30,
              backgroundSize: "cover",
            },
            "& .MuiSlider-track": {
              color: `${trackColor}`,
            },
            "& .MuiSlider-rail": {
              color: "#B8C6CF",
            },
            "& .MuiSlider-active": {
              color: "green",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default RangeSlider;
