import {useState} from 'react'
import './App.css'
import GradeList from "./components/GradeList.jsx";
import GradeThresholdBox from "./components/GradeThresholdBox.jsx";

function App() {
    const [grades, setGrades] = useState([0]);
    const [weights, setWeights] = useState([0]);
    const letterGrades = ["A", "B", "C", "D"];
    const [gradeThresholds, setGradeThresholds] = useState([90, 80, 70, 60]);
    const [isBasedOnWeights, setIsBasedOnWeights] = useState(false);
    const rows = grades.length;

    function updateArrayValue(i, val, oldVals, setFunc) {
        const nextVals  = [...oldVals];
        nextVals [i] = Number(val);
        setFunc(nextVals);
    }
    function updateGrade(i, val) {
        updateArrayValue(i, val, grades, setGrades);
    }
    function updateWeight(i, val) {
        updateArrayValue(i, val, weights, setWeights);
    }
    function updateGradeThresholds(i, val) {
        updateArrayValue(i, val, gradeThresholds, setGradeThresholds);
    }
    function addBox() {
        updateGrade(rows, 0);
        updateWeight(rows, 0);
    }
    function removeBox() {
        setGrades(grades.slice(0, -1));
        setWeights(weights.slice(0, -1));
    }

    function calculateFinalGrade() {
        let full = 0;
        for (let i = 0; i < rows; i++) {
            if (grades[i] && weights[i]) {
                full += grades[i] * weights[i] / 100;
            }
        }
        return full;
    }
    function calculateLetterGrade() {
        for (let i = 0; i < gradeThresholds.length; i++) {
            if (final >= gradeThresholds[i] * (isBasedOnWeights ? totalWeight / 100 : 1)) {
                return letterGrades[i];
            }
        }
        return "F"
    }

    const totalWeight = weights.reduce((accumulator, currentValue) => accumulator + (currentValue? currentValue : 0), 0);
    const final = calculateFinalGrade();
    const letter = calculateLetterGrade();

    return <main>
        <h1 className="grade">Grade {letter}: {final.toFixed(2)}% / {isBasedOnWeights ? totalWeight.toFixed(2) : "100"}%</h1>
        <GradeList name={"Grades"} count={rows} updateGrade={updateGrade} updateWeight={updateWeight}/>
        <button type="button" id="buttonAdd" onClick={addBox}>Add Assignment</button>
        {rows > 1 && <button type="button" id="buttonRemove" onClick={removeBox}>Remove Assignment</button>}
        <div>Settings</div>
        <div className="GradeBox">
            <div className="GridBox2">
                {letterGrades.map((letter, index) =>
                    <GradeThresholdBox key={"threshold" + index} gradeThreshold={gradeThresholds[index]} updateGradeThresholds={updateGradeThresholds} num={index} letter={letter} />
                )}
            </div>
        </div>
        <label>
            <input
                type="checkbox"
                checked={isBasedOnWeights}
                onChange={e => setIsBasedOnWeights(e.target.checked)}
            />
            Based upon current Weights
        </label>
    </main>
}
export default App