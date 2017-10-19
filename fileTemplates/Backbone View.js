define("backbone_components/${ROOT_BACKBONE_FOLDER}/views/${NAME}", [
    "underscore", "backbone", "text!backbone_components/${ROOT_BACKBONE_FOLDER}/templates/${BASE_TEMPLATE}.html"
], function (_, Backbone, template) {

    return Backbone.View.extend({
        events: {},

        initialize: function (options) {
            this.options = _.extend({}, options);
        },

        template: _.template($(template).html()),
        render: function () {
            
        }
    });
});