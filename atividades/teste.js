
const teachers = [1,3,41];

function addTeacher(teacherId, name, email, age) {
    teachers.push({ id: teacherId, naime: name, email, age });

}

addTeacher(1, 'João', 'joao@gmail.com', 38);

console.log(teachers)
