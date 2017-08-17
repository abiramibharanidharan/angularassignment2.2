var StudentDetail = (function () {
    // student detail constructor
    function StudentDetail(no, na, bat) {
        this.rno = no;
        this.name = na;
        this.batch = bat;
    }
    //function to display the detail of student
    StudentDetail.prototype.display = function () {
        console.log("Student   No= " + this.rno + "\n         Name= " + this.name + "\n         Batch = " + this.batch);
    };
    return StudentDetail;
}());
var detail = new StudentDetail(1234, 'abi', 'Web Development   ');
var result = detail.display();
