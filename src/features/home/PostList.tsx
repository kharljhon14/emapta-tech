'use client';

import useSWR from 'swr';
import Post from './Post';
import { fetcher } from '@/utils/fetcher';
import { PostInfo } from '@/types/post';

export default function PostList() {
  const { data, isLoading, error } = useSWR<Array<PostInfo>>(
    'https://www.zesty.io/-/gql/platform_section.json',
    fetcher
  );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Something went wrong!
      </div>
    );
  if (isLoading)
    return <div className="h-screen flex items-center justify-center text-2xl">Loading...</div>;

  return (
    <ul className="space-y-6 m-12">
      {data &&
        data.map((post) => (
          <li key={post.title}>
            <Post post={post} />
          </li>
        ))}
    </ul>
  );
}
