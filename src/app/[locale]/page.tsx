import { HomePage } from '@/components/home/HomePage';
import { getDictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/types';
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;return <HomePage locale={locale} d={getDictionary(locale)}/>}
