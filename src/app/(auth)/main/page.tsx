import { OnboardingModal } from "@/components";
import { User, getContentsLevel, getContentsLevelName } from "@/domain";
import { KIMM_bold } from "@/fonts";
import { IconAI } from "@/icons";
import { httpServer } from "@/service/http-server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;
export const fetchCache = "no-store";
export const dynamic = "force-dynamic";

export default async function Page() {
  const user = await httpServer.get<User>("/api/v1/auth/protected");
  const farms = await httpServer.get<{ myFarm: { name: string; contentCount: number; id: string }[] }>(
    "/api/v1/farm/get_farm_list"
  );

  console.log(farms);

  return (
    <>
      <section className="h-[490px] flex flex-col min-w-[1440px]">
        <h1 className="text-display/xl flex flex-col items-center mt-[120px]">
          <span className="flex items-end">
            <span className={`${KIMM_bold.className} text-primary`}>부농 메이커스</span>로
          </span>

          <span className="flex mt-[4px]">
            <span>1분만에 만드는 손쉬운 마케팅</span>
            <IconAI />
          </span>

          <span className="text-primary mt-[10px]">바로 시작해 보세요!</span>
        </h1>
      </section>

      <section className="h-[500px] bg-primary flex flex-col items-center min-w-[1440px]">
        <h2 className="text-white text-heading/xl mt-[40px]">내 농장 리스트</h2>
        <p className="text-[#B4E2D8] text-heading/l/500 pt-[8px]">농장은 최대 3개까지 관리 가능합니다</p>

        <ul className="flex gap-10 mt-[40px]">
          {farms?.myFarm.map((farm) => (
            <li key={farm.id} className="flex flex-col items-center">
              <Link
                className="w-[240px] h-[240px] bg-white rounded-3xl flex justify-center items-center"
                href={`/app/branding/${farm.id}`}
              >
                <Image
                  src={`/lv${getContentsLevel(farm.contentCount)}.png`}
                  alt={`lv${getContentsLevel(farm.contentCount)}`}
                  width={240}
                  height={240}
                />
              </Link>
              <p className="text-heading/l text-[#F9FAFB] mt-[16px] ">{farm.name}</p>
              <span className="text-[#B4E2D8] text-heading/l/500 mt-[4px] ">
                Lv. {getContentsLevelName(farm.contentCount)}
              </span>
            </li>
          ))}

          {farms?.myFarm.length !== 3 && (
            <li className="flex flex-col items-center">
              <Link
                className="w-[240px] h-[240px] bg-white rounded-3xl flex justify-center items-center"
                href="/app/branding/preference"
              >
                <svg
                  width="94"
                  height="94"
                  viewBox="0 0 94 94"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.3333 53.6673H0.333328V40.334H40.3333V0.333984H53.6667V40.334H93.6667V53.6673H53.6667V93.6673H40.3333V53.6673Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
              <p className="text-heading/l text-[#F9FAFB] mt-[16px] ">새 농장 추가</p>
            </li>
          )}
        </ul>
      </section>

      {user?.firstLogin && <OnboardingModal />}
    </>
  );
}
