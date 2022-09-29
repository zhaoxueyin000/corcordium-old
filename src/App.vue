<template>
	<div id="app">
		<!-- <home></home> -->
		<router-view class="page" />
		
	</div>
</template>

<script>
	// import home from './views/HomeEn.vue';
	// import homecn from './views/HomeCn.vue';

	export default{
		name:'app',
		components:{
			// home,homecn
		}

	}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 100%;
  background: #000;
}

</style>
