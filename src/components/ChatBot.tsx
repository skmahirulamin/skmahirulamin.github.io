import { useEffect } from 'react';

export default function ChatBot() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v5.0/inject.js';
        script.async = true;

        document.body.appendChild(script);

        const configScript = document.createElement('script');
        configScript.src =
            'https://files.bpcontent.cloud/2026/09/08/04/20260908041931-SWEANK1V.js';
        configScript.defer = true;

        document.body.appendChild(configScript);

        return () => {
            script.remove();
            configScript.remove();
        };
    }, []);

    return null;
}