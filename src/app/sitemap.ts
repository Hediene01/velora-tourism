import type {MetadataRoute} from 'next';
import {destinations} from '@/data/destinations';
export default function sitemap():MetadataRoute.Sitemap{const locales=['en','tr','ar','fr'];return locales.flatMap(locale=>[...['','/trip-builder'].map(path=>({url:`http://localhost:3000/${locale}${path}`,lastModified:new Date()})),...destinations.map(d=>({url:`http://localhost:3000/${locale}/destinations/${d.id}`,lastModified:new Date()}))])}
