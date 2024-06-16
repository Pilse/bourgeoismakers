import { IconEco, IconEditSquare } from "@/icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center">
        <button className="text-heading/l">호호농장</button>
      </nav>

      <div className="flex grow">
        <aside className="w-[260px] h-full bg-[#F9FAFB] border-r border-[#E5E7EB]">
          <ul className="flex flex-col gap-4 p-[16px]">
            <Link
              href="/app/branding/1"
              className="text-heading/m bg-[#e5e7eb] h-[44px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEco /> 농장 브랜딩
            </Link>
            <Link
              href="/app/branding/1"
              className="text-heading/m bg-[#e5e7eb] h-[44px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEditSquare /> 콘텐츠 생성
            </Link>
          </ul>
        </aside>

        <section className="w-[1180px] h-full bg-[white] p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-heading/xl">기본 정보</h2>
            <Link href="/app/branding/1/edit" className="bg-black text-white py-2 px-4 rounded">
              수정
            </Link>
          </div>

          <form className="flex flex-col gap-5 mt-[32px] grow">
            <div className="bg-gray-200 w-full h-[144px]"></div>
          </form>

          <div className="flex items-center justify-between">
            <h2 className="text-heading/xl">브랜딩 정보</h2>
          </div>

          <form className="flex flex-col gap-5 mt-[32px] grow">
            <div className="bg-gray-200 w-full h-[200px]"></div>
          </form>

          <div className="bg-white py-2 w-full sticky bottom-0">
            <Link
              href="/app/contents/new"
              className="h-[48px] bg-primary w-full text-white flex justify-center items-center"
            >
              콘텐츠 생성 하러가기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
