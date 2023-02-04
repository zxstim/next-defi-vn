export default function formatArticleTimeStampEn(timestamp) {
    const localTimestamp = new Date(timestamp);
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(localTimestamp);
  }