export default function getListStudents() {
  const studentsList = [];
  const firstNames = ['Guilliame', 'James', 'Serena'];
  const id = [1, 2, 5];
  const locate = ['San Francisco', 'Columbia', 'San Francisco'];

  for (let i = 0; i < firstNames.length; i += 1) {
    const obj = {
      id: id[i],
      firstName: firstNames[i],
      location: locate[i],
    };
    studentsList.push(obj);
  }
  return (studentsList);
}
