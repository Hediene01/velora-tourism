import { notFound } from 'next/navigation';
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','tr','ar','fr'].includes(locale))notFound();return <div lang={locale} dir={locale==='ar'?'rtl':'ltr'}>{children}</div>}
