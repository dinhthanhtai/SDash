import Image from "next/image";

function AssetDetail(props){

    const {coinImage, assetName, balance, price, holding} = props.coinList;

    const rowWidth = ""
    return (
        <tr className="h-24 text-center border-t-2 border-slate-600 hover:bg-slate-900 cursor-pointer hover:shadow-inner items-center">
            <td className={rowWidth}><div className="flex justify-center"><Image src={coinImage} width="60" height="60" alt="coin logo" className="rounded-full w-8"/></div></td>
            <td className={rowWidth}>{assetName}</td>
            <td className={rowWidth}>{balance} {assetName}</td>
            <td className={rowWidth}>{price}</td>
            <td className={rowWidth}>${holding}</td>
        </tr>
    )
}
export default AssetDetail;