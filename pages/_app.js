// app.js (or app.tsx)

import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Add any additional layout or wrapper elements here */}
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
