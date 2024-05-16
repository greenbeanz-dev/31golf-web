### 기본 실행방법

#### env 파일 만들기

루트 디렉토리에 .env 파일 만들고 아래 값 저장

```
DATABASE_URL=postgresql://postgres:53r8bo6nFnGTmre@db-greenbeanz-31golf.c23aiwhh2s7e.ap-northeast-2.rds.amazonaws.com:5432/postgres
```

```
git pull https://github.com/greenbeanz-dev/31golf-web.git

yarn

npx prisma generate

yarn dev

```

#### 스키마 변경되었을 경우

1. npx prisma db pull
2. npx prisma generate

### prisma

타입 ORM으로 현재 플젝에서는 그래프큐엘의 resolver 역할

#### api 요청 프로세스

1. 컴포넌트 내부에서 react-query로 감싸진 그래프큐엘 쿼리 실행
2. 그래프큐엘이 실행되어 prisma로 요청 전송
3. Prisma의 쿼리를 통해 연결된 DB에서 데이터 가져옴
4. 반환

#### prisma model 선언

src/gpl/model/Product.ts 내부에 구현
builder.prismaObject("product").....부터 시작하는 것

- 실제 DB의 모델인 Product와 1대1 대응하도록 목적
- 다만 DB모델의 모든 값을 사용하진 않음

```ts
commissionAmount: t.exposeFloat("commission_amount"),
createdAt: t.field({
	type: "DateTime",
	nullable: true,
	resolve: (product) => product.created_at,
```

여기에서 'commission_amount', 'product.created_at'는 자동완성으로 지원됨
DB에 없는 값을 가져와서 제공할수는 없음.

다만 몇몇 값을 조합하거나, 만들어서 제공할수는 있음

```ts
"몇박몇일": t.field({
	type: "String",
	resolve: (product) => `${product.days_day}박${product.days_night}일`,
}),
"오늘날짜": t.field({
	type: "String",
	resolve: (product) => `${day.js(Date.now()).format("YYYY-MM-DD")}`,
}),
```

#### CRUD 예시

src/gpl/model/Product.ts 내부에 구현되어있음.

- productById
- createProduct
- updateProductById
- deleteProductById

실제 홈화면에서도 확인 가능

### 그래프큐엘

프리즈마의 모델생성과 CRUD를 구현하면 그 다음에는 실제 그래프큐엘 쿼리를 작성해야함.
model 작성이후 schema.ts 에 import "./models/Product"; 해줘야 쿼리 테스트 가능함

프로젝트를 실행하고
http://localhost:3000/api/graphql
해당 링크로 들어가면 그래프큐엘플레이그라운드가 나옴.

여기서 쿼리를 테스트한다음에 쿼리 파일로 작성한다음에

```
yarn compile
```

해당 스크립트를 돌리면 해당하는 쿼리에 따라 type정보가 적절히 추론됨.

쿼리를 하고 리액트쿼리로 가져와서 데이터를 뿌려보려는데 타입에러가 뜬다면 해당 스크립트를 돌리면 됨.

아니면 아래 watch 모드로 실행하면 알아서 업데이트함.(근데 안써봐서 모름. 근데 될드쇼)

```
yarn watch
```

### class validator

이번에 처음 사용해본 라이브러리
값의 정합성을 체크하기 위해 차용
src/gql/product/model.ts에 class ProductInputModel로 만들었음.

react-hook-form과 연결하여 사용하는 것을 추천
src/components/molecule/button/상품추가ModalButton.tsx 에 보면 예시가 나와있음.

1. 여러가지 테스트중이라 어노테이션으로 이리저리 붙여봐도 상관없음.
2. 현재 dataTime에 대한 에러가 있으니 참고바람
3. number로 값을 넘기려면 valueAsNumber: true 해줘야함!!

DateTimeLocalInput 처럼 커스텀 컴포넌트로 리펙토링 진행중임. 시간나면 number, string 타입에 대해서도 Input 만들어보면 좋을듯

### 상품목록Table 컴포넌트를 잘 볼것

1. 여기서 crud가 다 담겨있음.

### 혹시 이상하다 싶으면 고민하지말고 카톡으로 물어보기

1. 인터넷에 생각보다 자료가 없어서 찾으려다가 대가리 깨짐
2. 자료들도 옛날꺼고 비슷한 스택이 없어서 대가리 한번더 꺠짐
3. 그럼에도 투쟁하는것이 바로 개발자

### Vercel Deployment
- test