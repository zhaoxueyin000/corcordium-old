<template>
  <div class="home">
  	<section id="p1">
  		<div class="p1">
  			<Image :src='page1bgimg' :fit="fit" width="100%" height="100%" :alt="fit" />
  		</div>
  	</section>
  	<section id="p2">
  		<div class="p2">
  			<Image :src='page1bottom' :fit="fit" width="100%" height="100%" :alt="fit" />
  		</div>
  	</section>
  	<section id="p3">
  		<div class="p3">
  			<Image :src='page2bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="line" :style="{background: 'url(' + lineimg + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="phone_img_1 ani">
  					<Image :src="'images/'+cnpath+'index2_phone_1.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="phone_img_2 ani">
  					<Image src="images/index2_phone_2.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="phone_img_3 ani">
  					<Image src="images/index2_phone_3.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="phone_img_4 ani">
  					<Image :src="'images/'+cnpath+'index2_phone_4.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="phone_img_5 ani mouseHander" @click='goAnchor("p4")' :style="{background: 'url(images/phone_number_1.png) no-repeat center center' }">
            <!-- <Image src="images/phone_number_1.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_6 ani mouseHander" @click='goAnchor("p5")' :style="{background: 'url(images/phone_number_2.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_2.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_7 ani mouseHander" @click='goAnchor("p6")' :style="{background: 'url(images/phone_number_3.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_3.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_8 ani mouseHander" @click='goAnchor("p7")' :style="{background: 'url(images/phone_number_4.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_4.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_9 ani mouseHander" @click='goAnchor("p8")' :style="{background: 'url(images/phone_number_5.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_5.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_10 ani mouseHander" @click='goAnchor("p9")' :style="{background: 'url(images/phone_number_6.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_6.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_11 ani mouseHander" @click='goAnchor("p10")' :style="{background: 'url(images/phone_number_7.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_7.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_12 ani mouseHander" @click='goAnchor("p11")' :style="{background: 'url(images/phone_number_8.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_8.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>
          <div class="phone_img_13 ani mouseHander" @click='goAnchor("p12")' :style="{background: 'url(images/phone_number_9.png) no-repeat center center ' }">
            <!-- <Image src="images/phone_number_9.png"  width="100%" height="100%" :fit="fit" /> -->
          </div>

  			</div>
  		</div>
  	</section>
  	<section id="p4">
  		<div class="p4">
  			<Image :src='page3bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_1 ani">
  				<Image src="images/page_icon1.png"  width="100%" height="100%" :fit="fit" />
  			</div>
  			<div class="sizebox">
  				<div class="artbox ani">
  					<Image src="images/index_2_art1.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="artbox_txt_1 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy1.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="artbox_txt_2 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy2.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="artbox_txt_3 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy3.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="artbox_txt_4 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy4.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<transition
			      name="h1"
			      mode="out-in"
			      enter-active-class="animate__animated animate__fadeIn"
			      leave-active-class="animate__animated animate__fadeOut"
			    >
  				<div class="heart ani mouseHander" @click='showThePop' v-if='!showHeart'>
  					<Image src="images/heart.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</transition>
  			</div>
  		</div>
  	</section>
  	<section id="p5">
  		<div class="p5">
	  			<Image :src='page4bg' :fit="fit" width="100%" height="100%" :alt="fit" />
		   <div class="pageCount_2 ani">
				<Image src="images/page_icon2.png"  width="100%" height="100%" :fit="fit" />
			</div>
			<div class="sizebox">
  				<div class="art2 ani">
  					<Image src="images/art2.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_copy5 ani">
  					<Image :src="'images/'+cnpath+'index_copy5.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_copy6 ani">
  					<Image :src="'images/'+cnpath+'index_copy6.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_copy7 ani">
  					<Image :src="'images/'+cnpath+'index_copy7.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_copy8 ani">
  					<Image :src="'images/'+cnpath+'index_copy8.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  			<div class="line" :style="{background: 'url(' + lineimg + ') no-repeat center center ' }"></div>
  		</div>
		
  	</section>
  	<section id="p6">
  		<div class="p6">
  			<Image :src='page5bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_3 ani">
				<Image src="images/page_icon3.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg2 + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="art3-light ani flush">
            <Image src="images/art3-light.png"  width="100%" height="100%" :fit="fit" />
          </div>
          <div class="art3 ani">
            <Image src="images/art3.png"  width="100%" height="100%" :fit="fit" />
          </div>
  				<div class="art4 ani">
  					<Image :src="'images/'+cnpath+'art4.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				
  			</div>
  		</div>
  	</section>

  	<section id="p7">
  		<div class="p7">
  			<Image :src='page6bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_4 ani">
				<Image src="images/page_icon4.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				
  			</div>
  		</div>
  	</section>

  	<section id="p8">
  		<div class="p8">
  			<Image :src='page7bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_5 ani">
				<Image src="images/page_icon5.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="index_2_copy5 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy5.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  		</div>
  	</section>

  	<section id="p9">
  		<div class="p9">
  			<Image :src='page8bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_6 ani">
				<Image src="images/page_icon6.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg2 + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="index_2_copy6 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy6.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy7 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy7.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  		</div>
  	</section>

  	<section id="p10">
  		<div class="p10">
  			<Image :src='page9bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_7 ani">
				<Image src="images/page_icon7.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg2 + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="index_2_copy8 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy8.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy9 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy9.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  		</div>
  	</section>

  	<section id="p11">
  		<div class="p11">
  			<Image :src='page10bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_8 ani">
				<Image src="images/page_icon8.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="line" :style="{background: 'url(' + lineimg2 + ') no-repeat center center ' }"></div>
  			<div class="sizebox">
  				<div class="index_2_copy10 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy10.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy11 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy11.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="conbar ani">
  					<Image src="images/pbar.png"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  		</div>
  	</section>

  	<section id="p12">
  		<div class="p12">
  			<Image :src='page11bg' :fit="fit" width="100%" height="100%" :alt="fit" />
  			<div class="pageCount_9 ani">
				<Image src="images/page_icon9.png"  width="100%" height="100%" :fit="fit" />
			</div>
  			<div class="sizebox">
  				<div class="art4 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy12.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</div>
  			<div class="sizebox">
  				<div class="index_2_copy13 ani">
  					<Image :src="'images/'+cnpath+'index_2_copy13.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy14 ani" @mouseover='endpoptxtb1=true'>
  					<Image :src="'images/'+cnpath+'index_2_copy14.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy15 ani" @mouseover='endpoptxtb2=true'>
  					<Image :src="'images/'+cnpath+'index_2_copy15.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy16 ani" @mouseover='endpoptxtb3=true'>
  					<Image :src="'images/'+cnpath+'index_2_copy16.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="index_2_copy17 ani" @mouseover='endpoptxtb4=true'>
  					<Image :src="'images/'+cnpath+'index_2_copy17.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<div class="endcopy ani">
  					<Image :src="'images/'+cnpath+'endcopy.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  				<transition
			      name="h1"
			      mode="out-in"
			      enter-active-class="animate__animated animate__fadeIn"
			      leave-active-class="animate__animated animate__fadeOut"

			    >
  				<div class="endpoptxt1 ani"  v-if='endpoptxtb1' @mouseleave='endpoptxtb1=false'>
  					<Image :src="'images/'+cnpath+'endpoptxt1.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</transition>
  			<transition
			      name="h1"
			      mode="out-in"
			      enter-active-class="animate__animated animate__fadeIn"
			      leave-active-class="animate__animated animate__fadeOut"

			    >
  				<div class="endpoptxt2 ani" v-if='endpoptxtb2' @mouseleave='endpoptxtb2=false'>
  					<Image :src="'images/'+cnpath+'endpoptxt2.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</transition>
  			<transition
			      name="h1"
			      mode="out-in"
			      enter-active-class="animate__animated animate__fadeIn"
			      leave-active-class="animate__animated animate__fadeOut"

			    >
  				<div class="endpoptxt3 ani" v-if='endpoptxtb3' @mouseleave='endpoptxtb3=false'>
  					<Image :src="'images/'+cnpath+'endpoptxt3.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</transition>
  			<transition
			      name="h1"
			      mode="out-in"
			      enter-active-class="animate__animated animate__fadeIn"
			      leave-active-class="animate__animated animate__fadeOut"
			    >
  				<div class="endpoptxt4 ani" v-if='endpoptxtb4' @mouseleave='endpoptxtb4=false'>
  					<Image :src="'images/'+cnpath+'endpoptxt4.png'"  width="100%" height="100%" :fit="fit" />
  				</div>
  			</transition>
  			</div>
  		</div>
  	</section>

  	<transition
      name="h1"
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
  	<div class="popup" v-if='showHeart' >
  		<div class="sizebox ani" @click='showHeart=false'>
	  		<div class="popup_haret ani" >
	  			<Image src="images/heart.png"  width="100%" height="100%" :fit="fit" />
	  		</div>
	  		<div class="popup_copy ani">
	  			<Image :src="'images/'+cnpath+'heartcopy.png'"  width="100%" height="100%" :fit="fit" />
	  		</div>
  		</div>
  	</div>
  </Transition>

  <div class="langbtnbox">
        <div class="p1cnbtn ani mouseHander" @click='gotoPath("/cn")'>
          <Image src="images/cnbtn.png"  width="100%" height="100%" :fit="fit" />
        </div>
        <div class="p1enbtn ani mouseHander" @click='gotoPath("/")'>
          <Image src="images/engbtn.png"  width="100%" height="100%" :fit="fit" />
        </div>
        <div class="p1jpbtn ani mouseHander" @click='gotoPath("/jp")'>
          <Image src="images/jpbtn.png"  width="100%" height="100%" :fit="fit" />
        </div>
    </div>

  </div>
</template>
<script>
	import { Image } from 'view-ui-plus';

	import {props,setup} from 'vue';
	import { nextTick,watch } from 'vue'
	import { Swiper, SwiperSlide,useSwiper} from "swiper/vue";
	import SwiperCore, {Autoplay } from 'swiper/core';
  	import 'swiper/css/pagination';
  	import "swiper/css/effect-fade";

	SwiperCore.use([Autoplay]);

	export default{
		components:
		{
			Image,
			Swiper,
      		SwiperSlide
		},
		props:{
			
		},
		
	    methods:{
		  onSwiper (swiper){
		        this.proswiper=swiper;
		        // console.log(this.proswiper)
	      },
	      onSlideChange() {

	      },
		  goAnchor(id) {
			    var anchor = document.getElementById(id);
			    // console.log(anchor)
			    // chrome
			    document.body.scrollTop = anchor.offsetTop;
			    // firefox
			    document.documentElement.scrollTop = anchor.offsetTop;
			    // safari
			    window.pageYOffset = anchor.offsetTop;
		},
    gotoPath(link){
        window.location.href=link;
    },
		showThePop(){
			let that=this;

			that.goAnchor('p4')
			setTimeout(()=>{
				that.showHeart=true;
			},300)
		}
		},
		data(){
			return{
				cnpath:'cn/',
				showHeart:false,
				proSwiper:null,
				fit:'contain',
				lineimg:'images/greenline.png',
				lineimg2:'images/greenline2.png',
				page1bgimg:'images/index_bg1.png',
				page1bottom:'images/cn/bbg1.png',
				page2bg:'images/index_bg2.png',
				page3bg:'images/index_bg3.png',
				page4bg:'images/index_bg4.gif',
				page5bg:'images/index_bg5.png',
				page6bg:'images/cn/index_bg11.png',
				page7bg:'images/index_bg6.png',
				page8bg:'images/index_bg7.png',
				page9bg:'images/index_bg8.png',
				page10bg:'images/index_bg9.png',
				page11bg:'images/index_bg10.png',
				endpoptxtb1:false,
				endpoptxtb2:false,
				endpoptxtb3:false,
				endpoptxtb4:false,

			}
		}
	}
</script>

<style lang="scss" scoped>
	section{
		background: #000;
	}
	.home{
		width: 100%;
		position: relative;
	}
	

	.popup{
		position: fixed;
		width: 100%;
		height:100%;
		background:rgba(0,0,255,0.6);
		z-index: 99;
		top:0;
		left: 0;
		.popup_haret{
			top:px2rem(202px);
			left:50%;
			width: px2rem(138px);
			height: px2rem(141px);
			transform: translateX(-50%)
		}
		.popup_copy{
			top:px2rem(496px);
			left:50%;
			width: px2rem(619px);
			height: px2rem(283px);
			transform: translateX(-50%)
		}
	}
	.mouseHander{
		cursor: pointer;
	}
	.sizebox{
		position: absolute; 
		max-width: px2rem(1200px);
		width: 100%;
		height: 100%;
		top:50%;
		left:50%;
		// background:rgba(255,255,255,0.5);
		transform: translate(-50%,-50%)
	}
	.backgroundSizeCon{
		background-size: auto 100% !important;
		line-height: 0;
	}
	.linebackground{
		width: 100%;
		position: absolute;
		bottom: 0;
		background-size: cover !important;
	}
	.page_count_number{
		left:1px;
		top:px2rem(736px);
		width: px2rem(135px);
		height: px2rem(29px);
	}

	//
	.p1{
		@extend .backgroundSizeCon;
		position: relative;
		
	}
	.p2{
		@extend .backgroundSizeCon;
	}
	.p3{
		@extend .backgroundSizeCon;
		position: relative;
		line-height: 0;

		.line{
			height: px2rem(5px);
			@extend .linebackground;
		}
		.phone_img_1{
			width: px2rem(301px);
			height: px2rem(52px);
			line-height: 0;
			top: px2rem(227px);
		}
		.phone_img_2{
			width: px2rem(123px);
			height: px2rem(36px);
			left:px2rem(109px);
			top: px2rem(611px);

		}
		.phone_img_3{
			width: px2rem(269px);
			height: px2rem(496px);
			left:px2rem(6px);
			top: px2rem(289px);

		}
		.phone_img_4{
			width: px2rem(442px);
			height: px2rem(617px);
			left:px2rem(734px);
			top: px2rem(233px);

		}

		.phone_img_5{
			left:px2rem(88px);
			top: px2rem(289px);
			width: px2rem(53px);
			height: px2rem(54px); background-size: cover !important;
		}

		.phone_img_6{
			left:px2rem(155px);
			top: px2rem(295px);
			width: px2rem(53px);
			height: px2rem(54px); background-size: cover !important;
		}

		.phone_img_7{
			left:px2rem(222px);
			top: px2rem(301px);
			width: px2rem(53px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_8{
			left:px2rem(84px);
			top: px2rem(366px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_9{
			left:px2rem(151px);
			top: px2rem(372px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_10{
			left:px2rem(219px);
			top: px2rem(378px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_11{
			left:px2rem(81px);
			top: px2rem(436px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_12{
			left:px2rem(148px);
			top: px2rem(442px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
		.phone_img_13{
			left:px2rem(215px);
			top: px2rem(449px);
			width: px2rem(54px);
			height: px2rem(54px); background-size: cover !important;
		}
	}
	.p4{
		@extend .backgroundSizeCon;
		position: relative;	
		line-height: 0;
		.pageCount_1{
			@extend .page_count_number;
		}
		.heart{
			left:px2rem(531px);
			top:px2rem(202px);
			width: px2rem(138px);
			height: px2rem(141px);
		}
		.artbox{
			left:px2rem(-7px);
			top:px2rem(193px);
			width: px2rem(1207px);
			height: px2rem(659px);
		}
		.artbox_txt_1{
			left:px2rem(934px);
			top:px2rem(215px);
			width: px2rem(176px);
			height: px2rem(46px);
		}
		.artbox_txt_2{
			left:px2rem(934px);
			top:px2rem(315px);
			width: px2rem(196px);
			height: px2rem(47px);
		}
		.artbox_txt_3{
			left:px2rem(62px);
			top:px2rem(732px);
			width: px2rem(92px);
			height: px2rem(113px);
		}
		.artbox_txt_4{
			left:px2rem(926px);
			top:px2rem(733px);
			width: px2rem(93px);
			height: px2rem(79px);
		}
	}
	.p5{
		@extend .backgroundSizeCon;
		position: relative;
		height: px2rem(1080px);
		.line{
			@extend .linebackground;
			height: px2rem(5px);
		}
		.pageCount_2{
       top:px2rem(866px);
			@extend .page_count_number;
		}
		.Calbox{
			width: 100%;
			height: 100%;
			top:0;
			left:0;
			z-index: 0;
		}
		.art2{
			left:px2rem(-1px);
			top:px2rem(184px);
			width: px2rem(1202px);
			height: px2rem(346px);
		}
		.index_copy5{
			left:px2rem(0px);
			top:px2rem(400px);
			width: px2rem(167px);
			height: px2rem(57px);
		}
		.index_copy6{
			left:px2rem(0px);
			top:px2rem(870px);
			width: px2rem(161px);
			height: px2rem(18px);
		}
		.index_copy7{
			left:px2rem(332px);
			top:px2rem(870px);
			width: px2rem(179px);
			height: px2rem(18px);
		}
		.index_copy8{
			left:px2rem(729px);
			top:px2rem(870px);
			width: px2rem(476px);
			height: px2rem(18px);
		}
	}
	.p6{
		position: relative;
		.line{
			height: px2rem(37px);
			@extend .linebackground;
		}
		.pageCount_3{
       top:px2rem(798px);
		  @extend .page_count_number;
		}
		.art3{
			left:px2rem(0px);
			top:px2rem(273px);
			width: px2rem(468px);
			height: px2rem(474px);
		}
		.art4{
			left:px2rem(16px);
			top:px2rem(226px);
			width: px2rem(1183px);
			height: px2rem(538px);
		}
	}
	.p7{
		@extend .backgroundSizeCon;
		position: relative;
		.line{
			@extend .linebackground;
		}
		.pageCount_4{
       top:px2rem(941px);
			@extend .page_count_number;
		}
	}

	.p8{
		@extend .backgroundSizeCon;
		position: relative;

		.line{
			@extend .linebackground;
		}
		.pageCount_5{
      top:px2rem(941px);
			@extend .page_count_number;
		}
		.index_2_copy5{
			left:px2rem(159px);
			top:px2rem(83px);
			width: px2rem(881px); height: px2rem(137px);
		}
	}

	.p9{
		@extend .backgroundSizeCon;
		position: relative;
		.line{
			height: px2rem(37px);
			@extend .linebackground;
		}
		.pageCount_6{
       top:px2rem(873px);
			@extend .page_count_number;
		}
		.index_2_copy6{
			left:px2rem(513px);
			top:px2rem(98px);
			width: px2rem(174px); height: px2rem(27px);
		}
		.index_2_copy7{
			left:px2rem(529px);
			top:px2rem(884px);
			width: px2rem(141px); height: px2rem(16px);
		}
	}
	.p10{
		@extend .backgroundSizeCon;
		position: relative;
		.line{
			height: px2rem(20px);
			@extend .linebackground;
		}
		.pageCount_7{
      top:px2rem(941px);
			@extend .page_count_number;
		}
		.index_2_copy8{
			left:px2rem(538px);
			top:px2rem(141px);
			width: px2rem(123px); height: px2rem(29px);
		}
		.index_2_copy9{
			left:px2rem(533px);
			top:px2rem(985px);
			width: px2rem(134px); height: px2rem(16px);
		}
	}
	.p11{
		@extend .backgroundSizeCon;
		position: relative;
		.line{
			height: px2rem(20px);
			@extend .linebackground;
		}
		.pageCount_8{
      top:px2rem(941px);
			@extend .page_count_number;
		}
		.index_2_copy10{
			left:px2rem(539px);
			top:px2rem(110px);
			width: px2rem(123px); height: px2rem(29px);
		}
		.index_2_copy11{
			left:px2rem(527px);
			top:px2rem(934px);
			width: px2rem(150px); height: px2rem(18px);
		}
		.conbar{
			left:px2rem(279px);
			top:px2rem(875px);
			width: px2rem(623px); height: px2rem(14px);
		}
	}

	.p12{
		@extend .backgroundSizeCon;
		position: relative;
		.art4{
			left: px2rem(-30px);
			top:px2rem(218px);
			width:px2rem(559px);
			height: px2rem(428px);
		}
		.pageCount_9{
			@extend .page_count_number;
		}
		.index_2_copy13{
			left: px2rem(559px);
			top:px2rem(104px);
			width:px2rem(82px);
			height: px2rem(40px);
		}
		.index_2_copy14{
			left: px2rem(851px);
			top:px2rem(231px);
			width:px2rem(365px);
			height: px2rem(88px);
		}
		.index_2_copy15{
			left: px2rem(850px);
			top:px2rem(355px);
			width:px2rem(327px);
			height: px2rem(73px);
		}
		.index_2_copy16{
			left: px2rem(806px);
			top:px2rem(470px);
			width:px2rem(382px);
			height: px2rem(79px);
		}
		.index_2_copy17{
			left: px2rem(851px);
			top:px2rem(606px);
			width:px2rem(334px);
			height: px2rem(52px);
		}
		.endcopy{
			left: px2rem(492px);
			top:px2rem(878px);
			width:px2rem(504px);
			height: px2rem(49px);
		}
		.endpoptxt1{
			left: px2rem(724px);
			top:px2rem(245px);
			width:px2rem(400px);
			height: px2rem(90px);
		}
		.endpoptxt2{
			left: px2rem(493px);
			top:px2rem(354px);
			width:px2rem(600px);
			height: px2rem(90px);
		}
		.endpoptxt3{
			left: px2rem(772px);
			top:px2rem(468px);
			width:px2rem(320px);
			height: px2rem(90px);
		}
		.endpoptxt4{
			left: px2rem(749px);
			top:px2rem(589px);
			width:px2rem(320px);
			height: px2rem(90px);
		}
	}

</style>