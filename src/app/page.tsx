/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { KIMM_bold } from "@/fonts";
import { IconAI, IconArrowForward, IconGoogle } from "@/icons";
import { SolutionTabs } from "@/components/solution-tabs";

const url = `${process.env.GOOGLE_LOGIN_URL}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile`;

export default async function Home() {
  return (
    <>
      <section className="h-[479px] flex flex-col min-w-[1440px] relative">
        <div className="w-[1440px] relative mx-auto">
          <div className="absolute h-[185px] top-0 left-0 mx-auto w-[1440px] mt-[155px]">
            <img src="/hero_chips.png" alt="chips" />
          </div>
        </div>

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

        <Link
          href={url}
          className="self-center flex gap-[8px] py-[10px] px-[16px] bg-[#1f2937] rounded-[6px] mt-[35px] hover:bg-[#374151]"
        >
          <IconGoogle />
          <span className="text-white">구글로 시작하기</span>
          <span className="text-white">
            <IconArrowForward />
          </span>
        </Link>
      </section>

      <section className="min-w-[1440px] bg-gradient-to-br from-[#F2FDF6] to-[#E5F8FD] flex flex-col items-center">
        <div className="bg-[#089E83] text-white h-[40px] flex items-center px-4 rounded-full mt-[40px]">
          농장 마케팅 All-in-One Tool
        </div>
        <h2 className="text-gray-700 text-[32px] font-semibold mt-[24px]">
          농장만 가꾸세요! 나머지는 저희가 해드릴게요 :)
        </h2>

        <div className="mt-6">
          <SolutionTabs />
        </div>
      </section>
    </>
  );
}
