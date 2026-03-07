
export function Header(props:{ setSearchKey: React.Dispatch<React.SetStateAction<number>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setIpAddress: React.Dispatch<React.SetStateAction<string>>}) {

    const { setSearchKey, setLoading, setIpAddress } = props;


    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(e: any) {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("search");
        setIpAddress(input?.value);
        setSearchKey(c => c+1);
        setLoading(true)
    }
    return (
        <div>
            <div className="page-title">IP Address Tracker</div>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                           name="search"
                           placeholder="Search for any IP Address or domain"/>
                    <button type="submit">search</button>
                </form>
            </div>
        </div>
    )
}