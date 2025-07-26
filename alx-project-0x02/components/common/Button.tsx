import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 p-2 ${styles}`}>
      {title}
    </button>
  );
};
export default Button;
