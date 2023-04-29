import Image from 'next/image';
import styles from './SingleAnnouncement.module.css';
import timeAgo from '../../utils/formatTimeAgoEn';

export default function SingleAnnouncement({ announcement }) {
    return (
        <div className={styles.ann_container}>
            {/* import 0xStim.svg from public */}
            <Image className={styles.pfp} src="/0xstim-nouns.svg" alt="0xStim" width={50} height={50} />
            <div className={styles.ann_text_container}>   
                <div><strong>0xStim</strong> - {timeAgo(announcement[0].attributes.publishedAt)}</div>
                <div>{announcement[0].attributes.message}</div>
            </div>
            {announcement[0].attributes.image.data ? <Image src={announcement[0].attributes.image.data} alt="ann-image" width={350} height={120} /> : null}
        </div>
    );
}