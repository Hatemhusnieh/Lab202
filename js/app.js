'use strict'
let n = prompt('what is your name? ');
alert('Hello '+ n+' I hope you are doing well');
let q1 = prompt('Am I above 25?');
if (q1.toLowerCase()==='yes'|| q1.toUpperCase()==='Y') {
  //console.log('you are correct!!!'); 
  alert('you are correct!!!'); 
} else {
  //console.log('I am afraid you are mistaken');
  alert('I am afraid you are mistaken');
}
let q2 = prompt('Did I studied a scientific  major?');
if (q2.toLowerCase()==='yes'|| q2.toUpperCase()==='Y') {
  //console.log('yup!');
  alert('yup!'); 
} else {
  //console.log('unfortunately no !');
  alert('unfortunately no !');
}
let q3=prompt('Have I worked before?');
if (q3.toLowerCase()==='yes'|| q3.toUpperCase()==='Y') {
  //console.log('thar is allright');
  alert('thar is allright');
} else {
  //console.log('nop! I have');
  alert('nop! I have');
}
let q4=prompt('Do I love anime ?');
if (q4.toLowerCase()==='yes'|| q4.toUpperCase()==='Y') {
  //console.log('well sure I love it!!');
  alert('well sure I love it!!');
} else {
  //console.log('NOW why you do not think so!!!');
  alert('NOW why you do not think so!!!');
}
let q5=prompt('Do I game ?');
if (q5.toLowerCase()==='yes'|| q5.toUpperCase()==='Y') {
  //console.log('Hell Yeah!');
  alert('Hell Yeah!');
} else {
  //console.log('you hate life apparently!');
  alert('you hate life apparently!');
}
document.write('Hello '+n+' !');

