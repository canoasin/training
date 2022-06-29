/**
 * getter, setter
 * 정의
 * - 오브젝트 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드
 * - 데이터의 무결성을 보존하기 위해 쓰는 키워드
 * - immutable한 데이터를 위하여 원본 데이터를 수정하는 것이 아닌 함수를 통해 간접적으로 다룸
 * 
 */

 class Person {
  constructor() {
    this.name = 'Baek';
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(newAge) {
    this.age = newAge;
  }
}

let person = new Person();

/** 
 * setter -> 데이터를 set 하는(수정하는) 함수 / 데이터를 입력해서 수정하는 함수라 파라미터 1개 이상 필요.
 * getter -> 데이터를 get 하는(가져오는) 함수 / 파라미터 있으면 안되고 함수 내에 return이 있어야 함.
 */


