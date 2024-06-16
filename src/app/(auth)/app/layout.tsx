export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-[1440px] mx-auto h-[calc(100%-65px)] border-x border-[#E5E7EB] overflow-x-hidden">
      {children}
    </main>
  );
}
