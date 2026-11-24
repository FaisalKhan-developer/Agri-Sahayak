import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import NotFound from "./pages/NotFound/NotFound";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import DiseaseDetection from "./pages/DiseaseDetection/DiseaseDetection";
import Weather from "./pages/Weather/Weather";
import ColdStorage from "./pages/ColdStorage/ColdStorage";
import VoiceAssistant from "./pages/VoiceAssistant/VoiceAssistant";
import GovernmentSchemes from "./pages/GovernmentSchemes/GovernmentSchemes";
import CropMarketplace from "./pages/CropMarketplace/CropMarketplace";
import Dashboard from "./pages/Dashboard/Dashboard";
import EquipmentRental from "./pages/EquipmentRental/EquipmentRental";
import ProductsMarketplace from "./pages/ProductsMarketplace/ProductsMarketplace";
import Auth from "./pages/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import RouteLoader from "./components/RouteLoader";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <RouteLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/cold-storage" element={<ColdStorage />} />
          <Route path="/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/government-schemes" element={<GovernmentSchemes />} />    
          <Route path="*" element={<NotFound />} />
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
          <Route path="/crop-marketplace" element={<CropMarketplace />}/>
          <Route path="/equipment-rental" element={<EquipmentRental />}/>
          <Route path="/products-marketplace" element={<ProductsMarketplace />}/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
<Route path="/register" element={<Auth />} />
        </Routes>
        </RouteLoader>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;