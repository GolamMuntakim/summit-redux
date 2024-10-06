

const Button = ({children,type,handler}) => {
    const style = type === "danger" ? "bg-red-700 text-white p-2 rounded-md" : "bg-green-700 text-white p-2 rounded-md"
    return (
        <button className={style} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;