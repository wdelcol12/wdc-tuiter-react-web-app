import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";

import Nav from "../../nav";

function Assignment6() {
    return (
        <div>
            <Nav />
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;