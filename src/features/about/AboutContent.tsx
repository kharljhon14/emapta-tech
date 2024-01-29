'use client';

import { AboutInfo } from '@/types/about';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';
import About from './About';

export default function AboutContent() {
  const { data, isLoading, error } = useSWR<AboutInfo>(
    'https://www.zesty.io/-/instant/7-e93178-vqvclg.json',
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
    <div className="m-12">
      {data?.data && data?.data.length > 0 ? (
        <About about={data} />
      ) : (
        <div>Whoops looks like the data is empty!</div>
      )}
    </div>
  );
}
