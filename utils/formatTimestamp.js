export default function formatTimeStamp(timestamp) {
    const convertedTimestamp = timestamp.split(" ")[0] + "T" + timestamp.split(" ")[1] + "Z";
    const localTimestamp = new Date(convertedTimestamp);
    return localTimestamp.toLocaleString('sv').replace(' ', ', ');
}