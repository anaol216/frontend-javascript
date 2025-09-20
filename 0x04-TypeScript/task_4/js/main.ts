/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import Subjects from './subjects/Subject';

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingCpp: 10 };

console.log("Cpp");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());