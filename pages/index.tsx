import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="S_YTc4YTg3OWYtMGUxOC00ZGZlLTlkNTItYjBiYTdhZmI4OGQzNjM3MzI4Nzg1NTU0MjQzODEw" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>물꼬기</h3>
          <h2>무슨 물고기를 살까?</h2>
          <p>원하는 <strong>물고기를 장바구니에 담아</strong> 구매하자.</p>
        </div>
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_1", name: "줄삼치", price: 7.00, image: "../static/1.jpg", description: "몸 빛깔은 등쪽부분은 청색바탕에 뚜렷한 검은색의 세로띠가 있으며, 배부분은 은백색이다."} as IProduct,
      {id: "nextjs_2", name: "숭어", price: 35, image: "../static/2.jpg",description: "몸 빛깔은 등쪽이 회청색이며, 배쪽은 은백색이고, 가슴지느러미 기저에 청색의 반점이 있다."} as IProduct,
      {id: "nextjs_3", name: "돌돔", price: 25.00, image: "../static/3.jpg", description: "몸 빛깔은 청색을 띤 연한 흑색으로 눈부터 꼬리지느러미까지 7개의 분명한 흑색 가로띠가 있으나, 성장하게 되면 점차 불분명해지고, 반면에 주둥이 부분이 검게 된다."} as IProduct,
      {id: "nextjs_4", name: "멸치", price: 5.00, image: "../static/4.jpg", description: "몸 빛깔은 등쪽은 짙은 청색, 배쪽은 흰색이며, 옆구리에는 은백색의 세로줄이 있다."} as IProduct,
    ]
  }
}

export default Index