import { useContactStore } from "../Store/Store";
import type { Contact } from "../shared/type";

function ContactItem( { contact }: { contact: Contact }) {
    const { name, phone } = contact;
    const {editContact, deleteContact} = useContactStore();
    const avatarLetter = contact.name.charAt(0).toUpperCase();

    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
    <div className="group rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold text-white ${randomColor}`}>
                    {avatarLetter}
                </div>
                <div>
                    <div className="text-sm font-semibold text-slate-900 capitalize">{name}</div>
                    <div className="text-sm text-slate-500"><i className="fa-solid fa-phone"></i> {phone}</div>
                </div>
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                    onClick={() => editContact(contact.id)}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-sky-600 shadow-sm transition hover:bg-slate-50">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button 
                    onClick={() => deleteContact(contact.id)}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-red-500 shadow-sm transition hover:bg-slate-50">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
  );
}

export default ContactItem