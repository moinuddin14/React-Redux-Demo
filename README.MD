# Usage
Switch to the branch you're interested in (branches = different stages in the series) and compare/ download the source code.

// Run below command if running from Windows
**_"build": "webpack -d && xcopy src\\index.html dist\\index.html && webpack-dev-server --content-base src\\ --inline --hot --history-api-fallback"**_
**_"build:prod": "webpack -p && xcopy src\\index.html dist\\index.html"_**

// Replace webpack npm commands with below if running from Mac or Unix
**_"build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot --history-api-fallback"_**
**_"build:prod": "webpack -p && cp src/index.html dist/index.html"_**