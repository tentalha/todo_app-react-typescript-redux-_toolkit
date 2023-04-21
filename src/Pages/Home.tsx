import Header from "../Components/Header";
import Todo from "../Components/Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {ChangeEvent, useState} from "react";
import {addTodo} from "../Reducers/Todo/todoSlice";

// --------------------------------------------------------------------------------------->>
const Home = () => {

// --------------------------------------------------------------------------------------->>
    //Redux
    const {todos} = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();
// --------------------------------------------------------------------------------------->>
    //State
    const [input, setInput] = useState("");
// --------------------------------------------------------------------------------------->>
    //Helpers
    const add = () => {
        dispatch(addTodo({id: todos.length + 1, title: input}));
        setInput("");
    };
// --------------------------------------------------------------------------------------->>
    //JSX
    return (
        <div>
            <Header/>
            <div className="my-3 text-center">
                <h1 className="text-center my-3 text-muted">Add a Todo</h1>
                <div className="d-flex justify-content-center align-content-center">
                    <input className="rounded-3" value={input}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}/>
                    <button className="btn btn-primary mx-2"
                            onClick={add}>Add
                    </button>
                </div>
                <hr/>
            </div>
            <div className="w-100 row">
                {
                    (todos.length) ? todos.map(item => {
                        return <div className="col mx-3 my-3" key={item.id}>
                            <Todo title={item.title} id={item.id}/>
                        </div>;
                    }) : <h1 className="text-center mt-3 text-decoration-line-through">No Todos</h1>
                }
            </div>
        </div>
    );
};
// --------------------------------------------------------------------------------------->>
export default Home;