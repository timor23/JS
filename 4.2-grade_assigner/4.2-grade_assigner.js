function assignGrade(grade) {
    let x = grade;
    switch (true) {
        
        case (x >= 0 && x <= 64):
            return "F";
            break;
            
        case (x >= 65 && x <= 69):
            return "D";
            break;

        case (x >= 70 && x <= 79):
            return "C";
            break;

        case (x >= 80 && x <= 89):
            return "B";
            break;

        case (x >= 90 && x <= 100):
            return "A";
            break;
        default:
            return `invalid input!`;
    }
}
