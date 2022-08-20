export interface QuestionItemProps {
  id: string;
  difficulty: string;
  question: string;
  answerList?: Array<ItemProps>;
}

export interface StatusProps {
  result: string;
  selected: boolean;
  answerCount: number;
  wrongItems: Array<ItemProps>;
}

export interface QuestionListProps {
  items: Array<ItemProps>;
  status: StatusProps;
  selectedHandler: (e: ItemProps) => void;
}

export interface ListProps {
  id: string;
  answerItems: [];
  difficulty: "string";
  question: "string";
}

export interface ItemProps {
  answer: string;
  content: string;
  question: string;
  id: number;
  value: boolean;
}
