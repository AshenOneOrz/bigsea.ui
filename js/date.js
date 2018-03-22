Sea.innerHTML = `
    <sea class="group no-line">
        <input class="year"   placeholder="年" maxlength="4" type="tel">
        <input class="month"  placeholder="月" maxlength="2" type="tel">
        <input class="day"    placeholder="日" maxlength="2" type="tel">
    </sea>
    <sea class="group no-line">
        <input class="hour"   placeholder="时" maxlength="2" type="tel">
        <input class="minute" placeholder="分" maxlength="2" type="tel">
    </sea>`.html()
Sea('sea.date').html(Sea.innerHTML)
//
Sea.UIEvent.date = function() {
    let date = Sea('sea.date')
    let input = date.find('input')
    let year =  date.find('.year')
    let month = date.find('.month')
    let day =   date.find('.day')
    let hour =  date.find('.hour')
    let minute =date.find('.minute')
    // 初始化
    let now = moment()
    year.val(  now.format('YYYY'))
    month.val( now.format('MM'))
    day.val(   now.format('DD'))
    hour.val(  now.format('HH'))
    minute.val(now.format('mm'))
    //
    input.on('focus', function() {
        log(this.placeholder)
        Sea(this).tooltip(this.placeholder, 'top')
    })
}
