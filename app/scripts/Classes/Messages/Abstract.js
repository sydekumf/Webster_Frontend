/**
 * This class is the abstract for all Message classes
 *
 * @class Abstract
 * @extends Ember.Object
 * @namespace EmberChat.Messages
 */
Webster.Messages = {};
Webster.Messages.Abstract = Ember.Object.extend({

    /**
     * Process this message
     *
     * @method process
     * @returns {boolean}
     */
    process: function() {
        throw new Ember.Error('Process method needs do be implemented in '+ this.constructor.toString());
    },
});