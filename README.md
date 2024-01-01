# Toss Order

![image](https://github.com/f-lab-edu/toss-order/assets/48908205/cb09bc86-9b2f-4b9b-9a61-4d6ec31eebe8)

[__https://toss-order.vercel.app/__](https://toss-order.vercel.app/)  
(모바일 환경에 최적화 되어있습니다)
  
  
## 프로젝트 소개

[__프로젝트 테크 스펙__](https://docs.google.com/document/d/17j5eM6neuemTif_bNb0imiR7hz_JaoG51M0V-i4v-qg/edit?usp=sharing)  
식당에서 고객이 본인의 스마트폰으로 메뉴판을 보고, 주문할 수 있는 주문 페이지를 구현합니다.  
본 프로젝트는 MVP(Minumum Viable Product)이며, 주문이 연동되는 POS시스템과 추가 기능은 추후 개발될 수 있습니다.  

## 프로젝트 목표

- 디자인 시스템을 표방하여 재사용이 용이한 추상화된 컴포넌트를 구현합니다.
- 직관성이 높은 UI/UX 구현을 목표합니다. 기술 발전의 이기에 소외되는 사용자는 없어야 합니다.
- 쉬운 UX를 위해 CTA(Call To Action) 사용을 지향합니다.
- 페이지의 변경 대신 Modal을 적극 활용하여 Page Depth를 최소화합니다.

## 프로젝트 구성

- Turborepo를 사용하여 Monorepo로 구성합니다.
- FastAPI와 MariaDB로 Self-hosted Back-end Server를 구성합니다.

## Tech Stacks

- 코어 : React, TypeScript, Next.js
- 상태 관리 : React-Query, Recoil
- 스타일링 : Chakra UI
- 패키지 매니저 : Yarn Berry
- 백엔드 : FastAPI
- 데이터베이스 : MariaDB
- 배포 : Vercel

## Preview

![image](https://github.com/f-lab-edu/toss-order/assets/48908205/d6134129-e11c-44b3-8fde-62ac50dda66d)

## How to run

```bash
git clone https://github.com/f-lab-edu/toss-order.git
cd toss-order
yarn
yarn dev
```

## 비고

- [프러덕트 디자인](https://www.figma.com/file/EIwnsfyvRZ3oQNhjYxZaUV/%ED%86%A0%EC%8A%A4-%EC%98%A4%EB%8D%94?type=design&node-id=0%3A1&mode=design&t=NEkvmoBwSzlNFWp3-1)  
- [프로젝트 스타일 가이드](https://github.com/f-lab-edu/toss-order/wiki/Style-Guide)  
- [블로그 포스트 : 토스 오더 - 가장 쉬운 테이블 오더](https://velog.io/@yoonkeee/toss-order-1)
