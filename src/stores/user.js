import { defineStore } from "pinia";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null,
    };
  },

  actions: {
    async register(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error(error);
      }

      this.user = auth.currentUser;
      console.log("Usuario registrado correctamente");
    },
  },
});
