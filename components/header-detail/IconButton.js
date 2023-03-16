// import { GlobalOutlined, ReloadOutlined} from '@ant-design/icons';
function IconButton(props) {

    const {icon} = props;

    return (
        <div className="flex gap-2 items-center w-fit  leading-none bg-001C44 hover:bg-sky-700 text-white font-bold py-2 px-2 border border-blue-700 rounded">
            {icon}
        </div>
       
    )
}

export default IconButton;