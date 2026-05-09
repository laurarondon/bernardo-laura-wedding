import { assertLang } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = assertLang(params.lang);
  return (
    <>
      <Header lang={lang} />
      <main className="min-h-[70vh]">{children}</main>
      <Footer lang={lang} />
    </>
  );
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "es" }, { lang: "en" }];
}
