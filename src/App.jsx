import {useState} from 'react'
import './App.css'

function GradeBox(i, count, func, placement, setGrade, setWeight) {
    let labelBox = <br></br>;
    let buttonBox = <br></br>;
    if (i === count) {
        labelBox = <label htmlFor="Aname">Add</label>
        buttonBox = <button type="submit" id="Aname" onClick={() => func(placement)}>Submit</button>;
    }

    return (
        <div className="GridBox" key={i}>
            <label htmlFor={"fname" + i}>Name</label>
            <label htmlFor={"gname" + i}>Grade</label>
            <label htmlFor={"wname" + i}>Weight</label>
            {labelBox}
            <input type="text" id={"fname" + i} name="fname"/>
            <input type="text" id={"gname" + i} name="Gname" onChange={e => setGrade(i - 1, e.target.value)}/>
            <input type="text" id={"wname" + i} name="Wname" onChange={e => setWeight(i - 1, e.target.value)}/>
            {buttonBox}
        </div>
    )
}

function GradeBoxTop(name, count, func, placement, setGrade, setWeight) {
    const box = [];
    for (let i = 1; i <= count; i++) {
        box.push(GradeBox(i, count, func, placement, setGrade, setWeight));
    }

    return <div className="GradeBox">
        <div className="GradeBoxTop">{name}</div>
        {box}
    </div>
}

function App() {
    const [sets, setSets] = useState([Array(2).fill(1)]);
    const [grade, setGrade] = useState([Array(sets[0][0]).fill(0)]);
    const [weight, setWeight] = useState([Array(sets[0][0]).fill(0)]);

    function func(i) {
        const nextSets = sets.slice();
        nextSets[0][i] += 1;
        setSets(nextSets);
    }

    function graSet1(i, j) {
        const nextSets = grade.slice();
        nextSets[0][i] = j;
        setGrade(nextSets);
    }

    function weiSet1(i, j) {
        const nextSets = weight.slice();
        nextSets[0][i] = j;
        setWeight(nextSets);
    }

    function fullGrade() {
        let full = 0;
        for (let i = 0; i < sets[0][0]; i++) {
            if (!(grade[0][i] === undefined || weight[0][i] === undefined)) {
                full += grade[0][i] * weight[0][i] / 10000;
            }

        }
        return (full * 100).toFixed(2);
    }

    const final = fullGrade();
    const letterGrades = ["A", "B", "C", "D"];
    const numberGrades = [90, 80, 70, 60]

    let letter = "F";
    for (let i = numberGrades.length; i >= 0; i--) {
        if (final >= numberGrades[i]) {
            letter = letterGrades[i];
        }
    }

    return <>
        <div className="grade">Grade {letter}: {fullGrade()}%</div>
        {GradeBoxTop("Grades", sets[0][0], func, 0, graSet1, weiSet1)}
    </>
}

export default App