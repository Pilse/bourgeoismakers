import { BrandDropdown, ChattingForm } from "@/components";
import { BrandHeader } from "@/components/brand-header";
import { ContentList } from "@/components/content-list";
import { ChatListItem, Content, Farm } from "@/domain";
import { IconAdd, IconEco, IconEditSquare, IconManageSearch, IconPallete2, IconUpload } from "@/icons";
import { httpServer } from "@/service/http-server";
import Link from "next/link";

export default async function Page(props: { params: { id: string; content_id: string } }) {
  const [farm, farmList, chats, chat] = await Promise.all([
    httpServer.get<Farm>(`/api/v1/farm/get_farm?farm_id=${props.params.id}`),
    httpServer.get<{ myFarm: { name: string; contentCount: number; id: string }[] }>(
      "/api/v1/farm/get_farm_list"
    ),
    httpServer.get<{ chatList: ChatListItem[] }>(`/api/v1/contents/get_chat_list?farmId=${props.params.id}`),
    httpServer.get<{ messages: Content[] }>(`/api/v1/contents/get_chat?chatId=${props.params.content_id}`),
  ]);
  console.log(chat);

  return (
    <div className="h-full flex-col flex">
      <nav className="w-[1440px] px-[24px] mx-auto bg-[#F9FAFB] border-b border-[#E5E7EB] h-[64px] flex item-center shrink-0">
        <BrandDropdown farmList={farmList} currentFarm={farm} />
      </nav>

      <div className="flex h-[calc(100%-64px)] grow">
        <aside className="w-[260px] h-full bg-[#F9FAFB]">
          <ul className="flex flex-col gap-[4px] p-[16px]">
            <Link
              href={`/app/branding/${props.params.id}`}
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] hover:bg-gray-100"
            >
              <IconEco /> 농장 브랜딩
            </Link>
            <Link
              href={`/app/branding/${props.params.id}/contents/new`}
              className="text-heading/s text-[#028066] bg-[#E0F3F0] h-[40px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEditSquare /> 콘텐츠 생성
            </Link>
            <Link
              href=""
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] cursor-default justify-between"
            >
              <span className="flex gap-2 text-gray-400">
                <IconPallete2 /> 로고 생성
              </span>
              <span className="text-[#B45309] bg-[#FEF3C7] px-1.5 rounded-full h-[20px] flex items-center text-body/xs/500">
                준비중
              </span>
            </Link>
            <Link
              href=""
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] cursor-default justify-between"
            >
              <span className="flex gap-2 text-gray-400">
                <IconManageSearch /> 게시글 미리보기
              </span>
              <span className="text-[#B45309] bg-[#FEF3C7] px-1.5 rounded-full h-[20px] flex items-center text-body/xs/500">
                준비중
              </span>
            </Link>
            <Link
              href=""
              className="text-heading/s h-[40px] text-gray-500 rounded-[8px] p-[8px] flex items-center gap-[8px] cursor-default justify-between"
            >
              <span className="flex gap-2 text-gray-400">
                <IconUpload /> 자동 업로드
              </span>
              <span className="text-[#B45309] bg-[#FEF3C7] px-1.5 rounded-full h-[20px] flex items-center text-body/xs/500">
                준비중
              </span>
            </Link>
          </ul>
        </aside>

        <div className="flex flex-col h-full">
          <BrandHeader showMore={false} currentFarm={farm} farmList={farmList} />

          <div className="flex h-[calc(100%-80px)]">
            <section className="w-[860px] bg-gray-100 flex flex-col">
              <ChattingForm brandId={props.params.id} chat={chat} id={props.params.content_id} />
            </section>

            <aside className="w-[320px] bg-white overflow-y-auto h-full">
              <div className="flex flex-col p-4 border-b border-[#E5E7EB]">
                <Link
                  href={`/app/branding/${props.params.id}/contents/new`}
                  className="bg-primary h-[40px] hover:bg-[#028066] text-white flex items-center justify-center text-heading/s rounded-[6px] gap-[4px]]"
                >
                  <IconAdd size={20} />
                  <span>새 콘텐츠 만들기</span>
                </Link>
              </div>

              <ContentList chats={chats} brandId={props.params.id} id={props.params.content_id} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
