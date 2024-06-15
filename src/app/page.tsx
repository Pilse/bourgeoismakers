import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-[517px] flex justify-center items-center flex-col min-w-[1440px]">
        <h1>부농 메이커스로 1분만에 만드는 손쉬운 마케팅 바로 시작해 보세요!</h1>
        <Link href="/main">구글로 시작하기</Link>
      </section>

      <section className="h-[500px] bg-primary"></section>
    </>
  );
}
