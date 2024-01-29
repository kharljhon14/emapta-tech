import { PostInfo } from '@/types/post';
import { sanitzedHTML } from '@/utils/helpers';

interface Props {
  post: PostInfo;
}

export default function Post({ post }: Props) {
  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-md prose-lg prose-a:text-blue-500 prose-table:bg-white prose-table:rounded-md prose-td:text-center">
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={sanitzedHTML(post.text_content)} />
    </div>
  );
}
