const urlParams = new URLSearchParams(window.location.search);

let bsz = urlParams.get('bsz') || 33;  // block size
let psh = urlParams.get('psh') || 0;   // problem shift (skips this number of BPs at the start of a block)

let bsz_int = parseInt(bsz, 10);  // ensure both are integer type
let psh_int = parseInt(psh, 10);

let blockSize = (bsz_int > 33) ? 33 : bsz_int;   // ensure block size doesn't exceed 33 
let prob_shift = ((psh_int + bsz_int) > 33) ? 33 - bsz_int : psh_int;  // ensure problem shift doesn't push block size beyond 33

let imgnos_a = Array.from({ length: blockSize }, (_, i) => i+2+prob_shift);
let imgnos_b = Array.from({ length: blockSize }, (_, i) => i+33+2+prob_shift);
let imgnos_c = Array.from({ length: blockSize }, (_, i) => i+33+33+2+prob_shift);


let blocks = [
    {
        title: 'Session 1',
        conditions: [imgnos_a],
        ID: 1
    },
    {
        title: 'Session 2 - Part 1',
        conditions: [imgnos_b],
        ID: 2
    },
    {
        title: 'Session 2 - Part 2',
        conditions: [imgnos_c],
        ID: 3
    }
];
