import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link';

function HomePage(props) {
  const { products } = props
  if (!products) {
    return <h1> No Products found</h1>
  }
  return (
    <ul>
      {products?.map(product => <li key={product.title}>
        <Link href={`/${product.id}`}>{product.title}</Link>
      </li>
      )}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  //console.log(context)
  //console.log(typeof window) //undefined if its server, defined if its browser
  //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  const pathName = path.join(process.cwd(), 'data', 'dummy-data.json')
  //console.log(pathName)
  const productsData = await fs.readFile(pathName)
  const parsedProds = JSON.parse(productsData)

  if (!parsedProds.products.length) {
    //return {notFound: true}
    return { redirect: { destination: '/no-data' } } //Can also redirect from getStaticProps
  }

  return {
    props: { products: parsedProds.products },
    //  revalidate: 60, //The revalidate option indicates //incremental static generation 
    // notFound: false // if set to true ,the given page is not found a 404 Page is returned 
  }
}
