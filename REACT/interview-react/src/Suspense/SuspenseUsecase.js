import { lazy, Suspense } from React;

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, name: "Product 1" }, { id: 2, name: "Product 1" }]))
    });
}
const Products = lazy(() => new Promise(async (resolve) => {
    const products = await fetchProducts();
    resolve({ default: () => <>{products.map((i) => <b key={i.id}>{i.name}</b>)}</> });
}));

export default function SuspenseLazyComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Products />
        </Suspense>
    )
}

// ReactDOM.render(<App/>, document.getElementById('app'))