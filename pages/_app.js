// import App from 'next/app'
import Menu from '../components/menu/menu';
import 'tailwindcss/tailwind.css';
import '../style/scrollbar.css'
function Portfolio({ Component, pageProps }) {
    return (
        <>
            <Menu></Menu>
            <div className='flex flex-row bg-gray-900 w-full h-full text-white '>
                <div className='w-1/6'></div>
                    <Component {...pageProps} />
                <div className='w-1/6'></div>
            </div>
          
        </>
    )
    

  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default Portfolio