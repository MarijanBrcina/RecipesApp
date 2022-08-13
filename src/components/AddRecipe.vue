<template>
  <transition name="add">
	<div class="add-mask" @click="closeAddWindow">
		<div class="add-wrapper">
			<div class="add-container">
				<div class="add-header">
					<slot name="header"> </slot>
				</div>

				<div class="add-body">
					<slot name="body"> </slot>
				</div>

				<div class="add-footer">
					<slot name="footer"> <div> </div> </slot>
				</div>
			</div>
		</div>
	</div>
	 </transition>
</template>

<script>
export default {
	methods: {
		closeAddWindow(e) {
			if (e.target.className ==='add-mask' || e.target.className ==='add-wrapper'){
				this.$emit("close")
			}
		}
	}

}
</script>

<style lang="scss">
	.add-mask {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: table;
		transition: opacity 0.3s ease;

		.add-wrapper {
			margin: 2rem 10px 10px 10px;

			.add-container {
				max-width: 550px;
				margin: 0px auto;
				border-radius: 2px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
				transition: all 0.3s ease;
				font-family: Helvetica, Arial, sans-serif;

				.add-header {
					background-color: #721818;
					padding: 10px;
					color: white;
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;
					text-align: center;
				}

				.add-body {
					padding: 20px;
					background-color: #fff;
					max-height: 550px;
					overflow: auto;

					input {
						margin: 5px 0;
						height: 30px;
					}

					textarea {
						margin: 5px 0;
					}
				}

				.add-footer {
					padding: 10px;
					background-color: #fff;
					display: flex;
					justify-content: space-between;
					border-bottom-left-radius: 10px;
					border-bottom-right-radius: 10px;

					button {
						background-color: #dcdcdc;
						border: none;
						padding: 5px;
						width: 70px;
						color: white;
						border-radius: 10px;
						cursor: pointer;
						text-transform: uppercase;
						outline: none;
						font-weight: 600;
					}
				}

				.add-enter {
					opacity: 0;
				}

				.add-leave-active {
					opacity: 0;
				}

				.add-enter .add-container,
				.add-leave-active .add-container {
					-webkit-transform: scale(1.1);
					transform: scale(1.1);
				}
			}
		}
	}
</style>
