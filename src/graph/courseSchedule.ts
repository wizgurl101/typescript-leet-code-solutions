// https://leetcode.com/problems/course-schedule/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let prerequisiteMap = new Map();

  // create a hash map for all course with empty array for prerequisites
  for (let i = 0; i < numCourses - 1; i++) {
    prerequisiteMap.set(i, []);
  }

  // add the prerequisites
  for (const [course, prerequisite] of prerequisites) {
    let temp = prerequisiteMap.get(course);
    temp.push(prerequisite);

    prerequisiteMap.set(course, temp);
  }

  let visited = new Set();

  function dfs(course: number) {
    if (visited.has(course)) return false;

    if (prerequisiteMap.get(course).length === 0) return true;

    visited.add(course);

    for (let prerequisite of prerequisiteMap.get(course)) {
      if (!dfs(prerequisite)) return false;
    }

    visited.delete(course);
    prerequisiteMap.set(course, []);

    return true;
  }

  for (let i = 0; i < numCourses - 1; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

function canFinish2(numCourses: number, prerequisites: number[][]): boolean {
  const prerequisiteMap = new Map();
  const visitSet = new Set();

  // map each course to prerequisite list
  for (let i = 0; i < numCourses; i++) prerequisiteMap.set(i, []);
  for (let [course, prerequisite] of prerequisites)
    prerequisiteMap.get(course).push(prerequisite);
  //

  const dfs = (course: number) => {
    // if we have visited this course before, it's a cycle return false
    if (visitSet.has(course)) return false;
    // if there is no prerequisite for this course, return true
    if (prerequisiteMap.get(course).length === 0) return true;

    // currently visiting this course
    visitSet.add(course);
    for (let prerequisite of prerequisiteMap.get(course)) {
      if (!dfs(prerequisite)) return false;
    }
    // we're no longer visiting this course
    visitSet.delete(course);

    // this course can be taken so for optimization we can
    // cache it by making its prerequisites an empty list
    // so that we don't have to repeat the process for this
    // course again (next time it'll return true immediately
    // on line 15)
    prerequisiteMap.set(course, []);

    return true;
  };

  // we have to manually go through every course since the
  // graph nodes might not be fully connected
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}
