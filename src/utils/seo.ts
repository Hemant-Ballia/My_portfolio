import type { Metadata } from 'next';

interface MetaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const generateMeta = ({
  title,
  description,
  url,
  image = '/assets/img.png',
}: MetaProps): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Hemantweb.in',
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: 'Hemant Chauhan Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
});
