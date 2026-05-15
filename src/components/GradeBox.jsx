function GradeBox({i, updateGrade, updateWeight}) {
    return (
        <div className="GridBox">
            <label className="assignmentLabel" htmlFor={"fName" + i}>Assignment</label>
            <input type="text" id={"fName" + i} name="fName"/>

            <label className="assignmentLabel" htmlFor={"gName" + i}>Grade (0-100)</label>
            <input type="number" id={"gName" + i} name="gName"
                   onChange={e => updateGrade(i, e.target.value)}/>

            <label className="assignmentLabel" htmlFor={"wName" + i}>Weight (0-100)</label>
            <input type="number" id={"wName" + i} name="wName"
                   onChange={e => updateWeight(i, e.target.value)}/>
        </div>
    )
}
export default GradeBox;