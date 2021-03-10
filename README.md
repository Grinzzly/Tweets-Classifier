<h1 align="center">Tweets Classifier</h1>

<div align="center">
  <sub>The little twitter machine that speculates. Written by
    <a href="https://github.com/Grinzzly">Grinzzly</a>
  </sub>
  <br>
  <br>
  <a href="https://github.com/airbnb/javascript">
    <img src="https://img.shields.io/badge/Code%20Style-Airbnb-red.svg"
       alt="Airbnb">
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/60%25%20of%20the%20time-works%20every%20time-blue.svg" alt="Quality">
</div>

## About
General idea was to bring to life Neural Network that predict from random user-input phrase who is most likely to tweet it - Kim Kardashian, Donald J. Trump, or yours truly Me!

You may observe result [here](https://tweets-classifier.simplexco.de/)
  
![demo](public/images/demo.jpg)

## Installation & Usage

From the root of the project directory:
```
npm i
npm run start
```

_Use at least 14.16.0 version of Node._

**Info:** Apparently there is an [issue](https://github.com/nodejs/node-gyp/issues/223) in Node under v14.16.0 with `node-gyp` so if you use older version of Node .js you may need to install it for yourself - `sudo apt install node-gyp` or whatever you use there. 

## Technology in use

* __ReactJS based App__
* __Brain.js__
