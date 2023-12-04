export default function getStudentsByLocation(studentsList, city) {
  if (typeof city !== 'string') {
    return [];
  }

  return studentsList.filter((student) => student.location === city);
}
