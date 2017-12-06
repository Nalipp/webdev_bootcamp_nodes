let person1 = {
  name: 'nate',
  job: 'teacher'
}

function updatePerson(obj, name, job) {
  return {...obj, name, job};
}

// function updateJob(obj, job) {
//   return Object.assign({}, obj, {job});
// }

console.log(updatePerson(person1, 'Nate Lipp', 'developer'));
console.log(person1);
