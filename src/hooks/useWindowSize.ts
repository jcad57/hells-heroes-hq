import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 590);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        setIsMobile(windowSize <= 590);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);

    return isMobile;
}
