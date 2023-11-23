const Contact = () => {
    return (
        <div className="m-24 p-10 flex flex-col items-center">
        <h1 className="font-semibold text-2xl m-4">Contact Us Page</h1>
        <form className="flex flex-col" action="">
            <input className="border border-gray-800 border-x-0 border-t-0 m-4 p-4 " type="text" placeholder="Name"/>
            <input className="border border-gray-800 border-x-0 border-t-0 m-4 p-4 " type="text" placeholder="Email"/>
            <textarea className=" m-4 p-4 rounded-md bg-slate-100" type="text" placeholder="Message"/>
            <button className="text-white bg-black m-4 p-4 rounded-md hover:bg-orange-500 hover:border-[0.5px]" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Contact