function Validation(values) {
    let error = {}
    const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(values.name === "") {
        error.name = "Nimi ei tohi olla tühi"
    }
    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Email ei tohi olla tühi"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email ei sobi"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Salasõna ei tohi olla tühi"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Salasõna ei sobi. Peab sisaldama minimaalselt kaheksa märki - vähemalt üks täht ja üks number"
    }else {
        error.password = ""
    }
    return error;

}

export default Validation;


