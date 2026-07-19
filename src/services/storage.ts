import type { BuilderState } from '@/types';
const KEY='velora-trip-draft-v1';
export const saveDraft=(state:BuilderState)=>localStorage.setItem(KEY,JSON.stringify(state));
export const loadDraft=():BuilderState|null=>{try{const value=localStorage.getItem(KEY);return value?JSON.parse(value) as BuilderState:null}catch{return null}};
