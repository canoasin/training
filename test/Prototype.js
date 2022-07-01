/** 
 * prototype 정의
 * - 자식들이 물려받을 수 있는 일종의 '유전자'
 * - 부모.prototype 에 어떤 변수나 함수가 들어가있다면
 * - 부모로부터 생성되는 오브젝트는 전부 상속받아 사용할 수 있음.
*/

/** 
 * prototype 특징
 * - object 자료처럼 다루면 됨
 * - 값을 여러개 부여할 수 있고 함수도 넣을 수 있음
 * - prototype에 추가된 데이터들은 자식들이 직접 가지는 개념이 아니라 부모만 가지고 있음
 * - .prototype : 부모의 유전자를 조작
 * - __proto__ : 자식이 부모의 유전자를 조작하여 상속
*/

/** 
 * object에서 값을 출력하는 순서
 * 1. 내가 직접 값을 가지고 있는지?
 * 2. 없다면 부모 유전자 차례대로 값이 있는지?
*/

/**
 * 내장함수를 쓸 수 있는 이유
 * - 부모 유전자가 sort, push, map, forEach, toString 등의 값을 가지고 있기 때문
 */

// 둘이 사실 같다.
var arr = [1,2,3];
var arr = new Array(1,2,3);

/**
 * prototype으로 상속시키는거랑 constructor로 상속시키는 것의 차이?
 * constructor : 자식들이 값을 직접 소유하게 만들고 싶을 때
 * prototype : 부모만 가지고 있고 자식은 참조해서만 사용하게 하고 싶을 때
 */




 /**
  * 예제 2번
  * 다음 코드의 출력 결과는 무엇일까요?
  */
 

  function Parent(){
    this.name = 'Kim';
  }
  var a = new Parent();
  
  a.__proto__.name = 'Park'; // 부모의 prototype name에 'Park'를 추가하라는 의미
  console.log(a.name) // -> Kim
 



 /**
   * 예제 3번
   * sayHi() 출력이 안되는 이유?
   */
 
 function Student(이름, 나이){
   this.name = 이름;
   this.age = 나이;
 }
 
 Student.prototype.sayHi = () => {
   console.log('안녕 나는 ' + this.name + '이야'); // Arrow Function 내에서의 this는 window를 가르키기 때문
 }
 
 // object안에 들어있는 함수안에 있는 this는 함수를 부른 object가 됨.
 // 하지만 arrow function의 경우 함수 안에서 this 뜻이 재정의되지 않고 바깥에 있던 this를 사용한다. 
 
 var 학생1 = new Student('Kim', 20);
 
 학생1.sayHi(); 




 /**
  * 예제 4번
  * 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까요?
  */

Array.prototype.함수명 = function() {
  함수내용;
}
