import { BrandDropdown, ChattingForm } from "@/components";
import { BrandHeader } from "@/components/brand-header";
import { IconAdd, IconDelete, IconEco, IconEditSquare, IconHistory, IconMoreVertical } from "@/icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] px-[24px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center shrink-0">
        <BrandDropdown />
      </nav>

      <div className="flex h-[calc(100%-64px)] grow">
        <aside className="w-[260px] h-full bg-[#F9FAFB] border-r border-[#E5E7EB]">
          <ul className="flex flex-col gap-[4px] p-[16px]">
            <Link
              href="/app/branding/1"
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] hover:bg-gray-100"
            >
              <IconEco />
              농장 브랜딩
            </Link>
            <Link
              href="/app/contents/new"
              className="text-heading/s text-[#028066] bg-[#E0F3F0] h-[40px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEditSquare />
              콘텐츠 생성
            </Link>
          </ul>
        </aside>

        <div className="flex flex-col h-full">
          <BrandHeader showMore={false} />

          <div className="flex h-[calc(100%-80px)]">
            <section className="w-[860px] bg-gray-100 flex flex-col">
              <ChattingForm />
            </section>

            <aside className="w-[320px] bg-white overflow-y-auto h-full">
              <div className="flex flex-col p-4 border-b border-[#E5E7EB]">
                <Link
                  href="/app/contents/new"
                  className="bg-primary h-[40px] hover:bg-[#028066] text-white flex items-center justify-center text-heading/s rounded-[6px] gap-[4px]]"
                >
                  <IconAdd size={20} />
                  <span>새 콘텐츠 만들기</span>
                </Link>
              </div>

              <ul className="flex flex-col gap-[8px] p-[16px] overflow-y-auto h-full">
                <span className="flex gap-[4px] items-center">
                  <IconHistory />
                  <span className="text-gray-500 text-heading/xs">콘텐츠 생성 내역</span>
                </span>

                <li className="hover:bg-[#F3F4F6] h-[54px] flex px-[8px] py-[4px] rounded-[8px] gap-[8px] items-center">
                  <Link
                    href="/app/contents/1"
                    className="h-full flex flex-col justify-center gap-[2px] max-w-[240px]"
                  >
                    <span className="text-heading/xs truncate">
                      건강한 단맛의 비밀, 신선한 고구마 판매 시작!!!!!!
                    </span>
                    <span className="text-body/xs/400 text-gray-500">딸기 / 인스타그램</span>
                  </Link>

                  <button className="relative group">
                    <IconMoreVertical />

                    <ul className="hidden rounded-[8px] group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full right-0">
                      <li className="h-[36px] w-full flex items-center p-[6px] text-[#F43F5E] text-body/m/500 gap-[7px]">
                        <IconDelete />
                        <span>채팅 삭제</span>
                      </li>
                    </ul>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
