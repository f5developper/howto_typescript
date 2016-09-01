//Q1:クラスにインターフェースが実装されていることを示す、記法はないのか？
class Student{
	fullName: string;
	//コンストラクタの引数にｐｕｂｌｉｃ修飾子をつけて、引数を記述すると
	//対象のコンテキストにプロパティが勝手に追加される。
	//this.firstName = firstName; this.middleInitial = middleInitial ;this.lastName = lastName;
	//↑の記述と等価
	constructor(public firstName, public middleInitial, public lastName){
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

//interfaceが実装できる!!
interface Person{
	firstName: string;
	lastName: string;
}
//ここではタイプヒンティングではなくてタイプアノテーションと呼ぶらしい
function greeter (person: Person){
	return "Hello, " + person.firstName + " " + person.lastName;
}


var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);