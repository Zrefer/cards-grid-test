import { ReactNode } from "react";
import styles from "./button.module.scss";
import { clsx } from "clsx";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ icon, children, ...props }) => {
  const className = clsx(styles.button, props.className);
  return (
    <button className={className} {...props}>
      {icon}
      {children}
    </button>
  );
};
