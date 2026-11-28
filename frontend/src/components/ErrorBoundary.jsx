import { Component } from "react";
class ErrorBoundary extends Component{
    state={hasError:false};
    static getDerivedStateFromError()
    {
        return {hasError:true};
    }

    componentDidCatch(error)
    {
        console.error(error);
    }

    render()
    {
if(this.state.hasError)
{
    return(
        <p className="flex-1 p-6 text-red-500">
            Something went wrong.Please try again
        </p>
    );
}
return this.props.children;
    }
}
export default ErrorBoundary;