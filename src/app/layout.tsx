import type { Metadata } from "next";
import Link from "next/link";
import { pretendard, KIMM_bold } from "@/fonts";
import { Profile } from "@/components";
import "./globals.css";
import { cookies, headers } from "next/headers";
import { User } from "@/domain";
import { redirect } from "next/navigation";
import { httpServer } from "@/service/http-server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = cookies().get("jwt")?.value;
  const pathname = headers().get("next-pathname");

  if (jwt && pathname === "/") {
    redirect("/main");
  }

  const user = await httpServer.get<User>("/api/v1/auth/protected");

  return (
    <html lang="ko-KR">
      <body className={`${pretendard.className} h-full`}>
        <header className="border-b border-[#E5E7EB] bg-white w-full min-w-[1440px]">
          <div className="w-[1440px] flex items-center justify-between h-[64px] mx-auto">
            <Link
              className={`${KIMM_bold.className} text-heading/l text-primary tracking-[-0.02em]`}
              href="/main"
            >
              부농메이커스
            </Link>

            {user && <Profile user={user} />}
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
