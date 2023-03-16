function ChainButton(props) {

    const {chainName, balance} = props;

    return (
        <div className="border-2 border-blue-400 w-40 h-16 rounded-lg p-2 bg-opacity-30 bg-blue-500 cursor-pointer">
        <h4>{chainName}</h4>
        <p>${balance}</p>

        </div>
    )
}

export default ChainButton;

