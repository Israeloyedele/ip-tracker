export function Header(props:{ setSearchKey:  React.Dispatch<React.SetStateAction<number>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setIpAddress: React.Dispatch<React.SetStateAction<string>>}) {

    const { setSearchKey, setLoading, setIpAddress } = props;


    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(e: any) {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("search");
        setIpAddress(input?.value);
        setSearchKey(c => c+1);
        setLoading(true)
        input.value = "";
    }
    return (
        <div className="flex flex-col items-center justify-center px-5 pb-40">
            <div className="text-white text-3xl font-semibold p-5">IP Address Tracker</div>
                <form onSubmit={handleSubmit} className="flex w-full justify-center">
                    <input type="text"
                           className="bg-white py-3.75 px-5 focus:outline-none cursor-pointer border-none max-w-lg grow min-w-2xs rounded-l-2xl text-lg placeholder:text-[15px] placeholder:italic"
                           name="search"
                           placeholder="Search for any IP Address or domain"/>
                    <button
                        className="bg-gray-950 py-3.75 px-5 border-none rounded-r-2xl cursor-pointer hover:bg-gray-800"
                        type="submit"><img className="" src="/images/icon-arrow.svg" alt=""/></button>
                </form>
        </div>
    )
}