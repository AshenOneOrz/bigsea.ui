Sea.UIEvent.table = function() {
    let options = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["data-data"],
    }
    Sea('sea.table').ob(options, function(event) {
        log(event)
        log(this)
    })
}
