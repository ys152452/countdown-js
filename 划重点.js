		var t, t0; // ��ʱ��*2
		var moving = false; // �Ƿ������ƶ� ��־λ
		var timeStart = 60; // ��ʱ60��

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

		function timeGo() { // ��
			t = setTimeout(function() { // 2����������
				t0 = setInterval(timeProgress, 1000)
			}, 2000)
		}

		function save() { // ����
			console.log('save')
		}

		function cancle() {
			timeStart = 60 // ����
			$('.lo-time-progress').eq(0).css('width', '100%')
			$('.lo-time-text').eq(0).text(timeStart + 's')
		}
		$(function() {
			t0 = setInterval(timeProgress, 1000) // ��ʼִ��
			document.addEventListener("mousemove", function(e) {
				clearTimeout(t) // ���ƶ� ���֮ǰ�Ķ�ʱ��t ��ȡ��2��������� �����ڷ���ε����abort����
				if(!moving) {
					// �����һ���ƶ��Ļ� �������ʱ�Ķ�ʱ��t0 ���ı�moving��״̬
					clearTimeout(t0)
					moving = true
				}
				// ÿ���ƶ���ȥ����2��ĵȴ�����
				timeGo()
			}, {
				// ������Դ�����������
				passive: true
			})
		})