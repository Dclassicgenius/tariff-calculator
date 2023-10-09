import { Stack, Box } from "@mui/material";
import styles from "./Form.module.scss";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSocials, setSocialsCost } from "../store/TariffSlice";

export type Social = {
  name: string;
  value: number;
  on: string;
  off: string;
  clicked: boolean;
};

const Socials = () => {
  const socialsServices = useSelector(
    (state: RootState) => state.tariffConfigurator.socials
  );

  const dispatch = useDispatch();

  const handleSocialClick = (social: Social) => {
    const updatedSocials = socialsServices.map((item) => {
      if (item === social) {
        return {
          ...item,
          clicked: !item.clicked,
        };
      }
      return item;
    });

    const updatedSocialsCost = updatedSocials.reduce((sum, item) => {
      if (item.clicked) {
        return sum + item.value;
      }
      return sum;
    }, 0);

    dispatch(setSocials(updatedSocials));
    dispatch(setSocialsCost(updatedSocialsCost));
  };

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <p className={styles.BlackText}>Соцсети</p>
      <Stack direction="row" spacing={3} sx={{ my: 2 }}>
        {socialsServices.map((social) => (
          <div
            className={`${styles.Socials} ${social.clicked ? styles.On : ""}`}
            key={social.name}
            onClick={() => handleSocialClick(social)}
          >
            <img src={social.on} alt={social.name} width={60} height={60} />
            <span>{social.value} ₽</span>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default Socials;
