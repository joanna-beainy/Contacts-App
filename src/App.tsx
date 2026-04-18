import ContactsList from "./Components/ContactsList";
import ContactForm from "./Components/ContactForm";
import { useContactStore } from "./Store/Store";


function App() {

  const { isPopupOpen } = useContactStore();
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-900">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <ContactsList />
        {isPopupOpen && <ContactForm />} 
      </main>
    </div>
  );
}

export default App;