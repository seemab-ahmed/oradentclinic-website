export function stripHtml(html = '') {
  return html.replace(/<[^>]+>/g, '').trim();
}

export function excerptFromHtml(html = '', max = 160) {
  const text = stripHtml(html);
  return text.length > max ? text.slice(0, max - 3).trim() + '...' : text;
}

export function readingTime(html = '') {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
