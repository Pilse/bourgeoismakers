import { BrandDropdown } from "@/components";
import { BrandHeader } from "@/components/brand-header";
import { Farm } from "@/domain";
import { IconArrowForward, IconEco, IconEditSquare } from "@/icons";
import { httpServer } from "@/service/http-server";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const farm = await httpServer.get<Farm>(`/api/v1/farm/get_farm?farm_id=${props.params.id}`);
  const farmList = await httpServer.get<{ myFarm: { name: string; contentCount: number; id: string }[] }>(
    "/api/v1/farm/get_farm_list"
  );

  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] px-[24px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center shrink-0">
        <BrandDropdown farmList={farmList} currentFarm={farm} />
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
          <BrandHeader farmList={farmList} currentFarm={farm} />

          <div className="py-[24px] px-[48px] overflow-auto">
            <div className="flex flex-col shrink-0">
              <h2 className="text-heading/m">기본 정보</h2>

              <div className="mt-[16px] flex flex-col gap-[16px]">
                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">주요 활용 SNS</span>
                  <span className="text-body/m/400">{farm?.snsType}</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">생산 품목</span>
                  <span className="text-body/m/400">{farm?.products}</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">농장 분위기</span>
                  <span className="text-body/m/400">{farm?.mood}</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">농장 강점</span>
                  <span className="text-body/m/400">{farm?.strength.join(", ")}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-[48px] shrink-0">
              <h2 className="text-heading/m">브랜딩 정보</h2>

              <div className="mt-[16px] flex flex-col gap-[16px]">
                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">내 농장 이름</span>
                  <span className="text-body/m/400">{farm?.name}</span>
                </p>

                <p className="flex items-center gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">한 줄 소개</span>
                  <span className="text-body/m/400 whitespace-pre-wrap">{farm?.summary}</span>
                </p>

                <p className="flex items-start gap-[12px]">
                  <span className="w-[120px] text-heading/xs text-gray-500 shrink-0">우리 농장의 특징</span>
                  <span className="text-body/m/400 whitespace-pre-wrap">{farm?.description}</span>
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
