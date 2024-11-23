export const MEMORY_TABS = [
  {
    id: "1",
    title: "기록하기",
    path: (id: string) => `/senior/record?id=${id}`,
  },
  {
    id: "2",
    title: "나의추억",
    path: (id: string) => `/senior/memories?id=${id}`,
  },
] as const;
