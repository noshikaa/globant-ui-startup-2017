
function mpExpandableListController(){
    var vm = this;

    vm.add = add;
    vm.manipulatable = true;
    vm.remove = remove;

    // If items was not declared, create new array.
    if(!vm.items) {
        vm.items = [];
    }

    // If the items array is empty, create first item.
    if(vm.items.length === 0) {
        add();
    }

    /**
     * Add an item to the item list.
     */
    function add(){
        vm.items.push({});
        setManipulatable();
    }


    /**
     * Remove an item from the item list.
     * @param item The item to remove
     */
    function remove(item){
        vm.items.splice(vm.items.indexOf(item), 1);
        setManipulatable();
    }

    /**
     * Set the flag which designates that the list may be manipulated.
     */
    function setManipulatable() {
        vm.manipulatable = vm.items.length > 1;
    }
}

/**
 *
 * @param $element The element as declared in the HTML
 * @param $attrs The attributes for said element
 * @returns {string} A template for this component.
 */



function template($element, $attrs){
    var container = angular.element('<ul>'),
        item = angular.element('<li ng-repeat="item in list.items">'),
        footer = angular.element('<li>');

    container.addClass($attrs.universalClass);
    item.addClass($attrs.itemClass);
    footer.addClass($attrs.footerClass);

    item.html($element.find('item').html());
    footer.html($element.find('footer').html());

    container.append(item);
    container.append(footer);

    return container[0].outerHTML;
}



var mpExpandableList = {
    bindings: {
        footerClass: '@',
        itemClass: '@',
        items: '=',
        universalClass: '@'
    },
    controller: mpExpandableListController,
    controllerAs: 'list',
    template: template
};



angular
    .module('my.project')
    .component('mpExpandableList', mpExpandableList);
