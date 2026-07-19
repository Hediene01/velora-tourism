export type Locale = 'en' | 'tr' | 'ar' | 'fr';
export type LeadStatus = 'new'|'contacted'|'quoted'|'deposit_pending'|'deposit_paid'|'confirmed'|'in_progress'|'completed'|'cancelled';
export interface Customer { id:string; name:string; email:string; whatsapp:string; country:string; preferredLanguage:Locale }
export interface Destination { id:string; name:string; region:'istanbul'|'nearby'|'anatolia'|'aegean'|'mediterranean'|'black-sea'; regionLabel:string; styles:string[]; duration:string; season:string; travelTime:string; travelerType:string; image:string; description:string; experiences:string[]; program:string[]; transport:string; accommodations:string[]; gallery:string[]; related:string[] }
export interface Activity { id:string; name:string; destinationId:string; durationHours:number; price:number; styles:string[] }
export interface ItineraryDay { id:string; day:number; destination:string; morning:string; afternoon:string; evening:string; transfer:string; duration:string; included:string[]; optionalUpgrades:string[]; estimatedPrice:number }
export interface Trip { id:string; customerId?:string; arrival:string; departure:string; travelers:number; destinations:string[]; services:string[]; itinerary:ItineraryDay[]; estimate:PaymentEstimate }
export interface Inquiry { id:string; customer:Customer; trip:Trip; status:LeadStatus; consent:boolean; createdAt:string }
export interface Package { id:string; title:string; duration:number; destinationIds:string[]; summary:string; inclusions:string[]; exclusions:string[]; hotelLevel:string; vehicleType:string; audience:string; startingPrice:number }
export interface Transfer { id:string; airport:'IST'|'SAW'; direction:'arrival'|'departure'; passengers:number; luggage:number; vehicleId:string; estimate:number }
export interface Vehicle { id:string; name:string; capacity:number; luggage:number; basePrice:number }
export interface FlightRequest { id:string; origin:string; destination:string; tripType:'one-way'|'round-trip'; adults:number; children:number; infants:number; cabin:string }
export interface PaymentEstimate { currency:'EUR'; low:number; high:number; finalConfirmed:false }
export interface Driver { id:string; name:string; languages:Locale[]; vehicleId:string }
export interface Partner { id:string; name:string; type:'hotel'|'restaurant'|'experience' }
export interface BuilderState { arrival:string; departure:string; arrivalAirport:'IST'|'SAW'; departureAirport:'IST'|'SAW'; adults:number; children:number; language:Locale; budget:string; style:string; destinations:string[]; services:string[]; hotelCategory:string; area:string; pace:string; notes:string; step:number }
