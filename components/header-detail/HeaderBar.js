import { Space } from 'antd';
import Button from './Button'
import SearchBar from './SearchBar'
import IconButton from './IconButton';
import {WalletOutlined, LinkOutlined, UserOutlined, RightOutlined, GlobalOutlined, ReloadOutlined, ClockCircleOutlined} from '@ant-design/icons';

function HeaderBar(){
    return (
        <div className="flex gap-10 m-3 items-center">
            <SearchBar ></SearchBar>
            <Button firstIcon={<WalletOutlined />} buttonName="Connect Wallet" lastIcon={<LinkOutlined/>}/>
            <Button firstIcon={<UserOutlined />} buttonName="Sign In/Sign Up" lastIcon={<RightOutlined />}/>
            <IconButton icon={<GlobalOutlined/>}/>
            <IconButton icon={<ClockCircleOutlined/>}/>
            <IconButton icon={<ReloadOutlined/>}/>
        </div>
    )
}

export default HeaderBar;