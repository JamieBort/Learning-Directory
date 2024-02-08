# Render

## Dashboard

https://dashboard.render.com/

## Documentation

https://docs.render.com/

### Monorepo The frontend and backend directories are both in the root directory.

- https://docs.render.com/monorepo-support

### Environment Variables

- https://docs.render.com/configure-environment-variables

- https://docs.render.com/environment-variables

In [this](https://github.com/JamieBort/jamiebort.github.io/blob/back_end_express/backend/app.js) file I have `const accessToken = process.env.GITHUB_ACCESS_TOKEN;`.

Following this [Environment Variables and Secrets](https://docs.render.com/configure-environment-variables#configuring-secrets-and-other-environment-information-on-render) document, I used `GITHUB_ACCESS_TOKEN` as the `Key` and the GitHub access token as the `Value`.

### Deploy Documentation

Note, documentation for Vite + React doesn't exist. See https://docs.render.com/
Had an error deploying: `Publish directory build does not exist!`

This [Vite App build folder not found!](https://community.render.com/t/vite-app-build-folder-not-found/9516) Render article said to replace `build` in the `Publish directory` field of the [deploy settings](https://dashboard.render.com/static/srv-cmtcj88cmk4c738mspsg/settings) with `dist`.

This was the solution. (I had `build` in that field for when I was deploying a straight React app.)

#### Node (server as static site)

https://docs.render.com/deploy-nextjs-app

#### NextJS (server as static site)

https://docs.render.com/deploy-nextjs-app

#### React (static site)

https://docs.render.com/deploy-create-react-app

#### Troubleshooting Deploys

https://docs.render.com/troubleshooting-deploys

## Directories and Files

### Directories

### Files

- README.md

  - This readme file.

## Associated Links
