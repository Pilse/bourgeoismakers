import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex">
      <aside className="w-[260px] h-full bg-[#F9FAFB]">
        <ul className="flex flex-col gap-4">
          <Link href="/app/branding/1" className="text-heading/s">
            농장 브랜딩
          </Link>
          <Link href="/app/contents/new" className="text-heading/s">
            콘텐츠 생성
          </Link>
        </ul>
      </aside>

      <div className="flex flex-col bg-[#F3F4F6]">
        <section className="w-[860px] flex flex-col overflow-y-auto">
          <div className="grow flex flex-col gap-3 p-4">
            <div className="bg-white w-1/2 h-[64px] self-start"></div>
            <div className="bg-white w-1/2 h-[132px] self-end"></div>
            <div className="bg-white w-1/2 h-[92px] self-end"></div>
            <div className="bg-white w-1/2 h-[64px] self-start"></div>
            <div className="bg-white w-1/2 h-[132px] self-end"></div>
            <div className="bg-white w-1/2 h-[64px] self-start"></div>
            <div className="bg-white w-1/2 h-[304px] self-start"></div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#7DEFA4] to-[#00BEE8] p-[2px] mx-[40px] rounded-[99px] min-h-[56px] my-[40px]">
          <input type="text" className="w-full h-full rounded-[99px] px-4" />
        </div>
      </div>

      <aside className="w-[320px] h-full bg-white">
        <div className="flex flex-col p-4 border-b border-[#E5E7EB]">
          <Link
            href="/app/contents/new"
            className="bg-primary h-[40px] text-white flex items-center justify-center"
          >
            새 콘텐츠 만들기
          </Link>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <span>콘텐츠 생성 내역</span>
          <Link href="/app/contents/1" className="hover:bg-[#F3F4F6] h-[54px] flex flex-col justify-center">
            <span className="text-heading/s">건강한 단맛의 비밀, 신선한 고구마</span>
            <span className="text-body/xs/400 text-[#6B7280]">딸기 / 인스타그램</span>
          </Link>
        </ul>
      </aside>
    </div>
  );
}
