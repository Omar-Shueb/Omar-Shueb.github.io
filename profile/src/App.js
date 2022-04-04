import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  return (
    <ChakraProvider width="90vw">
      <div className="App">
        <Profile />
      </div>
    </ChakraProvider>
  );
}

export default App;
