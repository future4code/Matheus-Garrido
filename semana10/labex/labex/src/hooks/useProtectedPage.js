import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export const UseProtectedPage = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            history.push("/login")
        }
    })
}

export default UseProtectedPage