import { mapGetters, mapActions } from 'vuex'

export const menuMixin = {
  computed: {
    ...mapGetters(['menuIndex', 'menuCreate'])
  },
  methods: {
    ...mapActions(['setMenuIndex'])
  }
}
