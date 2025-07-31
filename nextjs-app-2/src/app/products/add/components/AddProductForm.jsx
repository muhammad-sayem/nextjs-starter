"use client";

import { postSingleProduct } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();
  const handleAddProduct = async(e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const productData = { productName }
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(productData)
    // });

    // const data = await res.json();
    // console.log(data);

    const data = await postSingleProduct(productData);
    console.log(data);
    form.reset();
    router.push('/products');
  }

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <input type="text" name="productName" className="border border-black w-1/2 p-2" placeholder="Enter Product Name" /><br /><br />
        <button className="btn bg-green-500 border-2 border-black"> Add Product </button>
      </form>
    </div>
  );
};

export default AddProductForm;