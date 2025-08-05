export type NewsItem = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Nowy regulamin działek",
    content: "Od sierpnia obowiązuje nowy regulamin...",
    date: "2025-07-15",
  },
  {
    id: 2,
    title: "Zebranie zarządu",
    content: "Zapraszamy wszystkich działkowców na zebranie...",
    date: "2025-07-10",
  },
  {
    id: 3,
    title: "Nowe kosze na śmieci",
    content: "Na terenie ogrodu pojawiły się nowe kosze...",
    date: "2025-07-05",
  },
  {
    id: 4,
    title: "Prace porządkowe",
    content: "W weekend odbędą się prace porządkowe...",
    date: "2025-06-30",
  },
];
