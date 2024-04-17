import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <span className={`${styles.buttonWrapper} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;