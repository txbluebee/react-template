# Webpack 3 template
A basic webpack 3 template to start with any JS/ES6 based project.
<br>

## Guide
[Webpack 3 quickstarter: Configure webpack from scratch](https://medium.com/@nirjhor123/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a)
<br>
## Install dependencies

```
npm install
```


## Develop locally with webpack-dev-server
1. Run

```
npm run dev
```

2. In your browser, navigate to: [http://localhost:2000/](http://localhost:2000/)
## For bundled output

```
npm run build
```

## For production-ready output

```
npm run build:prod
```

## Push to github pages

```
npm run build:prod // create dist folder
```
create new repository in github

```
git remote add origin [repository name]
```
```
git checkout -b gh-pages
```
```
git subtree push --prefix dist origin gh-pages
```
Deployment project would be "http://[userId].github.io/[repository name]"




## Loaders and Plugins used in this boilerplate

### Loaders
* babel-loader
* html-loader
* sass-loader
* css-loader
* style-loader
* file-loader

### Plugins
* clean-webpack-plugin
* extract-text-webpack-plugin
