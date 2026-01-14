import GradeBox from "./GradeBox.jsx";

function GradeBoxTop({name, count, updateGrade, updateWeight}) {
    const box = new Array(count).fill(0);

    return <div className="GradeBox">
        {name}
        {box.map((grades, i) => <GradeBox key={`GB${i}`} i={i} updateGrade={updateGrade} updateWeight={updateWeight} />)}
    </div>
}
export default GradeBoxTop;