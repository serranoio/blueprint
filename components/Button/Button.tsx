interface ButtonProps {
    children: React.ReactNode;
    variant?: "active" | "acrylic" | "acrylic-active" | "outlined" | "disabled" | "error" | "dark";
    selected?: boolean     
}
  
import "./Button.css"

export const Button = ({ variant, children, selected }: ButtonProps) => {

    return <button className={`center ${selected ? "selected" : ""}`}>
    {children}
    </button>
}