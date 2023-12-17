'use client'

import House from "@/assets/svg/House"
import { Button } from "../Button/Button"
import "./Nav.css"
import Research from "@/assets/svg/Research"
import Student from "@/assets/svg/Student"
import ArrowUp from "@/assets/svg/ArrowUp"
import BatteryCharging from "@/assets/svg/BatteryCharging"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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

const navigate = (e: any) => {
const button = e.target.closest("button") ? e.target.closest("button") : e.target;
const text = button.innerText === "Home" ? "" : button.innerText;
window.location.href = "/" + text.toLowerCase(); 
}

const [selected, setSelected] = useState(new Array(tabs.length).fill(false));


useEffect(() => {

    setSelected(() => {
        return tabs.map((tab: ButtonTab) => {
            if (tabs.filter((aTab) => window.location.href.includes(aTab.name.toLocaleLowerCase())).length === 0 &&
            tab.name === "Home") {
                return true
            }
            
            return window.location.href.includes(tab.name.toLocaleLowerCase()) 
        })
    })
}, []);

    return <nav onClick={navigate}>
        {tabs.map((
            tab: ButtonTab,
            i: number
        ) => {
return <Button key={i} selected={selected[i]}>
                {tab.icon} 
                {tab.name}
            </Button> 
        })}
    </nav>
}