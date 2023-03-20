import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Accordion.module.css";

export default function Accordion({ content }) {
	const [isActive, setIsActive] = useState(false);
	const router = useRouter();

	return (
		<div className={styles.accordion}>
			<div className={styles.accordion_item}>
				<div 
					className={styles.accordion_title}
					onClick={() => setIsActive(!isActive)}
				>
					<div>{content.name}</div>
					<div>{isActive ? '-' : '+'}</div>
				</div>
				{
					isActive && 
						<div className={styles.accordion_content}>
							<div>
								{content.description}
							</div>
							<br />
							{router.locale === "en" ? <a href={content.web}>Learn more</a> : <a href={content.web}>Tìm hiểu thêm </a>}
						</div>
				}
			</div>
		</div>
	)
}
