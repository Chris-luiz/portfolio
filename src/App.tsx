import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/AppRoutes";
import { BottomNavigation, Footer, Navbar } from "./components";
import { OqueEstouEstudando } from "./pages/OqueEstouEstuando";
import { Conhecimentos, Experiencias, Projetos } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={routes}></RouterProvider>
      <Projetos />
      <Experiencias />
      <Conhecimentos />
      <OqueEstouEstudando />
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default App;
