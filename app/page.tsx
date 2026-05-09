import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default function Root() {
  const accept = (headers().get("accept-language") ?? "").toLowerCase();
  const lang = accept.startsWith("es")
    ? "es"
    : accept.startsWith("pt")
      ? "pt"
      : accept.startsWith("en")
        ? "en"
        : "pt";
  redirect(`/${lang}`);
}
