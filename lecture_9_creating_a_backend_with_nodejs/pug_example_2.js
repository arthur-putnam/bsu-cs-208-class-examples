const pug = require('pug');

/*
  One of the reasons to use a template engine like pug is that they
   support constructs like loops
*/

const template = `
h1 Hello #{name}
Our records show that you teach:
ul
    each val in courses
        li= val
`

const renderedTemplate = pug.render(template, {
    name: 'Arthur',
    courses: ['CS 208', 'CS 310', 'CS 271', 'CS 410', 'CS 510']
})

console.log(renderedTemplate);
