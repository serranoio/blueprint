interface WidgetProps { 
    children: React.ReactNode
}
import "./Widget.css"

export default function Widget({children}: WidgetProps) {

    return <div className="widget">{children}</div>
}