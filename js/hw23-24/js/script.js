'use strict';

function Model(data){
    var self = this;
    self.data = data;
    self.addItem = function(item){
        if(item.length === 0){
            return;
        }
        self.data.push(item);
        return self.data;
    }
    self.removeItem = function(item){
        var index = self.data.indexOf(item);
        if(index === -1){
            return;
        }
        self.data.splice(index, 1);
        return self.data;
    }
    self.editItem = function(item, newValue){
        var index = self.data.indexOf(item);
        self.data[index] = newValue;
    }
}

function View(model){
    var self = this;

    function init(){
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };
        self.renderList(model.data);
    };

    self.renderList= function(data){
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    };
    init();
}

function Controller(model, view){
    var self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);
    function addItem(){
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }
    function removeItem(){
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }
    function editItem(){
        var item = $(this).attr('data-value');
        if($(this).attr('editing') === '1'){
            model.editItem(item, view.elements.input.val());
            view.renderList(model.data);
            view.elements.input.val('');
            reset();
        } else{
            reset();
            $(this).css({background: 'red'});
            $(this).attr('editing', '1');
            view.elements.input.val(item);
        }

        function reset(){
            var $btnEdit = $('.item-edit');
            for(var i = 0; i < $btnEdit.length; i++){
                $btnEdit.css({background: 'black'});
                $btnEdit.attr('editing', '');
            }
        }
    }
}

$(function(){
    var firstToDoList = ['learn javascript', 'learn HTML', 'make coffee'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});