# 음성 인식 비용 추적 애플리케이션
> 나의 수입과 지출을 음성 인식으로 추적하는 앱 만들기  

```
[ 목표 설정 ]
1. 가장 많은 돈을 쓰는 항목 보여주기
2. 가장 많은 돈을 버는 항목 보여주기
3. 위의 두 힝목을 차트형식으로 시각화 하기
4. 새로운 카테고리를 음성인식으로 추가할 수 있음
5. 데이터 저장을 로컬 스토리지에 저장 - 데이터 저장
6. 모바일로도 사용 가능하도록 반응형 제작
```  

## 1. 카드 항목 구현하기 ( 레이아웃 )
1. 수입 
  - 수입 총합 금액
2. 지출
  - 지출 총합 금액
3. 메인 카드
  - 양식
    - 총 수입 & 지출 금액
    - 항목, 종류, 금액, 날짜를 입력할 수 있는 폼
    - 추가 버튼
    - 음성 인식 예시
  - 목록
    - 수입 & 지출 아이콘
    - 항목 타이틀
    - 금액
    - 등록한 날짜
  
## 2. Context API 활용하기
> 보통은 이 경우 리덕스를 많이 사용했지만 사용자가 다룰 상용구가 많아서  
> 이번에는 비교적 간단한 Context API를 활용해보자.

1. 컨텍스트 생성하기

- react에서 `useReducer`와 `createContext`를 가져오기
- 초기 상태 설정하기
- 상태를 저장할 컨텍스트에 초기 상태를 넣어 설정하기

2. 제공자(Provider) 생성하기

> 생성한 컨텍스트 내부의 아이템들을 사용할 수 있도록 해준다  
> 아이템 하나하나를 props 형식, 전체는 jsx 형식으로 반환한다.

3. 제공자를 Root Js 파일에 공급하기

4. `useReducer` 생성하기  
  
**기본 형태**
```js
const [state, dispatch] = useReuducer(reducer, initialState, init);
```
  - 첫 번째: 리듀서
  - 두 번째: 초기 상태
  - 세 번째: 선택 사항 (이번 경우는 필요하지 않음)  
```md
[Reducer 사용하기]
1. 컨텍스트에 관련된 리듀서를 생성한다.  
- 리듀서란?
> 이전 상태와 액션을 가지고 새로운 상태를 반환하는 함수이다.

2. 리듀서의 정의에 따라 첫 번째 인자는 상태, 두 번째는 액션이 된다.

3. 액션을 기반으로 새로운 상태를 반환해야 하며 이는 디스패치로 호출한다.

4. 리듀서의 액션의 타입을 정하고 타입별로 상태 값을 변하는 로직을 작성한다.

5. 사용할 컴포넌트에서 호출해서 사용한다.
```

5. 컴포넌트와 연동하기 : `useContext` - 추가하기
> 추가하는 기능은 아까 만들었던 폼이 있고 그곳의 값과 값을 할당할 함수를 설정한다.

```md
1. 먼저 초기상태를 설정한다.
> 또한, 내부의 상태를 만들어 폼의 데이터의 상태를 설정하고 초기 상태를 인가한다.

2. 각 상태들과 폼의 값들을 맞게 할당하고 실제 값을 인가하는 함수도 설정한다.

3. 생성하는 버튼의 클릭 함수를 설정한다.
> 따로 지정할 금액, ID 값을 제외한 나머지를 나열하고 금액과 ID는  
> 해당 값에 맞는 생성자를 설정한다.

4. 컨텍스트의 생성자를 가져와 위의 폼 데이터를 넣어준다

5. 마지막으로 내부 폼 데이터를 세팅한다.
> 생성자가 이미 폼데이터를 넣어준 상태여서 초기 상태를 넣어준다.

+ 이후로 컨첵스트의 데이터를 연동하고 추가, 삭제 기능까지 연동한다.
```

## 3. 폼 데이터 동적으로 구현하기
- 수입, 지출에 대한 각 항목별 타입과 색상을 구현하고 차트에 표현된다.
- 재설정 기능 구현
  + 모든 항목을 초기화 하고싶을 때 사용한다.
- 폼 컴포넌트에 가져와서 이미 항목에 설정되어 있는 항목을 나열해주고  
  추가하는 기능까지 동적으로 구현한다.
- 날짜를 지정하고 저장하는 폼을 만든다.
