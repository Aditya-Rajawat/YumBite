import React from 'react'
import ReactDOM from 'react-dom/client'

// Creating React Element using core React

const parent = React.createElement("h1", {id : "heading"}, "Namaste-React")

// Creating React Element using JSX

const jsxheading = <h1>Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

// React functional component

const HeadingComponent = () => {
    return <h1>Heading Component</h1>
}   

root.render(jsxheading)
root.render(<HeadingComponent />)

// --------------------------------------------------------------------------------
    
const Title = () => {
    return <h1>Namaste-React 🚀 in JSX</h1>
}

// React Element
const heading1 = (
    <h1>Heading 1</h1>
)

const heading2 = (
    <>
    <h1>Heading 2</h1>
    {heading1}
    </>
)

const number = 1000;

// Component Composition
const HeadingComponent = () => (
    <>
    {heading1}
    {heading2}
    <h2>{number}</h2>
    {Title()}
    <Title />
    <Title></Title>
    <h1>React functional Component</h1>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)

