# 1. 용어 정리


* 라이브러리: 제어 흐름이 개발자에게 있음.
* 프레임워크: 제어 흐름이 프레임워크에게 있음.


IoC(Inversion of Control)

* IoC Container
  * Bean: 스프링에서 관리하는 객체. 라이프사이클 존재.
    * Component: 이 어노테이션이 붙으면 스프링이 관리함.
      * Controller
      * RestController
      * Service
      * Repository
    * 빈을 등록하는 과정
      * 스프링 프레임워크가 시작되면 등록할 클래스를 탐색해서(xml, java Config(annotation)) IoC 컨테이너에 등록
      * 기본적으로 싱글톤임.

  * DI(Dependency Injection): 의존성을 관리해줌.
  * AOP(Aspect Oriented programming)
    * 횡단 관심사(Cross Concern): 모든 레이어에 걸쳐 공통적으로 사용되는 모듈들
      * 로깅(logging)
      * 퍼포먼스 측정()

# 2. 스프링 기본 사용 방법

기본적인 레이어 구성

- Controller(RestController)
  - 요청과 응답에 대한 처리 수행
  - Controller: 페이지(템플릿 포함)로 응답
  - RestController: RESTful, HTTP API 등의 처리
- Service
  - Infrastructure에 대한 처리
  - 도메인, 레포지토리 통합
- Domain
  - 비즈니스 로직
  - 값 객체(VO, Value Object)
  - 엔티티(Entity)
- Repository
  - 저장과 관련된 인터페이스
  - 인터페이스 구현체

## 2.1. 컴트롤러

이 레이어가 처리하는 일은 다음과 같다.

- 요청과 응답 처리
  - 페이지로 응답(i.e. 'index.mustache')
  - API 응답(RESTful, HTTP API)


### 2.1.1. Controller
페이지로 응답한다. `Vidw Resolver`에게 뷰 이름(예: `index.mustache`)을 주면 등록된 뷰가 존재하면 이 뷰로 추가적인 처리를 수행 후 응답해줌.

기본적인 사용 방법
```java
@Controller
@RequestMapping("/path")
public class 컨트롤러 모듈 이름 {
    
    //매핑 어노테이션
    @GetMapping
    public String 메서드이름() {
        return "뷰_이름";
    }
}
```

매핑 어노테이션
* `@-Mapping`의 구로를 가지고 있음
* HTTP Method를 기술해주면 됨
  * GetMapping
  * PostMapping
  * PutMapping
  * ... (HTTp Method 이름들)
* 매핑 어노테이션 최상위: '@RequestMapping'

RequestMapping
* method: HTTP 메소드, RequestMethod enum 타입.
* value: 경로

경로 지정 방식
- class에 경로가 지정되어 있는 경우
  - 예를 들어 클래스에`/path`가 지정되어 있고 
  - 메서드에 `/add`가 지정된 경우
    - 실제로는 uri `/path/add`에 대한 처리를 하게 됨
- 클래스에 경로가 지정되어 있지 않는 경우
  - 메서드에 지정된 경로로 접근 



### 2.1.2. RestController

페이지에 한정된 Controller와 달리 다양한 응답을 해줌

```java
@RestController
@RequestMapping("/path")
public class 컨트롤러 모듈 이름 {
    
    //매핑 어노테이션
    @GetMapping
    public String 메서드이름() {
        return "뷰_이름";
    }
}
```


### 2.1.3. 요청(Request)

#### 2.1.3.1. PathVariable
예를들어 다음고 같은 URI로 요청이 들어옴.
```text
/users/
```

```java

```

#### 2.1.3.2. Query String

쿼리스트링은 다음과 같은 구조를 가지고 있다.

```text
/path?key1=value1&key2=value2
```

-URI에 길이 제한이 있기 때문에.


다음과 같은 요청이 들어왔다고 가정해보자.

```text
/users/?key=할말
```



### 2.1.4. 응답()
