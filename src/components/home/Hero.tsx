import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/types';
export function Hero({locale,d}:{locale:Locale;d:Dictionary}){return <section className="hero"><div className="hero-bg"/><div className="hero-content"><h1>{d.hero.title}</h1><p>{d.hero.copy}</p><div className="hero-actions"><Link className="button gold" href={`/${locale}/trip-builder`}>{d.nav.cta}<span>→</span></Link><a className="text-link" href="#destinations">{d.hero.explore}<span>↓</span></a></div></div><a className="scroll-hint" href="#destinations"><span/>{d.hero.scroll}</a></section>}
