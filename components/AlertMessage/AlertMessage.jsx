import styles from "./AlertMessage.module.css";

export default function AlertMessage({ type, headline, message }) {

    function getAlertType() {
        switch (type) {
            case "success":
                return styles.success;
                break;
            case "warning":
                return styles.warning;
                break;
            case "error":
                return styles.error;
                break;
            case "neutral":
                return styles.neutral;
                break;
            default:
                return styles.info;
                break;
        }
    }

    function getHeadlineType() {
        switch (type) {
            case "success":
                return styles.headline_success;
                break;
            case "warning":
                return styles.headline_warning;
                break;
            case "error":
                return styles.headline_error;
                break;
            case "neutral":
                return styles.headline_neutral;
                break;
            default:
                return styles.headline_info;
                break;
        }
    }

    return (
        <div className={getAlertType()}>
            <div className={getHeadlineType()}>{headline}</div>
            <div>{message}</div>
        </div>
    );
}