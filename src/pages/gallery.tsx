// src/pages/gallery.tsx
import dynamic from 'next/dynamic';

// Dynamically import GallerySection to avoid hydration mismatch or layout shift
const GallerySection = dynamic(() => import('@/sections/GallerySection'), {
    ssr: false,
});

export default function GalleryPage() {
    return <GallerySection />;
}
