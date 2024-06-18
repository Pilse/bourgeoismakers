import { BrandDropdown } from "@/components";
import { BrandHeader } from "@/components/brand-header";
import { IconArrowForward, IconEco, IconEditSquare } from "@/icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] px-[24px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center shrink-0">
        <BrandDropdown />
      </nav>

      <div className="flex h-[calc(100%-64px)] grow">
        <aside className="w-[260px] h-full bg-[#F9FAFB]">
          <ul className="flex flex-col gap-[4px] p-[16px]">
            <Link
              href=""
              className="text-heading/s text-[#028066] bg-[#E0F3F0] h-[40px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEco /> 농장 브랜딩
            </Link>
            <Link
              href="/app/contents/new"
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] hover:bg-gray-100"
            >
              <IconEditSquare /> 콘텐츠 생성
            </Link>
          </ul>
        </aside>

        <section className="w-[1180px] h-full bg-[white] flex flex-col shadow-[0_5px_20px_0_rgb(50,50,50,0.1)]">
          <BrandHeader />

          <div className="py-[24px] px-[48px] overflow-auto">
            <div className="flex flex-col shrink-0">
              <h2 className="text-heading/m">기본 정보</h2>

              <div className="mt-[16px] flex flex-col gap-[16px]">
                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">주요 활용 SNS</span>
                  <span className="text-body/m/400">인스타그램</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">생산 품목</span>
                  <span className="text-body/m/400">고구마</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">농장 분위기</span>
                  <span className="text-body/m/400">통통튄다</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">농장 강점</span>
                  <span className="text-body/m/400">유기농, 뛰어난 당도, 빠른 배송</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-[48px] shrink-0">
              <h2 className="text-heading/m">브랜딩 정보</h2>

              <div className="mt-[16px] flex flex-col gap-[16px]">
                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">내 농장 이름</span>
                  <span className="text-body/m/400">호호 농장</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">한 줄 소개</span>
                  <span className="text-body/m/400">
                    안녕하세요, 여러분! 😊 오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고
                    합니다. 저희는 신선한 고구마를 직접 재배하고 판매하고 있어요
                  </span>
                </p>

                <p className="flex items-start gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">우리 농장의 특징</span>
                  <span className="text-body/m/400">
                    오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고 합니다. 저희는 신선한
                    고구마를 직접 재배하고 판매하고 있습니다. 자연 그대로의 달콤함을 지닌 고구마는 누구나
                    좋아하는 인기 간식이죠!
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-2 w-full mb-[40px] mx-[48px] mt-auto">
            <Link
              href="/app/contents/new"
              className="h-[48px] bg-[#089E83] hover:bg-[#028066] w-full text-white flex gap-[8px] justify-center items-center mt-auto shrink-0 rounded-[6px]"
            >
              <span className="text-heading/m">콘텐츠 생성 하러가기</span>
              <span>
                <IconArrowForward />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
