import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ shape, size }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 p-2 ${size}`}>
      {size}
    </button>
  );
};
export default Button;
