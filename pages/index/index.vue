<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<view class="">{{url}}</view>

		<image :src="codeUrl" mode="aspectFit"></image>

	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { onLoad } from "@dcloudio/uni-app";
	import QRCode from 'qrcode';
	const title = ref('')
	const url = ref('')
	const codeUrl = ref('')

	onMounted(() => {
		title.value = 'wgt-upload 1.0'
	})
	onLoad((query : any) => {
		url.value = '123'
		if (query.url) {
			title.value = query.url
			url.value = query.url
			codeDetail(query.url)
		}
	})

	const codeDetail = (url : string) => {
		QRCode.toDataURL(url).then((img : string) => {
			console.log(img);
			codeUrl.value = img
			// 这个img是图片路径，赋值给img标签即可显示
		});
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin: 20px;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>