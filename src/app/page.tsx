import Link from "next/link";
import { KIMM_bold } from "@/fonts";
import { IconAI, IconArrowForward, IconGoogle } from "@/icons";

export default function Home() {
  return (
    <>
      <section className="h-[517px] flex flex-col min-w-[1440px]">
        <h1 className="text-display/xl flex flex-col items-center mt-[166px]">
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
          href="/main"
          className="self-center flex gap-[8px] py-[10px] px-[16px] bg-[#1f2937] rounded-[6px] mt-[35px] hover:bg-[#374151] transition-all"
        >
          <IconGoogle />
          <span className="text-white">구글로 시작하기</span>
          <IconArrowForward />
        </Link>
      </section>

      <section className="h-[500px] bg-primary"></section>
    </>
  );
}
