import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env.SUPABASE_URL || 'https://sddfemblatwvdzqprflt.supabase.co';
export const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZGZlbWJsYXR3dmR6cXByZmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDIzNjYsImV4cCI6MjA2MDM3ODM2Nn0.fbPLQ861dt_q-P2xh8v4sdn9AQhlRoptKBUh15-tQ7U';

if (!supabaseUrl || !supabaseKey) {
    console.error('⚠️ Missing Supabase credentials! Check your .env file');
    console.error('Current values:', { supabaseUrl, supabaseKey });
    throw new Error('Supabase configuration is incomplete');
  }

export const supabase = createClient(supabaseUrl, supabaseKey);