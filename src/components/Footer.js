import lockup from 'public/img/LOCK.png';
import styles from '@/styles/footer.module.css';
import Image from 'next/image';

export default function foot(){
    return(
        <div className={styles.lockup}>
            <Image className={styles.img}
                src={lockup}
                height={300}
                width={300}
                alt='lockup'
            />
        </div>
    )
};