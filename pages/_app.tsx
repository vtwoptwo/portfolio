import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import ReactBricksApp from '../components/ReactBricksApp'


import '../css/styles.css'

const MyApp = (props: AppProps) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a').forEach(anchor => {
        if (anchor.innerHTML.includes('Made in <span class="l">React Bricks</span>')) {
          // Replace the innerHTML with your desired content
          anchor.innerHTML = '<img src="https://assets.reactbricks.com/k9xUIXa4twJLb--/images/src_set/1Sm72ntcxTg54V5-76/vtwoptwo.webp" style="width: 18px; height: 18px; margin-right: 6px;"><span>made by vera</span>';
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array means this will run once after the initial render


  return (
    <ThemeProvider
      attribute="class"
      storageKey="color-mode"
      enableSystem={false}
      defaultTheme="light"
    >
      <ReactBricksApp {...props}></ReactBricksApp>
    </ThemeProvider>
  );
};

export default MyApp;
