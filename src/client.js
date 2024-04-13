import { createClient } from '@supabase/supabase-js'

const URL = 'https://tqauwzegjrizpboggxds.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxYXV3emVnanJpenBib2dneGRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjk3NjQzMCwiZXhwIjoyMDI4NTUyNDMwfQ.t-yxLs3tOErvPPlWG--nhihM0yYClmAwzrA3R9mtHDI';

export const supabase = createClient(URL, API_KEY);