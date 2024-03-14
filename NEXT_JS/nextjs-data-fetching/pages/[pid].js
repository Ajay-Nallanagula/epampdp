import path from 'path'
import fs from 'fs/promises'

const ProductDetailPage = ({ item }) => {
    if (!item) {
        return <h2>Loading....</h2>
    }

    return (
        <>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
        </>
    )
}

export default ProductDetailPage

async function parseData() {
    const pathName = path.join(process.cwd(), 'data', 'dummy-data.json')
    const productsData = await fs.readFile(pathName)
    const parsedProds = JSON.parse(productsData)
    //console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ')
    //console.log(parsedProds.products)
    return parsedProds.products
}

export async function getStaticProps(context) {
    const { params } = context
    const products = await parseData()
        const item = products?.find(item => item.id === params.pid)
    if (!item) {
        return { notFound: true }
    }
    return {
        props: { item }
    }
}

export async function getStaticPaths() {
    const products = await parseData()

    const paramsList = products.map(item => {
        return {
            params: { pid: item.id }
        }
    })
    return {
        paths: [
            // ...paramsList
            { params: { pid: '1' } }
        ],
        fallback: true
    }
}