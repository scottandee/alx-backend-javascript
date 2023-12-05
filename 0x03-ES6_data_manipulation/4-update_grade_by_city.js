export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsInCity = studentsList.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const newStudent = { ...student };
    const gradeObj = newGrades.filter((grade) => student.id === grade.studentId);
    if (gradeObj.length === 0) {
      newStudent.grade = 'N/A';
    } else {
      newStudent.grade = gradeObj[0].grade;
    }
    return newStudent;
  });
}
