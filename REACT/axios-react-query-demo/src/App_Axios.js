import { useEffect, useState } from "react";
import { axiosCustomInstanceGet, axiosCustomInstancePost, axiosGet, axiosPost } from "./axiosdemos/axiosMethods";


//import axios from './axiosdemos/axios-global'
import { requestInterceptor, responseInterceptor } from './axiosdemos/axios-intreceptors-demo'
import axiosProductCancelRequest from "./axiosdemos/axios-cancel-request";

function App_Axios() {
  const [products, setProducts] = useState([])
  const [addProdMsg, setAddProdMsg] = useState('')

  useEffect(() => {

    const getProducts = async () => {
      try {
        const productsList = await axiosGet()
        setProducts(productsList)

        //Custom Instance Invocation 
        await axiosCustomInstanceGet()

      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    const addProducts = async () => {
      try {
        const response = await axiosPost({ userName: 'Ajay', lastName: 'Nallanagula' })
        setAddProdMsg(response)

        //Custom Instance Invocation 
        await axiosCustomInstancePost()

      } catch (error) {
        console.log(error)
      }
    }

    addProducts()
  }, [])

  const handleCancelRequest = async () => {
    const controller = await axiosProductCancelRequest()
    controller.abort()
  }

  const handleProductRequest = async () => {
    setTimeout(async () => {
      await axiosProductCancelRequest()
    }, 5000)
  }

  return (


    <div>
      <div><button onClick={handleProductRequest}>Start Product Request</button></div>
      <div><button onClick={handleCancelRequest}>Cancel Product Request</button></div>

      <div> {JSON.stringify(addProdMsg)}</div>
      {
        products.map(product => <div key={product.id}>{product.id}: {product.title}</div>)
      }
    </div>
  );
}

export default App_Axios;
