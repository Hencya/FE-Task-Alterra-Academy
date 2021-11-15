// Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Pages
import HomePage from "./pages/Home/HomePage";
import NewsPage from "./pages/News/NewsPage";
import NotFound from "./pages/NotFound/NotFound";
import ReviewMessagePage from "./pages/ReviewMessage/ReviewMessagePage";
import { store, persistor } from "./redux/Store.jsx";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/contact-us" exact element={<ContactUsPage />} />
            <Route
              path="/review-message"
              exact
              element={<ReviewMessagePage />}
            />
            <Route path="/news" exact element={<NewsPage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
