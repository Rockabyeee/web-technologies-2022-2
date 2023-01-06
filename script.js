if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran1',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT1',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Ulgran2',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT3',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT4',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }, {
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran3',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT5',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT6',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    }


    const items = new ListItems(document.getElementById('list-items'), data)

    items.render();
    items.init();

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]');

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]');

                open.addEventListener('click', () => this.toggleItems(parent));
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data));
        }

        this.renderParent = function (data) {
            let result = '';

            result += '<div class="list-item list-item_open" data-parent>';
            result += this.renderElement(data);
            result += '<div class="list-item__items">';

            for (let item of data.items) {
                if (item.hasChildren) {
                    result += this.renderParent(item);
                }
                else {
                    result += this.renderChildren(data);
                }
            }

            result += '</div>';
            result += '</div>';

            return result;
        }

        this.renderChildren = function (data) {
            let result = '';

            result += '<div class="list-item__inner">';
            result += '<div class="list-item__space">';
            result += '</div>';
            result += '<img class="list-item__folder" src="img/folder.png" alt="folder">';
            result += `<span>${data.name}</span>`;
            result += '</div>';

            return result;
        }

        this.renderElement = function (data) {
            let result = '';

            result += '<div class="list-item__inner">'
            result += '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>';
            result += '<img class="list-item__folder" src="img/folder.png" alt="folder">';
            result += `<span>${data.name}</span>`;
            result += '</div>';

            return result;
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open');;
        }

        /*        this.renderTest = function (data) {
                    return `
                    <div class="test">${data.name}</div>
                    `
                }*/
    }

}
