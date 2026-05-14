import GradeBox from "./GradeBox.jsx";

function GradeList({name, count, updateGrade, updateWeight}) {
    return <div className="GradeBox">
        {name}
        {Array.from({ length: count }, (_, i) => (<GradeBox key={`GB${i}`} i={i} updateGrade={updateGrade} updateWeight={updateWeight} />))}
    </div>
}
export default GradeList;