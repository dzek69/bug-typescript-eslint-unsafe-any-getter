class Item {
    get data() {
        return {
            count: 6,
        }
    }
}

class Test {
    public get stuff() {
        return {
            list: [
                new Item(),
                new Item(),
                new Item(),
            ]
        }
    }

    public get numberStuff(): { list: Item[] } {
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
