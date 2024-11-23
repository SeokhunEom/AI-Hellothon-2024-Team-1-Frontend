import IconFilePlus from "../assets/iconFilePlus.svg?react";
import IconFileSearch from "../assets/iconFileSearch.svg?react";
import MemoryCard from "./MemoryCard";
import { Modal } from "antd";
import ReportButton from "./ReportButton";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

interface ReadyCardProps {
  title: string;
  tags: string[];
  isRecommended?: boolean;
  content: string;
}

const ReadyCard = ({ title, tags, isRecommended, content }: ReadyCardProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex w-full flex-col items-start justify-center gap-6 rounded-xl bg-black-3 px-6 py-5">
        <div className="flex w-full flex-col items-start justify-center gap-3">
          {isRecommended && (
            <div className="inline-flex items-center justify-start gap-2.5 rounded bg-[#fdd7ab] px-2 py-1">
              <div className="text-center text-sm font-medium">
                교안에 적합한 기록이에요!
              </div>
            </div>
          )}
          <div className="self-stretch text-xl font-semibold">{title}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 rounded bg-black-5 px-2 py-1"
              >
                <div className="text-center text-sm font-semibold">{tag}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="inline-flex w-full items-start justify-start gap-3">
          <ReportButton
            size="grow"
            text="기록 보기"
            icon={<IconFileSearch />}
            onClick={showModal}
          />
          <ReportButton
            size="grow"
            text="교안 만들기"
            icon={<IconFilePlus />}
            onClick={() => navigate({ to: "/make/$id", params: { id: "1" } })}
          />
        </div>
      </div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div className="flex flex-col items-center">
          <div className="w-full">
            <MemoryCard
              title="오늘의 기억: 따뜻한 오후 오늘의 기억: 따뜻한 오후오늘의 기억: 따뜻한 오후"
              imageSrc="https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_1280.png"
              description={content}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReadyCard;
