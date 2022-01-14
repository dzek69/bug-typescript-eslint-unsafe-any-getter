class Item {
    get data() {
        return {
            count: 6,
        }
    }
}

class Test extends Item {
    get stuff() {
        return {
            list: [
                new Item(),
                new Item(),
                new Item(),
            ]
        }
    }

    get numberStuff(): { list: Array<Item> } {
        return {
            list: [
                new Item(),
                new Item(),
                new Item(),
            ]
        }
    }
}

const x = new Test();

x.stuff.list.find(a => a.data.count < 3);
