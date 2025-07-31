import React from 'react';
import { getProducts } from '../actions/products/getProducts';

export const dynamic = "force-dynamic";

const Products = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`);
  // const data = await res.json();

  const data = await getProducts();

  return (
    <div>
      Products: {data.length}
      <div>
        {
          data?.map(singleProduct => {
            return (
              <div key={singleProduct._id}>
                <li> {singleProduct.productName} </li>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Products;