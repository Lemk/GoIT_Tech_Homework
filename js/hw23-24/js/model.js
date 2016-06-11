define('model',
    [],
    function () {
        function model() {
            var self = this;
            self.data = ['learn javascript', 'learn HTML', 'make coffee'];
            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }
                self.data.push(item);
                return self.data;
            }
            self.removeItem = function (item) {
                var index = self.data.indexOf(item);
                if (index === -1) {
                    return;
                }
                self.data.splice(index, 1);
                return self.data;
            }
            self.editItem = function (item, newValue) {
                var index = self.data.indexOf(item);
                self.data[index] = newValue;
            }
        }

        return model;
    }
)
