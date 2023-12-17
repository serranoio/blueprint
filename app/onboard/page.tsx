import { Background } from "@/components/Misc/Misc";
import Nav from "@/components/Nav/Nav";
import Title from "@/components/Title/Title";
// import styles from "../page.module.css"
import "./page.css"

export default function Index() {

    return <>
    <section className="full-screen">
    <Title>Onboarding</Title>
    <p>
<i>
This web site is provided for educational and informational purposes only and does not constitute providing medical advice or professional services. The information provided should not be used for diagnosing or treating a health problem or disease, and those seeking personal medical advice should consult with a licensed physician
</i>

    </p>
      <Background/>
    </section>
   
    </>
}