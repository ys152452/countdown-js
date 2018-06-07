		var t, t0; // 定时器*2
		var moving = false; // 是否正在移动 标志位
		var timeStart = 60; // 定时60秒

		function timeProgress() {
			moving = false
			if(timeStart > 0) {
				timeStart--
			} else {
				clearTimeout(t0)
				save()
			}
			$('.lo-time-progress').eq(0).css('width', (timeStart / 60).toFixed(2) * 100 + '%')
			$('.lo-time-text').eq(0).text(timeStart + 's')
		}

		function timeGo() { // 打开
			t = setTimeout(function() { // 2秒后继续倒数
				t0 = setInterval(timeProgress, 1000)
			}, 2000)
		}

		function save() { // 操作
			console.log('save')
		}

		function cancle() {
			timeStart = 60 // 重置
			$('.lo-time-progress').eq(0).css('width', '100%')
			$('.lo-time-text').eq(0).text(timeStart + 's')
		}
		$(function() {
			t0 = setInterval(timeProgress, 1000) // 初始执行
			document.addEventListener("mousemove", function(e) {
				clearTimeout(t) // 若移动 清楚之前的定时器t 及取消2秒继续倒数 类似于防多次点击的abort操作
				if(!moving) {
					// 如果第一次移动的话 清除倒计时的定时器t0 并改变moving的状态
					clearTimeout(t0)
					moving = true
				}
				// 每次移动后都去触发2秒的等待操作
				timeGo()
			}, {
				// 浏览器自带节流？？？
				passive: true
			})
		})