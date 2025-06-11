import { BrowserRouter } from "react-router-dom"
import IndexRoute from "./routes/IndexRoute"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <IndexRoute/>
      </BrowserRouter>
    </div>
  )
}

export default App