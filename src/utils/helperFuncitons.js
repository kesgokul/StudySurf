export function getStudentAssignments(student, classCode) {
  const course = student.classes.find((c) => c.classCode === classCode);
  if (!course) {
    return null;
  }

  return course.assignments;
}

// export function getSubmittedAssignments(assignments) {
//     let submittedAssignments = [];

// }

export function formatDate(date) {
  return [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
}
