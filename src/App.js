import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/a6/*" element={<Assignment6 />} />
                    <Route path="/a7/*" element={<Assignment7 />} />
                    <Route path="/tuiter/*" element={<Tuiter />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;