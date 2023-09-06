
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/contactHeader/ContactHeader";

function App () {
  return (
    <div>
      <Navigation />
      <main className="main_container">
      <ContactHeader />
      <ContactForm/>
      </main>
   
    </div>
  )
}

export default App;
