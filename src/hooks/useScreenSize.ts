import { useEffect, useState } from 'react'
import { usePageInfoActions } from './useReduxActions';

const useScreenSize = () => {
    const [screen, setScreen] = useState<number | null>(null);
    const { setIsMobile ,toggleSidebar} = usePageInfoActions();

    // Setting the Screen Size State whenever the screen is resized
    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Toggling the isMobile State whenever the screensize changes
    useEffect(() => {
        if (screen! <= 768) {
            setIsMobile(true)
            toggleSidebar(false)
        } else  {
            setIsMobile(false);
            toggleSidebar(true)
        } 
    }, [screen]);

    return null
}

export default useScreenSize