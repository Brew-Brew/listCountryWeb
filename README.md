# listCountryWeb

### 간단한 리액트 페이지 개발

- http://country.io/names.json  을 GET 으로 가져와 나라의 코드와 이름을 리스팅해주는 페이지

- 버튼을 누르면 코드별, 이름별 오름차순, 내림차순 정렬이 되어야 함.
- 검색 창이 있어 코드, 이름 통합 검색이 되어야 함.

###조건

- 보일러 플레이트(create-react-app 등)를 사용하지 않아야 함.
- react, redux, redux-saga 혹은 redux-observable, webpack 을 사용하여 개발
- 모든 상태(나라 목록, 정렬 상태, 검색어 등)은 redux 에 저장되어야 함.
- Network 통신은 redux-saga 혹은 redux-observable 을 통해 되어야 함.

### 개발

- api에서 'Access-Control-Allow-Origin' header is present on the requested resource 오류가 생겨, 크롬확장탭에서, cors 설정을 on 해주고 진행했습니다.