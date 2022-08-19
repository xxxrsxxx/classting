import moment from "moment";
import { useQuestionStore } from "@src/store/classting/question";

export const useConsumedTime = () => {
  const { questionState } = useQuestionStore();
  let startTime = questionState.startTime;
  let endTime = questionState.endTime;
  const getConsumedTime = () =>
    moment(
      moment.duration(moment(endTime).diff(startTime)).asMilliseconds()
    ).format("mm:ss");
  return { getConsumedTime };
};
