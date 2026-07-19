import { TripBuilder } from '@/components/trip-builder/TripBuilder';
import { getDictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/types';
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;return <TripBuilder locale={locale} d={getDictionary(locale)}/>}
