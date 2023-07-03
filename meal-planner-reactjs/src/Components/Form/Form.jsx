import './Form.css';

const Form =()=>{
    return(
        <div className="form-container">
             <input className="form-tab" id="height" type="number" placeholder="Enter Height in cm"/>
        <input className="form-tab" id="weight" type="number" placeholder="Enter Weight in kg"/>
        <input className="form-tab" id="age" type="number" placeholder="Enter Age"/><br/>
        <select name="gender" id="gender" className="form-tab">
            <option>Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <select name="physical-activity" className="form-tab" id="activity-level">
            <option value="">Activity Level</option>
            <option value="light">Lightly active (exercise 1–3 days/week)</option>
            <option value="moderate">Moderately active (exercise 3–5 days/week)</option>
            <option value="active">Active (exercise 6–7 days/week)</option>
        </select><br/>
        <button className="form-tab" id="button" type="submit">Generate</button>
        </div>
    )
}

export default Form;
