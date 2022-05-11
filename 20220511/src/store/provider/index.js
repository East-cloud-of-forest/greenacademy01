import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import router from '@/router'

export default {
  state: {
    oUser: null,
  },
  mutations: {
    fnSetUser(state, payload) {
      state.oUser = payload
    },
  },
  getters: {
    fnGetUser(state) {
      return state.oUser
    },
    fnGetAuthStatus(state) {
      return state.oUser != null
    },
  },
  actions: {
    fnRegi({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
        .then((pUserInfo) => {
          commit('fnSetUser', {
            email: pUserInfo.user.email,
            name: '이메일 로그인 유저',
          })
          router.push('/start')
        })
        .catch((err) => console.log(err))
    },

    fnDologin({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
        .then((pUserInfo) => {
          commit('fnSetUser', {
            email: pUserInfo.user.email,
            name: '이메일 로그인 유저',
          })
          router.push('/start')
        })
        .catch((err) => console.log(err))
    },

    fnDoGoogleLogin_popup({ commit }) {
      const oProvider = new firebase.auth.GoogleAuthProvider()
      oProvider.addScope('email')
      oProvider.addScope('profile')
      firebase
        .auth()
        .signInWithPopup(oProvider)
        .then((pUserInfo) => {
          commit('fnSetUser', {
            id: pUserInfo.user.uid,
            name: pUserInfo.user.displayName,
            email: pUserInfo.user.email,
            photoURL: pUserInfo.user.photoURL,
          })
          router.push('/start')
        })
        .catch((err) => console.log(err))
    },

    fnDoLogout({ commit }) {
      firebase.auth().signOut()
      commit('fnSetUser', null)
      router.push('/')
    },

    fnDelete({ commit }) {
      const user = firebase.auth().currentUser
      user
        .delete()
        .then(() => {
          commit('fnSetUser', null)
          router.push('/')
        })
        .catch((err) => console.log(err))
    },
  },
}
