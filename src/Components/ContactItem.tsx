import { useContactStore } from "../Store/Store";
import type { Contact } from "../shared/type";

function ContactItem( { contact }: { contact: Contact }) {
    const { name, phone } = contact;
    const {editContact, deleteContact} = useContactStore();
    const avatarLetter = contact.name.charAt(0).toUpperCase();

    return (
    <div className="group rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white bg-green-500`}>
          {avatarLetter}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 capitalize">{name}</div>
          <div className="text-sm text-slate-500">{phone}</div>
        </div>

        <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => editContact(contact.id)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button 
            onClick={() => deleteContact(contact.id)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactItem