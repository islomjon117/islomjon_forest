import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import ProjectsShow from './Pages/ProjectsShow';
import ServicesShow from './Pages/ServicesShow';
import ContactPage from './Pages/ContactPage';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsShow />} />
        <Route path='/services' element={<ServicesShow />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
