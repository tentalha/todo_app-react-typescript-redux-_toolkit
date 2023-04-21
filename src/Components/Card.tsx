import {Button, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {removeTodo} from "../Reducers/Todo/todoSlice";
import {useDispatch} from "react-redux";

type propsType = {
    title: string;
    id: number
}
const Todo = ({title, id}: propsType) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Text>{title}</Card.Text>
                    <Button variant="outline-danger" onClick={() => dispatch(removeTodo(id))}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Todo;