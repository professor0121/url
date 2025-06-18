import { BrowserRouter } from "react-router-dom"
import IndexRoute from "./routes/IndexRoute"
const App = () => {
  return (
      <BrowserRouter>
        <IndexRoute/>
      </BrowserRouter>
  )
}

export default App