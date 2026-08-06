const urlParams = new URLSearchParams(window.location.search);

let bsz = urlParams.get('bsz') || 33;  // block size
let psh = urlParams.get('psh') || 0;   // problem shift (skips this number of BPs at the start of a block)
prob_shift = parseInt(psh, 10);

let blockSize = bsz;  //6;  // have only x problems in each part for testing

let imgnos_a = Array.from({ length: blockSize }, (_, i) => i+2+prob_shift);
let imgnos_b = Array.from({ length: blockSize }, (_, i) => i+33+2+prob_shift);
let imgnos_c = Array.from({ length: blockSize }, (_, i) => i+33+33+2+prob_shift);


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
