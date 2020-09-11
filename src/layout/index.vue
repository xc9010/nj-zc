<template>
  <div>
    <Header></Header>
    <app-main />
    <Footer></Footer>
  </div>
</template>

<script>
import { AppMain } from './components'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

export default {
  name: 'Layout',
  components: { Header, Footer, AppMain },
}
</script>

