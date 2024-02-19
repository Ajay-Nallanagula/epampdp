import Link from "next/link"

const ClientHome = () => {
    const client = [
        { id: 'ajay', name: 'AjayNallanagula' },
        { id: 'Divya', name: 'DivyaNallanagula' }
    ]

    return <div>
        <h1> Client Home </h1>
        {
            client.map(route => <li key={route.id}>
                {/* <Link href={`/client/${route.id}`}>{route.name}</Link> */}
                <Link href={{
                    pathname: '/client/[id]',
                    query: { id: route.id }
                }}>{route.name}</Link>
            </li>
            )}

        
    </div>
}

export default ClientHome