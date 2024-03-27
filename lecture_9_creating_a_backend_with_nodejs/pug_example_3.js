const pug = require('pug');

/*
  One of the reasons to use a template engine like pug is that they
   support constructs like if-else statements
*/

const template = `
div
  if success
    h2.green Operation was successful
  else
    h2.red Operation was failed
    p please try again!
`

const renderedTemplate = pug.render(template, {
    success: Math.random() < 0.5
})

console.log(renderedTemplate);
