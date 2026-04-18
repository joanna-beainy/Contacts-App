import ContactItem from "./ContactItem";
import { useContactStore } from "../Store/Store";


export default function ContactsList() {
  const { filteredContacts, setIsPopupOpen, searchQuery, setSearchQuery } = useContactStore();
  const filtered = filteredContacts();

  return (
    <div className="flex flex-col gap-3 mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-sm">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-[0.1em] uppercase">Contacts</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50" >
            <i className="fa-solid fa-plus"></i> New Contact
          </button>
        </div>

        <div className="mb-4">
          <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none transition focus:bg-white focus:ring-2 focus:ring-sky-200" />
        </div>

        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {filtered.length} {filtered.length === 1 ? "contact" : "contacts"}
        </div>
        {filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
        ))}
    </div>
  );
}