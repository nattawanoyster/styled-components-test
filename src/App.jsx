import React from "react";
import GlobalStyles from "./styles/GlobalStyles"; // Adjust path based on your folder structure
import ProfileSection from "./components/ProfileSection"; // Import your components
import ReviewsSection from "./components/ReviewsSection";
import ListingsSection from "./components/ListingsSection";
import Footer from "./components/footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProfileSection />
      <ReviewsSection />
      <ListingsSection />
      <Footer />
    </>
  );
}

export default App;
