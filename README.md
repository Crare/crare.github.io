# Github page

Website is running at [https://crare.github.io](https://crare.github.io?ref=githubpage-readme)

React web app for github pages using Vite and Yarn.

## Setup
setup: 
```
cd my-app
yarn install
yarn dev
```

deploy: changes to `my-app/` pushed to `main` trigger the build and deploy workflow in `.github/workflows/deploy.yml`. Updates to `main` must go through a pull request.

Uses Vite + React + TypeScript
