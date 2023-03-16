import AssetDetail from "./AssetDetail";

function WalletDetail() {

    const rowWidth = "w-56"
    return (
            <table className="table-auto bg-blue-500 p-6 bg-opacity-30">
                <thead className="h-24">
                    <tr>
                    <th className={rowWidth}>Asset</th>
                    <th className={rowWidth}></th>
                    <th className={rowWidth}>Balance</th>
                    <th className={rowWidth}>Price</th>
                    <th className={rowWidth}>Holdings</th>
                    </tr>
                </thead>
                <tbody>
                    <AssetDetail/>
                    <AssetDetail/>
                    <AssetDetail/>
                </tbody>
            </table>
    )
}

export default WalletDetail;