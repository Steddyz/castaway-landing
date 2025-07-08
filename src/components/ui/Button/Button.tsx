import styles from "./Button.module.css";

interface ValueProps {
  value: string;
}

const Button = ({ value }: ValueProps) => {
  return <a className={styles.buttonWrapper}>{value}</a>;
};

export default Button;
