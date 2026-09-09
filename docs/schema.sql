-- =============================================================================
-- Laboratorio de Ingeniería de Requerimientos
-- Pegá este script en: Supabase → SQL Editor → Run
-- =============================================================================

-- Tablas
create table if not exists public.perfiles (
  nombre text primary key,
  visto_en timestamptz not null default now()
);

create table if not exists public.temas_teoria (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  clase text not null,
  titulo text not null,
  resumen text not null default '',
  contenido text not null,
  orden int not null default 0,
  actualizado_por text,
  actualizado_en timestamptz not null default now()
);

create table if not exists public.revisiones_teoria (
  id uuid primary key default gen_random_uuid(),
  tema_id uuid not null references public.temas_teoria(id) on delete cascade,
  titulo text not null,
  contenido_anterior text not null,
  contenido_nuevo text not null,
  autor text not null,
  creado_en timestamptz not null default now()
);

create table if not exists public.sesiones (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  organizacion text not null default '',
  rol_gerente text not null default '',
  nombre_gerente text not null default '',
  escenario text not null default '',
  creado_por text not null,
  creado_en timestamptz not null default now()
);

create table if not exists public.mensajes (
  id uuid primary key default gen_random_uuid(),
  sesion_id uuid not null references public.sesiones(id) on delete cascade,
  autor text not null,
  rol text not null check (rol in ('analista', 'gerente', 'sistema')),
  contenido text not null,
  creado_en timestamptz not null default now()
);

create table if not exists public.requerimientos (
  id uuid primary key default gen_random_uuid(),
  sesion_id uuid not null references public.sesiones(id) on delete cascade,
  codigo text not null,
  tipo text not null,
  enunciado text not null,
  autor text not null,
  creado_en timestamptz not null default now()
);

create table if not exists public.revisiones_req (
  id uuid primary key default gen_random_uuid(),
  sesion_id uuid not null references public.sesiones(id) on delete cascade,
  requerimiento_id uuid references public.requerimientos(id) on delete set null,
  autor text not null,
  comentario text not null,
  creado_en timestamptz not null default now()
);

create table if not exists public.dominios (
  sesion_id uuid primary key references public.sesiones(id) on delete cascade,
  contexto text not null default '',
  organizacion text not null default '',
  hoy text not null default '',
  objetivo text not null default '',
  desconocido text not null default '',
  autor text,
  actualizado_en timestamptz not null default now()
);

create table if not exists public.ajustes (
  clave text primary key,
  valor text not null default ''
);

-- Índices
create index if not exists idx_revisiones_tema on public.revisiones_teoria (tema_id, creado_en desc);
create index if not exists idx_mensajes_sesion on public.mensajes (sesion_id, creado_en);
create index if not exists idx_req_sesion on public.requerimientos (sesion_id, creado_en);
create index if not exists idx_revreq_sesion on public.revisiones_req (sesion_id, creado_en);
create index if not exists idx_sesiones_fecha on public.sesiones (creado_en desc);

-- Row Level Security: aula colaborativa (lectura y escritura públicas con la anon key)
alter table public.perfiles enable row level security;
alter table public.temas_teoria enable row level security;
alter table public.revisiones_teoria enable row level security;
alter table public.sesiones enable row level security;
alter table public.mensajes enable row level security;
alter table public.requerimientos enable row level security;
alter table public.revisiones_req enable row level security;
alter table public.dominios enable row level security;
alter table public.ajustes enable row level security;

drop policy if exists "aula perfiles" on public.perfiles;
drop policy if exists "aula teoria" on public.temas_teoria;
drop policy if exists "aula revisiones teoria" on public.revisiones_teoria;
drop policy if exists "aula sesiones" on public.sesiones;
drop policy if exists "aula mensajes" on public.mensajes;
drop policy if exists "aula requerimientos" on public.requerimientos;
drop policy if exists "aula revisiones req" on public.revisiones_req;
drop policy if exists "aula dominios" on public.dominios;
drop policy if exists "aula ajustes" on public.ajustes;

create policy "aula perfiles" on public.perfiles for all using (true) with check (true);
create policy "aula teoria" on public.temas_teoria for all using (true) with check (true);
create policy "aula revisiones teoria" on public.revisiones_teoria for all using (true) with check (true);
create policy "aula sesiones" on public.sesiones for all using (true) with check (true);
create policy "aula mensajes" on public.mensajes for all using (true) with check (true);
create policy "aula requerimientos" on public.requerimientos for all using (true) with check (true);
create policy "aula revisiones req" on public.revisiones_req for all using (true) with check (true);
create policy "aula dominios" on public.dominios for all using (true) with check (true);
create policy "aula ajustes" on public.ajustes for all using (true) with check (true);

-- Tiempo real: los cambios se ven en todos los navegadores
do $$
declare t text;
begin
  foreach t in array array[
    'temas_teoria', 'revisiones_teoria', 'sesiones', 'mensajes',
    'requerimientos', 'revisiones_req', 'perfiles', 'dominios'
  ]
  loop
    begin
      execute format('alter publication supabase_realtime add table public.%I', t);
    exception when duplicate_object then
      null;
    end;
  end loop;
end $$;
