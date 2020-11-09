## KH frontend 수업

# 1.  HTML

- HTML: HyperTest Markup Language
- HTTP: HyperText Transfer Protocol
    - HTML 전송

URL(Uniform Resource Locator)
- http://127.0.0.1:5500/02021109/index.html
  - 127..0.0.1 - IP 주소(혹은 도메인)
  - 5500 - 포트
  - /20201109/index.html - 리소스 경로

http포트 - 기본 80
https포트 - 기본 443 (보안의 용도로 사용된다.)


# 2. 주소창에 입력했을 때 찾아가는 과정

1. 주소를 입력
2. 로컬에 등록된 DNS IP 주소로 해당 도메인을 질의(query)함
   1. 해당 DNS에 정보가 캐싱된 경우 바로 응답 받음
   2. 없는 경우 상위 DNS에게 질의
3. 응답 받은 IP 주소로 접속(브라우저가)
4. 해당 서버에게 리소스 요청
5. 해당 서버가 리소스 응답(html, js, image, audio, video)
6. 브라우저는 html 문서 받아서 렌더링

# 3. HTML

- 태그 - 문서 기본 요소
  - <와 >로 갑싸져있음. (<html>)
  - 권장: 태그는 소문자로
  - 단일 태그 형태: <태그/>
  - 일반 태그
    - <태그> 내용</태그>
    - 여는 태그: <태그>
    - 닫는 태그: </태그>
  - 계층 구조로 되어 있다(트리)
  - 태그는 속성을 갖고 있음
    - <태그 속성 = 값   속성 = 값></태그>

# 4. html 태그

)lang 속성

- ko: 한국어
- en: 영어
- ja: 일본어
- zh: 중국어


)head 태그

SEO: Search Engine Optimization
- title - 제목 표시
- meta
  - 문자셋
  - 브라우저 호환성 표시
  - 검색 결과 설명 지정
  - 검색 결과 표시 문구 지정
  - 봇 제어


body 태그

실제로 렌더링 되는 정보들


text 태그

- 블록
  - hn(n값 1~6) n는 heading의 크기, 제목 표시 

- p태그
  - paragraph, 문단을 표시한다.
  - 스페이스를 아무리 많이 입력해도 공백은 하나로 표시 됨.
  - 줄바꿈 없이 텍스트를 쭉 입력하 수 있음.(줄이 길어지면 넘어간다..)

- br 태그
  - break, 줄바꿈
  - 단일 태그임을 유의하면서 사용해야 한다.

- hr 태그
  - horizontal rule, 수평 줄을 채움  https://www.lipsum.com/

- blockquote - 인용구
  - 인용구


- pre태그
  - 공백을 그대로 출력 해주는 태그


- 인라인 태그
  - strong, b - 굵게(bold) 처리
  - em, i - 이텔릭 처리
  - q - 인라인 인용구(quote)
  - mark - 형광펜
  - ruby 태그 - 다른 글씨 위에 글씨는 올리는 태그


# 목록

- 순서 없는 목록(unordered list)
  - ul, li
  - <ul><li> </li></ul>


- 순서 있는 목록(ordered list)
  - ol, li
  - <ol><li></li></ol>

- 설명 있는 목록
  - dl(description list)
  - dt - 제목
  - dd - 설명


# 표

- table
- tr(table row)
- td(tag define) 
- th(tag header)