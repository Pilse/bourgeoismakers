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
        <h2 className="whitespace-pre-line text-heading/xl">{`원하는 내용으로 수정해주세요`}</h2>

        <form className="flex flex-col gap-5 mt-[32px] grow">
          <div className="bg-gray-200 w-full h-[64px]"></div>
          <div className="bg-gray-200 w-full h-[132px]"></div>
          <div className="bg-gray-200 w-full h-[92px]"></div>
        </form>

        <div className="bg-white py-2 w-full sticky bottom-0 flex gap-3">
          <Link
            href="/app/branding/1"
            className="h-[48px] bg-primary w-full text-white flex justify-center items-center"
          >
            완료
          </Link>
        </div>
      </section>
    </div>
  );
}
