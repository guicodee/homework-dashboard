import { Header } from "./components/Header";
import { List } from "./components/List";

export default function App() {
  
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <List />
    </div>
  )
}
