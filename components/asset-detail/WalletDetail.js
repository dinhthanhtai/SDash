import AssetDetail from "./AssetDetail";

function WalletDetail(props) {

    const rowWidth = "w-56"

    const coinList = [
        {coinImage: '/images/bnb.png', assetName: 'BNB', balance: 2.231, price: 234.213,  holding: 587.036 },
        {coinImage: '/images/matic.png', assetName: 'MATIC', balance: 2.231, price: 234.213,  holding: 587.036 },
        {coinImage: '/images/solana.png', assetName: 'SOL', balance: 2.231, price: 234.213,  holding: 587.036 } 
    ]
      
    return (
            <table className="table-auto text-white border-collapse">
                <thead className="">
                    <tr>
                    <th className={rowWidth}>Asset</th>
                    <th className={rowWidth}></th>
                    <th className={rowWidth}>Balance</th>
                    <th className={rowWidth}>Price</th>
                    <th className={rowWidth}>Holdings</th>
                    </tr>
                </thead>
                <tbody>
                    {coinList.map( coinInfo => {
                       return <AssetDetail coinList={coinInfo}/>
                    })
                    }
                </tbody>
            </table>
    )
}

export default WalletDetail;