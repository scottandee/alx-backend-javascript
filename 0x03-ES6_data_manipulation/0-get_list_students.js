export default function getListStudents() {
  const studentsList = [];
  const names = ['Guilliame', 'James', 'Serena'];
  const id = [1, 2, 5];
  const locate = ['San Francisco', 'Columbia', 'San Francisco'];

  for (let i = 0; i < names.length; i += 1) {
    const obj = {
      id: id[i],
      name: names[i],
      location: locate[i],
    };
    studentsList.push(obj);
  }
  return (studentsList);
}
