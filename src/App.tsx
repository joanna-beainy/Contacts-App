import ContactsList from "./Components/ContactsList";
import ContactForm from "./Components/ContactForm";
import { useContactStore } from "./Store/Store";


function App() {

  const { isPopupOpen } = useContactStore();
  return (
    <div className="min-h-screen bg-[#f0f4f8]  py-8 ">
        <ContactsList />
        {isPopupOpen && <ContactForm />} 

    </div>
  );
}

export default App;