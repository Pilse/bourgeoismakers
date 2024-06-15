import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex">
      <aside className="w-[260px] h-full bg-[#F9FAFB] border-r border-[#E5E7EB]">
        <ul className="flex flex-col gap-4">
          <Link href="" className="text-heading/s">
            농장 브랜딩
          </Link>
        </ul>
      </aside>

      <section className="w-[1180px] h-full bg-[white] overflow-y-auto p-4 flex flex-col">
        <h2 className="whitespace-pre-line text-heading/xl">{`반가워요! 브랜딩 추천을 위해\n당신의 농장에 대해 알려주세요`}</h2>

        <form className="flex flex-col gap-5 mt-[32px] grow">
          <div className="bg-gray-200 w-full h-[84px]"></div>
          <div className="bg-gray-200 w-full h-[84px]"></div>
          <div className="bg-gray-200 w-full h-[200px]"></div>
          <div className="bg-gray-200 w-full h-[220px]"></div>
        </form>

        <div className="bg-white py-2 w-full sticky bottom-0">
          <Link
            href="/app/branding/result"
            className="h-[48px] bg-primary w-full text-white flex justify-center items-center"
          >
            이 정보로 AI 브랜딩 진행
          </Link>
        </div>
      </section>
    </div>
  );
}
