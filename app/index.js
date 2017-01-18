/**
 * Created by h on 2017/1/16.
 */
var obj=require('./js/1');
var $=require('jqueryRoute');
console.log(obj);
console.log($);
const sum=(a,b)=>a+b;
let a=12;
let b=18;
console.log(sum(a,b));
// zepto
var zepto=require('zepto');
zepto('#app').html('hello externals')
//react
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './js/react-1';
var oDiv=document.getElementById('react');
ReactDOM.render(<Message>hello</Message>,oDiv);
//img
var img=require('./images/1.jpg');
$('#img').html('<img src='+img+' alt=""/>');

