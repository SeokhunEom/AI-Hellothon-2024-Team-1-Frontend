import { Form, Input, Modal } from "antd";

import BeforeHeader from "../components/BeforeHeader";
import BorderButton from "../components/BorderButton";
import IconCheckSquare from "../assets/iconCheckSquare.svg?react";
import IconEdit from "../assets/iconEdit.svg?react";
import MakeCard from "../components/MakeCard";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/make/$id")({
  component: Make,
});

function Make() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleAddQuestion = (values: { question: string }) => {
    console.log("New question:", values.question);
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <BeforeHeader to={"/care"} />
      <Tabs
        title="김영호"
        subtitle="님"
        activeTab="2"
        items={[
          { id: "1", title: "기록준비", path: "/ready/1" },
          { id: "2", title: "교안제작", path: "/make/1" },
          { id: "3", title: "인지활동", path: "/edu/1" },
        ]}
      />
      <div className="mt-6 flex flex-col gap-5">
        <MakeCard
          questionNumber={1}
          question="손주들이랑 주말에 무엇을 하셨나요?"
        />
        <MakeCard
          questionNumber={2}
          question="손주들이랑 주말에 무엇을 하셨나요?"
        />
        <BorderButton
          text="직접 질문 추가하기"
          icon={<IconEdit />}
          onClick={() => setIsModalOpen(true)}
        />
        <BorderButton text="이 교안으로 확정하기" icon={<IconCheckSquare />} />
      </div>

      <Modal
        title="질문 추가하기"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddQuestion} layout="vertical">
          <Form.Item
            name="question"
            rules={[{ required: true, message: "질문을 입력해주세요" }]}
          >
            <Input placeholder="질문을 입력해주세요" size="large" />
          </Form.Item>
          <Form.Item>
            <BorderButton text="추가하기" className="w-full" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
