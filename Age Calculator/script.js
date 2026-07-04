function calculateAge() {

    const dobInput =
        document.getElementById(
            "dob"
        ).value;

    if (
        dobInput === ""
    ) {

        document.getElementById(
            "result"
        ).innerHTML =
            "Please select your date of birth";

        return;
    }

    const dob =
        new Date(
            dobInput
        );

    const today =
        new Date();

    let ageYears =
        today.getFullYear() -
        dob.getFullYear();

    let ageMonths =
        today.getMonth() -
        dob.getMonth();

    let ageDays =
        today.getDate() -
        dob.getDate();

    if (
        ageDays < 0
    ) {

        ageMonths--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

        ageDays +=
            previousMonth;
    }

    if (
        ageMonths < 0
    ) {

        ageYears--;

        ageMonths +=
            12;
    }

    document.getElementById(
        "result"
    ).innerHTML =
        "Your Age is " +
        ageYears +
        " Years " +
        ageMonths +
        " Months " +
        ageDays +
        " Days";
}
