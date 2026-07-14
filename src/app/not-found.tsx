import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/site-under-construction");
}
