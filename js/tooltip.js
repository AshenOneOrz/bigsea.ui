Sea.innerHTML = `
    <sea class="tooltip">
        <div class="inner"></div>
        <div class="arrow"></div>
    </sea>`
Sea('body').append(Sea.innerHTML)
//
bigsea.prototype.tooltip = function(html, where) {
    let dom = this.dom
    let tip = Sea('sea.tooltip')
    let arr = [dom.offsetLeft, dom.offsetTop, dom.offsetWidth, dom.offsetHeight]
    let [x, y, w, h] = arr.map(function(e) {
        return Number(e)
    })
    tip.find('.inner').html(html)
    tip.w = tip.dom.offsetWidth
    tip.h = tip.dom.offsetHeight
    for (let cls of tip.dom.classList) {
        if (cls !== 'tooltip') {
            tip.dom.classList.remove(cls)
        }
    }
    let dict = {
        top() {
            tip.addClass('top')
            y -= tip.h + 16
            x -= (tip.w - w) / 2 + 8
        },
        topLeft() {
            tip.addClass('topLeft')
            y -= tip.h + 16
            x -= 8
        },
        topRight() {
            tip.addClass('topRight')
            y -= tip.h + 16
            x -= tip.w - w + 8
        },
        bottom() {
            tip.addClass('bottom')
            y += h
            x -= (tip.w - w) / 2 + 8
        },
        bottomLeft() {
            tip.addClass('bottomLeft')
            y += h
            x -= 8
        },
        bottomRight() {
            tip.addClass('bottomRight')
            y += h
            x -= tip.w - w + 8
        },
        right() {
            tip.addClass('right')
            x += w
            y -= (tip.h - h) / 2 + 8
        },
        rightTop() {
            tip.addClass('rightTop')
            x += w
            y -= 8
        },
        rightBottom() {
            tip.addClass('rightBottom')
            x += w
            y += h - 8 - tip.h
        },
        left() {
            tip.addClass('left')
            x -= tip.w + 16
            y -= (tip.h - h) / 2 + 8
        },
        leftTop() {
            tip.addClass('leftTop')
            x -= tip.w + 16
            y -= 8
        },
        leftBottom() {
            tip.addClass('leftBottom')
            x -= tip.w + 16
            y += h - 8 - tip.h
        },
    }
    dict[where || 'bottomLeft']()
    tip.css({
        opacity: 1,
        top: y + 'px',
        left: x + 'px',
        zIndex: 101,
    })
    let recursion = function() {
        Sea(document).one('mousedown', function(event) {
            let bool = Boolean(Sea(event.target).parent('sea.tooltip').dom)
            if (bool) {
                recursion()
            } else {
                tip.css({
                    opacity: 0,
                    top: 0,
                    left: 0,
                    zIndex: -1,
                })
            }
        })
    }
    setTimeout(function() {
        if (tip.css('opacity') === '0') {
            //
        } else {
            recursion()
        }
    }, 100)
}
