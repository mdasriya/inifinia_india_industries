import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainRoutes from "./components/MainRoutes";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
// import Home1 from './components/Home1';

// Lazy load the OtherComponent
const OtherComponent = React.lazy(() => import('./components/OtherComponent'));

const App = () => {
  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <title>Infinia Industries</title>
          <meta name="description" content="Infinia Industries Pvt Ltd is Central India's Premier Manufacturer of Innovative Building Solutions, specializing in Wood Polymer Composite, Regenerated Plastic, and Terra Cotta products." />
          <meta name="keywords" content="Infinia Industries, Wood Polymer Composite, Regenerated Plastic, Terra Cotta, Building Solutions" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Infinia Industries",
                "description": "Infinia Industries Pvt Ltd Central India's Premier Manufacturer of Innovative Building Solutions! We take pride in being the forefront of innovation, carving a niche as the leading manufacturer of Wood Polymer Composite, Regenerated Plastic, and Terra Cotta products in Central India."
              }
            `}
          </script>
        </Helmet>

        <Header2 />
        {/* <Home1 /> */}
        
        {/* Suspense should wrap only the components that are lazy-loaded */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* <OtherComponent title="This is the Other Component" /> */}
        </Suspense>
        
        <MainRoutes />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
