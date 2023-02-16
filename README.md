# PF-Testing
PF E2E Testing

## Requirements
node version v14.15.0
npm version v6.14.8

## How to run the all test locally
1. npm install
2. npm run cy:run

## How to run a subset of tests locally
1. npm run cy:run -- --spec **/account.spec.js
or open cypress and run the test manually
1. npm run cy:open

## To-do list
1. The page objects model
2. The e2e tests
3. The fixtures contains all the selectors and testing data
4. CircleCI integration - Done
5. Cypress result report (html) - Done
6. Cypress dashboard to check the performance of test - Done
7. BrowserStack multiple browser runs - Won't do
8. Encrypt/Decrypt all sensitive data - Won't do