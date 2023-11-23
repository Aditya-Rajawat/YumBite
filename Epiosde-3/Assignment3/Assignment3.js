const parent = React.createElement("div", {className : "title"}, 
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2"),
    React.createElement("h3")
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

const parent1 = (
    <div className='title'>
        <h1>Heading 2</h1>
        <h2></h2>
        <h3></h3>
    </div>
)

root.render(parent1)

const Parent3 = () => {
    return (
    <div className="title">
        <h1>Heading 3</h1>
        <h2></h2>
        <h3></h3>
    </div>
    )
}

const Parent4 = () => {
    return (
    <div className="title">
        <h1>Heading 4</h1>
        <h2></h2>
        <h3></h3>
        <Parent3 />
    </div>
    )
}

root.render(<Parent4 />)
