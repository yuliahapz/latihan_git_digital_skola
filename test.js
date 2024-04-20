const calc = (angka1, angka2, operator) => {
    switch (operator) {
        case "+" : 
            return angka1 + angka2;
        case "-" :
            return angka1 - angka2;
        case "*" :
            return angka1 * angka2;
        case "/" :
            return angka1 / angka2;
    }
}
    console.log (calc(5, 7, "+"));
    console.log (calc(9, 2, "-"));
    console.log (calc(6, 7, "*"));
    console.log (calc(10, 2, "/"));
