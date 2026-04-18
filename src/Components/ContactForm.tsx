import { useContactStore } from "../Store/Store";
import { generateRandomId } from "../shared/utils";

function ContactForm() {
    const { name, phone, setName, setPhone, addContact, closePopup, ContactBeingEdited } = useContactStore();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!name || !phone) return;
        addContact({
            id: ContactBeingEdited ? ContactBeingEdited.id : generateRandomId(),
            name,
            phone
        });
        closePopup();
    }

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">New Contact</h2>
            <p className="mt-1 text-sm text-slate-500">Add a new contact to your list.</p>
          </div>
          <button 
          className="text-slate-500 hover:bg-slate-200 rounded-full h-8 w-8 flex items-center justify-center" 
          onClick={() => closePopup()}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>


        <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                    <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-sky-200"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                    <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-sky-200"
                    />
                </div>
            </div>

            <div className=" flex gap-3">
                <button
                    type="button"
                    onClick={() => closePopup()}
                    className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 rounded-2xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                    Save Contact
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm