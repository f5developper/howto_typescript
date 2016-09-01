//Q1:クラスにインターフェースが実装されていることを示す、記法はないのか？
var Student = (function () {
    //コンストラクタの引数にｐｕｂｌｉｃ修飾子をつけて、引数を記述すると
    //対象のコンテキストにプロパティが勝手に追加される。
    //this.firstName = firstName; this.middleInitial = middleInitial ;this.lastName = lastName;
    //↑の記述と等価
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//ここではタイプヒンティングではなくてタイプアノテーションと呼ぶらしい
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
