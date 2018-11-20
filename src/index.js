import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react'

function domElementGetter() {
	return document.getElementById('snowcap')
}

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap
];
export const mount = [
  reactLifecycles.mount
];
export const unmount = [
  reactLifecycles.unmount
];
