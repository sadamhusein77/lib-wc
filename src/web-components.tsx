import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebComponent from 'react-to-webcomponent'
import MyButton from './components/MyButton'

// Convert React component to a Web Component
const MyButtonWC = reactToWebComponent(MyButton, React, ReactDOM)

// Define it as a custom element
customElements.define('my-react-button', MyButtonWC)
