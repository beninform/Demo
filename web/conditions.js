let imgns_a = [...Array(33).keys()];
let imgnos_a = imgns_a.map(a => a+2);

let imgns_b = [...Array(33).keys()];
let imgnos_b = imgns_b.map(a => a+33+2);

let imgns_c = [...Array(33).keys()];
let imgnos_c = imgns_c.map(a => a+33+33+2);

let blocks = [
    {
        title: 'Example page',
        conditions: [[1]]
    },
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