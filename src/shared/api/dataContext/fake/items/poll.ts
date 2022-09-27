import { QuestionVariants } from "../../../../../features/Question/ui/types";
import { PollDTO } from "@src/shared/api/dto";

export const pollData: PollDTO = {
  session_id: "7141730259615091610",
  title: "Тестовый опрос",
  questions: [
    {
      entries:
        "<entries><entry><id>74674024</id><value>Владимир Владимирович</value></entry><entry><id>13780618</id><value>Иван Иванович</value></entry><entry><id>46750419</id><value>Сергей Пушкин</value></entry></entries>",
      question_id: "40375603",
      question_title: "Как зовут президента РФ?",
      question_type: QuestionVariants.CHOISE,
      image_id: "/download_file.html?file_id=6478156235690485621",
      is_multiple: "",
      required: "1",
    },
    {
      entries:
        "<entries><entry><id>50139462</id><value>Красный</value></entry><entry><id>36120274</id><value>Синий</value></entry><entry><id>72114309</id><value>Белый</value></entry></entries>",
      question_id: "51664105",
      question_title: "Выбери несколько цветов",
      question_type: QuestionVariants.SELECT,
      is_multiple: "",
    },
    {
      entries:
        "<entries><entry><id>57459400</id><value>а</value></entry><entry>	<id>17286759</id>	<value>б</value></entry><entry>	<id>81271859</id>	<value>в</value></entry><entry><id>11415176</id><value>г</value></entry><entry><id>63707349</id><value>д</value></entry></entries>",

      question_id: "34914968",
      question_title: "Упорядочь буквы по возрастанию",
      image_id: "/download_file.html?file_id=6457045127844684059",
      question_type: QuestionVariants.ORDER,
      is_multiple: "",
    },
    {
      entries:
        "<entries><entry><id>85325869</id><value>365</value></entry><entry><id>16600971</id><value>1365</value></entry><entry><id>40053708</id><value>274</value></entry></entries>",
      question_id: "47538024",
      question_title: "Сколько дней в году?",
      question_type: QuestionVariants.COMBO,
      is_multiple: "",
    },
    {
      question_id: "66132348",
      question_title: "Укажи свое ФИО",
      question_type: QuestionVariants.STRING,
      is_multiple: "",
    },
    {
      question_id: "91654407",
      question_title: "Расскажи как ты провел это лето",
      question_type: QuestionVariants.TEXT,
      is_multiple: "",
    },
    {
      question_id: "64902585",
      question_title: "Напиши любимое число",
      question_type: QuestionVariants.NUMBER,
      is_multiple: "",
    },
    {
      question_id: "34955567",
      question_title: "Напиши свою дату рождения",
      question_type: QuestionVariants.DATE,
      is_multiple: "",
    },
    {
      question_id: "33492257",
      question_title: "ссылка на объект в базе",
      question_type: QuestionVariants.LINK,
      is_multiple: "1",
      catalog: "collaborator"
    },
    {
      question_id: "50336995",
      question_title: "файл",
      question_type: QuestionVariants.FILE,
      is_multiple: "",
    },
    {
      question_id: "97801102",
      question_title: "Понравился опрос?",
      question_type: QuestionVariants.BOOL,
      is_multiple: "",
    },
  ],
};
