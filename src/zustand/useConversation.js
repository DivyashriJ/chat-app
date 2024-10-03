import {create} from "zustand";

const useConversation = create((set) => ({
    selectecConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;