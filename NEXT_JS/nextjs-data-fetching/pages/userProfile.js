const UserProfile = (props) => {
    return <h1>{props.username}</h1>
}

export default UserProfile

export async function getServerSideProps(context) {
    console.log(context)
    return {
        props: {
            username: 'Ajay Nallanagula'
        }
    }
}