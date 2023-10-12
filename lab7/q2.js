let group = {
    title: "Our Group",
    students: [
        "John", "Peter", "Alice"
    ],

    showList: function() {
        this.students.forEach(
            helper.bind(group) //bind to group object
        );
    }
};
//helper method
let helper = function(student) {
    console.log(this.title + ":" + student);
};
group.showList();