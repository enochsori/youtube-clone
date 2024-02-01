import { format } from 'timeago.js';

export function formatAgo(date: Date, lang = 'en_US') {
  return format(date, lang);
}
