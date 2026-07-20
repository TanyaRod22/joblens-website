import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
// Supabase's Vite wizard uses PUBLISHABLE_KEY; older docs use ANON_KEY (JWT).
const supabaseKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;

function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY (or VITE_SUPABASE_ANON_KEY). Check your .env file.",
    );
    return null;
  }
  return createClient(supabaseUrl, supabaseKey);
}

export const supabase = createSupabaseClient();

export async function submitUninstallFeedback(payload: {
  experience: string;
  reasons: string[];
  comments: string;
}) {
  if (!supabase) {
    throw new Error("Feedback storage is not configured.");
  }

  const experience = Number(payload.experience);
  if (!Number.isInteger(experience) || experience < 1 || experience > 5) {
    throw new Error("Invalid experience rating.");
  }

  const { error } = await supabase.from("uninstall_feedback").insert({
    experience,
    reasons: payload.reasons,
    comments: payload.comments.slice(0, 5000),
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
  });

  if (error) {
    throw error;
  }
}
