define('controller',
    ['jquery'],
    function ($) {
        function controller(model, view) {
            var self = this;
            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);
            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                if ($(this).attr('editing') === '1') {
                    model.editItem(item, view.elements.input.val());
                    view.renderList(model.data);
                    view.elements.input.val('');
                    reset();
                } else {
                    reset();
                    $(this).css({background: 'red'});
                    $(this).attr('editing', '1');
                    view.elements.input.val(item);
                }

                function reset() {
                    var $btnEdit = $('.item-edit');
                    for (var i = 0; i < $btnEdit.length; i++) {
                        $btnEdit.css({background: 'black'});
                        $btnEdit.attr('editing', '');
                    }
                }
            }
        }

        return controller;
    }
)
