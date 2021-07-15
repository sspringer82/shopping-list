import { useEffect, useRef } from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Fab } from '@material-ui/core';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const Prompt = (): JSX.Element => {
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt.current = null;
    });
  }, []);

  if (deferredPrompt.current !== null) {
    return (<Fab color="primary" style={{position: 'absolute', top: 15, right: 15}}
     onClick={async () => {
         deferredPrompt.current!.prompt();
         deferredPrompt.current = null;
     }}
   >
     <CloudDownloadIcon />
   </Fab>)
  } else {
    return <></>
  }
  
  
};

export default Prompt;