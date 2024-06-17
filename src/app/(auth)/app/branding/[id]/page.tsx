import { IconArrowForward, IconDelete, IconEco, IconEditSquare, IconHelp, IconMoreVertical } from "@/icons";
import IconArrowDropDown from "@/icons/arrow-drop-down";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] px-[24px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center shrink-0">
        <button className="text-heading/l flex items-center gap-[4px]">
          <span>호호 농장</span>
          <IconArrowDropDown />
        </button>
      </nav>

      <div className="flex h-[calc(100%-64px)] grow">
        <aside className="w-[260px] h-full bg-[#F9FAFB]">
          <ul className="flex flex-col gap-[4px] p-[16px]">
            <Link
              href="/app/branding/1"
              className="text-heading/s text-[#028066] bg-[#E0F3F0] h-[40px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEco /> 농장 브랜딩
            </Link>
            <Link
              href="/app/branding/1"
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEditSquare /> 콘텐츠 생성
            </Link>
          </ul>
        </aside>

        <section className="w-[1180px] h-full bg-[white] flex flex-col shadow-[0_5px_20px_0_rgb(50,50,50,0.1)]">
          <div className="h-[80px] border-b border-gray-200 px-[24px] flex items-center justify-between">
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-gray-500 flex items-center gap-[4px]">
                  <span className="text-body/xs/500">Lv. 새싹</span>
                  <span className="relative">
                    <span className="peer">
                      <IconHelp />
                    </span>

                    <div className="hidden peer-hover:block mb-2 w-[177px] rounded-[8px] text-body/xs/400 text-gray-600 absolute bg-white shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_6px_-1px_rgb(0,0,0,0.06)] bottom-full left-0 py-[12px] px-[20px] whitespace-pre-wrap -translate-x-1/2 text-center">
                      {`내 농장의 콘텐츠 개수에 따라\n농장 레벨이 달라집니다`}
                      <div className="absolute left-1/2 border-[5px] top-full w-0 h-0 border-t-white border-l-transparent border-r-transparent border-b-transparent"></div>
                    </div>
                  </span>
                </span>
                <span className="text-heading/m text-gray-800">호호 농장</span>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[200px] flex flex-col gap-[8px]">
                <div className="flex justify-between">
                  <span className="text-gray-800 text-body/s/500">다음 레벨까지</span>
                  <span>
                    <span className="text-heading/s text-[#089E83]">0</span>{" "}
                    <span className="text-body/m/500 text-gray-500">/5개</span>
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-[8px]"></div>
              </div>

              <button className="w-[36px] h-[36px] rounded-[6px] hover:bg-gray-100 focus:bg-gray-100 flex justify-center items-center relative group">
                <IconMoreVertical />
                <ul className="hidden rounded-[8px] group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full right-0">
                  <Link
                    href="/app/branding/1/edit"
                    className="h-[36px] flex items-center p-[6px] text-black text-body/m/400 gap-[7px]"
                  >
                    <IconEditSquare size={16} />
                    <span>브랜딩 정보 수정</span>
                  </Link>

                  <li className="h-[36px] flex items-center p-[6px] text-[#F43F5E] text-body/m/500 gap-[7px] border-t border-gray-200">
                    <IconDelete />
                    <span>농장 삭제</span>
                  </li>
                </ul>
              </button>
            </div>
          </div>

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
