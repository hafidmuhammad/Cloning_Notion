
import MainLayout from './Componets/Layout/MainLayout'
import MainRouter from './routes/MainRouter'


function App({ children }) {

  return (
    <MainLayout>
      <MainRouter>{children}</MainRouter>
    </MainLayout>
  )
}

export default App
