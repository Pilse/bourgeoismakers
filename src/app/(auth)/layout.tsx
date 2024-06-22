import type { Metadata } from "next";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = cookies().get("jwt")?.value;

  if (!jwt) {
    redirect("/");
  }

  return children;
}
