# listCountryWeb

## How to start

```
yarn start

url: https://zx6658.github.io/listCountryWeb/ 임시로 배포해놓았습니다 :)
```

### 간단한 리액트 페이지 개발

- api 서버에서 cors 설정이 안되어 있어 아래 url 로 바꿔주었습니다.
- baseURL: "https://cors-anywhere.herokuapp.com/country.io", (cors 설정을 안해도 api 정보가 받아와짐)

- http://country.io/names.json  을 GET 으로 가져와 나라의 코드와 이름을 리스팅해주는 페이지

- 버튼을 누르면 코드별, 이름별 오름차순, 내림차순 정렬이 되어야 함.

- 검색 창이 있어 코드, 이름 통합 검색이 되어야 함.(돋보기 아이콘을 누르거나, 엔터를 누르면 검색)
  ```javascript
    data.code.replace(/\s/gi, "").toLowerCase().indexOf(searchData.replace(/\s/gi, "").toLowerCase()) >= 0
    || data.country.replace(/\s/gi, "") .toLowerCase() .indexOf(searchData.trim().toLowerCase()) >= 0 );
    과 같이 해주어, 대소문자 구분없이, 공백도 상관없이 검색가능하게 해주었음 (ex)northkorea 라 검색해도 나옴
  ```

### 조건

- 보일러 플레이트(create-react-app 등)를 사용하지 않아야 함.
- react, redux, redux-saga 혹은 redux-observable, webpack 을 사용하여 개발
- 모든 상태(나라 목록, 정렬 상태, 검색어 등)은 redux 에 저장되어야 함.
- Network 통신은 redux-saga 혹은 redux-observable 을 통해 되어야 함.

### 구현

## 구현

```
[SPA 프레임워크]
React를 사용하였습니다.

[데이터관리]
데이터는 redux와 reudx-saga로 관리를 하였습니다.
meta에는 searchData와 sorting관련 전역적 정보를 넣었고,
country에는 country관련 데이터들을 넣어주었습니다.
그리고, saga에서 데이터 flow를 관리해주었습니다.


[컴포넌트 분리]
ListCountries와 SearchBar로 분리했고, App 부모컴포넌트를 가지는 구조를 가졌습니다.
ListCountries 같은 경우는 렌더링의 역할만 하므로 상태를 가지지 않는 함수형 컴포넌트로 만들어 주었습니다.

[스타일링]
Sass 를 사용하여 네스트된 구조를 사용했고, classnames를 활용해 CSS Module 형식으로 스타일을 설정해주었습니다.
```
