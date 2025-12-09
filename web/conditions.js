// let blockSize = 33;
let blockSize = 4;

let imgns_a = [...Array(blockSize).keys()];
let imgnos_a = imgns_a.map(a => a+2);

let imgns_b = [...Array(blockSize).keys()];
let imgnos_b = imgns_b.map(a => a+33+2);

let imgns_c = [...Array(blockSize).keys()];
let imgnos_c = imgns_c.map(a => a+33+33+2);

let blocks = [
    {
        title: 'Part 1',
        conditions: [imgnos_a]
    },
    {
        title: 'Part 2',
        conditions: [imgnos_b]
    },
    {
        title: 'Part 3',
        conditions: [imgnos_c]
    }
];