import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemProps, ListProps, StatusProps } from "@src/type";

import {
  setTimeAction,
  setStatusAction,
  useQuestionStore,
} from "@src/store/classting/question";
import moment from "moment";

interface Props {
  data: {
    items: Array<ListProps>;
  };
}

const useQuestion = ({ data }: Props) => {
  let navigate = useNavigate();
  const { dispatch } = useQuestionStore();
  const init = {
    selected: false,
    result: "",
  };
  const [step, setStep] = useState<number>(0);
  const [status, setStatus] = useState<StatusProps>({
    ...init,
    answerCount: 0,
    wrongItems: [],
  });

  const question = useMemo(() => {
    return data.items[step];
  }, [data.items, step]);

  const selectedHandler = useCallback(
    (item: ItemProps) => {
      if (status.selected) return;
      let resultMsg = item.value ? "answer" : "wrong";
      if (item.value)
        setStatus((state) => ({
          ...state,
          result: resultMsg,
          selected: true,
          answerCount: state.answerCount + 1,
        }));
      else
        setStatus((state) => ({
          ...state,
          result: resultMsg,
          selected: true,
          wrongItems: [...state.wrongItems, item],
        }));
    },
    [status]
  );

  const nextQuestion = useCallback(() => {
    if (step === question.answerItems.length) {
      dispatch(setTimeAction({ type: "end", time: moment() }));
      navigate(`/result`);
    }
    setStep((state) => state + 1);
    setStatus((state) => ({ ...state, result: "", selected: false }));
    dispatch(
      setStatusAction({
        wrongItems: status.wrongItems,
        answerCount: status.answerCount,
        questionTotal: 5,
      })
    );
  }, [step, question, status, dispatch, navigate]);

  return {
    step,
    status,
    question,
    selectedHandler,
    nextQuestion,
  };
};

export default useQuestion;
