-- StudyBuddy cloud sync schema
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

-- One row per user holding their entire app state (profile, progress,
-- sessions, flashcard buckets, calendar) as a JSON blob.
create table if not exists public.user_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

-- Each signed-in user can only touch their own row.
create policy "select own state" on public.user_state
  for select using (auth.uid() = user_id);

create policy "insert own state" on public.user_state
  for insert with check (auth.uid() = user_id);

create policy "update own state" on public.user_state
  for update using (auth.uid() = user_id);

-- Self-service account deletion (called from the app after the user re-enters
-- their password). SECURITY DEFINER lets it remove the auth.users row; the
-- user_state row cascades away with it. Only ever deletes the caller.
create or replace function public.delete_user()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from auth.users where id = auth.uid();
$$;

revoke execute on function public.delete_user() from public, anon;
grant execute on function public.delete_user() to authenticated;
