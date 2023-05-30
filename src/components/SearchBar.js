const SearchBar = () => {
    return (
        <div className="container px-5 pb-10 mx-auto flex grow justify-center">
            <div className="">
            <input
                className="h-10 md:w-[400px] rounded-l-lg bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/10 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text" placeholder="What are you looking for.." />
            <button
                className="flex-shrink-0 text-white bg-green-500 border rounded-r-lg py-2.5 px-8 focus:outline-none hover:bg-green-600 rounded text-sm mt-10 sm:mt-0">
                Search
            </button>
            </div>
        </div>
    )
}

export default SearchBar;