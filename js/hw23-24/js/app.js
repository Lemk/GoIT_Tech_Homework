require(
    [
        'model',
        'view',
        'controller',
    ],
    function (model, view, controller) {
        var model = new model();
        var view = new view(model);
        var controller = new controller(model, view);
    }
);
