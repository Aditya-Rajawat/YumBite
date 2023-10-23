const Contact = () => {
    return (
        <div className="m-4 p-4">
        <h1 className="font-bold text-2xl m-4">Contact Us Page</h1>
        <form action="">
            <input className="border border-black m-4 p-4 rounded-md" type="text" placeholder="name"/>
            <input className="border border-black m-4 p-4 rounded-md" type="text" placeholder="message"/>
            <button className="text-white bg-blue-400 m-4 p-4 rounded-md hover:bg-blue-500" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Contact