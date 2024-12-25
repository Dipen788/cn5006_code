const dateofBirth = "20/08/2000";

const getStudentName = () => "Dipedra";

const getCampusName = () => "UELcampus";

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
exports.Studentgrade = (marks) => {
    return marks > 60 && marks < 80 ? "b grade" : "A grade";
};