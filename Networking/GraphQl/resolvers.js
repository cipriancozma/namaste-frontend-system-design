export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Ciprian C",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "The Survivor",
          publishedYear: 2024,
        },
      ];
    },
  },
};
