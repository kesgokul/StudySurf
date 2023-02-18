export function getStudentAssignments(student) {
  const assignments = student.classes.flatMap((c) => c.assignments);
  // if (!course) {
  //   return null;
  // }

  return assignments;
}

// export function getSubmittedAssignments(assignments) {
//     let submittedAssignments = [];

// }

export function formatDate(date) {
  return [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
}

export function getAllAssignments(classes) {
  return classes.flatMap((c) => c.assignments);
}
