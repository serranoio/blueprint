import Image from 'next/image'
import styles from './page.module.css'
import { Background } from '@/components/Misc/Misc'
import Title from '@/components/Title/Title'
import Widget from '@/components/Widget/Widget'

export default function Home() {
  return (
<>
<main className={styles.main}>
<Background/>
   <Title>Blueprint</Title>
    
    <div className={styles['widget-box']}>
      <Widget>
     Widget 1 
      </Widget>
      <Widget>
     Widget 2 
      </Widget>
      <Widget>
     Widget 3 
      </Widget>
      <Widget>
     Widget 4 
      </Widget>
    </div>
    </main>
</>
  )
}
