import styles from "@/styles/thank-you.module.css";
import Image from "next/image";
import img1 from "public/img/playingcards.png";
import img2 from "public/img/DBW-Bottles.png";
import Link from "next/link";

export default function Thankyou() {
  return (
    <>

<h1 className={styles.title}>
    Thank you!
</h1>
    <br/>
    <div className={styles.text}>
<p>
We appreciate you taking the time to complete our survey. Show this page to a representative at the Mobil 1 booth at Destination Daytona to claim your giveaways. 
</p>
    <br/>
<strong><span>Don’t miss out on your chance to win $500!</span><br/><br/> You’re almost there.</strong>
    <br/><br/>
    </div>
        <Image className={styles.playingcards}
            src={img1}
            width={500}
            height={500}
            alt='playingcards'
          />    

    <Link href="/poker-run" className="btn" id={styles.PRDBTN}>
        POKER RUN DETAILS
    </Link>
    <br/>
    <br/>
<h1 className={styles.title}>
    For the love of savings
</h1>
    <br/>
        <Image className={styles.bottles}
            src={img2}
            width={500}
            height={500}
            alt='bottles'
          />   
          <br/>
<p className={styles.ptext}>
Advance your engine protection with Mobil 1™ advanced synthetic motorcycle oil on sale now. Shop now at your local Advance Auto Parts store, or online at shop.advanceautoparts.com.
</p>
<a className="btn" id={styles.SNBTN} target="_blank" rel="noreferrer" href="https://goo.gl/maps/AH8x42BdN3DDYKAn9">
        Shop now
    </a>
    </>
  );
}
