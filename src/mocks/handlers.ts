import { rest } from "msw";

export const handlers = [
  rest.get("https://opentdb.com/api.php", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response_code: 0,
        results: [
          {
            category: "Entertainment: Television",
            type: "multiple",
            difficulty: "easy",
            question:
              "What is the name of the main character in &quot;The Flash&quot; TV series?",
            correct_answer: "Barry Allen",
            incorrect_answers: ["Oliver Queen", "Bart Allen", "Bruce Wayne"],
          },
          {
            category: "Entertainment: Film",
            type: "multiple",
            difficulty: "hard",
            question:
              "In Big Hero 6, what were Baymax&#039;s motions modeled after?",
            correct_answer: "Baby penguins",
            incorrect_answers: ["Baby monkeys", "Baby ostriches", "Baby bears"],
          },
          {
            category: "Science & Nature",
            type: "multiple",
            difficulty: "hard",
            question: "What is &quot;Stenoma&quot;?",
            correct_answer: "A genus of moths",
            incorrect_answers: [
              "A combat stimulant from WW2",
              "A type of seasoning",
              "A port city in the carribean",
            ],
          },
          {
            category: "Entertainment: Music",
            type: "multiple",
            difficulty: "medium",
            question:
              "Which member of the British pop group &quot;The Spice Girls&quot; was known as Ginger Spice?",
            correct_answer: "Geri Halliwell",
            incorrect_answers: [
              "Melanie Brown",
              "Emma Bunton",
              "Victoria Beckham",
            ],
          },
          {
            category: "Entertainment: Music",
            type: "multiple",
            difficulty: "hard",
            question:
              "Which member of the Wu-Tang Clan had only one verse in their debut album Enter the Wu-Tang (36 Chambers)?",
            correct_answer: "Masta Killa",
            incorrect_answers: ["Method Man", "Inspectah Deck", "GZA"],
          },
        ],
      })
    );
  }),
];
