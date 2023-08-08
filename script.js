function calculateBmi() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    if (weight === "" || height == "") { return } 
    else {
        // Changing cm in meters.
        let bmi = Math.floor(weight / (height * height/10000));
        if (bmi > 30) { document.getElementById("result").innerHTML = `Your BMI is <span class="span-red">` + bmi + `</span>.` }
        else {
            document.getElementById("result").innerHTML = "Your BMI is " + bmi + "."
        }
    }
}