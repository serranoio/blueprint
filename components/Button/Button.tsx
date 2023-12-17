interface ButtonProps {
    children: React.ReactNode;
    variant?: "active" | "acrylic" | "acrylic-active" | "outlined" | "disabled" | "error" | "dark";
     }
  
import "./Button.css"

export const Button = ({ variant, children }: ButtonProps) => {


    return <button className="center">
    {children}
    </button>
}