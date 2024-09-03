# Setup #
1. `npm init`
2. `npm install cypress`
3. `npx cypress open`

# Cypress Info #
- e2e - automation testes
- fixtures - data
- support - addons
- support/commands - global commends
- cypress.config.js - optional configuration  
    `baseUrl: 'http://www.automationpractice.pl',`  
    `includeShadowDom: true,`  
    `chromeWebSecurity: true,`  
    `viewportHeight: 1080,`  
    `viewportWidth: 1920`

# Snippets #
- Add to scripts -> later `npm run [script name]`
- Add to *.cy.js tests to enable cypress autocomplete `/// <reference types="Cypress" />`
