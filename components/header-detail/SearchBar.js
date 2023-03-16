import { UserOutlined,SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';

function SearchBar(props){
    return(
        <>
        <Input className="w-1/3" maxLength={20} placeholder="Nhập gì đó đi" prefix={<SearchOutlined />} />
        </>
    )
}
export default SearchBar;
