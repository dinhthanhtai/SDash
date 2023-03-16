import ChainButton from './ChainButton'

function ChainMenu(){
    return (
        <div className="flex gap-4 m-6">
            <ChainButton chainName="All chain" balance={78}/>
            <ChainButton chainName="Polygon" balance={72}/>
            <ChainButton chainName="BSC" balance={76}/>
        </div>
    )
}

export default ChainMenu;