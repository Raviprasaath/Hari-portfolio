import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './RootLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PageNotFound from './components/PageNotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
