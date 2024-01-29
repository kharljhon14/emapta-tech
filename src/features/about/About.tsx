import { AboutInfo } from '@/types/about';
import { sanitzedHTML } from '@/utils/helpers';

interface Props {
  about: AboutInfo;
}

export default function About({ about }: Props) {
  return (
    <div
      className="bg-blue-100 rounded-lg shadow-md p-8"
      dangerouslySetInnerHTML={sanitzedHTML(about.data[0].content.page_content)}
    />
  );
}
