import Add2Watchlist from "./Add2Watchlist"
import AddressWallet from "./AddressWallet"
import SubAddress from "./SubAddressWallet"
import iconWallet from "./IconWallet"
import { Layout, Space, theme, Menu, Row, Col} from 'antd';
import {} from '@ant-design/icons';
import IconWallet from "./IconWallet";
import SubAddressWallet from "./SubAddressWallet";

function GeneralWallet(){
    return (
        <>
            <Layout>
                {/* <IconWallet image = {""}>

                </IconWallet> */}
                
                <Layout style={{
              background: "#001C44",
            }}>
                    <AddressWallet>

                    </AddressWallet>
                    <SubAddressWallet style={{lineHeight: '20px'}}>
                    </SubAddressWallet>
                </Layout>
            </Layout>
        </>
    )
}

export default GeneralWallet;