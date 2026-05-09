import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default function Root() {
  const accept = headers().get("accept-language") ?? "";
  const lang = accept.toLowerCase().startsWith("es") ? "es" : "pt";
  redirect(`/${lang}`);
}
