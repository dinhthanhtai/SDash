import GeneralWallet from "./GeneralWallet"
import Add2Watchlist from "./Add2Watchlist"
import IconButton from "../header-detail/IconButton" 
import {ShareAltOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {Col, Row} from 'antd';
function Wallet(){
    return (
        <div className="flex gap-10 m-3 items-center">
            <GeneralWallet />
            <IconButton icon={<ShareAltOutlined/>}>
            </IconButton>
            <Add2Watchlist firstIcon={<PlusCircleOutlined />} buttonName = "Add to Watchlist">

            </Add2Watchlist>
        </div>
    )
}

export default Wallet;