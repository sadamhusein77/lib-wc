// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import reactToWebComponent from 'react-to-webcomponent'
// import MyButton from './components/MyButton'
// import styles from './generated-styles.css?inline'

// // Wrap your React component to include the Tailwind styles inside Shadow DOM
// const StyledButton = (props: any) => (
//   <>
//     <style>{styles}</style>
//     <MyButton {...props} />
//   </>
// )

// // Convert to Web Component
// const MyButtonWC = reactToWebComponent(StyledButton, React, ReactDOM, {
//   shadow: "open", // isolates CSS
// })

// // Register the element
// customElements.define('my-react-button', MyButtonWC)
