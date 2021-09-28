import _ from "lodash";

function getUserExerciseMap(user) {
  const exercises = _.get(user, "completedExercises");
  return exercises.reduce((obj, current) => {
    if (!obj[current.exerciseId]) {
      obj[current.exerciseId] = current;
    }
    return obj;
  }, {});
}

export default {
  getUserExerciseMap,
};
