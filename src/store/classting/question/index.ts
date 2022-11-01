import { useCallback } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../index";
import { ItemProps } from "@src/type";
import moment, { Moment } from "moment";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface QuestionStateProps {
  wrongItems: Array<ItemProps>;
  answerCount: number;
  wrongCount: number;
  questionTotal: number;
  startTime: Moment;
  endTime: Moment;
}

interface QuestionStateProps {
  wrongItems: Array<ItemProps>;
  answerCount: number;
  wrongCount: number;
  questionTotal: number;
  startTime: Moment;
  endTime: Moment;
}

// Define the initial state using that type
const initialState: QuestionStateProps = {
  wrongItems: [],
  answerCount: 0,
  wrongCount: 0,
  questionTotal: 0,
  startTime: moment(),
  endTime: moment(),
};

export const questionSlice = createSlice({
  name: "question",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTimeAction: (state, action) => {
      const { type, time } = action.payload;
      switch (type) {
        case "start":
          state.startTime = time;
          break;
        case "end":
          state.endTime = time;
          break;
      }
    },
    setStatusAction: (state, action) => {
      const { answerCount, wrongItems, questionTotal } = action.payload;
      state.wrongItems = wrongItems;
      state.answerCount = answerCount;
      state.wrongCount = wrongItems.length;
      state.questionTotal = questionTotal;
    },
  },
});

export const { setTimeAction, setStatusAction } = questionSlice.actions;

export function useQuestionStore() {
  const questionState = useAppSelector(
    (state: RootState) => state.classting.question
  );
  const dispatch = useAppDispatch();

  return {
    questionState,
    setTimeAction: useCallback(
      (payload: { type: string; time: Moment }) =>
        dispatch(setTimeAction(payload)),
      [dispatch]
    ),
    setStatusAction: useCallback(
      (payload: {
        wrongItems: ItemProps[];
        answerCount: number;
        questionTotal: number;
      }) => dispatch(setStatusAction(payload)),
      [dispatch]
    ),
  };
}

export default questionSlice.reducer;
