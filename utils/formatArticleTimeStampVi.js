export default function formatArticleTimeStampVi(timestamp) {
    const localTimestamp = new Date(timestamp);
    return new Intl.DateTimeFormat('vi-VI', { dateStyle: 'medium', timeStyle: 'short' }).format(localTimestamp);
  }