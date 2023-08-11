import { ThemeProvider, useTheme } from 'next-themes'
import type { AppProps } from 'next/app'
import { use, useEffect } from 'react'
import ReactBricksApp from '../components/ReactBricksApp'


import '../css/styles.css'

const MyApp = (props: AppProps) => {

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a').forEach(anchor => {
        if (anchor.innerHTML.includes('Made in <span class="l">React Bricks</span>')) {
          // Replace the innerHTML with your desired content
          anchor.innerHTML = '<img src="https://assets.reactbricks.com/k9xUIXa4twJLb--/images/src_set/pmr5syjVsfVUaVX-400.webp" style=" width: 18px; height: 18px; margin-right: 6px; dark:backgroundColor-green;"><span>made by vera</span>';
          anchor.href = 'https://github.com/vtwoptwo/portfolio';
    

          Object.assign(anchor.style, {
            position: 'fixed',
            boxSizing: 'border-box',
            zIndex: '999',
            bottom: '20px',
            left: '20px',
            color: 'black',
            backgroundColor:'#22c55e',
            padding: '5px 12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '11px',
            fontWeight: '900',
            border: '1px solid green',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            transition: 'transform 150ms ease',
            borderRadius: '20px',
            textTransform: 'uppercase'

            
          
            
          });
          // Setting hover effect via JavaScript
          anchor.onmouseover = function() {
            anchor.style.transform = 'translate(0,-2px)!important';
          };
    
          anchor.onmouseout = function() {
            anchor.style.transform = '';
          };
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
