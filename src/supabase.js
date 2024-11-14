import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gcwlahejcvrpjtxxfzwd.supabase.co'; // Supabase のプロジェクトURL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjd2xhaGVqY3ZycGp0eHhmendkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTk2MjQsImV4cCI6MjA0NzEzNTYyNH0.rH3fxy5YL3LmXS97rTEEyeiolJojYzZOzsx2PqQXRrA'; // Anonキー

export const supabase = createClient(supabaseUrl, supabaseKey);