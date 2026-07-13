var rulesArray = [
    {
        "ID": 1,
        "BP": 1,
        "A": "empty frames containing no figures at all",
        "B": "contain at least one drawn figure",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 2,
        "BP": 1,
        "A": "zero enclosed regions inside the frame",
        "B": "contain at least one closed outline shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 3,
        "BP": 1,
        "A": "no curved lines",
        "B": "contain at least one curved line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 4,
        "BP": 1,
        "A": "nothing near their center",
        "B": "a figure occupying the central area",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 5,
        "BP": 1,
        "A": "contain only white space with total ink limited to the border",
        "B": "contain exactly one connected figure",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 6,
        "BP": 1,
        "A": "perfectly symmetric under any rotation",
        "B": "contain a small outline shape such as a circle or polygon",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 7,
        "BP": 2,
        "A": "large, occupying a substantial portion of the frame.",
        "B": "small, occupying only a tiny fraction of the frame.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 8,
        "BP": 2,
        "A": "positioned at or near the center of the frame.",
        "B": "positioned near an edge or corner of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 9,
        "BP": 2,
        "A": "outlined (unfilled) figures.",
        "B": "solid black (filled) figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 10,
        "BP": 2,
        "A": "curved or irregular contours.",
        "B": "regular geometric figures with straight edges.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 11,
        "BP": 2,
        "A": "convex figures without indentations.",
        "B": "concave figures containing at least one notch or indentation.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 12,
        "BP": 2,
        "A": "located in the left half of the frame.",
        "B": "located in the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 13,
        "BP": 3,
        "A": "outline shapes only, drawn with a contour line and a white (unfilled) interior",
        "B": "solid shapes only, completely filled in black",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 14,
        "BP": 3,
        "A": "shapes drawn with thin lines",
        "B": "shapes drawn with heavy, thick strokes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 15,
        "BP": 3,
        "A": "a single shape in each frame",
        "B": "at least one frame containing multiple shapes, with shapes tending to touch or merge",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 16,
        "BP": 3,
        "A": "shapes positioned toward the left half or center of the frame",
        "B": "shapes positioned toward the right half or corners of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 17,
        "BP": 3,
        "A": "shapes with at least one straight edge or smooth outline that appears light overall",
        "B": "shapes that appear dark and heavy overall due to their compact mass",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 18,
        "BP": 3,
        "A": "shapes whose interior is the same color as the background",
        "B": "shapes whose interior contrasts with the background but whose boundary is not separately visible as a line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 19,
        "BP": 4,
        "A": "convex.",
        "B": "concave.",
        "type": "genuine-rule",
        "A1": "no indentations; every straight line between two points of the outline stays inside the shape",
        "B1": "each outline has at least one indentation or inward notch"
    },
    {
        "ID": 20,
        "BP": 4,
        "A": "simple geometric figures with smooth or straight regular outlines.",
        "B": "irregular free-form figures with wavy or jagged outlines.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 21,
        "BP": 4,
        "A": "outlined (unfilled) figures.",
        "B": "solid black (filled) figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 22,
        "BP": 4,
        "A": "positioned in the left half of the frame.",
        "B": "positioned in the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 23,
        "BP": 4,
        "A": "an outline made only of straight edges or a single smooth curve.",
        "B": "an outline mixing curved and straight segments.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 24,
        "BP": 4,
        "A": "at least one axis of symmetry.",
        "B": "asymmetric, with no axis of symmetry.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 25,
        "BP": 5,
        "A": "polygons, drawn entirely with straight line segments and angular corners.",
        "B": "curvilinear figures, drawn entirely with smooth curved lines and no straight edges or corners.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 26,
        "BP": 5,
        "A": "a vertical axis of symmetry.",
        "B": "lack any axis of symmetry.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 27,
        "BP": 5,
        "A": "convex figures.",
        "B": "concave figures with an indentation.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 28,
        "BP": 5,
        "A": "positioned toward the left half of the frame.",
        "B": "positioned toward the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 29,
        "BP": 5,
        "A": "large figures occupying most of the frame.",
        "B": "small figures occupying little of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 30,
        "BP": 5,
        "A": "elongated figures that are wider than they are tall.",
        "B": "compact figures that are taller than they are wide.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 31,
        "BP": 6,
        "A": "triangles",
        "B": "quadrilaterals",
        "type": "genuine-rule",
        "A1": "polygons with exactly three sides",
        "B1": "polygons with exactly four sides"
    },
    {
        "ID": 32,
        "BP": 6,
        "A": "at least one sharply acute vertex angle",
        "B": "only wide, near-right-angle vertices",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 33,
        "BP": 6,
        "A": "filled solid black",
        "B": "drawn in outline only",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 34,
        "BP": 6,
        "A": "elongated, with one dimension much longer than the other",
        "B": "compact, roughly as wide as they are tall",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 35,
        "BP": 6,
        "A": "positioned toward the left half of the frame",
        "B": "positioned toward the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 36,
        "BP": 6,
        "A": "convex polygons",
        "B": "contain a concave (inward-pointing) vertex",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 37,
        "BP": 7,
        "A": "elongated vertically.",
        "B": "elongated horizontally.",
        "type": "genuine-rule",
        "A1": "their long axis runs up-down",
        "B1": "their long axis runs left-right"
    },
    {
        "ID": 38,
        "BP": 7,
        "A": "taller than they are wide because they are thin curved lines.",
        "B": "closed outlines with measurable width.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 39,
        "BP": 7,
        "A": "positioned in the left half or center of the frame.",
        "B": "positioned in the right half or center of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 40,
        "BP": 7,
        "A": "jagged or pointed features along their length.",
        "B": "smooth, rounded contours without points.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 41,
        "BP": 7,
        "A": "composed of a single continuous stroke.",
        "B": "composed of multiple separate strokes or segments.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 42,
        "BP": 7,
        "A": "symmetric about a vertical axis.",
        "B": "symmetric about a horizontal axis.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 43,
        "BP": 8,
        "A": "a single outlined shape positioned in the right half of the frame",
        "B": "a single outlined shape positioned in the left half of the frame",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 44,
        "BP": 8,
        "A": "a shape located in the lower half of the frame",
        "B": "a shape located in the upper half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 45,
        "BP": 8,
        "A": "a shape whose outline contains at least one straight edge",
        "B": "a shape whose outline is entirely curved",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 46,
        "BP": 8,
        "A": "a shape that is small relative to the frame",
        "B": "a shape that is large relative to the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 47,
        "BP": 8,
        "A": "a convex shape",
        "B": "a concave shape with an indentation in its outline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 48,
        "BP": 8,
        "A": "a shape with no axis of vertical symmetry",
        "B": "a shape with an axis of vertical symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 49,
        "BP": 9,
        "A": "smooth outlines, made of straight edges or gently curving lines with no jagged serrations.",
        "B": "jagged, zigzag (saw-toothed) outlines.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 50,
        "BP": 9,
        "A": "fewer than ten vertices on their outline.",
        "B": "more than twenty vertices on their outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 51,
        "BP": 9,
        "A": "convex or contain at most one concave indentation.",
        "B": "many concave indentations around their boundary.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 52,
        "BP": 9,
        "A": "a short perimeter relative to the area they enclose.",
        "B": "a very long perimeter relative to the area they enclose.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 53,
        "BP": 9,
        "A": "resemble simple geometric figures such as squares, circles, and triangles.",
        "B": "resemble irregular star bursts or explosion outlines.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 54,
        "BP": 9,
        "A": "outlines whose direction changes only a few times or gradually.",
        "B": "outlines whose direction reverses sharply at every small step.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 55,
        "BP": 10,
        "A": "an overall triangular form , whether the outline is smooth, wavy, or jagged",
        "B": "an overall quadrilateral form , whether the outline is smooth or jagged",
        "type": "genuine-rule",
        "A1": "three corners/sides",
        "B1": "four corners/sides"
    },
    {
        "ID": 56,
        "BP": 10,
        "A": "outlines drawn with irregular edges",
        "B": "outlines drawn with straight, smooth edges",
        "type": "candidate-rule",
        "A1": "wavy or jagged",
        "B1": ""
    },
    {
        "ID": 57,
        "BP": 10,
        "A": "shapes positioned in the left half of the frame",
        "B": "shapes positioned in the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 58,
        "BP": 10,
        "A": "small shapes occupying less than a quarter of the frame",
        "B": "large shapes occupying most of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 59,
        "BP": 10,
        "A": "shapes with a pointed apex at the top",
        "B": "shapes with a flat horizontal edge at the top",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 60,
        "BP": 10,
        "A": "shapes with an odd number of prominent corners",
        "B": "shapes with concave indentations along their boundary",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 61,
        "BP": 11,
        "A": "elongated figures: each shape is much longer in one direction than in the perpendicular direction",
        "B": "compact figures: each shape has roughly equal width and height",
        "type": "genuine-rule",
        "A1": "stretched, narrow forms",
        "B1": "not stretched in any direction"
    },
    {
        "ID": 62,
        "BP": 11,
        "A": "shapes whose outline includes at least one very sharp (acute) angle or tightly curved end",
        "B": "shapes whose outline has only wide angles or gentle uniform curvature",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 63,
        "BP": 11,
        "A": "shapes that are tilted or slanted with respect to the frame axes",
        "B": "shapes that are upright and axis-aligned within the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 64,
        "BP": 11,
        "A": "irregular or non-standard figures that lack a familiar geometric name",
        "B": "familiar regular geometric figures",
        "type": "candidate-rule",
        "A1": "",
        "B1": "circle, square, hexagon, rhombus"
    },
    {
        "ID": 65,
        "BP": 11,
        "A": "shapes positioned off-center, extending toward a corner or edge of the frame",
        "B": "shapes positioned at or near the center of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 66,
        "BP": 11,
        "A": "shapes with at most one axis of symmetry",
        "B": "shapes with multiple axes of symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 67,
        "BP": 12,
        "A": "elongated shapes, much longer in one direction than in the other",
        "B": "compact shapes whose width and height are roughly equal",
        "type": "genuine-rule",
        "A1": "a stretched, narrow outline",
        "B1": "fit a square bounding box"
    },
    {
        "ID": 68,
        "BP": 12,
        "A": "shapes with at least one sharp pointed end tapering to a tip",
        "B": "shapes with no tapering pointed ends",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 69,
        "BP": 12,
        "A": "shapes positioned off-center, touching or leaning toward one side of the frame",
        "B": "shapes placed near the center of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 70,
        "BP": 12,
        "A": "outlines drawn with a thin stroke",
        "B": "outlines drawn with a thick, heavy stroke",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 71,
        "BP": 12,
        "A": "shapes oriented diagonally or vertically within the frame",
        "B": "shapes with an upright, non-tilted orientation",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 72,
        "BP": 12,
        "A": "irregular, freeform figures that are not standard geometric shapes",
        "B": "familiar regular geometric figures such as circles, squares, and stars",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 73,
        "BP": 13,
        "A": "a single outlined shape that is a vertically elongated rectangle or a horizontally elongated ellipse",
        "B": "a single outlined shape that is a horizontally elongated rectangle or a vertically elongated ellipse",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 74,
        "BP": 13,
        "A": "a single shape elongated in the vertical direction",
        "B": "a single shape elongated in the horizontal direction",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 75,
        "BP": 13,
        "A": "a shape whose longest axis is more than three times its shortest axis",
        "B": "a shape whose longest axis is less than three times its shortest axis",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 76,
        "BP": 13,
        "A": "a shape located in the upper half or center of the frame",
        "B": "a shape located near an edge or corner of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 77,
        "BP": 13,
        "A": "a curved shape (ellipse) as the dominant figure",
        "B": "a straight-edged shape (rectangle) as the dominant figure",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 78,
        "BP": 13,
        "A": "a shape that is larger in area than the corresponding shape in Set B panels",
        "B": "a shape that is smaller in area than the corresponding shape in Set A panels",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 79,
        "BP": 14,
        "A": "large figures whose drawing spans most of the frame",
        "B": "small figures occupying only a small fraction of the frame",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 80,
        "BP": 14,
        "A": "curved or smoothly bending lines",
        "B": "straight line segments only",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 81,
        "BP": 14,
        "A": "a single connected figure",
        "B": "several disconnected small marks",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 82,
        "BP": 14,
        "A": "figures centered in the frame",
        "B": "figures placed off-center near an edge or corner",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 83,
        "BP": 14,
        "A": "closed outlines enclosing an interior region",
        "B": "open strokes that enclose no area",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 84,
        "BP": 14,
        "A": "figures drawn with long, heavy strokes",
        "B": "figures drawn with short, thin strokes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 85,
        "BP": 15,
        "A": "a single closed curve",
        "B": "a single open curve",
        "type": "genuine-rule",
        "A1": "the outline joins up with no gap, enclosing a region",
        "B1": "the line has a gap, with two free endpoints, enclosing no region"
    },
    {
        "ID": 86,
        "BP": 15,
        "A": "an outline drawn with smooth or straight segments that never spirals inward",
        "B": "a line that curls or bends back toward its own interior",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 87,
        "BP": 15,
        "A": "a shape whose outline is convex or only mildly concave",
        "B": "a figure with a sharp concavity or inward-pointing notch",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 88,
        "BP": 15,
        "A": "a shape occupying a large portion of the frame",
        "B": "a figure drawn smaller, leaving most of the frame empty",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 89,
        "BP": 15,
        "A": "a contour containing at least one long straight or gently curved side",
        "B": "a contour made mostly of tight curves or acute angles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 90,
        "BP": 15,
        "A": "a figure centered toward the left half of its frame",
        "B": "a figure centered toward the right half of its frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 91,
        "BP": 16,
        "A": "spirals that wind clockwise when traced from the outer end toward the center.",
        "B": "spirals that wind counterclockwise when traced from the outer end toward the center.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 92,
        "BP": 16,
        "A": "spirals drawn with smooth, curved lines.",
        "B": "spirals drawn with straight, angular segments.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 93,
        "BP": 16,
        "A": "loose spirals with fewer than three full turns.",
        "B": "tight spirals with three or more full turns.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 94,
        "BP": 16,
        "A": "large spirals filling most of the frame.",
        "B": "small spirals occupying only the central portion of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 95,
        "BP": 16,
        "A": "their outer end of the spiral terminating in the lower half of the figure.",
        "B": "their outer end of the spiral terminating in the upper half of the figure.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 96,
        "BP": 16,
        "A": "spirals with uneven, irregular spacing between successive turns.",
        "B": "spirals with regular, evenly spaced turns.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 97,
        "BP": 17,
        "A": "a sharp, angular V-shaped notch cut into their outline.",
        "B": "no angular inward notch; their outlines are either fully convex or indented only by smooth curved arcs.",
        "type": "genuine-rule",
        "A1": "a concave corner where two edges meet at an inward-pointing vertex",
        "B1": ""
    },
    {
        "ID": 98,
        "BP": 17,
        "A": "concave figures.",
        "B": "convex figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 99,
        "BP": 17,
        "A": "asymmetric, with no axis of mirror symmetry.",
        "B": "at least one axis of mirror symmetry.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 100,
        "BP": 17,
        "A": "at least one sharply pointed protrusion sticking outward.",
        "B": "gently rounded or blunt outlines with no sharp outward points.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 101,
        "BP": 17,
        "A": "contain straight-line segments in their boundary.",
        "B": "bounded entirely by curved lines.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 102,
        "BP": 17,
        "A": "elongated, being clearly longer in one direction than the other.",
        "B": "compact, with roughly equal width and height.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 103,
        "BP": 18,
        "A": "a narrow neck or waist where the outline pinches in, dividing the shape into two wider lobes",
        "B": "no pinched neck; the outline never constricts to a narrow waist between two lobes",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 104,
        "BP": 18,
        "A": "an axis of mirror symmetry through their middle",
        "B": "no axis of mirror symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 105,
        "BP": 18,
        "A": "outlines that are concave, with indentations on both sides",
        "B": "outlines that are entirely convex",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 106,
        "BP": 18,
        "A": "a mix of straight and sharply angled segments in their outline",
        "B": "outlines made only of smooth curves or only of straight edges, never mixed",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 107,
        "BP": 18,
        "A": "two distinct lobes of roughly equal size",
        "B": "a single compact body without separate lobes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 108,
        "BP": 18,
        "A": "their longest dimension oriented horizontally or vertically",
        "B": "their longest dimension oriented diagonally",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 109,
        "BP": 19,
        "A": "a narrow neck or bridge that is horizontal, connecting two lobes that lie side by side",
        "B": "a narrow neck or bridge that is vertical, connecting two lobes that lie one above the other",
        "type": "genuine-rule",
        "A1": "left and right",
        "B1": "top and bottom"
    },
    {
        "ID": 110,
        "BP": 19,
        "A": "wider than they are tall",
        "B": "taller than they are wide",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 111,
        "BP": 19,
        "A": "two lobes of roughly equal size",
        "B": "one lobe clearly larger than the other",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 112,
        "BP": 19,
        "A": "an approximately vertical axis of symmetry",
        "B": "an approximately horizontal axis of symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 113,
        "BP": 19,
        "A": "smooth, rounded outlines throughout",
        "B": "contain at least one straight edge or sharp corner",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 114,
        "BP": 19,
        "A": "concave with a deep indentation on the top side",
        "B": "concave with a deep indentation on a lateral side",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 115,
        "BP": 20,
        "A": "two dots on the outline whose connecting straight segment lies entirely inside the figure",
        "B": "two dots on the outline whose connecting straight segment passes outside the figure",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 116,
        "BP": 20,
        "A": "two dots placed close together on the same lobe of the blob",
        "B": "two dots placed far apart on different lobes of the blob",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 117,
        "BP": 20,
        "A": "dots located on convex (outward-bulging) parts of the outline",
        "B": "dots located on concave (inward-curving) parts of the outline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 118,
        "BP": 20,
        "A": "a blob whose narrow neck is oriented diagonally",
        "B": "a blob whose narrow neck is oriented vertically or horizontally",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 119,
        "BP": 20,
        "A": "both dots positioned in the upper half of the frame",
        "B": "one dot in the upper half and one dot in the lower half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 120,
        "BP": 20,
        "A": "an outline path between the two dots that is short relative to the whole perimeter",
        "B": "an outline path between the two dots that divides the perimeter into two roughly equal halves",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 121,
        "BP": 21,
        "A": "at least one very small (tiny) shape in the frame",
        "B": "only medium-to-large shapes, with no tiny shape present",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 122,
        "BP": 21,
        "A": "shapes of strongly contrasting sizes within the same frame",
        "B": "shapes that are all approximately the same size",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 123,
        "BP": 21,
        "A": "at least three shapes in the frame",
        "B": "at most two shapes in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 124,
        "BP": 21,
        "A": "both a circle and a triangle present in every frame",
        "B": "only one kind of shape in each frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": "all circles or all triangles"
    },
    {
        "ID": 125,
        "BP": 21,
        "A": "a shape positioned in the upper-left region of the frame",
        "B": "the upper-left region of the frame left empty",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 126,
        "BP": 21,
        "A": "at least one triangle in every frame",
        "B": "at least one frame element that is a circle, with circles dominating",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 127,
        "BP": 22,
        "A": "approximately the same size as each other within each diagram.",
        "B": "include markedly different sizes within each diagram.",
        "type": "genuine-rule",
        "A1": "",
        "B1": "at least one shape is much larger or smaller than another"
    },
    {
        "ID": 128,
        "BP": 22,
        "A": "include at least one triangle in each diagram.",
        "B": "lack triangles in each diagram.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 129,
        "BP": 22,
        "A": "number exactly three per diagram.",
        "B": "number exactly two per diagram.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 130,
        "BP": 22,
        "A": "clustered toward the left half of the frame.",
        "B": "clustered toward the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 131,
        "BP": 22,
        "A": "contain a circle together with a polygon in each diagram.",
        "B": "either only circles or only polygons in each diagram.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 132,
        "BP": 22,
        "A": "their largest shape positioned above or level with the smaller shapes.",
        "B": "their largest shape positioned below the smaller shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 133,
        "BP": 23,
        "A": "exactly one shape per diagram",
        "B": "exactly two shapes per diagram",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 134,
        "BP": 23,
        "A": "a shape drawn near the center of the frame",
        "B": "shapes placed toward the edges or corners of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 135,
        "BP": 23,
        "A": "only closed outline figures with straight or curved sides of a single kind",
        "B": "a small circle accompanying a larger shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 136,
        "BP": 23,
        "A": "shapes that are relatively large compared with the frame",
        "B": "at least one very small shape in each diagram",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 137,
        "BP": 23,
        "A": "figures that vary widely in type",
        "B": "figures limited to circles, triangles, and quadrilaterals only",
        "type": "candidate-rule",
        "A1": "triangle, circle, cross, quadrilateral",
        "B1": ""
    },
    {
        "ID": 138,
        "BP": 23,
        "A": "all outlines separated from every frame border by a wide margin",
        "B": "at least one shape lying close to a border of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 139,
        "BP": 24,
        "A": "contain at least one circle.",
        "B": "contain no circles; every shape is straight-edged.",
        "type": "genuine-rule",
        "A1": "a curved shape",
        "B1": "only triangles and squares"
    },
    {
        "ID": 140,
        "BP": 24,
        "A": "contain shapes of at least two different types including a round shape.",
        "B": "contain only one or two shape types, both polygons.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 141,
        "BP": 24,
        "A": "a shape in the lower-left quadrant of the frame.",
        "B": "leave the lower-left quadrant empty.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 142,
        "BP": 24,
        "A": "contain an even number of shapes.",
        "B": "contain an odd number of shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 143,
        "BP": 24,
        "A": "more curved shapes than squares.",
        "B": "more squares than curved shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 144,
        "BP": 24,
        "A": "their shapes spread across the frame without clustering to one side.",
        "B": "their shapes clustered toward one half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 145,
        "BP": 25,
        "A": "All diagrams contain exactly one solid black shape, and that filled shape is a triangle.",
        "B": "All diagrams contain exactly one solid black shape, and that filled shape is a circle.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 146,
        "BP": 25,
        "A": "All diagrams have their filled shape located in the lower half of the frame.",
        "B": "All diagrams have their filled shape located in the upper half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 147,
        "BP": 25,
        "A": "All diagrams contain at least one square among the outline shapes.",
        "B": "All diagrams contain at least two triangles among the outline shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 148,
        "BP": 25,
        "A": "All diagrams contain exactly five shapes.",
        "B": "All diagrams contain exactly four shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 149,
        "BP": 25,
        "A": "All diagrams have more circles than triangles.",
        "B": "All diagrams have more triangles than circles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 150,
        "BP": 25,
        "A": "All diagrams have their outline shapes pointing upward with no inverted triangles.",
        "B": "All diagrams include at least one downward-pointing (inverted) triangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 151,
        "BP": 26,
        "A": "contain at least one solid black (filled) triangle.",
        "B": "contain no filled triangle; every triangle is an unfilled outline.",
        "type": "genuine-rule",
        "A1": "",
        "B1": "only circles may be filled"
    },
    {
        "ID": 152,
        "BP": 26,
        "A": "contain more triangles than circles.",
        "B": "contain more circles than triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 153,
        "BP": 26,
        "A": "contain at least one filled circle.",
        "B": "contain only outlined circles with no filled circle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 154,
        "BP": 26,
        "A": "exactly four shapes.",
        "B": "exactly five shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 155,
        "BP": 26,
        "A": "contain a triangle that does not point straight upward.",
        "B": "contain only upward-pointing triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 156,
        "BP": 26,
        "A": "their filled shapes located in the upper half of the frame.",
        "B": "their filled shapes located in the lower half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 157,
        "BP": 27,
        "A": "more filled (solid black) shapes than outline (white) shapes.",
        "B": "more outline (white) shapes than filled (solid black) shapes.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 158,
        "BP": 27,
        "A": "contain at least two solid black circles.",
        "B": "contain at most one solid black circle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 159,
        "BP": 27,
        "A": "contain a filled triangle.",
        "B": "lack a filled triangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 160,
        "BP": 27,
        "A": "an even number of shapes.",
        "B": "an odd number of shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 161,
        "BP": 27,
        "A": "a filled shape in the lower half of the frame.",
        "B": "only outline shapes in the lower half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 162,
        "BP": 27,
        "A": "contain more triangles than squares.",
        "B": "contain at least as many squares as triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 163,
        "BP": 28,
        "A": "more filled (black) circles than outlined (white) circles",
        "B": "more outlined (white) circles than filled (black) circles",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 164,
        "BP": 28,
        "A": "a majority of filled shapes overall",
        "B": "a majority of outlined shapes overall",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 165,
        "BP": 28,
        "A": "at least two filled circles positioned in the lower half of the frame",
        "B": "at least two outlined circles positioned in the upper half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 166,
        "BP": 28,
        "A": "an even total number of circles",
        "B": "an odd total number of circles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 167,
        "BP": 28,
        "A": "every triangle present is outlined or matched by a filled circle nearby",
        "B": "every triangle present is filled or matched by an outlined circle nearby",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 168,
        "BP": 28,
        "A": "exactly one white circle when triangles are present",
        "B": "exactly one black circle when triangles are present",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 169,
        "BP": 29,
        "A": "a large outlined shape containing more small circles inside it than there are small circles outside it",
        "B": "a large outlined shape with more small circles outside it than inside it",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 170,
        "BP": 29,
        "A": "the majority of the small circles clustered on the left half of the frame",
        "B": "the majority of the small circles clustered on the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 171,
        "BP": 29,
        "A": "an even total number of small circles in the frame",
        "B": "an odd total number of small circles in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 172,
        "BP": 29,
        "A": "a large shape drawn with at least one straight or smoothly curved side that is a convex outline",
        "B": "a large shape whose outline is concave or irregular in at least one place",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 173,
        "BP": 29,
        "A": "a large shape positioned in the left or central part of the frame",
        "B": "a large shape positioned in the central or right part of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 174,
        "BP": 29,
        "A": "at least one small circle located inside the large shape",
        "B": "at least three small circles located outside the large shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 175,
        "BP": 30,
        "A": "single lines that cross themselves at least once.",
        "B": "single lines that never cross themselves.",
        "type": "genuine-rule",
        "A1": "the line has a self-intersection",
        "B1": "no self-intersection anywhere"
    },
    {
        "ID": 176,
        "BP": 30,
        "A": "drawn with a mixture of curved and straight segments.",
        "B": "drawn using only curves or only straight segments, never both.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 177,
        "BP": 30,
        "A": "enclose exactly one small closed loop region.",
        "B": "enclose no small loop regions.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 178,
        "BP": 30,
        "A": "their two line endpoints close together.",
        "B": "their two line endpoints far apart.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 179,
        "BP": 30,
        "A": "lines that turn predominantly clockwise as they are traced.",
        "B": "lines that turn predominantly counterclockwise as they are traced.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 180,
        "BP": 30,
        "A": "lines longer than the perimeter of their bounding box.",
        "B": "lines shorter than the perimeter of their bounding box.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 181,
        "BP": 31,
        "A": "contain exactly one line.",
        "B": "contain exactly two lines.",
        "type": "genuine-rule",
        "A1": "a single continuous curve, which may cross itself",
        "B1": "two separate continuous curves"
    },
    {
        "ID": 182,
        "BP": 31,
        "A": "show a curve whose crossings, if any, are self-intersections of one stroke.",
        "B": "show crossings formed between two different strokes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 183,
        "BP": 31,
        "A": "curves with at most two free endpoints in total.",
        "B": "curves with more than two free endpoints in total.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 184,
        "BP": 31,
        "A": "contain at most one closed loop.",
        "B": "contain at least one closed loop or two loop-like elements.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 185,
        "BP": 31,
        "A": "drawn as a figure occupying the center of the frame along a single diagonal axis.",
        "B": "drawn as figures spread across the frame without a single dominant axis.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 186,
        "BP": 31,
        "A": "smooth curves that could be traced without lifting the pen.",
        "B": "figures that require lifting the pen at least twice to trace.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 187,
        "BP": 32,
        "A": "at least one sharp point that projects outward from the shape's outline",
        "B": "no outward-pointing sharp tips; the outer contour is rounded or blunt, and any sharp angles point inward as notches",
        "type": "genuine-rule",
        "A1": "acute spike or cusp",
        "B1": ""
    },
    {
        "ID": 188,
        "BP": 32,
        "A": "outlines drawn mostly with straight or tightly curved line segments meeting at corners",
        "B": "outlines drawn as smooth, gently flowing curves without corners",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 189,
        "BP": 32,
        "A": "shapes that are strongly concave, with deep indentations in their outline",
        "B": "shapes that are convex or only slightly indented",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 190,
        "BP": 32,
        "A": "shapes that are elongated or thin in one direction",
        "B": "shapes that are compact and roughly as wide as they are tall",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 191,
        "BP": 32,
        "A": "shapes with no axis of symmetry",
        "B": "shapes with at least one axis of mirror symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 192,
        "BP": 32,
        "A": "shapes enclosing a relatively small area compared to their frame",
        "B": "shapes enclosing a large area that fills most of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 193,
        "BP": 33,
        "A": "at least one sharp acute angle or spiky point on their outline.",
        "B": "no acute angles; every corner is right, obtuse, or smoothly rounded.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 194,
        "BP": 33,
        "A": "a concave outline.",
        "B": "entirely convex.",
        "type": "candidate-rule",
        "A1": "an indentation somewhere",
        "B1": ""
    },
    {
        "ID": 195,
        "BP": 33,
        "A": "elongated, with one dimension clearly longer than the other.",
        "B": "roughly as wide as they are tall (compact).",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 196,
        "BP": 33,
        "A": "bounded partly or wholly by curved lines.",
        "B": "bounded only by straight line segments.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 197,
        "BP": 33,
        "A": "an outline with more than six vertices or corner points.",
        "B": "six or fewer corner points on their outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 198,
        "BP": 33,
        "A": "placed off-center, toward one side of the frame.",
        "B": "centered in the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 199,
        "BP": 34,
        "A": "solid black figures containing a large white hole",
        "B": "solid black figures containing only a tiny white hole",
        "type": "genuine-rule",
        "A1": "the hole is a substantial fraction of the shape's area",
        "B1": "a small speck relative to the shape's area"
    },
    {
        "ID": 200,
        "BP": 34,
        "A": "a hole whose outline echoes a rounded or curved contour",
        "B": "a hole that is strictly polygonal with straight sides",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 201,
        "BP": 34,
        "A": "their hole placed off-center within the black figure",
        "B": "their hole placed exactly at the center of the black figure",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 202,
        "BP": 34,
        "A": "an outer boundary that is a regular, familiar geometric figure",
        "B": "an outer boundary that is irregular or distorted",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 203,
        "BP": 34,
        "A": "a hole whose shape differs from the shape of the outer boundary",
        "B": "a hole whose shape matches the shape of the outer boundary",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 204,
        "BP": 34,
        "A": "more black area than white hole area concentrated near the frame's left half",
        "B": "their black mass concentrated near the frame's right half",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 205,
        "BP": 35,
        "A": "solid figures with a white hole whose long axis is parallel to the long axis of the outer shape.",
        "B": "solid figures with a white hole whose long axis is perpendicular to the long axis of the outer shape.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 206,
        "BP": 35,
        "A": "a white hole located exactly at the center of the outer figure.",
        "B": "a white hole displaced away from the center of the outer figure.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 207,
        "BP": 35,
        "A": "a hole that is small relative to the outer shape's area.",
        "B": "a hole that is large relative to the outer shape's area.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 208,
        "BP": 35,
        "A": "outer figures with smoothly curved outlines containing rounded holes.",
        "B": "outer figures with straight polygonal outlines containing angular holes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 209,
        "BP": 35,
        "A": "elongated figures tilted counterclockwise from the horizontal.",
        "B": "elongated figures tilted clockwise from the horizontal.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 210,
        "BP": 35,
        "A": "holes that are elliptical in outline.",
        "B": "holes that are rectangular or diamond shaped in outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 211,
        "BP": 36,
        "A": "a triangle positioned above the circle",
        "B": "a circle positioned above the triangle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 212,
        "BP": 36,
        "A": "a downward-pointing triangle accompanying the circle",
        "B": "an upward-pointing triangle accompanying the circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 213,
        "BP": 36,
        "A": "the two shapes placed far apart from each other",
        "B": "the two shapes placed close together",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 214,
        "BP": 36,
        "A": "the circle located in the left half of the frame",
        "B": "the circle located in the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 215,
        "BP": 36,
        "A": "the triangle drawn larger than the circle",
        "B": "the circle drawn larger than the triangle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 216,
        "BP": 36,
        "A": "the triangle positioned to the right of the circle",
        "B": "the triangle positioned to the left of the circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 217,
        "BP": 37,
        "A": "All diagrams have the triangle positioned higher in the frame than the circle.",
        "B": "All diagrams have the circle positioned higher in the frame than the triangle.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 218,
        "BP": 37,
        "A": "All diagrams have the square positioned lower in the frame than the triangle.",
        "B": "All diagrams have the square positioned higher in the frame than the triangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 219,
        "BP": 37,
        "A": "All diagrams have the circle as the lowest of the three shapes.",
        "B": "All diagrams have the circle as the highest of the three shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 220,
        "BP": 37,
        "A": "All diagrams have their three shapes arranged along a roughly vertical diagonal line.",
        "B": "All diagrams have their three shapes arranged along a roughly horizontal line.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 221,
        "BP": 37,
        "A": "All diagrams have the triangle placed on the left half of the frame.",
        "B": "All diagrams have the triangle placed on the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 222,
        "BP": 37,
        "A": "All diagrams have the circle positioned to the right of the square.",
        "B": "All diagrams have the circle positioned to the left of the square.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 223,
        "BP": 38,
        "A": "All diagrams contain one triangle and one circle, and the triangle is larger than the circle",
        "B": "All diagrams contain one triangle and one circle, and the circle is larger than the triangle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 224,
        "BP": 38,
        "A": "All diagrams have the triangle positioned to the left of the circle",
        "B": "All diagrams have the circle positioned to the left of the triangle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 225,
        "BP": 38,
        "A": "All diagrams contain a circle that is small enough to fit inside the triangle",
        "B": "All diagrams contain shapes that never overlap or touch each other",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 226,
        "BP": 38,
        "A": "All diagrams have their largest shape in the lower half of the frame",
        "B": "All diagrams have their largest shape in the upper half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 227,
        "BP": 38,
        "A": "All diagrams contain a triangle pointing upward",
        "B": "All diagrams contain a triangle pointing downward",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 228,
        "BP": 38,
        "A": "All diagrams have two shapes whose combined area covers less than half the frame",
        "B": "All diagrams have two shapes that are nearly touching or overlapping",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 229,
        "BP": 39,
        "A": "three line segments that are all parallel to one another",
        "B": "three line segments that are not all parallel; at least two segments have clearly different orientations",
        "type": "genuine-rule",
        "A1": "sharing the same orientation",
        "B1": ""
    },
    {
        "ID": 230,
        "BP": 39,
        "A": "three line segments of roughly equal length",
        "B": "three line segments where one segment is noticeably longer than the others",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 231,
        "BP": 39,
        "A": "segments arranged along a single diagonal band of the frame",
        "B": "segments scattered into different corners of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 232,
        "BP": 39,
        "A": "no segment that would intersect another segment if the segments were extended",
        "B": "at least two segments that would intersect near the center if extended",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 233,
        "BP": 39,
        "A": "at least one segment tilted from lower-left to upper-right",
        "B": "at least one segment tilted from upper-left to lower-right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 234,
        "BP": 39,
        "A": "an arrangement with an axis of mirror symmetry between the segments",
        "B": "an arrangement with no axis of mirror symmetry between the segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 235,
        "BP": 40,
        "A": "four dots of which three lie exactly on one straight line",
        "B": "four dots positioned so that no three of them are collinear",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 236,
        "BP": 40,
        "A": "four dots arranged so that one dot lies inside the triangle formed by the other three",
        "B": "four dots forming a convex quadrilateral with no dot inside the others",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 237,
        "BP": 40,
        "A": "dots clustered more tightly together, covering a small part of the frame",
        "B": "dots spread widely apart, covering most of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 238,
        "BP": 40,
        "A": "at least one dot touching or very near the frame's left edge",
        "B": "all dots kept well away from the left edge of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 239,
        "BP": 40,
        "A": "dots whose overall arrangement slants from upper right to lower left",
        "B": "dots whose overall arrangement slants from upper left to lower right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 240,
        "BP": 40,
        "A": "a pair of dots that are noticeably closer to each other than any pair in the rest of the panel",
        "B": "dots that are all roughly equally spaced from their nearest neighbours",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 241,
        "BP": 41,
        "A": "the three outlined (hollow) circles lying on a single straight line",
        "B": "the three outlined (hollow) circles not collinear, forming a triangle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 242,
        "BP": 41,
        "A": "the three filled (black) circles lying on a single straight line",
        "B": "the three filled (black) circles scattered off any common line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 243,
        "BP": 41,
        "A": "more circles in the left half of the frame than in the right half",
        "B": "more circles in the right half of the frame than in the left half",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 244,
        "BP": 41,
        "A": "an outlined circle as the topmost or bottommost circle in the frame",
        "B": "a filled circle as the topmost or bottommost circle in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 245,
        "BP": 41,
        "A": "filled and outlined circles separable into two groups by one straight boundary",
        "B": "filled and outlined circles intermixed so no straight boundary separates them",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 246,
        "BP": 41,
        "A": "the outlined circles positioned closer together than the filled circles",
        "B": "the outlined circles positioned farther apart than the filled circles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 247,
        "BP": 42,
        "A": "three dots inside the closed outline that lie on a single straight line (collinear)",
        "B": "three dots inside the closed outline that are not collinear, forming a triangle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 248,
        "BP": 42,
        "A": "exactly four dots in total, with three inside the outline and one outside",
        "B": "exactly five dots in total, with three inside the outline and two outside",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 249,
        "BP": 42,
        "A": "an outline drawn with curved, freehand sides",
        "B": "an outline drawn with straight, polygonal sides",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 250,
        "BP": 42,
        "A": "all outside dots located to the left of the closed outline",
        "B": "all outside dots located to the right of the closed outline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 251,
        "BP": 42,
        "A": "an elongated outline whose long axis runs vertically",
        "B": "an elongated outline whose long axis runs horizontally",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 252,
        "BP": 42,
        "A": "interior dots spaced evenly, with equal gaps between neighboring dots",
        "B": "interior dots spaced unevenly, with one pair much closer together than the others",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 253,
        "BP": 43,
        "A": "a single oscillating line whose oscillation amplitude increases from left to right",
        "B": "a single oscillating line whose oscillation amplitude decreases from left to right",
        "type": "genuine-rule",
        "A1": "the wiggles start small and grow larger",
        "B1": "the wiggles start large and shrink"
    },
    {
        "ID": 254,
        "BP": 43,
        "A": "a line drawn with smooth, rounded curves rather than sharp corners",
        "B": "a line drawn with sharp, angular corners rather than smooth curves",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 255,
        "BP": 43,
        "A": "a line whose overall trend rises toward the right side of the frame",
        "B": "a line whose overall trend falls toward the right side of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 256,
        "BP": 43,
        "A": "a line with fewer than five peaks along its length",
        "B": "a line with five or more peaks along its length",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 257,
        "BP": 43,
        "A": "a line that begins near the middle height of the frame",
        "B": "a line that begins near the top of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 258,
        "BP": 43,
        "A": "a line whose largest excursion points downward below the baseline",
        "B": "a line whose largest excursion points upward above the baseline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 259,
        "BP": 44,
        "A": "All diagrams have the two small circles on different branches of the curve, one on each side of the sharp cusp.",
        "B": "All diagrams have both small circles on the same branch of the curve, on one side of the sharp cusp.",
        "type": "genuine-rule",
        "A1": "the cusp lies between the circles",
        "B1": ""
    },
    {
        "ID": 260,
        "BP": 44,
        "A": "All diagrams have the two circles lying on the concave (inner) side of the curve.",
        "B": "All diagrams have the two circles lying on the convex (outer) side of the curve.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 261,
        "BP": 44,
        "A": "All diagrams have their sharp cusp pointing upward or sideways.",
        "B": "All diagrams have their sharp cusp pointing downward.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 262,
        "BP": 44,
        "A": "All diagrams have the two circles placed far apart, near opposite ends of the curve.",
        "B": "All diagrams have the two circles placed close together on the curve.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 263,
        "BP": 44,
        "A": "All diagrams have the two circles positioned below the sharp cusp of the curve.",
        "B": "All diagrams have at least one circle positioned above the sharp cusp of the curve.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 264,
        "BP": 44,
        "A": "All diagrams have a curve whose two endpoints are at roughly the same height in the frame.",
        "B": "All diagrams have a curve whose two endpoints are at clearly different heights in the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 265,
        "BP": 45,
        "A": "All diagrams have two overlapping shapes where the white (outlined) shape is in front, partially covering the solid black shape.",
        "B": "All diagrams have two overlapping shapes where the solid black shape is in front, partially covering the white (outlined) shape.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 266,
        "BP": 45,
        "A": "All diagrams have the black shape positioned to the right of the white shape.",
        "B": "All diagrams have the black shape positioned to the left of the white shape.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 267,
        "BP": 45,
        "A": "All diagrams have a black shape that is larger than the white shape.",
        "B": "All diagrams have a white shape that is larger than the black shape.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 268,
        "BP": 45,
        "A": "All diagrams contain at least one shape with a curved boundary.",
        "B": "All diagrams contain only straight-edged (polygonal) shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 269,
        "BP": 45,
        "A": "All diagrams have two shapes of different geometric types.",
        "B": "All diagrams have two shapes of the same geometric type.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 270,
        "BP": 45,
        "A": "All diagrams have shapes concentrated in the lower half of the frame.",
        "B": "All diagrams have shapes concentrated in the upper half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 271,
        "BP": 46,
        "A": "All diagrams have a triangle drawn on top of the circle: where the two shapes overlap, the triangle occludes (covers) part of the circle.",
        "B": "All diagrams have a circle drawn on top of the triangle: where the two shapes overlap, the circle occludes (covers) part of the triangle.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 272,
        "BP": 46,
        "A": "All diagrams have a triangle that is larger than or equal in size to the circle.",
        "B": "All diagrams have a circle that is larger than the triangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 273,
        "BP": 46,
        "A": "All diagrams have the black (filled) shape positioned above or left of the outlined shape.",
        "B": "All diagrams have the black (filled) shape positioned below or right of the outlined shape.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 274,
        "BP": 46,
        "A": "All diagrams contain a triangle whose apex points upward or to the right.",
        "B": "All diagrams contain a triangle whose apex points downward or to the left.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 275,
        "BP": 46,
        "A": "All diagrams have the circle centered higher in the frame than the triangle's centroid.",
        "B": "All diagrams have the triangle's centroid higher in the frame than the circle's center.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 276,
        "BP": 46,
        "A": "All diagrams have exactly one filled shape, and it is always the same shape type: the triangle.",
        "B": "All diagrams have exactly one filled shape, and it is always the circle.",
        "type": "candidate-rule",
        "A1": "solid black",
        "B1": "solid black"
    },
    {
        "ID": 277,
        "BP": 47,
        "A": "contain a small triangle nested inside a circle.",
        "B": "contain a small circle nested inside a triangle.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 278,
        "BP": 47,
        "A": "their largest shape being a circle.",
        "B": "their largest shape being a triangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 279,
        "BP": 47,
        "A": "contain at least one downward-pointing triangle.",
        "B": "contain only upward-pointing triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 280,
        "BP": 47,
        "A": "more circles than triangles.",
        "B": "more triangles than circles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 281,
        "BP": 47,
        "A": "the nested pair located in the left half of the frame.",
        "B": "the nested pair located in the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 282,
        "BP": 47,
        "A": "contain an even number of shapes.",
        "B": "contain an odd number of shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 283,
        "BP": 48,
        "A": "All filled (black) shapes positioned above all outline (unfilled) shapes",
        "B": "All outline (unfilled) shapes positioned above all filled (black) shapes",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 284,
        "BP": 48,
        "A": "More filled shapes than outline shapes",
        "B": "More outline shapes than filled shapes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 285,
        "BP": 48,
        "A": "A filled triangle among the shapes",
        "B": "An outline triangle among the shapes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 286,
        "BP": 48,
        "A": "Filled shapes concentrated in the left half of the frame",
        "B": "Filled shapes concentrated in the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 287,
        "BP": 48,
        "A": "At least one filled circle in the top half of the frame",
        "B": "At least one filled circle in the bottom half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 288,
        "BP": 48,
        "A": "An outline square present in every diagram",
        "B": "An outline circle present in every diagram",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 289,
        "BP": 49,
        "A": "dots inside the large outline shape packed tightly together, while the dots outside it are widely scattered",
        "B": "dots inside the large outline shape spread far apart, while the dots outside it form one tight cluster",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 290,
        "BP": 49,
        "A": "more dots inside the large shape than outside it",
        "B": "more dots outside the large shape than inside it",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 291,
        "BP": 49,
        "A": "a large outline shape positioned in the central area of the frame",
        "B": "a large outline shape pushed toward one edge of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 292,
        "BP": 49,
        "A": "outside dots placed on at least three different sides of the large shape",
        "B": "the inside dots arranged along a single straight line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 293,
        "BP": 49,
        "A": "a curved (round) large shape or one with a right angle containing exactly three or four dots",
        "B": "a straight-edged polygon or elongated oval containing exactly three dots",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 294,
        "BP": 49,
        "A": "the outside dots farther from each other than the diameter of the large shape",
        "B": "all outside dots located in the lower half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 295,
        "BP": 50,
        "A": "form a figure that is mirror-symmetric about a vertical axis",
        "B": "form a figure with no vertical axis of mirror symmetry",
        "type": "genuine-rule",
        "A1": "the left half is the mirror image of the right half",
        "B1": "the left and right halves differ"
    },
    {
        "ID": 296,
        "BP": 50,
        "A": "arranged in balanced pairs or centered single figures",
        "B": "include at least one element that is shifted or tilted to one side",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 297,
        "BP": 50,
        "A": "drawn upright, with edges or axes aligned vertically",
        "B": "contain at least one slanted or rotated element",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 298,
        "BP": 50,
        "A": "matching identical elements appearing on both the left and right sides",
        "B": "differing elements on the left and right sides",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 299,
        "BP": 50,
        "A": "compositions whose visual weight is evenly balanced around the center of the frame",
        "B": "compositions whose visual weight is concentrated toward one corner or side",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 300,
        "BP": 50,
        "A": "contain either only outlined elements or filled elements used in matched pairs",
        "B": "mix filled and outlined elements in an unmatched way",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 301,
        "BP": 51,
        "A": "at least two circles positioned very close together, forming a tight pair or cluster with a gap much smaller than the other inter-circle distances",
        "B": "circles that are all spread far apart from one another, with no two circles forming a close pair",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 302,
        "BP": 51,
        "A": "exactly four circles in each frame",
        "B": "five circles in each frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 303,
        "BP": 51,
        "A": "three or more circles lying approximately on a single straight line",
        "B": "circles arranged so that no three of them are collinear",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 304,
        "BP": 51,
        "A": "at least one circle located very near the border of the frame",
        "B": "all circles kept well inside the frame, away from the border",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 305,
        "BP": 51,
        "A": "circles grouped into two separate clusters",
        "B": "circles forming a single evenly spread group",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 306,
        "BP": 51,
        "A": "a circle placed in the upper-right corner region of the frame",
        "B": "an empty upper-right corner region, with circles concentrated toward the center",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 307,
        "BP": 52,
        "A": "a single curve bearing two arrowheads that indicate opposite directions of travel along the curve",
        "B": "a single curve bearing two arrowheads that indicate the same direction of travel along the curve",
        "type": "genuine-rule",
        "A1": "following the curve, the two arrows disagree",
        "B1": "following the curve, both arrows agree"
    },
    {
        "ID": 308,
        "BP": 52,
        "A": "one arrowhead placed at an endpoint of the curve and the other placed in the curve's interior",
        "B": "both arrowheads placed at or near the two endpoints of the curve",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 309,
        "BP": 52,
        "A": "a curve containing an inflection",
        "B": "a curve that bends in only one direction along its whole length",
        "type": "candidate-rule",
        "A1": "it bends in two different directions, like an S",
        "B1": "like a C or an arc"
    },
    {
        "ID": 310,
        "BP": 52,
        "A": "two arrowheads whose points are directed toward each other",
        "B": "two arrowheads whose points are directed away from each other",
        "type": "candidate-rule",
        "A1": "converging heads",
        "B1": "diverging heads"
    },
    {
        "ID": 311,
        "BP": 52,
        "A": "at least one arrowhead pointing into the upper-left region of the frame",
        "B": "at least one arrowhead pointing into the lower-right region of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 312,
        "BP": 52,
        "A": "a curve whose two endpoints lie in the same half of the frame, making the figure compact",
        "B": "a curve whose two endpoints lie in opposite halves of the frame, stretching the figure across it",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 313,
        "BP": 53,
        "A": "a small shape nested inside a larger shape, where the inner shape has fewer sides (vertices) than the outer shape",
        "B": "a small shape nested inside a larger shape, where the inner shape has more sides (vertices) than the outer shape",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 314,
        "BP": 53,
        "A": "an outer shape with at least four sides",
        "B": "an outer shape that is a triangle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 315,
        "BP": 53,
        "A": "an inner shape that is a triangle or quadrilateral",
        "B": "an inner shape that is a pentagon or hexagon",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 316,
        "BP": 53,
        "A": "an outer shape whose outline is irregular and hand-drawn in appearance",
        "B": "an outer shape that is a regular, symmetric polygon",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 317,
        "BP": 53,
        "A": "an inner shape placed left of the outer shape's center",
        "B": "an inner shape placed at or right of the outer shape's center",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 318,
        "BP": 53,
        "A": "an outer shape that is much larger in area than the inner shape",
        "B": "an inner shape that occupies a large fraction of the outer shape's area",
        "type": "candidate-rule",
        "A1": "inner shape is comparatively tiny",
        "B1": ""
    },
    {
        "ID": 319,
        "BP": 54,
        "A": "arranged so that traversing circle \u2192 triangle \u2192 cross goes in a clockwise direction",
        "B": "arranged so that traversing circle \u2192 triangle \u2192 cross goes in a counterclockwise direction",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 320,
        "BP": 54,
        "A": "the circle lying closer to the triangle than to the cross",
        "B": "the circle lying closer to the cross than to the triangle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 321,
        "BP": 54,
        "A": "the cross as the shape nearest the top of the frame",
        "B": "the circle as the shape nearest the top of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 322,
        "BP": 54,
        "A": "the triangle positioned in the left half of the frame",
        "B": "the triangle positioned in the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 323,
        "BP": 54,
        "A": "spread far apart, forming a large triangle of positions",
        "B": "clustered close together in one region of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 324,
        "BP": 54,
        "A": "the cross located below the circle",
        "B": "the cross located above the circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 325,
        "BP": 55,
        "A": "the small attached circle located right at the indentation, touching the edge of the notch cut into the shape's outline.",
        "B": "the small attached circle located away from the indentation, attached to a part of the outline distant from the notch.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 326,
        "BP": 55,
        "A": "a notch with a smoothly curved (rounded) profile.",
        "B": "a notch with an angular (straight-edged) profile.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 327,
        "BP": 55,
        "A": "the small circle attached on the lower half of the outline.",
        "B": "the small circle attached on the upper half of the outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 328,
        "BP": 55,
        "A": "polygonal outlines with straight sides.",
        "B": "curved, blob-like outlines without straight sides.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 329,
        "BP": 55,
        "A": "the small circle lying mostly outside the main shape's outline.",
        "B": "the small circle lying mostly inside the main shape's outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 330,
        "BP": 55,
        "A": "their indentation on the right-hand side of the figure.",
        "B": "their indentation on the left-hand side of the figure.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 331,
        "BP": 56,
        "A": "All shapes within each diagram share the same fill style: either every shape is solid black or every shape is an unfilled outline.",
        "B": "Each diagram contains a mixture of fill styles: at least one solid black shape together with at least one unfilled outline shape.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 332,
        "BP": 56,
        "A": "All shapes within each diagram are of the same geometric type.",
        "B": "Each diagram contains at least two different geometric shape types.",
        "type": "candidate-rule",
        "A1": "all triangles or all circles",
        "B1": ""
    },
    {
        "ID": 333,
        "BP": 56,
        "A": "All diagrams contain at least one triangle whose apex points upward in the upper half of the frame.",
        "B": "All diagrams have their upward-pointing triangles confined to the lower half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 334,
        "BP": 56,
        "A": "All diagrams contain either two or three shapes arranged along a rough diagonal from upper left to lower right.",
        "B": "All diagrams contain shapes arranged along a rough diagonal from upper right to lower left.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 335,
        "BP": 56,
        "A": "All diagrams contain more triangles than circles.",
        "B": "All diagrams contain at least as many circles as triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 336,
        "BP": 56,
        "A": "All shapes within each diagram are approximately the same size.",
        "B": "Each diagram contains shapes of noticeably different sizes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 337,
        "BP": 57,
        "A": "two identical figures - the same shape, the same size, and the same fill",
        "B": "two figures that differ from each other in at least one respect: shape, size, or fill",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 338,
        "BP": 57,
        "A": "two shapes of the same outline type",
        "B": "two shapes of different outline types",
        "type": "candidate-rule",
        "A1": "both triangles, both circles, both squares, etc.",
        "B1": ""
    },
    {
        "ID": 339,
        "BP": 57,
        "A": "two shapes of equal size",
        "B": "two shapes of clearly different sizes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 340,
        "BP": 57,
        "A": "two shapes with the same fill style",
        "B": "one solid black shape together with one outlined shape",
        "type": "candidate-rule",
        "A1": "both solid black or both outlined",
        "B1": ""
    },
    {
        "ID": 341,
        "BP": 57,
        "A": "two shapes arranged along a diagonal of the frame",
        "B": "two shapes arranged side by side horizontally",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 342,
        "BP": 57,
        "A": "two shapes with the same orientation, one being a translated copy of the other",
        "B": "two shapes where one is rotated relative to the other",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 343,
        "BP": 58,
        "A": "contain exactly two solid black squares that are equal in size to each other.",
        "B": "contain exactly two solid black squares that are clearly different in size from each other.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 344,
        "BP": 58,
        "A": "any triangle present drawn in outline (unfilled) form.",
        "B": "any triangle present drawn as a solid filled shape.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 345,
        "BP": 58,
        "A": "contain at least one unfilled (outline) shape among the figures.",
        "B": "contain only solid filled shapes with no outlined figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 346,
        "BP": 58,
        "A": "their largest figure positioned in the left half of the frame.",
        "B": "their largest figure positioned in the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 347,
        "BP": 58,
        "A": "contain an even total number of figures.",
        "B": "contain an odd total number of figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 348,
        "BP": 58,
        "A": "the smallest figure filled black.",
        "B": "the smallest figure drawn in outline only.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 349,
        "BP": 59,
        "A": "two shapes that are geometrically similar: the same kind of shape repeated at two different sizes",
        "B": "two shapes of different kinds, so the two figures are not similar to each other",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 350,
        "BP": 59,
        "A": "one shape at least twice as large as the other, creating a strong size contrast",
        "B": "two shapes of roughly comparable size, with no strong size contrast",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 351,
        "BP": 59,
        "A": "the larger shape positioned lower in the frame than the smaller shape",
        "B": "the larger shape positioned to the left of the smaller shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 352,
        "BP": 59,
        "A": "only shapes made entirely of straight lines or entirely of curved lines, never mixed within a panel",
        "B": "a mixture of a curved shape and a straight-edged shape in the same panel",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 353,
        "BP": 59,
        "A": "shapes arranged along a diagonal from upper-left toward lower-right",
        "B": "shapes arranged side by side at the same height",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 354,
        "BP": 59,
        "A": "at least one shape touching or crossing the vertical midline of the frame",
        "B": "both shapes kept entirely within one half of the frame, away from the midline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 355,
        "BP": 60,
        "A": "at least two figures that are similar \u2014 the same shape with the same proportions, differing only in size",
        "B": "no two figures that are similar; every figure in the panel differs from the others in shape or proportions",
        "type": "genuine-rule",
        "A1": "scaled copies of each other",
        "B1": ""
    },
    {
        "ID": 356,
        "BP": 60,
        "A": "exactly three figures in each panel",
        "B": "exactly two figures in each panel",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 357,
        "BP": 60,
        "A": "at least one triangle whose longest side points toward the lower-right of the frame",
        "B": "triangles pointing toward the upper-left, or no triangle at all",
        "type": "candidate-rule",
        "A1": "",
        "B1": "when present"
    },
    {
        "ID": 358,
        "BP": 60,
        "A": "a small copy of the largest figure placed above or to the left of it",
        "B": "the largest figure placed with all smaller figures below or to its right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 359,
        "BP": 60,
        "A": "figures whose total outline length is dominated by straight-edged shapes",
        "B": "at least as many curved figures (circles) as polygons",
        "type": "candidate-rule",
        "A1": "more polygons than circles",
        "B1": ""
    },
    {
        "ID": 360,
        "BP": 60,
        "A": "at least one figure touching the upper-left quadrant of the frame",
        "B": "all figures kept away from the upper-left quadrant, clustered center-right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 361,
        "BP": 61,
        "A": "a straight line segment that divides the crosses into two groups of equal size",
        "B": "a straight line segment that divides the crosses into two groups of unequal size",
        "type": "genuine-rule",
        "A1": "the same number of crosses lies on each side of the line",
        "B1": "more crosses lie on one side of the line than on the other"
    },
    {
        "ID": 362,
        "BP": 61,
        "A": "an even total number of crosses accompanying the line",
        "B": "an odd total number of crosses accompanying the line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 363,
        "BP": 61,
        "A": "a line segment whose length is greater than the spread of the crosses, so it fully separates the two clusters",
        "B": "a line segment shorter than the spread of the crosses, so the clusters wrap around its ends",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 364,
        "BP": 61,
        "A": "crosses arranged so that at least one cross touches or nearly touches the line",
        "B": "crosses all kept at a clear distance from the line",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 365,
        "BP": 61,
        "A": "a line segment oriented within 45 degrees of horizontal or passing through the frame's center",
        "B": "a line segment displaced away from the frame's center toward one edge",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 366,
        "BP": 61,
        "A": "fewer than seven crosses in the frame",
        "B": "seven or more crosses in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 367,
        "BP": 62,
        "A": "open curves whose two endpoints lie far away from each other.",
        "B": "curves whose two endpoints lie very close together, so the curve nearly closes on itself.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 368,
        "BP": 62,
        "A": "curves that never enclose any region of the plane.",
        "B": "curves that enclose at least one closed or nearly closed region.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 369,
        "BP": 62,
        "A": "curves that do not cross over themselves.",
        "B": "curves that cross over themselves at least once.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 370,
        "BP": 62,
        "A": "made of smooth strokes containing no doubled-back parallel segments.",
        "B": "two portions of the line running side by side in the same direction.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 371,
        "BP": 62,
        "A": "strokes whose overall extent spans from one side of the frame to the other.",
        "B": "compact figures concentrated in the middle of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 372,
        "BP": 62,
        "A": "curves drawn with continuously varying curvature and at least one inflection point.",
        "B": "curves that wind consistently in a single rotational direction.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 373,
        "BP": 63,
        "A": "outlined shapes whose contour is thickened (shaded) along the right side of the figure",
        "B": "outlined shapes whose contour is thickened (shaded) along the left side of the figure",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 374,
        "BP": 63,
        "A": "shapes that appear illuminated from the top of the frame, with shading only at the bottom edge",
        "B": "shapes that appear illuminated from the bottom of the frame, with shading only at the top edge",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 375,
        "BP": 63,
        "A": "figures bounded at least in part by straight line segments",
        "B": "figures bounded entirely by smooth curves",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 376,
        "BP": 63,
        "A": "shapes that are elongated vertically",
        "B": "shapes that are elongated horizontally",
        "type": "candidate-rule",
        "A1": "taller than they are wide",
        "B1": "wider than they are tall"
    },
    {
        "ID": 377,
        "BP": 63,
        "A": "convex outlines with no indentations in their boundary",
        "B": "concave outlines with at least one indentation in their boundary",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 378,
        "BP": 63,
        "A": "small figures occupying less than half the width of the frame",
        "B": "large figures occupying more than half the width of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 379,
        "BP": 64,
        "A": "a cross lying on the straight-line continuation of the ellipse's major axis, while the small circle lies off that axis",
        "B": "a small circle lying on the straight-line continuation of the ellipse's major axis, while the cross lies off that axis",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 380,
        "BP": 64,
        "A": "a small circle positioned closer to the ellipse than the cross is",
        "B": "a cross positioned closer to the ellipse than the small circle is",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 381,
        "BP": 64,
        "A": "a small circle located above the cross in the frame",
        "B": "a cross located above the small circle in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 382,
        "BP": 64,
        "A": "a large elongated ellipse occupying much of the frame",
        "B": "a small compact ellipse occupying little of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 383,
        "BP": 64,
        "A": "a cross placed farther from the frame's center than the small circle",
        "B": "a small circle placed farther from the frame's center than the cross",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 384,
        "BP": 64,
        "A": "the three shapes arranged so the ellipse sits between the circle and the cross",
        "B": "the three shapes arranged so the cross sits between the circle and the ellipse",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 385,
        "BP": 65,
        "A": "their triangles aligned in a horizontal row.",
        "B": "their triangles aligned in a vertical column.",
        "type": "genuine-rule",
        "A1": "all triangles at roughly the same height",
        "B1": "all triangles at roughly the same horizontal position"
    },
    {
        "ID": 386,
        "BP": 65,
        "A": "contain more circles than triangles.",
        "B": "contain at least as many triangles as circles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 387,
        "BP": 65,
        "A": "their circles scattered irregularly around the frame.",
        "B": "their circles arranged along a straight line.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 388,
        "BP": 65,
        "A": "the group of triangles positioned in the lower half of the frame.",
        "B": "the group of triangles positioned in the upper half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 389,
        "BP": 65,
        "A": "the triangle group wider than it is tall.",
        "B": "circles surrounding the triangles on both sides.",
        "type": "candidate-rule",
        "A1": "spread left-to-right",
        "B1": ""
    },
    {
        "ID": 390,
        "BP": 65,
        "A": "contain exactly three or more triangles separated by circles between them.",
        "B": "contain triangles clustered together with no circles between adjacent triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 391,
        "BP": 66,
        "A": "their unconnected (isolated) circles aligned in a horizontal row.",
        "B": "their unconnected (isolated) circles aligned in a vertical column.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 392,
        "BP": 66,
        "A": "exactly four isolated circles.",
        "B": "five or more isolated circles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 393,
        "BP": 66,
        "A": "their connected network forming a single connected component.",
        "B": "their connected circles split into two or more separate components.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 394,
        "BP": 66,
        "A": "the isolated circles located in the lower half of the frame.",
        "B": "the isolated circles located in the upper half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 395,
        "BP": 66,
        "A": "contain a circle where four or more line segments meet.",
        "B": "no circle with more than three line segments meeting at it.",
        "type": "candidate-rule",
        "A1": "a high-degree hub",
        "B1": ""
    },
    {
        "ID": 396,
        "BP": 66,
        "A": "more connecting line segments than isolated circles.",
        "B": "at least as many isolated circles as connecting line segments.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 397,
        "BP": 67,
        "A": "branches whose side twigs grow out on the right-hand side of the main stem.",
        "B": "branches whose side twigs grow out on the left-hand side of the main stem.",
        "type": "genuine-rule",
        "A1": "going from the root up to the tip, every offshoot veers off to the right",
        "B1": "going from the root up to the tip, every offshoot veers off to the left"
    },
    {
        "ID": 398,
        "BP": 67,
        "A": "twigs that all point upward, toward the growing tip of the branch.",
        "B": "at least one twig that bends back downward, toward the root.",
        "type": "candidate-rule",
        "A1": "every free twig end lies above the junction it springs from",
        "B1": "a free twig end lies below its junction"
    },
    {
        "ID": 399,
        "BP": 67,
        "A": "exactly three free line-ends.",
        "B": "four or more free line-ends.",
        "type": "candidate-rule",
        "A1": "a single branching on the stem",
        "B1": "more than one branching on the stem"
    },
    {
        "ID": 400,
        "BP": 67,
        "A": "their branching point located in the upper half of the figure.",
        "B": "their branching point located in the lower half of the figure.",
        "type": "candidate-rule",
        "A1": "a long bare trunk with a short fork at the top",
        "B1": "the stem divides close to the root"
    },
    {
        "ID": 401,
        "BP": 67,
        "A": "a main stem that bows so its concave side faces right.",
        "B": "a main stem that bows so its concave side faces left.",
        "type": "candidate-rule",
        "A1": "the trunk curves rightward as it rises",
        "B1": "the trunk curves leftward as it rises"
    },
    {
        "ID": 402,
        "BP": 67,
        "A": "side twigs that are short, each less than half the length of the main stem.",
        "B": "at least one side twig that is long, comparable in length to the main stem itself.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 403,
        "BP": 68,
        "A": "a main stem whose side branches point upward: each branch's free tip lies above the point where it joins the stem, like an upward-growing twig",
        "B": "a main stem whose side branches point downward: each branch's free tip lies below the point where it joins the stem, like a drooping twig",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 404,
        "BP": 68,
        "A": "branch junctions located in the lower half of the figure",
        "B": "branch junctions located in the upper half of the figure",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 405,
        "BP": 68,
        "A": "exactly two side branches attached to the main stem",
        "B": "exactly one side branch attached to the main stem",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 406,
        "BP": 68,
        "A": "a main stem that leans to the right at its top",
        "B": "a main stem that leans to the left at its top",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 407,
        "BP": 68,
        "A": "side branches that are strongly curved arcs",
        "B": "side branches that are nearly straight line segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 408,
        "BP": 68,
        "A": "the lowest point of the figure belonging to the main stem, with all branches ending higher up",
        "B": "the highest point of the figure belonging to the main stem, with all branches ending lower down",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 409,
        "BP": 69,
        "A": "a filled dot (bud) at the tip of the main stem, i.e., the branch that continues directly from the root at the bottom",
        "B": "a filled dot (bud) at the tip of a side branch, one that forks off the main stem partway up",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 410,
        "BP": 69,
        "A": "a dot located in the left half of the frame",
        "B": "a dot located in the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 411,
        "BP": 69,
        "A": "exactly four branch tips on the twig",
        "B": "exactly five branch tips on the twig",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 412,
        "BP": 69,
        "A": "a twig whose stem leans to the left",
        "B": "a twig whose stem leans to the right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 413,
        "BP": 69,
        "A": "a dot attached to the longest branch of the twig",
        "B": "a dot attached to the shortest branch of the twig",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 414,
        "BP": 69,
        "A": "all side branches growing from the same side of the stem",
        "B": "side branches growing from both sides of the stem",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 415,
        "BP": 70,
        "A": "a single main stem from which every side twig grows directly; no twig has sub-twigs",
        "B": "at least one side branch that itself bears further twigs, i.e., branches growing out of branches",
        "type": "genuine-rule",
        "A1": "only first-order branching",
        "B1": "second-order branching present"
    },
    {
        "ID": 416,
        "BP": 70,
        "A": "five or fewer free twig endpoints",
        "B": "six or more free twig endpoints",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 417,
        "BP": 70,
        "A": "a main stem that is noticeably tilted or curved away from vertical",
        "B": "a main stem that rises essentially vertically through the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 418,
        "BP": 70,
        "A": "twigs sprouting from only one side of the main stem",
        "B": "twigs sprouting from both sides of the main stem",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 419,
        "BP": 70,
        "A": "a sparse crown with twigs spread far apart from one another",
        "B": "a dense crown with twigs bunched closely together near the top",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 420,
        "BP": 70,
        "A": "long, gently curving branches with no forked tips",
        "B": "branch tips that end in small V-shaped forks",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 421,
        "BP": 71,
        "A": "a three-level nesting: a shape contained inside a second shape that is itself contained inside a third shape",
        "B": "nesting of at most two levels: no shape that is inside another shape contains any further shape",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 422,
        "BP": 71,
        "A": "an outermost containing shape that holds a circle somewhere inside it",
        "B": "outermost containing shapes that hold no circle inside them",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 423,
        "BP": 71,
        "A": "exactly one large container shape with all other outlines drawn small",
        "B": "two or more large shapes of comparable size in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 424,
        "BP": 71,
        "A": "a square appearing somewhere among the nested shapes",
        "B": "no square among the shapes that are contained in another shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 425,
        "BP": 71,
        "A": "at least five separate shape outlines in the frame",
        "B": "four or fewer separate shape outlines in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 426,
        "BP": 71,
        "A": "the innermost nested shape drawn near the center of its container",
        "B": "contained shapes placed off-center, away from the middle of their container",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 427,
        "BP": 72,
        "A": "a single open curve whose two endpoints have parallel tangent directions",
        "B": "a single open curve whose two endpoints have perpendicular tangent directions",
        "type": "genuine-rule",
        "A1": "both ends of the line point along the same axis",
        "B1": "the ends of the line point along axes at right angles"
    },
    {
        "ID": 428,
        "BP": 72,
        "A": "a curve whose two ends point in exactly opposite directions",
        "B": "a curve whose two ends point in the same direction",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 429,
        "BP": 72,
        "A": "a curve whose two endpoints lie far apart in the frame",
        "B": "a curve whose two endpoints lie close together",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 430,
        "BP": 72,
        "A": "a curve possessing an axis or center of symmetry",
        "B": "a curve with no symmetry at all",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 431,
        "BP": 72,
        "A": "a curve that never crosses or overlaps itself",
        "B": "a curve that crosses or overlaps itself at least once",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 432,
        "BP": 72,
        "A": "a curve with an even number of inflection points",
        "B": "a curve with an odd number of inflection points",
        "type": "candidate-rule",
        "A1": "changes of bending direction",
        "B1": ""
    },
    {
        "ID": 433,
        "BP": 73,
        "A": "All diagrams have an ellipse whose long axis is perpendicular to the long axis of the rectangle.",
        "B": "All diagrams have an ellipse whose long axis is parallel to the long axis of the rectangle.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 434,
        "BP": 73,
        "A": "All diagrams have a triangle whose apex points toward the rectangle.",
        "B": "All diagrams have a triangle whose apex points toward the ellipse.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 435,
        "BP": 73,
        "A": "All diagrams have the ellipse positioned between the triangle and the rectangle.",
        "B": "All diagrams have the triangle positioned between the ellipse and the rectangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 436,
        "BP": 73,
        "A": "All diagrams contain at least two shapes tilted at an oblique angle to the frame.",
        "B": "All diagrams have all shapes aligned with the horizontal or vertical axes of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 437,
        "BP": 73,
        "A": "All diagrams have the long axis of the triangle parallel to the long axis of the rectangle.",
        "B": "All diagrams have the long axis of the triangle perpendicular to the long axis of the rectangle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 438,
        "BP": 73,
        "A": "All diagrams have the ellipse placed higher in the frame than the rectangle.",
        "B": "All diagrams have the rectangle placed higher in the frame than the ellipse.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 439,
        "BP": 74,
        "A": "a drop-shaped figure whose tail is attached at the blunt, rounded end, leaving the sharp point free",
        "B": "a drop-shaped figure whose tail is attached at the sharp, pointed end, leaving the rounded end free",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 440,
        "BP": 74,
        "A": "a drop whose tail curls back toward the body of the drop",
        "B": "a drop whose tail extends straight away from the body of the drop",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 441,
        "BP": 74,
        "A": "a mostly outline (unfilled) drop shape",
        "B": "a mostly solid (filled) drop shape",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 442,
        "BP": 74,
        "A": "a drop whose pointed tip is directed downward or to the left",
        "B": "a drop whose pointed tip is directed upward or to the right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 443,
        "BP": 74,
        "A": "a tail that is longer than the drop it is attached to",
        "B": "a tail that is shorter than the drop it is attached to",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 444,
        "BP": 74,
        "A": "a drop whose main axis is oriented diagonally in the frame",
        "B": "a drop whose main axis is oriented horizontally or vertically in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 445,
        "BP": 75,
        "A": "a triangle located on the concave (open) side of the arc",
        "B": "a triangle located on the convex (closed/back) side of the arc",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 446,
        "BP": 75,
        "A": "a triangle positioned above the arc",
        "B": "a triangle positioned below the arc",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 447,
        "BP": 75,
        "A": "an arc that opens toward the right side of the frame",
        "B": "an arc that opens toward the left side of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 448,
        "BP": 75,
        "A": "a triangle that is larger than one placed in Set B, with its apex pointing upward",
        "B": "a triangle with its apex pointing downward",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 449,
        "BP": 75,
        "A": "a triangle placed farther from the arc than the arc's own radius",
        "B": "a triangle placed close to or touching the arc",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 450,
        "BP": 75,
        "A": "an arc that spans more than a quarter of a circle",
        "B": "an arc that spans less than a quarter of a circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 451,
        "BP": 76,
        "A": "elongated blobs whose long sides curve inward, making the shape narrowest at its middle and widest at its ends",
        "B": "elongated blobs whose long sides bulge outward and whose short ends curve inward, making the shape widest at its middle and pinched at its ends",
        "type": "genuine-rule",
        "A1": "a pinched waist",
        "B1": ""
    },
    {
        "ID": 452,
        "BP": 76,
        "A": "shapes elongated along a vertical or diagonal axis",
        "B": "shapes elongated along a horizontal axis",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 453,
        "BP": 76,
        "A": "shapes with exactly two concave arcs on their outline",
        "B": "shapes with more than two concave arcs on their outline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 454,
        "BP": 76,
        "A": "small, slender shapes occupying a minor part of the frame",
        "B": "large, plump shapes occupying a major part of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 455,
        "BP": 76,
        "A": "shapes positioned toward the left half of the frame",
        "B": "shapes positioned toward the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 456,
        "BP": 76,
        "A": "outlines with sharply pointed corner tips at their ends",
        "B": "outlines with smoothly rounded ends and no pointed tips",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 457,
        "BP": 77,
        "A": "three line segments radiating from a common point, with the middle segment bisecting the angle so the two adjacent angles are equal.",
        "B": "three line segments radiating from a common point, with the middle segment lying closer to one outer segment, making the two adjacent angles unequal.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 458,
        "BP": 77,
        "A": "a total spread between the outermost segments of at least 60 degrees.",
        "B": "a total spread between the outermost segments of less than 60 degrees.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 459,
        "BP": 77,
        "A": "their common vertex located in the lower or left half of the frame.",
        "B": "their common vertex located in the upper or right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 460,
        "BP": 77,
        "A": "three segments of roughly equal length.",
        "B": "one segment clearly longer than the other two.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 461,
        "BP": 77,
        "A": "include at least one segment aligned nearly horizontal or vertical.",
        "B": "all segments oriented obliquely, none aligned with the frame axes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 462,
        "BP": 77,
        "A": "their fan of segments opening toward the left or downward.",
        "B": "their fan of segments opening toward the right or upward.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 463,
        "BP": 78,
        "A": "three line segments whose extensions all intersect at one single common point",
        "B": "three line segments whose extensions do not share a common point",
        "type": "genuine-rule",
        "A1": "the lines are concurrent",
        "B1": "they meet pairwise at different points or include parallel lines"
    },
    {
        "ID": 464,
        "BP": 78,
        "A": "no two segments that are parallel to each other",
        "B": "at least one pair of mutually parallel segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 465,
        "BP": 78,
        "A": "segments that all point away from a central region of the frame, like rays from a source",
        "B": "segments arranged with no radiating pattern from any central region",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 466,
        "BP": 78,
        "A": "at most one horizontal segment among the three",
        "B": "at least two segments that are horizontal or nearly horizontal",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 467,
        "BP": 78,
        "A": "segments whose extensions would form a very small or degenerate triangle",
        "B": "segments whose extensions would enclose a large triangle within the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 468,
        "BP": 78,
        "A": "three segments of noticeably different lengths",
        "B": "three segments of roughly equal length",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 469,
        "BP": 79,
        "A": "a filled black circle that is closer to the outline circle than to the triangle",
        "B": "a filled black circle that is closer to the triangle than to the outline circle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 470,
        "BP": 79,
        "A": "the triangle positioned below the two circles or in the lower half of the frame",
        "B": "the triangle positioned above the filled circle or in the upper half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 471,
        "BP": 79,
        "A": "three shapes arranged roughly along a single straight line",
        "B": "three shapes arranged as the corners of a wide triangle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 472,
        "BP": 79,
        "A": "the outline circle located higher in the frame than the filled circle",
        "B": "the outline circle located lower in the frame than the filled circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 473,
        "BP": 79,
        "A": "the filled circle lying between the outline circle and the triangle in left-to-right order",
        "B": "the triangle lying between the two circles in left-to-right order",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 474,
        "BP": 79,
        "A": "shapes clustered in the upper-left region leaving the lower-right corner empty",
        "B": "shapes spread out so that they occupy opposite corners of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 475,
        "BP": 80,
        "A": "a cross that is equidistant from the two dots",
        "B": "a cross that is clearly closer to one of the two dots than to the other",
        "type": "genuine-rule",
        "A1": "the cross lies on the perpendicular bisector of the segment joining the dots",
        "B1": ""
    },
    {
        "ID": 476,
        "BP": 80,
        "A": "a cross located on the opposite side of the line through the two dots from the frame's center",
        "B": "a cross located on the same side of the line through the two dots as the frame's center",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 477,
        "BP": 80,
        "A": "a cross positioned in the left half of the frame while both dots stay away from the corners",
        "B": "a cross positioned in the right half of the frame with one dot near a corner",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 478,
        "BP": 80,
        "A": "two dots whose connecting segment is longer than the distance from the cross to the nearest frame edge",
        "B": "two dots whose connecting segment is shorter than the distance from the cross to the nearest frame edge",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 479,
        "BP": 80,
        "A": "the two dots and the cross arranged so the cross is the topmost or leftmost of the three elements",
        "B": "the two dots and the cross arranged so a dot is the topmost or leftmost of the three elements",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 480,
        "BP": 80,
        "A": "two dots that are far apart, separated by more than half the width of the frame",
        "B": "two dots that are close together, separated by less than half the width of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 481,
        "BP": 81,
        "A": "their filled (black) shapes and outline (white) shapes segregated into two separate clusters, so a single straight line could divide the black shapes from the white ones.",
        "B": "their filled (black) and outline (white) shapes intermixed, so no single straight line can separate the black shapes from the white ones.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 482,
        "BP": 81,
        "A": "an equal number of circles and triangles.",
        "B": "unequal numbers of circles and triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 483,
        "BP": 81,
        "A": "more filled shapes than outline shapes.",
        "B": "at least as many outline shapes as filled shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 484,
        "BP": 81,
        "A": "their filled circles positioned in the left half of the frame.",
        "B": "at least one filled circle in the right half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 485,
        "BP": 81,
        "A": "an even total number of shapes.",
        "B": "an odd total number of shapes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 486,
        "BP": 81,
        "A": "the number of filled circles equal to the number of outline triangles.",
        "B": "the number of filled circles different from the number of outline triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 487,
        "BP": 82,
        "A": "have a circle placed at an arbitrary position that does not fit the arrangement of the crosses \u2014 it neither continues nor completes the pattern the crosses form",
        "B": "have a circle occupying a natural slot in the crosses' arrangement \u2014 it completes or continues their pattern",
        "type": "genuine-rule",
        "A1": "",
        "B1": "a missing corner, the center, the apex, or an in-line position"
    },
    {
        "ID": 488,
        "BP": 82,
        "A": "have a circle lying outside the convex hull (the outline) of the group of crosses",
        "B": "have a circle lying inside the convex hull (the outline) of the group of crosses",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 489,
        "BP": 82,
        "A": "have a circle that is farther from the crosses' center of mass than any of the crosses themselves",
        "B": "have a circle mixed in among the crosses, no farther from their center of mass than the crosses are",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 490,
        "BP": 82,
        "A": "have an odd number of crosses accompanying the single circle",
        "B": "have an even number of crosses accompanying the single circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 491,
        "BP": 82,
        "A": "have more crosses above the circle than below it",
        "B": "have more crosses below the circle than above it",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 492,
        "BP": 82,
        "A": "have a circle located in the lower half or a lower corner of the frame",
        "B": "have a circle located in the upper half or near the top of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 493,
        "BP": 83,
        "A": "a circle located inside the convex hull formed by the crosses, so the crosses surround the circle",
        "B": "a circle located outside the convex hull of the crosses, lying off to one side of the cross cluster",
        "type": "genuine-rule",
        "A1": "the enclosing polygon",
        "B1": ""
    },
    {
        "ID": 494,
        "BP": 83,
        "A": "a circle positioned near the center of the frame",
        "B": "a circle positioned near an edge or corner of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 495,
        "BP": 83,
        "A": "exactly four or more crosses arranged with the circle roughly equidistant from them",
        "B": "crosses clustered on one side of the frame with the circle isolated",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 496,
        "BP": 83,
        "A": "at least one cross both above and below the circle",
        "B": "all crosses on the same vertical side of the circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 497,
        "BP": 83,
        "A": "a circle whose nearest neighboring shape is closer than the average spacing of the crosses",
        "B": "a circle whose nearest cross is farther away than the average spacing between crosses",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 498,
        "BP": 83,
        "A": "an odd total number of shapes in the frame",
        "B": "an even total number of shapes in the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 499,
        "BP": 84,
        "A": "All diagrams have a small square located outside the region enclosed by the contour of dots",
        "B": "All diagrams have the small square located inside the region enclosed by the contour of dots",
        "type": "genuine-rule",
        "A1": "even when tucked into a concavity, it is not inside the enclosed area",
        "B1": ""
    },
    {
        "ID": 500,
        "BP": 84,
        "A": "All diagrams have the small square touching or very near the dotted contour",
        "B": "All diagrams have the small square far from the dotted contour, near its center",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 501,
        "BP": 84,
        "A": "All diagrams have a dotted contour with a concave indentation or opening",
        "B": "All diagrams have a smooth, fully convex dotted contour",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 502,
        "BP": 84,
        "A": "All diagrams have the small square positioned in the lower or left half of the frame",
        "B": "All diagrams have the small square positioned in the upper or right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 503,
        "BP": 84,
        "A": "All diagrams contain more than twenty small circles forming the contour",
        "B": "All diagrams contain twenty or fewer small circles forming the contour",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 504,
        "BP": 84,
        "A": "All diagrams have a dot contour whose shape is irregular or open",
        "B": "All diagrams have a dot contour forming a simple closed geometric figure",
        "type": "candidate-rule",
        "A1": "spiral, notched, or angular",
        "B1": "circle, triangle, or square"
    },
    {
        "ID": 505,
        "BP": 85,
        "A": "figures composed of exactly three straight line segments.",
        "B": "figures composed of exactly five straight line segments.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 506,
        "BP": 85,
        "A": "simple figures containing at most one line-crossing point.",
        "B": "figures containing two or more line-crossing points.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 507,
        "BP": 85,
        "A": "figures whose segments enclose at most one closed region.",
        "B": "figures whose segments enclose two or more closed regions.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 508,
        "BP": 85,
        "A": "open figures with an odd number of free line endpoints.",
        "B": "figures with an even number of free line endpoints.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 509,
        "BP": 85,
        "A": "sparse figures occupying less than half of the frame area.",
        "B": "dense figures spreading across more than half of the frame area.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 510,
        "BP": 85,
        "A": "figures in which no segment is horizontal.",
        "B": "figures containing at least one nearly horizontal segment.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 511,
        "BP": 86,
        "A": "a connected line figure with exactly three free ends",
        "B": "a connected line figure with exactly five free ends",
        "type": "genuine-rule",
        "A1": "loose endpoints",
        "B1": "loose endpoints"
    },
    {
        "ID": 512,
        "BP": 86,
        "A": "a figure whose line segments never cross one another",
        "B": "a figure containing at least one self-crossing of its lines",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 513,
        "BP": 86,
        "A": "a figure made of fewer than six straight line segments",
        "B": "a figure made of six or more straight line segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 514,
        "BP": 86,
        "A": "a figure with exactly one branching (junction) point",
        "B": "a figure with two or more branching (junction) points",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 515,
        "BP": 86,
        "A": "a sparse figure leaving most of the frame empty",
        "B": "a dense figure whose lines spread over most of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 516,
        "BP": 86,
        "A": "a figure that is roughly bilaterally symmetric about a vertical axis",
        "B": "a figure with no axis of symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 517,
        "BP": 87,
        "A": "figures composed of exactly four line segments",
        "B": "figures composed of exactly five line segments",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 518,
        "BP": 87,
        "A": "figures whose line segments never form a closed region",
        "B": "figures whose line segments enclose or nearly enclose a region",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 519,
        "BP": 87,
        "A": "figures containing at least one pair of roughly parallel segments",
        "B": "figures with no two segments roughly parallel",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 520,
        "BP": 87,
        "A": "figures with an even number of free (unconnected) endpoints",
        "B": "figures with an odd number of free (unconnected) endpoints",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 521,
        "BP": 87,
        "A": "figures drawn as a single connected stroke or as fully separate strokes",
        "B": "figures containing branching junctions where three or more segments meet",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 522,
        "BP": 87,
        "A": "figures whose segments meet only at right or acute angles",
        "B": "figures whose segments meet at obtuse angles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 523,
        "BP": 88,
        "A": "contain exactly three pill-shaped figures.",
        "B": "contain exactly five pill-shaped figures.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 524,
        "BP": 88,
        "A": "an odd number of black (filled) pills.",
        "B": "an even number of black (filled) pills.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 525,
        "BP": 88,
        "A": "all of their pills gathered in a single group or cluster.",
        "B": "their pills split into two or more separate groups.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 526,
        "BP": 88,
        "A": "more black pills than white pills.",
        "B": "more white pills than black pills.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 527,
        "BP": 88,
        "A": "pills arranged along a single horizontal band of the frame.",
        "B": "pills spread across the full height of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 528,
        "BP": 88,
        "A": "contain at least one pill that touches no other pill.",
        "B": "every pill touching at least one neighboring pill.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 529,
        "BP": 89,
        "A": "arranged into exactly three separate groups.",
        "B": "arranged into exactly five separate groups.",
        "type": "genuine-rule",
        "A1": "clusters of touching pill-shaped cells",
        "B1": "clusters of touching pill-shaped cells"
    },
    {
        "ID": 530,
        "BP": 89,
        "A": "at most one black cell within any single cluster.",
        "B": "at least one cluster containing two or more black cells.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 531,
        "BP": 89,
        "A": "an odd total number of pill-shaped cells.",
        "B": "an even total number of pill-shaped cells.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 532,
        "BP": 89,
        "A": "their largest cluster located in the upper half of the frame.",
        "B": "their largest cluster located in the lower half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 533,
        "BP": 89,
        "A": "fewer black cells than white cells overall.",
        "B": "at least as many black cells as isolated single cells.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 534,
        "BP": 89,
        "A": "at least one cluster made of three or more touching cells.",
        "B": "at least one cluster consisting of exactly two touching cells.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 535,
        "BP": 90,
        "A": "white (outline) pills forming exactly three separate connected groups, with black pills acting as separators.",
        "B": "white (outline) pills forming exactly four separate connected groups, with black pills acting as separators.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 536,
        "BP": 90,
        "A": "contain an even number of black (filled) pills.",
        "B": "contain an odd number of black (filled) pills.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 537,
        "BP": 90,
        "A": "fewer than ten pills in total.",
        "B": "ten or more pills in total.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 538,
        "BP": 90,
        "A": "at least one row that begins or ends with a black pill.",
        "B": "every row beginning and ending with a white pill.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 539,
        "BP": 90,
        "A": "more white pills than black pills by at least three.",
        "B": "more white pills than black pills by fewer than three.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 540,
        "BP": 90,
        "A": "their pills arranged in at most two horizontal rows or clusters.",
        "B": "their pills arranged in at least two horizontal rows or clusters, one placed above the other.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 541,
        "BP": 91,
        "A": "feature the number three: each contains exactly three of some salient element.",
        "B": "feature the number four: each contains exactly four of some salient element.",
        "type": "genuine-rule",
        "A1": "three branches, three sides, three squares, three notches, three ticks, or three dots",
        "B1": "four sides, four notches, four tick marks, four circles, four branches, or four leaves"
    },
    {
        "ID": 542,
        "BP": 91,
        "A": "contain an odd total number of distinct line strokes.",
        "B": "contain an even total number of distinct line strokes.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 543,
        "BP": 91,
        "A": "include at least one straight line segment as a main element.",
        "B": "built mainly from curved outlines.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 544,
        "BP": 91,
        "A": "show a single connected figure.",
        "B": "show several separate, disconnected figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 545,
        "BP": 91,
        "A": "lack any axis of mirror symmetry.",
        "B": "at least one axis of mirror symmetry.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 546,
        "BP": 91,
        "A": "contain an open (non-closed) line or contour.",
        "B": "consist entirely of closed contours.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 547,
        "BP": 92,
        "A": "a chain of dots tracing a single simple curve that never crosses, touches, or branches into itself",
        "B": "a chain of dots whose path intersects itself or branches, forming a crossing or junction point",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 548,
        "BP": 92,
        "A": "a dotted curve that spirals or coils inward toward the center of the frame",
        "B": "a dotted curve made of straight, outward-reaching strokes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 549,
        "BP": 92,
        "A": "at most three filled (solid) dots among the outlined dots",
        "B": "exactly four filled (solid) dots among the outlined dots",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 550,
        "BP": 92,
        "A": "more than twenty dots making up the chain",
        "B": "fewer than twenty dots making up the chain",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 551,
        "BP": 92,
        "A": "a chain whose two free ends both lie in the lower half of the frame",
        "B": "a chain with at least one free end in the upper half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 552,
        "BP": 92,
        "A": "a curve that is predominantly rounded, built from smooth arcs",
        "B": "a curve containing sharp angular corners between straight segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 553,
        "BP": 93,
        "A": "chains whose branch or crossing points are ordinary outlined circles; no filled black circle ever lies at a point where the chain branches or crosses itself",
        "B": "chains in which a filled black circle sits exactly at the point where the chain branches or crosses itself",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 554,
        "BP": 93,
        "A": "exactly three filled black circles among the outlined circles",
        "B": "exactly four filled black circles among the outlined circles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 555,
        "BP": 93,
        "A": "filled black circles placed only at the free end points of the chain",
        "B": "filled black circles placed only in the interior of the chain, away from its end points",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 556,
        "BP": 93,
        "A": "a single continuous chain of circles with no separate pieces",
        "B": "two separate chains of circles that touch or overlap each other",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 557,
        "BP": 93,
        "A": "at least two filled black circles that are immediately adjacent along the chain",
        "B": "filled black circles that are always separated by several outlined circles",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 558,
        "BP": 93,
        "A": "more than eighteen circles making up the chain",
        "B": "eighteen or fewer circles making up the chain",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 559,
        "BP": 94,
        "A": "a chain of circles whose single black circle lies in the interior of the chain, with neighboring circles on both sides",
        "B": "a chain of circles whose single black circle sits at a free end (tip) of the chain, touching only one neighboring circle",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 560,
        "BP": 94,
        "A": "a chain of circles that contains a branching junction where three or more segments meet",
        "B": "a chain of circles forming a single unbranched path with no junction",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 561,
        "BP": 94,
        "A": "a black circle located in the upper-left region of the frame",
        "B": "a black circle located near an outer edge or corner of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 562,
        "BP": 94,
        "A": "chains built from fewer than ten circles in total",
        "B": "chains built from ten or more circles in total",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 563,
        "BP": 94,
        "A": "a chain that is straight or gently curved around its black circle",
        "B": "a chain that bends sharply or changes direction at its black circle",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 564,
        "BP": 94,
        "A": "a black circle placed at the point of highest connectivity of the figure",
        "B": "a black circle placed at the lowest or outermost circle of the figure",
        "type": "candidate-rule",
        "A1": "crossing or peak",
        "B1": ""
    },
    {
        "ID": 565,
        "BP": 95,
        "A": "Shapes filled with vertical hatching lines",
        "B": "Shapes filled with horizontal hatching lines",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 566,
        "BP": 95,
        "A": "Shapes bounded only by straight-line segments (polygons)",
        "B": "Shapes whose outlines include curved segments",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 567,
        "BP": 95,
        "A": "Convex shapes",
        "B": "Shapes with a concave indentation in their outline",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 568,
        "BP": 95,
        "A": "Shapes positioned in the lower-left portion of the frame",
        "B": "Shapes positioned in the upper-right portion of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 569,
        "BP": 95,
        "A": "Shapes taller than they are wide",
        "B": "Shapes wider than they are tall",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 570,
        "BP": 95,
        "A": "Shapes with an odd number of hatching stripes",
        "B": "Shapes with an even number of hatching stripes",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 571,
        "BP": 96,
        "A": "triangles.",
        "B": "quadrilaterals.",
        "type": "genuine-rule",
        "A1": "the hatch lines fill a region whose outline has exactly three vertices",
        "B1": "the hatch lines fill a region whose outline has exactly four vertices"
    },
    {
        "ID": 572,
        "BP": 96,
        "A": "filled with straight parallel hatch lines only.",
        "B": "filled with hatch lines that change direction or curve within the figure.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 573,
        "BP": 96,
        "A": "convex figures with no inward-pointing corners.",
        "B": "concave figures with at least one inward-pointing corner.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 574,
        "BP": 96,
        "A": "a hatching direction parallel to one of the figure's sides.",
        "B": "a hatching direction that crosses every side of the figure at an angle.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 575,
        "BP": 96,
        "A": "at least one horizontal or vertical edge in their outline.",
        "B": "only slanted edges in their outline.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 576,
        "BP": 96,
        "A": "positioned with their widest part in the lower half of the frame.",
        "B": "positioned with their widest part in the upper half of the frame.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 577,
        "BP": 97,
        "A": "triangles.",
        "B": "circles.",
        "type": "genuine-rule",
        "A1": "a triangular figure, whatever the drawing style or fill",
        "B1": "a circular figure, whatever the drawing style or fill"
    },
    {
        "ID": 578,
        "BP": 97,
        "A": "straight edges and sharp corners.",
        "B": "a smoothly curved outline with no corners.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 579,
        "BP": 97,
        "A": "drawn with broken or incomplete outlines.",
        "B": "drawn with solid, continuous outlines.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 580,
        "BP": 97,
        "A": "point toward one side of the frame.",
        "B": "perfectly symmetric in every direction.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 581,
        "BP": 97,
        "A": "exactly three vertices.",
        "B": "more than three vertices or components.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 582,
        "BP": 97,
        "A": "unfilled outline figures.",
        "B": "filled or textured figures.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 583,
        "BP": 98,
        "A": "a triangle as the main figure, whatever the background texture",
        "B": "a quadrilateral as the main figure, whatever the background texture",
        "type": "genuine-rule",
        "A1": "a three-sided outlined polygon",
        "B1": "a four-sided outlined polygon"
    },
    {
        "ID": 584,
        "BP": 98,
        "A": "a main figure whose outline contains at least one acute corner sharper than 60 degrees",
        "B": "a main figure whose corners are all wider than 60 degrees",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 585,
        "BP": 98,
        "A": "background line patterns made of parallel or straight strokes only",
        "B": "background patterns that include grids, waves, or crossing families of lines",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 586,
        "BP": 98,
        "A": "a main figure positioned toward the left half of the frame",
        "B": "a main figure positioned toward the right half of the frame",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 587,
        "BP": 98,
        "A": "a main figure that overlaps or touches the background texture lines",
        "B": "a main figure drawn clear of the background texture lines",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 588,
        "BP": 98,
        "A": "a main figure with no pair of parallel sides",
        "B": "a main figure with at least one pair of roughly parallel sides",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 589,
        "BP": 99,
        "A": "All diagrams have a chain of circles and a chain of triangles whose outlines cross (intersect) each other.",
        "B": "All diagrams have a chain of circles and a chain of triangles that do not cross \u2014 they are either fully separate or one is nested inside the other.",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 590,
        "BP": 99,
        "A": "All diagrams contain more triangles than circles.",
        "B": "All diagrams contain more circles than triangles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 591,
        "BP": 99,
        "A": "All diagrams have the circle group positioned to the left of the triangle group's center.",
        "B": "All diagrams have the circle group surrounding or above the triangle group.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 592,
        "BP": 99,
        "A": "All diagrams have triangles that form an open, scattered arrangement rather than a closed ring.",
        "B": "All diagrams have triangles arranged in a closed ring or compact cluster.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 593,
        "BP": 99,
        "A": "All diagrams have at least one triangle located inside the ring formed by the circles.",
        "B": "All diagrams have every triangle located outside the ring formed by the circles.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 594,
        "BP": 99,
        "A": "All diagrams have shapes spread so that they touch the lower edge region of the frame.",
        "B": "All diagrams have shapes concentrated toward the center, leaving the lower edge region empty.",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 595,
        "BP": 100,
        "A": "the letter 'A', drawn in various typefaces",
        "B": "the Cyrillic letter '\u0411', drawn in various typefaces",
        "type": "genuine-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 596,
        "BP": 100,
        "A": "two diagonal strokes meeting at an apex at the top",
        "B": "a vertical stem with a bowl attached on the right",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 597,
        "BP": 100,
        "A": "an approximately mirror-symmetric character about a vertical axis",
        "B": "an asymmetric character with no vertical mirror symmetry",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 598,
        "BP": 100,
        "A": "a small enclosed triangular counter (hole) near the top",
        "B": "a rounded, roughly semicircular counter in the lower half",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 599,
        "BP": 100,
        "A": "a figure composed mainly of straight line strokes",
        "B": "a figure containing a prominent curved stroke",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    },
    {
        "ID": 600,
        "BP": 100,
        "A": "a horizontal crossbar connecting two legs",
        "B": "a horizontal bar extending only from the top of the stem",
        "type": "candidate-rule",
        "A1": "",
        "B1": ""
    }
]