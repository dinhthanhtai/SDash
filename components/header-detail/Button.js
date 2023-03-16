function Button(props) {

    const {firstIcon, buttonName, lastIcon} = props;

    return (
        <div className="flex gap-2 items-center w-fit  leading-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 border border-blue-700 rounded">
            {firstIcon}
            {buttonName}
            {lastIcon}
        </div>
    )
}

export default Button;