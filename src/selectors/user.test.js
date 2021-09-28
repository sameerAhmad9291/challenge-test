import selectors from "./user";

const example = {
  id: 1,
  email: "test@test.com",
  completedExercises: [
    {
      completedAt: "2020-08-25 08:30:00",
      exerciseId: 1,
    },
    {
      completedAt: "2020-08-25 09:45:00",
      exerciseId: 2,
    },
  ],
};

const result = {
  1: {
    completedAt: "2020-08-25 08:30:00",
    exerciseId: 1,
  },
  2: {
    completedAt: "2020-08-25 09:45:00",
    exerciseId: 2,
  },
};

describe("User Selectors", () => {
  describe("getUserExerciseMap", () => {
    it("returns the user exercises in map", () => {
      expect(selectors.getUserExerciseMap(example)).toEqual(result);
    });
  });
});
