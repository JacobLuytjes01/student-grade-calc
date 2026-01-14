import {useState} from 'react'
import './App.css'
import GradeBoxTop from "./components/GradeBoxTop.jsx";

function App() {
    const [sets, setSets] = useState(2);
    const [grade, setGrade] = useState([]);
    const [weight, setWeight] = useState([]);

    function updateGrade(i, val) {
        const nextSets = [...grade];
        nextSets[i] = Number(val);
        setGrade(nextSets);
    }

    function updateWeight(i, val) {
        const nextSets = [...weight];
        nextSets[i] = Number(val);
        setWeight(nextSets);
    }

    function fullGrade() {
        let full = 0;
        for (let i = 0; i < sets; i++) {
            if (!(grade[i] === undefined || weight[i] === undefined)) {
                full += grade[i] * weight[i] / 100;
            }
        }
        return full;
    }

    const final = fullGrade();
    const letterGrades = ["A", "B", "C", "D"];
    const numberGrades = [90, 80, 70, 60]

    let letter = "F";
    for (let i = 0; i < numberGrades.length; i++) {
        if (final >= numberGrades[i]) {
            letter = letterGrades[i];
            break;
        }
    }

    return <main>
        <h1 className="grade">Grade {letter}: {final.toFixed(2)}%</h1>
        <GradeBoxTop name={"Grades"} count={sets} updateGrade={updateGrade} updateWeight={updateWeight}/>
        <button type="submit" id="Aname" onClick={() => setSets(sets+1)}>Add New</button>
    </main>
}
export default App