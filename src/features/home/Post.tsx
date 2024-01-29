import { PostInfo } from '@/types/post';
import { sanitzedHTML } from '@/utils/helpers';
import DOMPurify from 'dompurify';

interface Props {
  post: PostInfo;
}

export default function Post({ post }: Props) {
  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-md">
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={sanitzedHTML(post.text_content)} />
    </div>
  );
}
