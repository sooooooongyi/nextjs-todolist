import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "코딩 하기", color: "orange", checked: false },
  { id: 3, text: "하이 간식 사기", color: "yellow", checked: true },
  { id: 4, text: "하이 병원 예약하기", color: "green", checked: true },
  { id: 5, text: "넥스트 공부하기", color: "blue", checked: false },
  { id: 6, text: "책 읽기", color: "navy", checked: false }
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
