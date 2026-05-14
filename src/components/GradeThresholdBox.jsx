function GradeThresholdBox({gradeThreshold, updateGradeThresholds, num, letter}) {
    return (
        <>
            <label htmlFor={"pName"+num}>{letter} Grade</label>
            <input type="number" name={"pName"+num} value={gradeThreshold}
                   onChange={e => updateGradeThresholds(num, e.target.value)}/>
        </>
    );
}

export default GradeThresholdBox;