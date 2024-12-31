import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

function Main(props) {
  return (
    <HelmetProvider>
      <Helmet        
        titleTemplate = "%s My Youtube"
        defaultTitle = "My Youtube"
        defer = {false}
        >
        {props.title &&<title>{props.title}</title>}
      </Helmet>

      <Header />
      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default Main;
