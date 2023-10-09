import styles from "./Form.module.scss";
const Button = ({
  value,
  handleClick,
}: {
  value: number;
  handleClick: () => void;
}) => {
  return (
    <button className={styles.Button} type="submit" onClick={handleClick}>
      <p className={styles.Price}>
        {value} ₽ <span>в месяц</span>
      </p>
    </button>
  );
};

export default Button;
