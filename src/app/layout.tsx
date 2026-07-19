import type { Metadata } from 'next';
import './globals.css';
import './builder.css';
import './destinations.css';
export const metadata:Metadata={title:{default:'Velora Türkiye — Bespoke Private Journeys',template:'%s · Velora Türkiye'},description:'Private journeys, seamless transfers and unforgettable experiences across Istanbul and Türkiye.',openGraph:{title:'Velora Türkiye',description:'Türkiye, designed around you.',type:'website'},twitter:{card:'summary_large_image'},alternates:{canonical:'/'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
