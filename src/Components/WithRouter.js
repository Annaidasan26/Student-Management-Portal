import { useNavigate } from "react-router-dom";

export const withRouter = (Component) => {

    function WithRouter (){
      
        const navigate =    useNavigate();

      return <Component navigate={navigate} />
    }

return WithRouter;
}

export default withRouter;