import { useState } from "react";
import { useRecoilState } from "recoil";

const Text = () => {
    const [showConact, setConactText] = useRecoilState(showTextAtom);


return <div>{showText && <div>HelloWorld</div>}

</div>

}

export default Text;