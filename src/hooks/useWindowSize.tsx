import { useEffect, useState } from 'react';

export function useWindowSize() {
    const isWindowClient = typeof window === 'object';
    const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    useEffect(() => {
        function setSize() {
            setWindowSize(window.innerWidth);
        }

        if (isWindowClient) {
            window.addEventListener('resize', setSize);
            return () => window.removeEventListener('resize', setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}
