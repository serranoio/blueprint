interface TitleProps {
    children: React.ReactNode
}

import "./Title.css"

export default function Title({children}: TitleProps) {
    

    return    <div className="title-box">

    <h1 className="title">
        {children}
    </h1>
    </div>
}