'use strict';

function styleToObject(str) {
    let resObj = {};
    let arr = str.split(';');
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i].slice(3,arr[i].length);
        let key = arr[i].split(': ');
        resObj[key[0]] = key[1];
    }

    return resObj;
}

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

let objStyle = styleToObject(style);
