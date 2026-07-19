import { describe,expect,it } from 'vitest';
import { estimateTrip,generateItinerary,tripNights } from './itinerary';
import type { BuilderState } from '@/types';
const trip:BuilderState={arrival:'2026-08-10',departure:'2026-08-16',arrivalAirport:'IST',departureAirport:'SAW',adults:2,children:0,language:'en',budget:'€2,500–€4,000',style:'luxury',destinations:['istanbul','cappadocia'],services:['arrival-transfer','guide'],hotelCategory:'5-star',area:'Bosphorus',pace:'balanced',notes:'',step:6};
describe('itinerary service',()=>{it('calculates nights safely',()=>expect(tripNights(trip)).toBe(6));it('creates deterministic days',()=>{const days=generateItinerary(trip);expect(days).toHaveLength(6);expect(days[0].destination).toBe('Istanbul');expect(days[5].destination).toBe('Cappadocia')});it('returns a transparent price range',()=>{const price=estimateTrip(trip);expect(price.high).toBeGreaterThan(price.low);expect(price.finalConfirmed).toBe(false)})});
