import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmP3encMRpyDwqHTKBA73CzHTtk1xUiYGtbD3MsS6hAHUi/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 's3xysh1t',
  description: 'A frame telling the story of s3xysh1t',
  openGraph: {
    title: 's3xysh1t',
    description: 'A frame telling the story of s3xysh1t',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmP3encMRpyDwqHTKBA73CzHTtk1xUiYGtbD3MsS6hAHUi/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>s3xysh1t</h1>
    </>
  );
}