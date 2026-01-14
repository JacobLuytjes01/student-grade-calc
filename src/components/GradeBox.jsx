function GradeBox({i, updateGrade, updateWeight}) {
    return (
        <div className="GridBox">
            <label htmlFor={"fName" + i}>Name</label>
            <input type="text" id={"fName" + i} name="fName"/>

            <label htmlFor={"gName" + i}>Grade</label>
            <input type="number" id={"gName" + i} name="gName"
                   onChange={e => updateGrade(i, e.target.value)}/>

            <label htmlFor={"wName" + i}>Weight</label>
            <input type="number" id={"wName" + i} name="wName"
                   onChange={e => updateWeight(i, e.target.value)}/>
        </div>
    )
}
export default GradeBox;