import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return windowSize <= 590 ? setIsMobile(true) : setIsMobile(false);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);

    return isMobile;
}
