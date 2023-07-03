import './Steps.css';

const Steps=()=>{
    return(
       <div className="container-para">
            <h1 className="heading">Meal Planning Got Easy</h1>
            <p className="para">Get organized meals with Meal Planner. Our Meal Planning App helps you customize your weekly meal based on your body features like height, weight, age, gender, and activity level.</p>
        <div className="steps-container">
           <div className="steps">
               <img className="step-img" src="https://www.svgrepo.com/show/457685/form.svg" alt='steps' scale="0"/><br/>
               <span className="num">1</span><br/>
               <span className="step-text">Fill out the form</span>
           </div>
           <div className="steps">
            <img className="step-img" src="https://www.eatwell101.com/wp-content/plugins/eric-meal-planner/assets/images/phone.jpg" alt='steps' scale="0"/><br/>
            <span className="num">2</span><br/>
            <span className="step-text">Choose your meal</span>
           </div>
           <div className="steps">
            <img className="step-img" src="https://www.svgrepo.com/show/4638/rice.svg" alt='steps' scale="0"/><br/>
            <span className="num">3</span><br/>
            <span className="step-text">Get the recipe of your meal</span>
          </div>
        </div>
       </div>
    )
}

export default Steps;