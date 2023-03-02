import styles from "@/styles/pokerrun.module.css";
import Image from "next/image";
import img1 from "public/img/DBW-Triggered-Email-Giveaway Assets.png";
import img2 from "public/img/newmapUSE.png";
import redstar from "public/img/redstar1.png";

export default function Pokerrun() {
  return (
    <>
    
            <h1 className={styles.title}>
                Enter to win $500 in the
                Mobil 1 Poker Run*
            </h1>
                <br/>
            <p className={styles.mtext}>
                Courtesy of Advance Auto Parts
            </p>
            <br/>
            <p className={styles.mtext}>
            Winner chosen daily at 4 p.m.
At the Mobil 1 booth at
Destination Daytona
            </p>
            <br/>
            <Image className={styles.img1}
            src={img1}
            width={500}
            height={500}
            alt='pokerchips/cards'
          />    
          <div className={styles.box}>
            <h1>
                3 Easy Steps
            </h1>
            <hr/>
            <section className={styles.cardsection}>
                <h2>1</h2>
                <p>Collect one card from five local advance auto parts stores. <br/><strong>(Store #9957 must be one of the stops)</strong></p>
            </section>
            <section className={styles.cardsection}>
                <h2>2</h2>
                <p>Head to Destination Daytona with your full poker hand.</p>
            </section>
            <section className={styles.cardsection}>
                <h2>3</h2>
                <p>Cross your fingers and hope you win.</p>
            </section>
          </div>
          
          <h1 className={styles.subtitle}>
            Participating Stores
          </h1>
          <hr className={styles.hr}/>
          
          
          <div className={styles.stores}>

            
          <span>
          <section className={styles.italics}>
Mandatory Store Stop
            <Image className={styles.redstar}
            src={redstar}
            width={23}
            height={23}
            alt='redstar'
          />
          </section>
          Store 9957 // Events March 4th and 11th<br/>
</span>
<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/AH8x42BdN3DDYKAn9">
2220 W International Speedway BLVD<br/>
Daytona Beach, FL 32114<br/>
</a>
<br/>
<span>
Store 9204 // Event Monday, March 6th<br/>
</span>
<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/kRBg9NoSpD7Mag2T8">
1714 S Ridgewood Ave<br/>
Edgewater, FL 32132<br/>
<br/></a>
<span>
Store 9409 // Event Tuesday, March 7th<br/>
</span><a target="_blank" rel="noreferrer" href="https://goo.gl/maps/jrUQFJMRy9Db361z8">
615 N Dixie Freeway<br/>
New Smyrna Beach, Fl 32168<br/>
<br/></a>
<span>
Store 9186 // Event Thursday, March 9th
</span>
<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/ZbCZZcth9zJAoaKh6">
1309 Beville Rd<br/>
Daytona Beach, FL 32119<br/>
</a><br/><span>
Store 9187<br/></span>
<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/nbcjetaJPC9gbMnW9">
700 N Ridgewood Ave<br/>
Daytona Beach, FL 32114<br/>
</a><br/>
<span>
Store 9265 // Event Friday, March 10th<br/>
</span><a target="_blank" rel="noreferrer" href="https://goo.gl/maps/E8L3euKvB5LbYyzB8">
1511 Nova Rd<br/>
Holly Hill, FL 32117<br/>
<br/></a>
<span>
Store 9465<br/>
</span><a target="_blank" rel="noreferrer" href="https://goo.gl/maps/7FV5HNKovVsjZXZ27">
52 N Yonge St<br/>
Ormond Beach, FL 32174<br/>
<br/></a><span>
Store 9503<br/>
</span><a target="_blank" rel="noreferrer" href="https://goo.gl/maps/W69CApX8udDzgb2c8">
3759 Nova Rd<br/>
Port Orange, FL 32129
</a>
</div>
<Image className={styles.img2}
            src={img2}
            width={500}
            height={500}
            alt='map'
          />

          <p className={styles.disclaimer}>
            *$500 prize will be awarded in a Teddy Morse{`'`}s Destination Daytona Harley Davidson gift card. No cash value. Winner must visit all five Advance Auto Parts stores and return to this location to be entered to win. Winner must be present in person to redeem. Prizes not redeemed within 48 hours of the winner being notified will be forfeited and an alternate winner will be selected from all remaining eligible entries.
          </p>
    </>
  );
}
