import Form from "@/components/Form";
import styles from "@/styles/index.module.css";

import Image from "next/image";

import chips from 'public/img/pokerchips.png';


export default function Home() {
  return (
    <>
          <Image className={styles.pokerchips}
            src={chips}
            width={500}
            height={500}
            alt='pokerchips'
          />        
          <h1 className={styles.Title}>
            Welcome
          </h1>
          <span className={styles.text}>
              <p>
                Please complete a quick survey for your chance to win limited-edition <strong>Mobil 1™ x Advance Auto Parts 2023 Daytona Bike Week collectibles.</strong>
              </p>
                <br/>
              <p>
              If you are participating in the <strong>Mobil 1 x Advance Auto Parts Poker Run</strong> for your chance at the daily grand prize giveaway, instructions will be sent to the email provided upon completing the survey.
              </p>
          </span>
          
          <a className="btn">
            Lets go!
          </a>
    </>
  );
}
