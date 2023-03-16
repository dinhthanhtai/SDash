import { Collapse } from 'antd';
import WalletDetail from './WalletDetail';
import WalletTotal from './WalletTotal';
const { Panel } = Collapse;


const text = <WalletDetail/>;
const Accordian = () => {
  const onChange = (key) => {
    console.log(key);
  };

  
  
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange} className="mx-5  border-blue-400 bg-blue-500 bg-opacity-30">
      <Panel  header={<WalletTotal/>} key="1" >
        {text}
      </Panel>
      
    </Collapse>
  );
};

export default Accordian;