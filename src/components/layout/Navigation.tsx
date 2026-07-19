'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/types';
export function Navigation({locale,d}:{locale:Locale;d:Dictionary}){const [open,setOpen]=useState(false);const locales:Locale[]=['en','tr','ar','fr'];return <header className="nav"><Link className="wordmark" href={`/${locale}`}><span>VELORA</span><small>TÜRKİYE</small></Link><nav className={open?'navlinks open':'navlinks'} aria-label="Primary"><a href="#destinations" onClick={()=>setOpen(false)}>{d.nav.destinations}</a><a href="#journeys" onClick={()=>setOpen(false)}>{d.nav.packages}</a><a href="#about" onClick={()=>setOpen(false)}>{d.nav.about}</a><Link className="nav-cta" href={`/${locale}/trip-builder`}>{d.nav.cta}</Link></nav><div className="nav-tools"><label className="sr-only" htmlFor="locale">Language</label><select id="locale" value={locale} onChange={e=>location.href=`/${e.target.value}${location.pathname.replace(/^\/(en|tr|ar|fr)/,'')}`}><option value="en">EN</option><option value="tr">TR</option><option value="ar">AR</option><option value="fr">FR</option></select><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header>}
