Sea.innerHTML = `
    <sea class="group no-line">
        <input class="year"   placeholder="年" maxlength="4" type="tel">
        <text class="zh">年</text>
        <input class="month"  maxlength="2" type="tel">
        <text class="zh">月</text>
        <input class="day"    maxlength="2" type="tel">
        <text class="zh space">日</text>
        <input class="hour"   maxlength="2" type="tel">
        <text class="en">:</text>
        <input class="minute" maxlength="2" type="tel">
        <text class="en">:</text>
        <input class="second" maxlength="2" type="tel">
    </sea>`.html()
Sea('sea.date').html(Sea.innerHTML)
//
Sea.UIEvent.date = function() {
    let group = Sea('sea.date')
    let input = group.find('input')
    // 初始化
    let setTime = function(group, time) {
        group.data('unix', time.unix())
        group.find('.year').val(  time.format('YYYY'))
        group.find('.month').val( time.format('MM'))
        group.find('.day').val(   time.format('DD'))
        group.find('.hour').val(  time.format('HH'))
        group.find('.minute').val(time.format('mm'))
        group.find('.second').val(time.format('ss'))
    }
    setTime(group, moment({
        hour: 0,
        minute: 0,
        seconds: 0,
    }))
    //
    input.on('keydown', function(event) {
        let code = event.keyCode
        let e = Sea(this)
        if (code === 39) {
            event.preventDefault()
            if (e.next().dom) {
                e.next().next().focus().select()
            }
        } else if (code === 37) {
            event.preventDefault()
            if (e.prev().dom) {
                e.prev().prev().focus().select()
            }
        }
    })
    input.on('input', function() {
        let e = Sea(this)
        if (this.value.length === this.maxLength) {
            if (!e.hasClass('second')) {
                e.next().next().focus()
            }
        }
    })
    input.on('focus', function() {
        this.select()
    })
    input.on('blur', function() {
        let e = Sea(this)
        let group = e.parent('.date')
        let cls = this.classList[0]
        // moment 对象
        let time = moment.unix(Number(group.data('unix')))
        let n = Number(this.value) || 0
        if (cls === 'month' && n > 0) {
            n -= 1
        }
        if (cls === 'day') {
            cls = 'date'
            if (n < 1) {
                n = 1
            }
        }
        if (cls in time) {
            time[cls](n)
            setTime(group, time)
        }
    })

}
