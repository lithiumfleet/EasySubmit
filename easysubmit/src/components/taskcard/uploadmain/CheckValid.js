/* for student number */
const check_valid_student_number = function(input_number) {
    return (input_number>=2020000000 && input_number<=2023999999);
}

/* for student name */
const check_valid_student_name = function(input_string) {
    if( !/^[\u4e00-\u9fa5]+$/.test(input_string) ||
        input_string.length<=1 || 
        input_string.length>=5) {
        return false;
    }
    return true;
}

/* test */
// console.log([
//     check_valid_student_name("你到底"),
//     check_valid_student_name("你大苏打到底"),
//     check_valid_student_name("*/苏打到底"),
//     check_valid_student_number(2022211996),
//     check_valid_student_number(22211996),
//     check_valid_student_number(2221199996)
// ])

export {
    check_valid_student_name, 
    check_valid_student_number
}