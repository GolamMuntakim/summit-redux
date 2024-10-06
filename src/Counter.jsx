
import Stats from "./Stats";
import Button from "./Button";


const Counter = ({count, handleDecrement, handleIncrement}) => {
    // const [count, setCount] = useState(0);
    // const handleIncrement = () =>{
    //     setCount((prevCount) =>prevCount + 1)
    // } 
    // const handleDecrement = () =>{
    //     setCount((prevCount) => prevCount - 1)
    // }
    return (
        <div className=" bg-slate-100 p-10 drop-shadow-md">
            <Stats count={count}></Stats>
            <div className="flex justify-center items-center gap-8 mt-10">
                <Button className="btn " handler={handleIncrement}>
                    Increment
                </Button>
                <Button type="danger" className="btn " 
                handler={handleDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;