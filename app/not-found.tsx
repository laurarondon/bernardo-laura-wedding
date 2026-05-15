import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="font-serif text-7xl text-sageDark">404</p>
      <p className="mt-4 text-ink/70">
        Página não encontrada · Página no encontrada · Page not found ·
        Seite nicht gefunden
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/pt" className="btn-ghost">
          Início
        </Link>
        <Link href="/es" className="btn-ghost">
          Inicio
        </Link>
        <Link href="/en" className="btn-ghost">
          Home
        </Link>
        <Link href="/de" className="btn-ghost">
          Start
        </Link>
      </div>
    </div>
  );
}
