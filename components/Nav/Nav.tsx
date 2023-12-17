import House from "@/assets/svg/House"
import { Button } from "../Button/Button"
import "./Nav.css"
import Research from "@/assets/svg/Research"
import Student from "@/assets/svg/Student"
import ArrowUp from "@/assets/svg/ArrowUp"
import BatteryCharging from "@/assets/svg/BatteryCharging"

interface ButtonTab {
    name: string,
    icon: JSX.Element,
}
   

export default function Nav() {

const tabs: ButtonTab[] = [{

    name: "Onboard",
    icon: ArrowUp()
    
},
{
    name: "Research",
    icon: Research()
    
},
{
    name: "Home",
    icon: House()
},
{
    name: "Proactivity",
    icon: BatteryCharging()
},
{
    name: "Coach",
    icon: Student()
}]
 

    return <nav>
        {tabs.map((
            tab: ButtonTab,
            i: number
        ) => {
            return <Button key={i}>
                {tab.icon} 
                {tab.name}
            </Button> 
        })}
    </nav>
}