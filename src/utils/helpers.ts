import DOMPurify from 'dompurify';

export function sanitzedHTML(html: string) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}
