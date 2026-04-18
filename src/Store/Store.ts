import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Contact } from "../shared/type";

interface ContactState {
  contacts: Contact[];
  isPopupOpen: boolean;
  ContactBeingEdited: Contact | null;
  name: string;
  phone: string;
  searchQuery: string;
  filteredContacts: () => Contact[];
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setIsPopupOpen: (isOpen: boolean) => void;
  setSearchQuery: (query: string) => void;
  addContact: (contact: Contact) => void;
  deleteContact: (contactId: string) => void;
  editContact: (contactId: string) => void;
  closePopup: () => void;

}

export const useContactStore = create<ContactState>()(
  persist(
    (set, get) => ({
      contacts: [],
      isPopupOpen: false,
      ContactBeingEdited: null,
      name: "",
      phone: "",
      searchQuery: "",
      setName: (name) => set({ name }),
      setPhone: (phone) => set({ phone }),
      setIsPopupOpen: (isOpen) => set({ isPopupOpen: isOpen }),
      setSearchQuery: (query) => set({ searchQuery: query }),

      filteredContacts: () => {
        const { searchQuery, contacts } = get();
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      },

      addContact: (contact) => set((state) => {
            if (!contact.name || !contact.phone) {
                return { contacts: state.contacts }
            }
            if (state.ContactBeingEdited && state.ContactBeingEdited.id) {
                const updatedContacts = state.contacts.map((c) => c.id === state.ContactBeingEdited?.id ? contact : c)
                return {
                    contacts: updatedContacts,
                    ContactBeingEdited: null,
                    name: '',
                    phone: '',
                }
            }
            return {
                contacts: [...state.contacts, contact],
                name: '',
                phone: '',
            }
      }),

      editContact: (contactId: string) => set((state) => {
        const contactToEdit = state.contacts.find((c) => c.id === contactId) || null;
        if(contactToEdit) {
            return {
                ContactBeingEdited: contactToEdit,
                name: contactToEdit.name,
                phone: contactToEdit.phone,
                isPopupOpen: true,
            }
        }
        return { ContactBeingEdited: null };
      }),

      closePopup: () => set({ isPopupOpen: false, ContactBeingEdited: null, name: '', phone: '' }),

      deleteContact: (contactId: string) => set((state) => {
        const contactToDelete = state.contacts.find((c) => c.id === contactId) || null;
        if(contactToDelete) {
            const updatedContacts = state.contacts.filter((c) => c.id !== contactId);
            return {
                contacts: updatedContacts,
            }
        }
        return { contacts: state.contacts }
      }),
    }),
    {name: "contacts",}
  ),
);

