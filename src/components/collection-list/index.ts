import Component from 'vue-class-component';

var template = require('./collection-list.html');

@Component({
    template: template
})
export default class CollectionList {

    get headerSlot() {
        var self: any = this;
        return 'header' in self._slotContents;
    }
}