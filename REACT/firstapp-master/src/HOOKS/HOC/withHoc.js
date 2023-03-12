import React from 'react'

const withHoc = (ComponentRecieved) =>{
   return (
       class WithHoc extends React.Component{
        state = {
            repos: [],
            loading: true,
          }
          updateRepos = this.updateRepos.bind(this)
        
          componentDidMount() {
            this.updateRepos(this.props.id);
          }
          componentDidUpdate(prevProps) {
            if (prevProps.id !== this.props.id) {
              this.updateRepos(this.props.id);
            }
          }
        
          updateRepos(id) {
            this.setState((prevState) => ({ ...prevState, loading: true }));
            //PSUEDO API CALL, Based on ID your repo changes
            setTimeout(() => {
              this.setState((prevState) => {
                let repos = [];
                if (id === 1) {
                  repos = ["UserRepo", "AdminRepo"];
                } else if (id === 2) {
                  repos = ["UPDATED_UserRepo", "UPDATED_AdminRepo"];
                }
                return { ...prevState, repos, loading: false };
              });
            }, 5000);
          }

          render(){
              return (<ComponentRecieved {...this.state} {...this.props}/>)
          }
       }
   )
}

export default withHoc