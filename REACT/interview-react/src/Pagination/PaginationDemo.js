const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers?.map((number) => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  //export default Pagination;

  const PagedApp = () => {
    const { data: posts, loading } = useFetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
  //Consider Total Posts 101
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    let currentPosts = [];
  
    // Get current posts
    if (!loading && posts?.length > 0) {
      // currentPage starts from 1
      const indexOfLastPost = currentPage * postsPerPage; //2*10
      const indexOfFirstPost = indexOfLastPost - postsPerPage; //20-10
      currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost); //10,20
    }
  
    // Change page
    const paginate = (pageNumber) => {
      if (pageNumber) {
        setCurrentPage(pageNumber);
      }
    };
  
    return (
      <div className='container'>
        <h1 className='text-primary'>My Blog</h1>
        {posts?.length > 0 && (
          <>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts?.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    );
  };
  
  export default PagedApp;
  