import { useState } from "react";

const useModalWin = () => {
    const [isShowing, setisShowing] = useState(false);
    function toggle(){
        setisShowing(!isShowing);
    }
    return{
        isShowing, toggle,
    }

}
export default useModalWin;

