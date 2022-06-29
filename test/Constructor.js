/** 
 * constructor
 * - 같은 속성 값을 갖는 오브젝트가 많을 때 사용
 * - 만든 constuctor의 값들을 상속하여 자식이 사용 가능
 */


/**
 * 예제 1번
 * constructor문법을 사용해서 아래의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보십시오. 
 * 여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Kim이야" 라는 글자가 콘솔창에 나오도록 sayHi()라는 함수도 constructor 안에 추가해보세요. 
 */

var 학생1 = { name : 'Kim', age : 20 }
var 학생2 = { name : 'Park', age : 21 }
var 학생3 = { name : 'Lee', age : 22 }

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi() = function() {
    console.log('안녕 나는 Kim이야');
  } 
}

/**
 * 예제 1번
 * 다음 코드의 출력 결과는 무엇일까요?
 */

function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)