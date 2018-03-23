Sea.UIEvent.upload = function() {
    Sea('sea.upload').on('mousedown', '.choose', function() {
        Sea(this).next().click()
    })
    Sea('sea.upload').on('change', 'input', function() {
        let name = this.value.split('\\').slice(-1)[0]
        // log(name)
    })
}
