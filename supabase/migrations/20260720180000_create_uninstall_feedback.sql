-- Uninstall survey responses from /feedback
create table if not exists public.uninstall_feedback (
  id uuid primary key default gen_random_uuid(),
  experience smallint not null
    check (experience between 1 and 5),
  reasons text[] not null
    check (cardinality(reasons) >= 1),
  comments text not null default ''
    check (char_length(comments) <= 5000),
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists uninstall_feedback_created_at_idx
  on public.uninstall_feedback (created_at desc);

alter table public.uninstall_feedback enable row level security;

-- Public form: anyone can insert; nobody (anon) can read others' rows.
-- View rows in the Supabase Table Editor (service role bypasses RLS).
create policy "Anyone can submit uninstall feedback"
  on public.uninstall_feedback
  for insert
  to anon, authenticated
  with check (true);

revoke select, update, delete on public.uninstall_feedback from anon, authenticated;
grant insert on public.uninstall_feedback to anon, authenticated;
