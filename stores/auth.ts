import { defineStore } from 'pinia'

export interface AuthUser extends Record<string, any> {}

export interface AuthState {
  loggedIn: boolean
  user: AuthUser | null
  loading: boolean
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => {

    return {
      loggedIn: !!true,
      user: {},
      loading: false,
    }
  },
  actions: {
    logout() {
      //const { clear } = useAuthStorage()
      //clear()

      this.loggedIn = false
      this.user = null
    },
  },
})
