const pug = require('pug');

const template = `
h1 Hello #{name}
`

const renderedTemplate = pug.render(template, {
    name: 'Arthur'
})

console.log(renderedTemplate);
