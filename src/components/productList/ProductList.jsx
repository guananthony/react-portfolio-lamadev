import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create &amp; inspire. It's Anthony</h1>
        <p className="pl-desc">
          Anthony is a stunning engineer that your team and products have been waiting for. Beautiful work, stunning styles &amp; a whole lot more inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map(product => (
          <Product img={product.img} key={product.id} link={product.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
