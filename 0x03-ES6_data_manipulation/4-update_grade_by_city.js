export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array && newGrades instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const g = (newGrades.filter((grade) => student.id === grade.studentId)[0]);
        const { grade } = g || { grade: 'N/A' };
        return {
          ...student,
          grade,
        };
      });
  }
  return [];
}
