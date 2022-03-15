import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./Components/Homepage";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Homepage />
      </div>
    </ChakraProvider>
  );
}

export default App;
