import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="font-serif text-7xl text-sageDark">404</p>
      <p className="mt-4 text-ink/70">
        Página não encontrada · Página no encontrada
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/pt" className="btn-ghost">
          Início
        </Link>
        <Link href="/es" className="btn-ghost">
          Inicio
        </Link>
      </div>
    </div>
  );
}
