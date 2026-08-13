var rulesArray = [
  {
    "ID": 1,
    "BP": 1,
    "A": "an empty frame",
    "B": "a non-empty frame",
    "type": "genuine-rule",
    "A1": "nothing at all is drawn inside the frame",
    "B1": "at least one figure is drawn inside the frame"
  },
  {
    "ID": 2,
    "BP": 1,
    "A": "no closed outline",
    "B": "at least one closed outline",
    "type": "candidate-rule",
    "A1": "the frame contains no closed curve or polygon",
    "B1": "a closed shape such as a circle, square or star appears in the frame"
  },
  {
    "ID": 3,
    "BP": 1,
    "A": "total left-right symmetry",
    "B": "asymmetric contents",
    "type": "candidate-rule",
    "A1": "the blank interior is perfectly mirror-symmetric",
    "B1": "the drawn figures are placed so the frame is not mirror-symmetric"
  },
  {
    "ID": 4,
    "BP": 1,
    "A": "no small figures",
    "B": "at least one small figure",
    "type": "candidate-rule",
    "A1": "no figure smaller than the frame appears",
    "B1": "each frame holds one or more figures much smaller than the frame"
  },
  {
    "ID": 5,
    "BP": 1,
    "A": "nothing in the center region",
    "B": "ink near the center",
    "type": "candidate-rule",
    "A1": "the middle area of the frame is blank",
    "B1": "some drawn content lies at or near the middle of the frame"
  },
  {
    "ID": 6,
    "BP": 1,
    "A": "zero curved lines",
    "B": "at least one curved line",
    "type": "candidate-rule",
    "A1": "no curved stroke is present anywhere in the frame",
    "B1": "a circle, scribble or other curved stroke appears"
  },
  {
    "ID": 1,
    "BP": 2,
    "A": "a large figure",
    "B": "a small figure",
    "type": "genuine-rule",
    "A1": "the single shape occupies a substantial part of the frame",
    "B1": "the single shape is tiny compared with the frame, leaving most of it empty"
  },
  {
    "ID": 2,
    "BP": 2,
    "A": "a centrally placed shape",
    "B": "a shape displaced toward an edge or corner",
    "type": "candidate-rule",
    "A1": "the figure sits roughly in the middle of the frame",
    "B1": "the figure lies noticeably off-center, near a border of the frame"
  },
  {
    "ID": 3,
    "BP": 2,
    "A": "a shape with a smooth or simple outline",
    "B": "a shape with a notched or indented outline",
    "type": "candidate-rule",
    "A1": "outlines are simple closed curves or plain polygons",
    "B1": "outlines contain concave notches or pinched-in sides"
  },
  {
    "ID": 4,
    "BP": 2,
    "A": "at most one filled shape per row position",
    "B": "filled and outlined shapes alternating",
    "type": "candidate-rule",
    "A1": "solid black figures appear only occasionally among mostly outlined shapes",
    "B1": "solid and outline figures alternate in a regular pattern across the panels"
  },
  {
    "ID": 5,
    "BP": 2,
    "A": "a shape wider than one third of the frame",
    "B": "a convex compact blob",
    "type": "candidate-rule",
    "A1": "each figure spans more than a third of the frame's width",
    "B1": "each figure is a small, roughly convex compact form"
  },
  {
    "ID": 6,
    "BP": 2,
    "A": "a many-sided or curved figure",
    "B": "a four-sided or simpler figure",
    "type": "candidate-rule",
    "A1": "figures have several sides or curved boundaries",
    "B1": "figures appear to have four or fewer sides"
  },
  {
    "ID": 1,
    "BP": 3,
    "A": "outline shapes",
    "B": "solid filled shapes",
    "type": "genuine-rule",
    "A1": "every figure is drawn as an unfilled contour with a white interior",
    "B1": "every figure is filled solid black"
  },
  {
    "ID": 2,
    "BP": 3,
    "A": "a single shape",
    "B": "possibly multiple shapes",
    "type": "candidate-rule",
    "A1": "each frame contains exactly one figure",
    "B1": "frames may contain more than one figure, such as the pair of joined blobs"
  },
  {
    "ID": 3,
    "BP": 3,
    "A": "shapes with a curved or irregular outline",
    "B": "regular geometric shapes",
    "type": "candidate-rule",
    "A1": "the figures look freehand or irregular in contour",
    "B1": "the figures are simple geometric forms like triangles, squares and circles"
  },
  {
    "ID": 4,
    "BP": 3,
    "A": "shapes in the left half of the frame",
    "B": "shapes in the right half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 3,
    "A": "small figures",
    "B": "large figures",
    "type": "candidate-rule",
    "A1": "the drawn figure occupies only a small fraction of the frame",
    "B1": "the drawn figure covers a large portion of the frame"
  },
  {
    "ID": 6,
    "BP": 3,
    "A": "less ink than white space inside the figure",
    "B": "upright, unrotated shapes",
    "type": "candidate-rule",
    "A1": "the lines are thin so the figure's interior stays mostly white",
    "B1": "the shapes appear to sit in a standard, unrotated orientation"
  },
  {
    "ID": 1,
    "BP": 4,
    "A": "a convex shape",
    "B": "a concave shape",
    "type": "genuine-rule",
    "A1": "the outline has no indentations; any line between two points inside the shape stays inside it",
    "B1": "the outline has at least one indentation or notch that dents inward"
  },
  {
    "ID": 2,
    "BP": 4,
    "A": "a smooth or regular outline",
    "B": "a jagged or irregular outline",
    "type": "candidate-rule",
    "A1": "the boundary is a simple circle, ellipse, or plain polygon",
    "B1": "the boundary wiggles, zigzags, or bends erratically"
  },
  {
    "ID": 3,
    "BP": 4,
    "A": "a familiar geometric figure",
    "B": "an abstract free-form figure",
    "type": "candidate-rule",
    "A1": "a nameable shape such as a circle, triangle, ellipse, or pentagon",
    "B1": "a shape that does not correspond to a standard named geometric figure"
  },
  {
    "ID": 4,
    "BP": 4,
    "A": "a shape with at most seven sides",
    "B": "a shape with more than seven sides or curves",
    "type": "candidate-rule",
    "A1": "the outline can be drawn with seven or fewer straight or curved segments",
    "B1": "the outline needs many segments or curve changes to draw"
  },
  {
    "ID": 5,
    "BP": 4,
    "A": "a rounded, compact form",
    "B": "an elongated or branching form",
    "type": "candidate-rule",
    "A1": "the shape is roughly as wide as it is tall",
    "B1": "the shape stretches out or splits into lobes and prongs"
  },
  {
    "ID": 6,
    "BP": 4,
    "A": "a shape near the frame edge",
    "B": "a shape near the frame center",
    "type": "candidate-rule",
    "A1": "the figure sits off-center, closer to one border of the frame",
    "B1": "the figure sits roughly in the middle of the frame"
  },
  {
    "ID": 1,
    "BP": 5,
    "A": "polygons",
    "B": "curved shapes",
    "type": "genuine-rule",
    "A1": "every outline is built entirely from straight line segments meeting at corners",
    "B1": "every outline is smoothly curved, with no straight edges or sharp corners"
  },
  {
    "ID": 2,
    "BP": 5,
    "A": "shapes with corners",
    "B": "cornerless smooth outlines",
    "type": "candidate-rule",
    "A1": "each figure has at least three sharp vertices",
    "B1": "each figure's boundary bends gradually without any angular points"
  },
  {
    "ID": 3,
    "BP": 5,
    "A": "shapes with an even number of sides",
    "B": "shapes with no countable sides",
    "type": "candidate-rule",
    "A1": "the figures appear to have side counts like 4 or 6",
    "B1": "smooth closed curves have no distinct sides to count"
  },
  {
    "ID": 4,
    "BP": 5,
    "A": "convex outlines",
    "B": "at least one concave indentation",
    "type": "candidate-rule",
    "A1": "the boundary bulges outward everywhere",
    "B1": "part of the boundary curves inward, as in the kidney shape"
  },
  {
    "ID": 5,
    "BP": 5,
    "A": "shapes wider than tall",
    "B": "shapes taller than wide",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 5,
    "A": "shapes with a line of symmetry",
    "B": "asymmetric blobs",
    "type": "candidate-rule",
    "A1": "each figure can be folded onto itself along at least one axis",
    "B1": "the figures lack any mirror symmetry"
  },
  {
    "ID": 1,
    "BP": 6,
    "A": "triangles",
    "B": "quadrilaterals",
    "type": "genuine-rule",
    "A1": "every figure is a polygon with exactly three sides",
    "B1": "every figure is a polygon with exactly four sides, including the concave arrow-like shape"
  },
  {
    "ID": 2,
    "BP": 6,
    "A": "a shape with an acute point",
    "B": "only blunt corners",
    "type": "candidate-rule",
    "A1": "each figure has at least one sharply pointed (acute) vertex",
    "B1": "the figures' corners appear closer to right or obtuse angles"
  },
  {
    "ID": 3,
    "BP": 6,
    "A": "no pair of parallel sides",
    "B": "at least one pair of parallel sides",
    "type": "candidate-rule",
    "A1": "no two edges of the figure run parallel to each other",
    "B1": "two of the figure's edges run parallel, as in trapezoids and rectangles"
  },
  {
    "ID": 4,
    "BP": 6,
    "A": "elongated shapes",
    "B": "compact shapes",
    "type": "candidate-rule",
    "A1": "the figures are noticeably longer in one direction than the other",
    "B1": "the figures have roughly balanced width and height"
  },
  {
    "ID": 5,
    "BP": 6,
    "A": "three or more filled shapes across the set",
    "B": "mostly outlined shapes",
    "type": "candidate-rule",
    "A1": "half of the panels contain a solid black figure",
    "B1": "most panels contain only outlined figures"
  },
  {
    "ID": 6,
    "BP": 6,
    "A": "a shape touching the left half",
    "B": "a shape in the right half",
    "type": "candidate-rule",
    "A1": "each figure lies mainly in or extends into the left half of its frame",
    "B1": "each figure sits mainly in the right half of its frame"
  },
  {
    "ID": 1,
    "BP": 7,
    "A": "a vertically elongated figure",
    "B": "a horizontally elongated figure",
    "type": "genuine-rule",
    "A1": "the single figure's long axis runs up-down: it is much taller than it is wide",
    "B1": "the single figure's long axis runs left-right: it is much wider than it is tall"
  },
  {
    "ID": 2,
    "BP": 7,
    "A": "a figure drawn near the left half",
    "B": "a figure drawn near the right half",
    "type": "candidate-rule",
    "A1": "the main figure sits in or leans toward the left portion of the frame",
    "B1": "the main figure sits in or leans toward the right portion of the frame"
  },
  {
    "ID": 3,
    "BP": 7,
    "A": "an open, unclosed outline",
    "B": "a closed outline",
    "type": "candidate-rule",
    "A1": "the drawing is a stroke or chain of strokes whose ends do not join",
    "B1": "the drawing forms a closed loop enclosing an interior region"
  },
  {
    "ID": 4,
    "BP": 7,
    "A": "a figure with sharp corners or angles",
    "B": "a smoothly curved figure",
    "type": "candidate-rule",
    "A1": "the outline includes at least one sharp bend or angular joint",
    "B1": "the outline bends only in smooth curves, with no sharp corners"
  },
  {
    "ID": 5,
    "BP": 7,
    "A": "a thin line drawing",
    "B": "a shape with visible thickness",
    "type": "candidate-rule",
    "A1": "the figure is essentially a one-dimensional stroke with no enclosed width",
    "B1": "the figure is a band or region with clearly two parallel edges"
  },
  {
    "ID": 6,
    "BP": 7,
    "A": "a figure symmetric about a vertical axis",
    "B": "a figure symmetric about a horizontal axis",
    "type": "candidate-rule",
    "A1": "the figure looks the same when mirrored left-to-right",
    "B1": "the figure looks the same when mirrored top-to-bottom"
  },
  {
    "ID": 1,
    "BP": 8,
    "A": "a shape on the right side of the frame",
    "B": "a shape on the left side of the frame",
    "type": "genuine-rule",
    "A1": "the single outlined figure is always located in the right half of the frame",
    "B1": "the single outlined figure is always located in the left half of the frame"
  },
  {
    "ID": 2,
    "BP": 8,
    "A": "a shape in the lower half",
    "B": "a shape in the upper half",
    "type": "candidate-rule",
    "A1": "the figure sits at or below the vertical midline of the frame",
    "B1": "the figure sits at or above the vertical midline of the frame"
  },
  {
    "ID": 3,
    "BP": 8,
    "A": "a regular, familiar shape",
    "B": "an irregular or distorted shape",
    "type": "candidate-rule",
    "A1": "figures resemble standard geometric shapes such as triangles, circles and rectangles",
    "B1": "figures look stretched, bent or otherwise non-standard"
  },
  {
    "ID": 4,
    "BP": 8,
    "A": "a shape with at least one straight edge",
    "B": "a shape made only of curves",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the outline contains no straight line segments"
  },
  {
    "ID": 5,
    "BP": 8,
    "A": "a larger figure",
    "B": "a smaller figure",
    "type": "candidate-rule",
    "A1": "the figure occupies a noticeably larger fraction of the frame",
    "B1": "the figure occupies only a small fraction of the frame"
  },
  {
    "ID": 6,
    "BP": 8,
    "A": "a shape with an axis of symmetry",
    "B": "an asymmetric shape",
    "type": "candidate-rule",
    "A1": "the outline can be mirrored across at least one axis onto itself",
    "B1": "no mirror axis maps the outline onto itself"
  },
  {
    "ID": 1,
    "BP": 9,
    "A": "a smooth outline",
    "B": "a jagged, zigzag outline",
    "type": "genuine-rule",
    "A1": "the boundary is made of gentle curves or a few straight sides, with no saw-tooth serrations",
    "B1": "the boundary is serrated with many small zigzag teeth all the way around"
  },
  {
    "ID": 2,
    "BP": 9,
    "A": "few boundary corners",
    "B": "dozens of boundary corners",
    "type": "candidate-rule",
    "A1": "the outline has at most a handful of vertices, or none at all",
    "B1": "the saw-tooth edge creates a very large number of sharp vertices"
  },
  {
    "ID": 3,
    "BP": 9,
    "A": "a short, simple perimeter",
    "B": "a long, convoluted perimeter",
    "type": "candidate-rule",
    "A1": "the outline length is close to the minimum needed to enclose the shape's area",
    "B1": "the zigzag edge makes the perimeter far longer than the enclosed area requires"
  },
  {
    "ID": 4,
    "BP": 9,
    "A": "a mostly convex shape",
    "B": "many concave notches",
    "type": "candidate-rule",
    "A1": "the outline bulges outward with at most one or two indentations",
    "B1": "each zigzag tooth creates an inward-pointing notch along the boundary"
  },
  {
    "ID": 5,
    "BP": 9,
    "A": "a calm, regular figure",
    "B": "a spiky, star-like figure",
    "type": "candidate-rule",
    "A1": "the figure looks like a familiar geometric or blob shape",
    "B1": "the figure bristles with points like a star or burst"
  },
  {
    "ID": 6,
    "BP": 9,
    "A": "long boundary segments",
    "B": "only tiny boundary segments",
    "type": "candidate-rule",
    "A1": "each side or curve section of the outline spans a large portion of the shape",
    "B1": "the outline is built from many very short line segments"
  },
  {
    "ID": 1,
    "BP": 10,
    "A": "a triangular shape",
    "B": "a quadrilateral shape",
    "type": "genuine-rule",
    "A1": "each figure is essentially three-sided, whether its outline is smooth, wavy, or jagged, and regardless of size",
    "B1": "each figure is essentially four-sided (square, rectangle, rhombus, or irregular quadrangle), whatever the outline style or size"
  },
  {
    "ID": 2,
    "BP": 10,
    "A": "an odd number of main corners",
    "B": "an even number of main corners",
    "type": "candidate-rule",
    "A1": "ignoring small zigzag serrations, the overall outline turns at an odd number of corner points",
    "B1": "ignoring small zigzag serrations, the overall outline turns at an even number of corner points"
  },
  {
    "ID": 3,
    "BP": 10,
    "A": "a shape with a pointed apex",
    "B": "a shape with a flat or blunt top",
    "type": "candidate-rule",
    "A1": "the figure narrows to a single point at one end",
    "B1": "the figure has no single dominant point at its top"
  },
  {
    "ID": 4,
    "BP": 10,
    "A": "an irregular or rough outline",
    "B": "a clean straight-edged outline",
    "type": "candidate-rule",
    "A1": "the boundary is wavy or jagged rather than perfectly straight",
    "B1": "the boundary is drawn with straight, regular edges"
  },
  {
    "ID": 5,
    "BP": 10,
    "A": "a shape narrower at the top than at the bottom",
    "B": "a shape of roughly equal width top and bottom",
    "type": "candidate-rule",
    "A1": "the figure tapers upward, being widest near its base",
    "B1": "the figure keeps roughly the same width from top to bottom"
  },
  {
    "ID": 6,
    "BP": 10,
    "A": "a shape placed off-center in the frame",
    "B": "a shape centered in the frame",
    "type": "candidate-rule",
    "A1": "the figure sits away from the middle of the frame",
    "B1": "the figure sits at or near the middle of the frame"
  },
  {
    "ID": 1,
    "BP": 11,
    "A": "elongated shapes",
    "B": "compact shapes",
    "type": "genuine-rule",
    "A1": "each outline is stretched: much longer in one direction than the other (several times longer than wide)",
    "B1": "each outline is roughly as wide as it is tall, with no pronounced stretching in any direction"
  },
  {
    "ID": 2,
    "BP": 11,
    "A": "tilted or slanted figures",
    "B": "upright figures",
    "type": "candidate-rule",
    "A1": "the main axis of each figure leans diagonally within the frame",
    "B1": "each figure sits level, with no diagonal lean"
  },
  {
    "ID": 3,
    "BP": 11,
    "A": "at least one sharp, narrow point",
    "B": "no sharp points",
    "type": "candidate-rule",
    "A1": "every outline tapers somewhere to a thin, acute tip",
    "B1": "outlines are made of gentle curves or wide-angled corners only"
  },
  {
    "ID": 4,
    "BP": 11,
    "A": "large figures spanning the frame",
    "B": "small figures",
    "type": "candidate-rule",
    "A1": "each shape stretches across a large part of its frame",
    "B1": "each shape occupies only a small central portion of its frame"
  },
  {
    "ID": 5,
    "BP": 11,
    "A": "irregular outlines",
    "B": "regular geometric shapes",
    "type": "candidate-rule",
    "A1": "the figures are irregular or freeform, not standard named shapes",
    "B1": "the figures are familiar regular shapes such as circles, squares and hexagons"
  },
  {
    "ID": 6,
    "BP": 11,
    "A": "a concave part in the outline",
    "B": "fully convex outlines",
    "type": "candidate-rule",
    "A1": "each outline bends inward somewhere, creating an indentation",
    "B1": "each outline bulges outward everywhere, with no indentations"
  },
  {
    "ID": 1,
    "BP": 12,
    "A": "elongated shapes, much longer than wide",
    "B": "compact shapes, about as wide as tall",
    "type": "genuine-rule",
    "A1": "each figure is stretched along one direction, e.g. a thin triangle, sliver-like ellipse, narrow rectangle or long wavy strip",
    "B1": "each figure fits roughly into a square bounding box: circle, star, square, diamond, ring, H-shape"
  },
  {
    "ID": 2,
    "BP": 12,
    "A": "a single unbranched strip or sliver",
    "B": "a figure with a rounded or spread-out body",
    "type": "candidate-rule",
    "A1": "the shape reads as one narrow band with two ends",
    "B1": "the shape spreads out in several directions rather than along one line"
  },
  {
    "ID": 3,
    "BP": 12,
    "A": "pointed or tapering ends",
    "B": "no tapering points at the ends",
    "type": "candidate-rule",
    "A1": "the shapes narrow toward at least one end, like a spike or a lens",
    "B1": "the outline keeps a fairly even width or is closed without tapering tips"
  },
  {
    "ID": 4,
    "BP": 12,
    "A": "shapes tilted or aligned along one axis",
    "B": "shapes with no dominant axis",
    "type": "candidate-rule",
    "A1": "each figure lies along a clear main direction (diagonal, horizontal or vertical)",
    "B1": "the figures look similar from several directions, with no single main direction"
  },
  {
    "ID": 5,
    "BP": 12,
    "A": "low ink coverage in the frame",
    "B": "a figure occupying a broad central area",
    "type": "candidate-rule",
    "A1": "the drawn shape covers only a thin sliver of the frame's area",
    "B1": "the drawn shape occupies a substantial two-dimensional region"
  },
  {
    "ID": 6,
    "BP": 12,
    "A": "at most two distinct corner angles",
    "B": "many corners or a fully smooth closed curve",
    "type": "candidate-rule",
    "A1": "the outlines are simple, with few sharp vertices",
    "B1": "the outlines have numerous vertices (star, zig-zag letter shapes) or are smooth closed loops"
  },
  {
    "ID": 1,
    "BP": 13,
    "A": "vertical rectangles or horizontal ellipses",
    "B": "horizontal rectangles or vertical ellipses",
    "type": "genuine-rule",
    "A1": "each frame holds one shape: if it is a rectangle it is taller than wide, if it is an ellipse it is wider than tall",
    "B1": "each frame holds one shape: if it is a rectangle it is wider than tall, if it is an ellipse it is taller than wide"
  },
  {
    "ID": 2,
    "BP": 13,
    "A": "a horizontally elongated shape",
    "B": "a vertically elongated shape",
    "type": "candidate-rule",
    "A1": "the single shape's longer axis runs left to right",
    "B1": "the single shape's longer axis runs top to bottom"
  },
  {
    "ID": 3,
    "BP": 13,
    "A": "a shape in the upper half of the frame",
    "B": "a shape in the lower half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 13,
    "A": "a curved outline",
    "B": "a straight-edged outline",
    "type": "candidate-rule",
    "A1": "the single figure is an ellipse, drawn with a smooth curved boundary",
    "B1": "the single figure is a rectangle, drawn only with straight sides and corners"
  },
  {
    "ID": 5,
    "BP": 13,
    "A": "a large shape",
    "B": "a small shape",
    "type": "candidate-rule",
    "A1": "the figure covers a comparatively large portion of the frame",
    "B1": "the figure covers only a small portion of the frame"
  },
  {
    "ID": 6,
    "BP": 13,
    "A": "a strongly elongated shape",
    "B": "a nearly round or square shape",
    "type": "candidate-rule",
    "A1": "the shape is at least three times as long as it is wide",
    "B1": "the shape's length and width are close to equal"
  },
  {
    "ID": 1,
    "BP": 14,
    "A": "large figures",
    "B": "small figures",
    "type": "genuine-rule",
    "A1": "the drawn figure spans most of the frame, its size being comparable to the frame itself",
    "B1": "the drawn content is tiny compared to the frame, leaving most of the frame empty"
  },
  {
    "ID": 2,
    "BP": 14,
    "A": "a lot of ink",
    "B": "very little ink",
    "type": "candidate-rule",
    "A1": "the total length of drawn lines is large",
    "B1": "only a small amount of line is drawn"
  },
  {
    "ID": 3,
    "BP": 14,
    "A": "curved lines present",
    "B": "only straight lines",
    "type": "candidate-rule",
    "A1": "every diagram contains at least one smoothly curved stroke",
    "B1": "the figures are built solely from straight segments"
  },
  {
    "ID": 4,
    "BP": 14,
    "A": "a single connected figure",
    "B": "several separate pieces",
    "type": "candidate-rule",
    "A1": "all the drawn strokes touch or join into one figure",
    "B1": "the drawing consists of two or more disconnected marks"
  },
  {
    "ID": 5,
    "BP": 14,
    "A": "figures centered in the frame",
    "B": "figures off-center",
    "type": "candidate-rule",
    "A1": "the figure sits roughly at the middle of the frame",
    "B1": "the marks sit away from the frame's center"
  },
  {
    "ID": 6,
    "BP": 14,
    "A": "a closed outline somewhere",
    "B": "only open strokes",
    "type": "candidate-rule",
    "A1": "at least part of the drawing forms a closed loop or region",
    "B1": "no stroke closes back on itself to enclose an area"
  },
  {
    "ID": 1,
    "BP": 15,
    "A": "a closed outline",
    "B": "an open outline with a gap",
    "type": "genuine-rule",
    "A1": "the curve returns to its starting point, fully enclosing a region",
    "B1": "the line never closes: there is a break so the figure does not enclose a region completely"
  },
  {
    "ID": 2,
    "BP": 15,
    "A": "an outline that encloses a large area",
    "B": "a thin or narrow figure",
    "type": "candidate-rule",
    "A1": "the drawn contour surrounds a substantial interior region",
    "B1": "the figure is mostly line-like, enclosing little or no interior area"
  },
  {
    "ID": 3,
    "BP": 15,
    "A": "a smoothly drawn contour",
    "B": "a contour with sharp breaks or hooks",
    "type": "candidate-rule",
    "A1": "the line flows continuously without abrupt terminations",
    "B1": "the line shows abrupt endings, hooks, or spiral turns"
  },
  {
    "ID": 4,
    "BP": 15,
    "A": "a single loop",
    "B": "a spiral or multi-branch line",
    "type": "candidate-rule",
    "A1": "the figure is one simple loop with no winding",
    "B1": "the line winds inward or splits into distinct free-ended strokes"
  },
  {
    "ID": 5,
    "BP": 15,
    "A": "no free line ends",
    "B": "exactly two free line ends",
    "type": "candidate-rule",
    "A1": "no endpoint of the drawn line is left dangling",
    "B1": "the drawn line has two dangling endpoints"
  },
  {
    "ID": 6,
    "BP": 15,
    "A": "a symmetric overall placement",
    "B": "a figure pushed toward one side",
    "type": "candidate-rule",
    "A1": "the shape sits roughly centered within the frame",
    "B1": "the shape is noticeably offset from the frame's center"
  },
  {
    "ID": 1,
    "BP": 16,
    "A": "a spiral winding clockwise",
    "B": "a spiral winding counterclockwise",
    "type": "genuine-rule",
    "A1": "tracing the curve from its center outward, it turns in the clockwise direction",
    "B1": "tracing the curve from its center outward, it turns in the counterclockwise direction"
  },
  {
    "ID": 2,
    "BP": 16,
    "A": "a loosely wound spiral",
    "B": "a tightly wound spiral",
    "type": "candidate-rule",
    "A1": "the coils appear widely spaced with few turns",
    "B1": "the coils appear closely spaced with more turns"
  },
  {
    "ID": 3,
    "BP": 16,
    "A": "a spiral with at most two full turns",
    "B": "a spiral with more than two full turns",
    "type": "candidate-rule",
    "A1": "the curve wraps around its center no more than twice",
    "B1": "the curve wraps around its center more than twice"
  },
  {
    "ID": 4,
    "BP": 16,
    "A": "a smoothly curved spiral",
    "B": "an angular, polygon-like spiral",
    "type": "candidate-rule",
    "A1": "the spiral is drawn with rounded curves rather than straight segments",
    "B1": "the spiral is built from straight segments with sharp corners"
  },
  {
    "ID": 5,
    "BP": 16,
    "A": "an outer end finishing in the lower half",
    "B": "an outer end finishing in the upper half",
    "type": "candidate-rule",
    "A1": "the free outer tip of the spiral lies below the figure's midline",
    "B1": "the free outer tip of the spiral lies above the figure's midline"
  },
  {
    "ID": 6,
    "BP": 16,
    "A": "an irregular or wobbly outline",
    "B": "a regular, evenly drawn outline",
    "type": "candidate-rule",
    "A1": "the spiral's line looks freehand, uneven or jagged in places",
    "B1": "the spiral's line is even and geometrically regular throughout"
  },
  {
    "ID": 1,
    "BP": 17,
    "A": "an angle pointing into the figure",
    "B": "no inward-pointing angle",
    "type": "genuine-rule",
    "A1": "the outline has at least one sharp concave vertex, i.e. a corner whose point is directed toward the shape's interior (a notch)",
    "B1": "all corners, if any, point outward; any concave parts of the outline are smooth curves rather than sharp notches"
  },
  {
    "ID": 2,
    "BP": 17,
    "A": "a deep V-shaped notch cut out",
    "B": "an unbroken, notch-free outline",
    "type": "candidate-rule",
    "A1": "a wedge appears to be removed from the body of the shape, leaving a narrow V-shaped indentation",
    "B1": "the outline flows around the shape without any wedge-like cut"
  },
  {
    "ID": 3,
    "BP": 17,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule",
    "A1": "the shape bulges inward somewhere, so a line between two interior points can leave the shape",
    "B1": "the shape has no indentations anywhere on its boundary"
  },
  {
    "ID": 4,
    "BP": 17,
    "A": "at least one acute corner",
    "B": "no acute corners",
    "type": "candidate-rule",
    "A1": "the outline includes at least one sharp corner narrower than a right angle",
    "B1": "all corners are right angles or wider, or the outline is entirely smooth"
  },
  {
    "ID": 5,
    "BP": 17,
    "A": "no axis of symmetry",
    "B": "a mirror-symmetric shape",
    "type": "candidate-rule",
    "A1": "the figure cannot be folded onto itself along any line",
    "B1": "the figure has at least one line of mirror symmetry"
  },
  {
    "ID": 6,
    "BP": 17,
    "A": "an outline mixing curves and straight edges",
    "B": "an outline of one kind of line only",
    "type": "candidate-rule",
    "A1": "each shape appears to combine curved arcs with straight segments in a single outline",
    "B1": "each outline seems to be made entirely of curves or entirely of straight segments"
  },
  {
    "ID": 1,
    "BP": 18,
    "A": "a narrow neck",
    "B": "no neck",
    "type": "genuine-rule",
    "A1": "the outline pinches into a thin waist joining two larger lobes",
    "B1": "the outline never constricts into a thin waist; width changes only gradually"
  },
  {
    "ID": 2,
    "BP": 18,
    "A": "two distinct lobes",
    "B": "a single undivided body",
    "type": "candidate-rule",
    "A1": "the figure visually separates into two bulging parts",
    "B1": "the figure reads as one compact region with no sub-parts"
  },
  {
    "ID": 3,
    "BP": 18,
    "A": "a concave outline on both sides",
    "B": "concavity on at most one side",
    "type": "candidate-rule",
    "A1": "the boundary dents inward from opposite directions at the same place",
    "B1": "any inward bend of the boundary occurs on only one side of the shape"
  },
  {
    "ID": 4,
    "BP": 18,
    "A": "an hourglass-like symmetry",
    "B": "an elongated or bent form",
    "type": "candidate-rule",
    "A1": "the shape looks roughly mirror-symmetric about its narrow middle",
    "B1": "the shape is a stretched bar, blade or arc without a symmetric middle"
  },
  {
    "ID": 5,
    "BP": 18,
    "A": "a point where the shape is nearly cut in two",
    "B": "roughly uniform thickness throughout",
    "type": "candidate-rule",
    "A1": "somewhere the shape becomes so thin it almost splits",
    "B1": "the shape keeps a comparable thickness along its whole length"
  },
  {
    "ID": 6,
    "BP": 18,
    "A": "an outline mixing sharp pinches and bulges",
    "B": "a smoothly or evenly drawn outline",
    "type": "candidate-rule",
    "A1": "the contour alternates abruptly between swelling out and squeezing in",
    "B1": "the contour changes direction gently without abrupt squeezes"
  },
  {
    "ID": 1,
    "BP": 19,
    "A": "a horizontal neck joining two parts",
    "B": "a vertical neck joining two parts",
    "type": "genuine-rule",
    "A1": "each figure is two lobes connected by a narrow bridge that runs sideways, so the lobes sit left and right of the neck",
    "B1": "the narrow bridge runs up-and-down, so one lobe sits above the other"
  },
  {
    "ID": 2,
    "BP": 19,
    "A": "two lobes side by side",
    "B": "two lobes stacked one above the other",
    "type": "candidate-rule",
    "A1": "the two bulky parts of the figure lie next to each other horizontally",
    "B1": "the two bulky parts lie one on top of the other"
  },
  {
    "ID": 3,
    "BP": 19,
    "A": "an outline wider than it is tall",
    "B": "an outline taller than it is wide",
    "type": "candidate-rule",
    "A1": "the bounding box of the figure is landscape-oriented",
    "B1": "the bounding box of the figure is portrait-oriented"
  },
  {
    "ID": 4,
    "BP": 19,
    "A": "two lobes of roughly equal size",
    "B": "two lobes of clearly different sizes",
    "type": "candidate-rule",
    "A1": "the parts on either side of the neck have similar area",
    "B1": "one part is noticeably larger than the other"
  },
  {
    "ID": 5,
    "BP": 19,
    "A": "a neck placed near mid-height",
    "B": "a neck placed off to one side",
    "type": "candidate-rule",
    "A1": "the narrow connection sits around the vertical middle of the figure",
    "B1": "the narrow connection sits away from the figure's center"
  },
  {
    "ID": 6,
    "BP": 19,
    "A": "approximate left-right symmetry",
    "B": "no left-right symmetry",
    "type": "candidate-rule",
    "A1": "the figure looks roughly the same when mirrored about a vertical axis",
    "B1": "mirroring the figure about a vertical axis changes its appearance"
  },
  {
    "ID": 1,
    "BP": 20,
    "A": "two dots joined by a line that stays inside the blob",
    "B": "two dots joined by a line that leaves the blob",
    "type": "genuine-rule",
    "A1": "the straight segment connecting the two dots lies entirely within the shape; the dots can 'see' each other through the interior",
    "B1": "the straight segment connecting the two dots crosses the outline and passes through empty space, e.g. across a concave waist or an open mouth of the shape"
  },
  {
    "ID": 2,
    "BP": 20,
    "A": "dots placed close together",
    "B": "dots placed far apart",
    "type": "candidate-rule",
    "A1": "the two dots sit within a short distance of each other on the outline",
    "B1": "the two dots sit on distant parts of the outline"
  },
  {
    "ID": 3,
    "BP": 20,
    "A": "dots on opposite sides of a narrow neck",
    "B": "dots away from any neck",
    "type": "candidate-rule",
    "A1": "the two dots straddle a narrow isthmus of the blob",
    "B1": "the dots lie on broad, smooth parts of the outline, not flanking a constriction"
  },
  {
    "ID": 4,
    "BP": 20,
    "A": "both dots on convex parts of the outline",
    "B": "at least one dot in a concavity",
    "type": "candidate-rule",
    "A1": "each dot sits where the outline bulges outward",
    "B1": "one or both dots sit where the outline curves inward"
  },
  {
    "ID": 5,
    "BP": 20,
    "A": "both dots on the same lobe",
    "B": "dots on different lobes",
    "type": "candidate-rule",
    "A1": "the two dots belong to the same bulging part of the blob",
    "B1": "the two dots belong to separate bulging parts of the blob"
  },
  {
    "ID": 6,
    "BP": 20,
    "A": "dots near each other along the outline",
    "B": "dots far apart along the outline",
    "type": "candidate-rule",
    "A1": "travelling along the curve from one dot to the other is a short trip",
    "B1": "travelling along the curve from one dot to the other covers most of the outline"
  },
  {
    "ID": 1,
    "BP": 21,
    "A": "at least one very small figure",
    "B": "no very small figures",
    "type": "genuine-rule",
    "A1": "every panel contains a tiny circle or tiny triangle, much smaller than the other shapes in the panel",
    "B1": "all figures are of comparable medium-to-large size; none is tiny"
  },
  {
    "ID": 2,
    "BP": 21,
    "A": "shapes of clearly different sizes",
    "B": "shapes of roughly equal size",
    "type": "candidate-rule",
    "A1": "the largest shape is several times bigger than the smallest one in the panel",
    "B1": "no shape in the panel is dramatically bigger than another"
  },
  {
    "ID": 3,
    "BP": 21,
    "A": "both a triangle and a circle",
    "B": "only one kind of shape or a matched pair",
    "type": "candidate-rule",
    "A1": "each panel appears to mix triangles with circles",
    "B1": "panels tend to contain shapes of a single type, such as two triangles or two circles"
  },
  {
    "ID": 4,
    "BP": 21,
    "A": "widely scattered figures",
    "B": "figures grouped close together",
    "type": "candidate-rule",
    "A1": "the shapes are spread far apart across the panel",
    "B1": "the shapes sit near one another, almost touching"
  },
  {
    "ID": 5,
    "BP": 21,
    "A": "three or more figures",
    "B": "at most two figures",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 21,
    "A": "a tiny circle somewhere in the panel",
    "B": "no tiny circle",
    "type": "candidate-rule",
    "A1": "a very small circle, dot-like in scale, appears among the shapes",
    "B1": "any circles present are of ordinary, medium size"
  },
  {
    "ID": 1,
    "BP": 22,
    "A": "figures of roughly equal size",
    "B": "figures of clearly different sizes",
    "type": "genuine-rule",
    "A1": "within each panel, all the figures are approximately the same size as one another",
    "B1": "each panel mixes at least one large figure with at least one much smaller figure"
  },
  {
    "ID": 2,
    "BP": 22,
    "A": "no more than three figures",
    "B": "at least one panel-dominating figure",
    "type": "candidate-rule",
    "A1": "each panel contains three or fewer figures",
    "B1": "one figure is much larger than the rest and dominates the panel"
  },
  {
    "ID": 3,
    "BP": 22,
    "A": "no repeated shape type",
    "B": "a repeated shape type",
    "type": "candidate-rule",
    "A1": "every figure in a panel is a different kind of shape (circle, square, triangle)",
    "B1": "at least two figures in the panel are the same kind of shape"
  },
  {
    "ID": 4,
    "BP": 22,
    "A": "figures spread evenly across the frame",
    "B": "figures crowded toward one side",
    "type": "candidate-rule",
    "A1": "the figures are distributed with roughly equal spacing over the panel",
    "B1": "the figures cluster together, leaving a large empty area"
  },
  {
    "ID": 5,
    "BP": 22,
    "A": "largest figure is not a triangle",
    "B": "largest figure is a triangle",
    "type": "candidate-rule",
    "A1": "where sizes differ at all, a circle or square is the biggest figure",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 22,
    "A": "a circle present in every panel",
    "B": "at least one panel without a circle",
    "type": "candidate-rule",
    "A1": "each panel includes at least one circle among its figures",
    "B1": "some panels consist only of straight-sided figures"
  },
  {
    "ID": 1,
    "BP": 23,
    "A": "exactly one shape",
    "B": "exactly two shapes",
    "type": "genuine-rule",
    "A1": "each frame contains a single figure",
    "B1": "each frame contains two separate figures"
  },
  {
    "ID": 2,
    "BP": 23,
    "A": "no small circle present",
    "B": "a small circle accompanying another shape",
    "type": "candidate-rule",
    "A1": "any circle present is a lone figure, not a small companion dot",
    "B1": "a small circle appears alongside a larger shape in most frames"
  },
  {
    "ID": 3,
    "BP": 23,
    "A": "a centrally placed figure",
    "B": "figures pushed toward the frame edges",
    "type": "candidate-rule",
    "A1": "the single figure sits near the middle of the frame",
    "B1": "the shapes lie off-center, near corners or borders"
  },
  {
    "ID": 4,
    "BP": 23,
    "A": "a large figure relative to the frame",
    "B": "only small figures",
    "type": "candidate-rule",
    "A1": "the figure occupies a substantial portion of the frame",
    "B1": "each figure covers only a small fraction of the frame"
  },
  {
    "ID": 5,
    "BP": 23,
    "A": "all shapes of the same kind",
    "B": "two different kinds of shape",
    "type": "candidate-rule",
    "A1": "with a single figure, only one shape type is present",
    "B1": "each frame appears to mix two distinct shape types, such as a circle with a triangle"
  },
  {
    "ID": 6,
    "BP": 23,
    "A": "more empty space than in Set B",
    "B": "more of the frame covered by outlines",
    "type": "candidate-rule",
    "A1": "a lone outline leaves most of the frame blank",
    "B1": "multiple outlines spread ink over more of the frame"
  },
  {
    "ID": 1,
    "BP": 24,
    "A": "at least one circle",
    "B": "no circles",
    "type": "genuine-rule",
    "A1": "every panel includes one or more circles among its shapes",
    "B1": "panels contain only triangles and squares"
  },
  {
    "ID": 2,
    "BP": 24,
    "A": "a curved outline present",
    "B": "straight-edged shapes only",
    "type": "candidate-rule",
    "A1": "at least one shape is drawn with a curved line",
    "B1": "all shapes are made entirely of straight line segments"
  },
  {
    "ID": 3,
    "BP": 24,
    "A": "exactly two kinds of shapes or more with a round one",
    "B": "at most two kinds of shapes, all angular",
    "type": "candidate-rule",
    "A1": "the mix of shapes always includes a rounded figure alongside polygons",
    "B1": "the shape mix is limited to angular polygons"
  },
  {
    "ID": 4,
    "BP": 24,
    "A": "three or more shapes",
    "B": "fewer than three shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 24,
    "A": "a shape in the lower-left region",
    "B": "shapes clustered toward the right",
    "type": "candidate-rule",
    "A1": "at least one figure sits in the lower-left quarter of the frame",
    "B1": "the figures tend to occupy the right half of the frame"
  },
  {
    "ID": 6,
    "BP": 24,
    "A": "an even number of shapes",
    "B": "an odd number of shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 25,
    "A": "a filled triangle",
    "B": "a filled circle",
    "type": "genuine-rule",
    "A1": "exactly one shape is solid black, and it is always a triangle; all other shapes are outlines",
    "B1": "exactly one shape is solid black, and it is always a circle; all other shapes are outlines"
  },
  {
    "ID": 2,
    "BP": 25,
    "A": "the filled shape has straight edges",
    "B": "the filled shape has a curved outline",
    "type": "candidate-rule",
    "A1": "the single black shape is bounded by straight line segments",
    "B1": "the single black shape is bounded by a smooth curve"
  },
  {
    "ID": 3,
    "BP": 25,
    "A": "the filled shape in the lower half",
    "B": "the filled shape in the upper half",
    "type": "candidate-rule",
    "A1": "the solid black shape sits below the middle of the frame",
    "B1": "the solid black shape sits above the middle of the frame"
  },
  {
    "ID": 4,
    "BP": 25,
    "A": "more triangles than circles",
    "B": "more circles than triangles",
    "type": "candidate-rule",
    "A1": "counting all shapes, triangles outnumber circles",
    "B1": "counting all shapes, circles outnumber triangles"
  },
  {
    "ID": 5,
    "BP": 25,
    "A": "all triangles pointing upward",
    "B": "at least one downward-pointing triangle",
    "type": "candidate-rule",
    "A1": "every triangle, filled or outlined, points up",
    "B1": "at least one triangle in the panel points downward"
  },
  {
    "ID": 6,
    "BP": 25,
    "A": "at most five shapes",
    "B": "at least five shapes",
    "type": "candidate-rule",
    "A1": "each panel contains five or fewer shapes in total",
    "B1": "each panel contains five or more shapes in total"
  },
  {
    "ID": 1,
    "BP": 26,
    "A": "at least one solid black triangle",
    "B": "no solid black triangle",
    "type": "genuine-rule",
    "A1": "every panel contains a filled (black) triangle among its shapes; its orientation varies",
    "B1": "all triangles are drawn in outline only; the only filled shapes that appear are circles"
  },
  {
    "ID": 2,
    "BP": 26,
    "A": "two different kinds of filled shapes",
    "B": "at most one kind of filled shape",
    "type": "candidate-rule",
    "A1": "both a filled triangle and a filled circle occur, or filled shapes of mixed type",
    "B1": "any filled shapes present are all of a single type"
  },
  {
    "ID": 3,
    "BP": 26,
    "A": "more filled shapes than outlined ones",
    "B": "more outlined shapes than filled ones",
    "type": "candidate-rule",
    "A1": "solid black shapes outnumber the hollow outlines in each panel",
    "B1": "hollow outlined shapes form the majority in each panel"
  },
  {
    "ID": 4,
    "BP": 26,
    "A": "a triangle pointing in an unusual direction",
    "B": "triangles pointing only up or down",
    "type": "candidate-rule",
    "A1": "at least one triangle is tilted or points sideways rather than straight up or down",
    "B1": "every triangle points straight up or straight down"
  },
  {
    "ID": 5,
    "BP": 26,
    "A": "an odd number of shapes",
    "B": "an even number of shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 26,
    "A": "a black shape near the center",
    "B": "black shapes only near the edges",
    "type": "candidate-rule",
    "A1": "at least one solid black shape lies in the middle region of the frame",
    "B1": "any solid black shapes sit close to the border of the frame"
  },
  {
    "ID": 1,
    "BP": 27,
    "A": "more filled shapes than outlined ones",
    "B": "more outlined shapes than filled ones",
    "type": "genuine-rule",
    "A1": "in every panel the solid black shapes outnumber the hollow outline shapes",
    "B1": "in every panel the hollow outline shapes outnumber the solid black shapes"
  },
  {
    "ID": 2,
    "BP": 27,
    "A": "at least one filled circle",
    "B": "at most one filled shape of each kind",
    "type": "candidate-rule",
    "A1": "every panel contains one or more solid black circles",
    "B1": "no shape type appears filled more than once in a panel"
  },
  {
    "ID": 3,
    "BP": 27,
    "A": "a filled triangle present",
    "B": "an outlined square present",
    "type": "candidate-rule",
    "A1": "each panel includes at least one solid black triangle",
    "B1": "each panel includes at least one hollow square"
  },
  {
    "ID": 4,
    "BP": 27,
    "A": "more triangles than squares",
    "B": "at least as many squares as triangles",
    "type": "candidate-rule",
    "A1": "counting both filled and outlined shapes, triangles outnumber squares",
    "B1": "counting both filled and outlined shapes, squares equal or outnumber triangles"
  },
  {
    "ID": 5,
    "BP": 27,
    "A": "an even number of shapes",
    "B": "an odd number of shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 27,
    "A": "filled shapes clustered near the center",
    "B": "filled shapes at the edges",
    "type": "candidate-rule",
    "A1": "the solid black shapes sit toward the middle of the frame",
    "B1": "any solid black shapes lie near the border of the frame"
  },
  {
    "ID": 1,
    "BP": 28,
    "A": "more filled circles than outline circles",
    "B": "more outline circles than filled circles",
    "type": "genuine-rule",
    "A1": "counting only circles and ignoring triangles, black (solid) circles outnumber white (hollow) circles in every diagram",
    "B1": "counting only circles and ignoring triangles, white (hollow) circles outnumber black (solid) circles in every diagram"
  },
  {
    "ID": 2,
    "BP": 28,
    "A": "more filled shapes than outline shapes",
    "B": "more outline shapes than filled shapes",
    "type": "candidate-rule",
    "A1": "counting all shapes, triangles included, solid black shapes form the majority",
    "B1": "counting all shapes, triangles included, hollow white shapes form the majority"
  },
  {
    "ID": 3,
    "BP": 28,
    "A": "at least two filled circles",
    "B": "at most one filled circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 28,
    "A": "exactly one outline circle",
    "B": "two or more outline circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 28,
    "A": "a filled circle near the center",
    "B": "filled circles only near the edges",
    "type": "candidate-rule",
    "A1": "at least one black circle lies in the central region of the frame",
    "B1": "any black circles sit close to the border, away from the center"
  },
  {
    "ID": 6,
    "BP": 28,
    "A": "circles outnumbering triangles",
    "B": "triangles outnumbering circles",
    "type": "candidate-rule",
    "A1": "there are more circles than triangles of any fill or orientation",
    "B1": "there are at least as many triangles as circles"
  },
  {
    "ID": 1,
    "BP": 29,
    "A": "more dots inside the large shape than outside",
    "B": "more dots outside the large shape than inside",
    "type": "genuine-rule",
    "A1": "each panel has one large closed outline and several small circles; the majority of the small circles lie inside the outline",
    "B1": "the majority of the small circles lie outside the large closed outline"
  },
  {
    "ID": 2,
    "BP": 29,
    "A": "at least one dot inside the large shape",
    "B": "the large shape is empty or nearly empty",
    "type": "candidate-rule",
    "A1": "the large outline always encloses one or more small circles",
    "B1": "few or no small circles are enclosed by the large outline"
  },
  {
    "ID": 3,
    "BP": 29,
    "A": "fewer than five dots outside the shape",
    "B": "three or more dots outside the shape",
    "type": "candidate-rule",
    "A1": "counting only the small circles that lie outside the large outline",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 29,
    "A": "a large shape left of most dots",
    "B": "a large shape surrounded by dots on all sides",
    "type": "candidate-rule",
    "A1": "the outside dots tend to sit to the right of the large outline",
    "B1": "the outside dots are scattered around the outline in every direction"
  },
  {
    "ID": 5,
    "BP": 29,
    "A": "an even total number of dots",
    "B": "an odd total number of dots",
    "type": "candidate-rule",
    "A1": "counting all small circles, inside and outside the large shape",
    "B1": "counting all small circles, inside and outside the large shape"
  },
  {
    "ID": 6,
    "BP": 29,
    "A": "a large shape drawn off-center",
    "B": "a large shape near the center of the frame",
    "type": "candidate-rule",
    "A1": "the big outline sits toward one side of the frame",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 30,
    "A": "a line that crosses itself",
    "B": "a line with no crossings",
    "type": "genuine-rule",
    "A1": "each figure contains at least one point where the drawn line intersects itself or another line",
    "B1": "the drawn line never touches or crosses itself at any point"
  },
  {
    "ID": 2,
    "BP": 30,
    "A": "a loop formed by the line",
    "B": "no enclosed loop",
    "type": "candidate-rule",
    "A1": "the line curls back to enclose a small closed loop somewhere along its path",
    "B1": "the line wanders or closes simply without forming an extra loop"
  },
  {
    "ID": 3,
    "BP": 30,
    "A": "open-ended curves only",
    "B": "at least one closed outline",
    "type": "candidate-rule",
    "A1": "both ends of the drawn line remain free; no figure is fully closed",
    "B1": "the figure includes a fully closed shape such as a heart or pentagon"
  },
  {
    "ID": 4,
    "BP": 30,
    "A": "a mix of straight and curved parts",
    "B": "purely straight or purely curved lines",
    "type": "candidate-rule",
    "A1": "each figure combines straight segments with curved sections",
    "B1": "each figure is drawn either entirely with straight segments or entirely as a smooth curve"
  },
  {
    "ID": 5,
    "BP": 30,
    "A": "two separate strokes",
    "B": "a single continuous stroke",
    "type": "candidate-rule",
    "A1": "the figure appears to be made of two distinct line pieces",
    "B1": "the whole figure can be traced in one unbroken stroke"
  },
  {
    "ID": 6,
    "BP": 30,
    "A": "an asymmetric tangle",
    "B": "a roughly symmetric figure",
    "type": "candidate-rule",
    "A1": "the figure has no axis of symmetry and looks like an irregular tangle",
    "B1": "the figure is approximately mirror-symmetric about some axis"
  },
  {
    "ID": 1,
    "BP": 31,
    "A": "one line",
    "B": "two lines",
    "type": "genuine-rule",
    "A1": "each frame is drawn as a single continuous curve, even if it crosses itself",
    "B1": "each frame contains two separate curves, such as two circles or a circle plus a squiggle"
  },
  {
    "ID": 2,
    "BP": 31,
    "A": "no closed loop present",
    "B": "at least one closed loop",
    "type": "candidate-rule",
    "A1": "the curve never encloses a fully closed region",
    "B1": "at least one curve forms a closed loop such as a circle"
  },
  {
    "ID": 3,
    "BP": 31,
    "A": "a curve that crosses itself",
    "B": "curves that cross each other",
    "type": "candidate-rule",
    "A1": "any intersection point is the single line passing over itself",
    "B1": "any intersection point is one curve crossing a different curve"
  },
  {
    "ID": 4,
    "BP": 31,
    "A": "exactly two free ends",
    "B": "zero or four free ends",
    "type": "candidate-rule",
    "A1": "a single open curve has two endpoints",
    "B1": "two closed curves have no endpoints; two open curves have four"
  },
  {
    "ID": 5,
    "BP": 31,
    "A": "a figure drawable without lifting the pen",
    "B": "a figure requiring two pen strokes",
    "type": "candidate-rule",
    "A1": "the whole drawing can be traced in one continuous stroke",
    "B1": "the drawing consists of two disconnected strokes"
  },
  {
    "ID": 6,
    "BP": 31,
    "A": "less total ink",
    "B": "more total ink",
    "type": "candidate-rule",
    "A1": "a single curve gives a sparser drawing",
    "B1": "two curves give a denser, longer drawing overall"
  },
  {
    "ID": 1,
    "BP": 32,
    "A": "at least one sharp point sticking outward",
    "B": "no outward-pointing sharp points",
    "type": "genuine-rule",
    "A1": "every outline carries a convex spike or cusp, e.g. the star tips, the triangle vertices, the crescent horns",
    "B1": "outlines are smooth or rounded; any sharp angles (the notch, the wedge, the clover cusps) point inward"
  },
  {
    "ID": 2,
    "BP": 32,
    "A": "acute angles somewhere on the outline",
    "B": "no acute angles at all",
    "type": "candidate-rule",
    "A1": "each shape contains at least one angle sharper than 90 degrees",
    "B1": "all corners are rounded or wider than 90 degrees"
  },
  {
    "ID": 3,
    "BP": 32,
    "A": "thin, elongated figures",
    "B": "plump, compact figures",
    "type": "candidate-rule",
    "A1": "the shape is noticeably longer or spikier in one direction than another",
    "B1": "the shape fills a roughly round, balanced footprint"
  },
  {
    "ID": 4,
    "BP": 32,
    "A": "a strongly concave outline",
    "B": "an essentially convex outline",
    "type": "candidate-rule",
    "A1": "large parts of the boundary bend inward, hollowing out the shape",
    "B1": "the boundary bulges outward almost everywhere"
  },
  {
    "ID": 5,
    "BP": 32,
    "A": "a small enclosed area for their outline length",
    "B": "a large enclosed area for their outline length",
    "type": "candidate-rule",
    "A1": "the figures are skinny, so relatively little area is enclosed by a long boundary",
    "B1": "the figures are fat, enclosing a lot of area with a comparatively short boundary"
  },
  {
    "ID": 6,
    "BP": 32,
    "A": "a pointed tip made by two meeting curves",
    "B": "corners made only by straight edges or none at all",
    "type": "candidate-rule",
    "A1": "at least one cusp where two curved arcs meet in a point",
    "B1": "any corners present are junctions of straight segments, or the outline is entirely smooth"
  },
  {
    "ID": 1,
    "BP": 33,
    "A": "at least one acute angle",
    "B": "no acute angles",
    "type": "genuine-rule",
    "A1": "every figure has a sharp point or corner narrower than 90 degrees, such as a spike, cusp, or narrow notch",
    "B1": "all corners are right angles, obtuse, or smoothly rounded; there are no sharp points"
  },
  {
    "ID": 2,
    "BP": 33,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule",
    "A1": "the boundary bends inward somewhere, creating an indentation or cusp",
    "B1": "the boundary bulges outward everywhere with no indentations"
  },
  {
    "ID": 3,
    "BP": 33,
    "A": "an elongated or pinched form",
    "B": "a compact, roundish form",
    "type": "candidate-rule",
    "A1": "each figure is stretched thin or squeezed narrow at some place",
    "B1": "each figure is about as wide as it is tall, with no thin parts"
  },
  {
    "ID": 4,
    "BP": 33,
    "A": "at least one curved boundary segment or spike",
    "B": "outlines built from gentle, regular sides",
    "type": "candidate-rule",
    "A1": "the outline includes a dramatic feature such as a curve ending in a point or a long spike",
    "B1": "the outline consists of calm, evenly proportioned sides or arcs"
  },
  {
    "ID": 5,
    "BP": 33,
    "A": "no mirror symmetry as drawn",
    "B": "an approximately symmetric shape",
    "type": "candidate-rule",
    "A1": "the figure is tilted or irregular so that no mirror axis maps it onto itself in the frame",
    "B1": "the figure looks roughly the same when reflected about a vertical or horizontal axis"
  },
  {
    "ID": 6,
    "BP": 33,
    "A": "a notch or split in the outline",
    "B": "a single unbroken bulging outline",
    "type": "candidate-rule",
    "A1": "part of the boundary cuts back into the body of the shape, as if a wedge were removed",
    "B1": "the boundary flows around the shape without cutting into it"
  },
  {
    "ID": 1,
    "BP": 34,
    "A": "a large hole",
    "B": "a tiny hole",
    "type": "genuine-rule",
    "A1": "each black shape contains a white hole that takes up a substantial part of the shape's area",
    "B1": "each black shape contains only a small speck-sized white hole"
  },
  {
    "ID": 2,
    "BP": 34,
    "A": "a hole with a curved or many-sided outline",
    "B": "a simple three- or four-sided hole",
    "type": "candidate-rule",
    "A1": "the white cut-out is a circle, hexagon or other complex outline",
    "B1": "the white cut-out is a tiny triangle or square"
  },
  {
    "ID": 3,
    "BP": 34,
    "A": "a hole centered in the shape",
    "B": "a hole offset from the center",
    "type": "candidate-rule",
    "A1": "the white opening sits at the middle of the black figure",
    "B1": "the white opening lies away from the figure's middle"
  },
  {
    "ID": 4,
    "BP": 34,
    "A": "a hole shaped differently from its outline",
    "B": "a hole echoing the outer outline",
    "type": "candidate-rule",
    "A1": "the white cut-out's shape does not match the black shape's outer boundary",
    "B1": "the white cut-out resembles a miniature of the outer shape"
  },
  {
    "ID": 5,
    "BP": 34,
    "A": "a thin ring of black around the hole",
    "B": "a solid mass of black",
    "type": "candidate-rule",
    "A1": "the black region forms a relatively narrow border around the white opening",
    "B1": "the black region is almost entirely solid, with negligible interior white"
  },
  {
    "ID": 6,
    "BP": 34,
    "A": "a rounded outer outline",
    "B": "an angular outer outline",
    "type": "candidate-rule",
    "A1": "the black shape's boundary includes curves or smooth arcs",
    "B1": "the black shape's boundary is made mostly of straight edges and corners"
  },
  {
    "ID": 1,
    "BP": 35,
    "A": "a hole aligned with the shape's long axis",
    "B": "a hole misaligned with the shape's long axis",
    "type": "genuine-rule",
    "A1": "the elongated white cutout points in the same direction as the elongation of the black shape containing it",
    "B1": "the elongated white cutout is tilted or perpendicular relative to the elongation direction of the black shape"
  },
  {
    "ID": 2,
    "BP": 35,
    "A": "an elliptical or rounded hole",
    "B": "an angular, straight-sided hole",
    "type": "candidate-rule",
    "A1": "the white cutout is an oval or rounded slot",
    "B1": "the white cutout is a rectangle or diamond with straight edges"
  },
  {
    "ID": 3,
    "BP": 35,
    "A": "a hole in the exact center of the shape",
    "B": "a hole displaced from the center",
    "type": "candidate-rule",
    "A1": "the white cutout sits at the geometric center of the black shape",
    "B1": "the white cutout is shifted toward one side of the black shape"
  },
  {
    "ID": 4,
    "BP": 35,
    "A": "a shape tilted to the left or upright",
    "B": "a shape tilted to the right",
    "type": "candidate-rule",
    "A1": "the long axis of the black shape leans counter-clockwise from horizontal, or is vertical/horizontal",
    "B1": "the long axis of the black shape leans clockwise from horizontal"
  },
  {
    "ID": 5,
    "BP": 35,
    "A": "a hole smaller than one tenth of the shape",
    "B": "a hole larger than one tenth of the shape",
    "type": "candidate-rule",
    "A1": "the white cutout occupies only a small fraction of the black shape's area",
    "B1": "the white cutout takes up a noticeably larger fraction of the black shape's area"
  },
  {
    "ID": 6,
    "BP": 35,
    "A": "an outline with at least one straight edge",
    "B": "a fully curved outline",
    "type": "candidate-rule",
    "A1": "the black shape is a polygon or has some straight boundary segments",
    "B1": "the black shape's boundary is entirely curved, like an ellipse"
  },
  {
    "ID": 1,
    "BP": 36,
    "A": "the triangle above the circle",
    "B": "the circle above the triangle",
    "type": "genuine-rule",
    "A1": "each frame contains one triangle and one circle; the triangle is always higher in the frame than the circle",
    "B1": "each frame contains one triangle and one circle; the circle is always higher in the frame than the triangle"
  },
  {
    "ID": 2,
    "BP": 36,
    "A": "the triangle left of the circle",
    "B": "the circle left of the triangle",
    "type": "candidate-rule",
    "A1": "the triangle sits horizontally to the left of the circle",
    "B1": "the circle sits horizontally to the left of the triangle"
  },
  {
    "ID": 3,
    "BP": 36,
    "A": "a downward-pointing triangle",
    "B": "an upward-pointing triangle",
    "type": "candidate-rule",
    "A1": "the triangle's apex points down",
    "B1": "the triangle's apex points up"
  },
  {
    "ID": 4,
    "BP": 36,
    "A": "the two shapes far apart",
    "B": "the two shapes close together",
    "type": "candidate-rule",
    "A1": "the triangle and circle are separated by a large gap",
    "B1": "the triangle and circle nearly touch"
  },
  {
    "ID": 5,
    "BP": 36,
    "A": "the circle in the lower half of the frame",
    "B": "the circle in the upper half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 36,
    "A": "the triangle pointing toward the circle",
    "B": "the triangle pointing away from the circle",
    "type": "candidate-rule",
    "A1": "the triangle's apex is directed at the circle",
    "B1": "the triangle's apex is directed away from the circle"
  },
  {
    "ID": 1,
    "BP": 37,
    "A": "the triangle above the circle",
    "B": "the circle above the triangle",
    "type": "genuine-rule",
    "A1": "each panel contains a triangle, a circle and a square; the triangle is always positioned higher in the frame than the circle, wherever the square lies",
    "B1": "the circle is always positioned higher in the frame than the triangle; the square's position is irrelevant"
  },
  {
    "ID": 2,
    "BP": 37,
    "A": "the square below the triangle",
    "B": "the square above the triangle",
    "type": "candidate-rule",
    "A1": "the small square sits lower in the frame than the triangle",
    "B1": "the small square sits higher in the frame than the triangle"
  },
  {
    "ID": 3,
    "BP": 37,
    "A": "the circle in the lower half",
    "B": "the circle in the upper half",
    "type": "candidate-rule",
    "A1": "the circle lies below the horizontal midline of the frame",
    "B1": "the circle lies above the horizontal midline of the frame"
  },
  {
    "ID": 4,
    "BP": 37,
    "A": "the triangle as the leftmost shape",
    "B": "the square as the leftmost shape",
    "type": "candidate-rule",
    "A1": "of the three shapes, the triangle is furthest to the left",
    "B1": "of the three shapes, the square is furthest to the left"
  },
  {
    "ID": 5,
    "BP": 37,
    "A": "the three shapes arranged along a downward diagonal",
    "B": "the three shapes arranged along an upward diagonal",
    "type": "candidate-rule",
    "A1": "the shapes roughly follow a line descending from upper left to lower right",
    "B1": "the shapes roughly follow a line rising from lower left to upper right"
  },
  {
    "ID": 6,
    "BP": 37,
    "A": "the square smaller than the circle",
    "B": "the square about the same size as the circle",
    "type": "candidate-rule",
    "A1": "the small square is clearly smaller than the circle in every panel",
    "B1": "the square is comparable in size to the circle"
  },
  {
    "ID": 1,
    "BP": 38,
    "A": "a triangle larger than the circle",
    "B": "a circle larger than the triangle",
    "type": "genuine-rule",
    "A1": "each panel contains one triangle and one circle; the triangle is the bigger of the two",
    "B1": "each panel contains one triangle and one circle; the circle is the bigger of the two"
  },
  {
    "ID": 2,
    "BP": 38,
    "A": "a circle inside or above the triangle",
    "B": "a triangle inside or below the circle",
    "type": "candidate-rule",
    "A1": "the small circle sits within the triangle's outline or higher in the frame than it",
    "B1": "the small triangle sits within the circle's outline or lower in the frame than it"
  },
  {
    "ID": 3,
    "BP": 38,
    "A": "a small circle",
    "B": "a small triangle",
    "type": "candidate-rule",
    "A1": "the circle in each panel is tiny compared with the frame",
    "B1": "the triangle in each panel is tiny compared with the frame"
  },
  {
    "ID": 4,
    "BP": 38,
    "A": "separated shapes",
    "B": "touching or nested shapes",
    "type": "candidate-rule",
    "A1": "the triangle and circle do not touch each other",
    "B1": "the triangle and circle touch, overlap, or one lies inside the other"
  },
  {
    "ID": 5,
    "BP": 38,
    "A": "a triangle pointing upward",
    "B": "a triangle that may point downward",
    "type": "candidate-rule",
    "A1": "the apex of the triangle is at its top",
    "B1": "at least some triangles have their apex at the bottom"
  },
  {
    "ID": 6,
    "BP": 38,
    "A": "the larger shape with straight sides",
    "B": "the larger shape with a curved outline",
    "type": "candidate-rule",
    "A1": "the dominant figure is bounded only by straight line segments",
    "B1": "the dominant figure is bounded by a curve"
  },
  {
    "ID": 1,
    "BP": 39,
    "A": "three parallel lines",
    "B": "three non-parallel lines",
    "type": "genuine-rule",
    "A1": "all three segments in the frame point in the same direction",
    "B1": "the three segments point in at least two clearly different directions"
  },
  {
    "ID": 2,
    "BP": 39,
    "A": "one long line with two shorter ones",
    "B": "lines of roughly equal length",
    "type": "candidate-rule",
    "A1": "each frame appears to contain a dominant long segment accompanied by two shorter segments",
    "B1": "no single segment stands out as much longer than the others"
  },
  {
    "ID": 3,
    "BP": 39,
    "A": "lines slanting the same way",
    "B": "lines slanting in opposing ways",
    "type": "candidate-rule",
    "A1": "every segment tilts toward the same side of the frame",
    "B1": "some segments lean left while others lean right"
  },
  {
    "ID": 4,
    "BP": 39,
    "A": "evenly spaced lines",
    "B": "unevenly spaced lines",
    "type": "candidate-rule",
    "A1": "the gaps between neighbouring segments look about equal",
    "B1": "the gaps between segments vary noticeably in size"
  },
  {
    "ID": 5,
    "BP": 39,
    "A": "lines forming a diagonal band",
    "B": "lines scattered around the frame",
    "type": "candidate-rule",
    "A1": "the segments appear grouped along one band running across the frame",
    "B1": "the segments are spread out with no common alignment band"
  },
  {
    "ID": 6,
    "BP": 39,
    "A": "the longest line in the middle",
    "B": "the longest line off to one side",
    "type": "candidate-rule",
    "A1": "the longest of the three segments sits between the other two",
    "B1": "the longest segment lies near an edge rather than between the others"
  },
  {
    "ID": 1,
    "BP": 40,
    "A": "three dots on a straight line",
    "B": "no three dots in a line",
    "type": "genuine-rule",
    "A1": "each panel has four dots, and exactly three of them are collinear (horizontally, vertically, or diagonally); the fourth dot lies off that line",
    "B1": "each panel has four dots, but no straight line passes through three of them"
  },
  {
    "ID": 2,
    "BP": 40,
    "A": "three equally spaced dots",
    "B": "unevenly spaced dots",
    "type": "candidate-rule",
    "A1": "three of the dots sit at roughly equal intervals from one another",
    "B1": "the gaps between neighbouring dots all differ"
  },
  {
    "ID": 3,
    "BP": 40,
    "A": "one dot separated from a cluster of three",
    "B": "dots spread out evenly",
    "type": "candidate-rule",
    "A1": "three dots form a tight group while the fourth stands clearly apart",
    "B1": "the four dots are scattered without forming a distinct group plus outlier"
  },
  {
    "ID": 4,
    "BP": 40,
    "A": "a row of dots parallel to a frame edge",
    "B": "dots aligned only obliquely",
    "type": "candidate-rule",
    "A1": "some dots line up horizontally or vertically, matching the orientation of the frame's sides",
    "B1": "any apparent alignment of dots runs at a slant to the frame edges"
  },
  {
    "ID": 5,
    "BP": 40,
    "A": "dots forming a narrow, elongated arrangement",
    "B": "dots forming a broad, rounded arrangement",
    "type": "candidate-rule",
    "A1": "the four dots fit inside a long thin strip",
    "B1": "the four dots spread out in all directions, roughly outlining a quadrilateral"
  },
  {
    "ID": 6,
    "BP": 40,
    "A": "a dot inside the triangle of the other three",
    "B": "all dots on the outer boundary",
    "type": "candidate-rule",
    "A1": "one dot lies within (or on the edge of) the triangle formed by the remaining three dots",
    "B1": "the four dots are in convex position: each is a corner of the shape they outline"
  },
  {
    "ID": 1,
    "BP": 41,
    "A": "the three outline circles in a straight line",
    "B": "outline circles not in a straight line",
    "type": "genuine-rule",
    "A1": "the centers of the three unfilled (white) circles are collinear; the filled circles are scattered freely",
    "B1": "the three unfilled (white) circles form a triangle; no straight line passes through all three"
  },
  {
    "ID": 2,
    "BP": 41,
    "A": "the three filled circles forming a triangle",
    "B": "the three filled circles in a straight line",
    "type": "candidate-rule",
    "A1": "the black circles are scattered so that no line passes through all three",
    "B1": "the centers of the black circles are collinear"
  },
  {
    "ID": 3,
    "BP": 41,
    "A": "outline circles evenly spaced",
    "B": "outline circles unevenly spaced",
    "type": "candidate-rule",
    "A1": "the gaps between successive white circles are roughly equal",
    "B1": "the distances between the white circles differ noticeably"
  },
  {
    "ID": 4,
    "BP": 41,
    "A": "outline circles grouped on one side",
    "B": "outline circles spread across the frame",
    "type": "candidate-rule",
    "A1": "the white circles cluster toward one side or edge of the frame",
    "B1": "the white circles are distributed over the whole frame"
  },
  {
    "ID": 5,
    "BP": 41,
    "A": "a filled circle as the highest point",
    "B": "an outline circle as the highest point",
    "type": "candidate-rule",
    "A1": "the topmost circle in the frame is black",
    "B1": "the topmost circle in the frame is white"
  },
  {
    "ID": 6,
    "BP": 41,
    "A": "filled circles surrounding the outline circles",
    "B": "filled and outline circles intermixed",
    "type": "candidate-rule",
    "A1": "the black circles lie outside the region occupied by the white circles",
    "B1": "black and white circles alternate with no separation between the two colors"
  },
  {
    "ID": 1,
    "BP": 42,
    "A": "three dots inside the outline lying on a straight line",
    "B": "three dots inside the outline forming a triangle",
    "type": "genuine-rule",
    "A1": "the three dots enclosed by the closed shape are collinear; dots outside the shape are ignored",
    "B1": "the three dots enclosed by the closed shape are not collinear — they mark the corners of a triangle"
  },
  {
    "ID": 2,
    "BP": 42,
    "A": "exactly one dot outside the shape",
    "B": "exactly two dots outside the shape",
    "type": "candidate-rule",
    "A1": "only a single dot lies outside the closed outline",
    "B1": "two dots lie outside the closed outline"
  },
  {
    "ID": 3,
    "BP": 42,
    "A": "a convex enclosing shape",
    "B": "an enclosing shape with an indentation",
    "type": "candidate-rule",
    "A1": "the closed outline bulges only outward, with no inward-curving sections",
    "B1": "the closed outline has at least one concave, inward-curving section"
  },
  {
    "ID": 4,
    "BP": 42,
    "A": "an odd total number of dots",
    "B": "an even total number of dots",
    "type": "candidate-rule",
    "A1": "counting dots both inside and outside the shape gives an odd number",
    "B1": "counting dots both inside and outside the shape gives an even number"
  },
  {
    "ID": 5,
    "BP": 42,
    "A": "outside dots to the left of the shape",
    "B": "outside dots to the right of the shape",
    "type": "candidate-rule",
    "A1": "every dot not enclosed by the outline sits on the left side of the shape",
    "B1": "every dot not enclosed by the outline sits on the right side of the shape"
  },
  {
    "ID": 6,
    "BP": 42,
    "A": "inside dots spread across the whole shape",
    "B": "inside dots clustered near the shape's edge",
    "type": "candidate-rule",
    "A1": "the enclosed dots are distributed over the interior of the shape",
    "B1": "the enclosed dots crowd close to the boundary of the shape"
  },
  {
    "ID": 1,
    "BP": 43,
    "A": "oscillations that grow from left to right",
    "B": "oscillations that shrink from left to right",
    "type": "genuine-rule",
    "A1": "the wave, zigzag or spike pattern starts with small swings on the left and its amplitude steadily increases toward the right",
    "B1": "the largest swings are at the left end and the amplitude steadily decreases toward the right"
  },
  {
    "ID": 2,
    "BP": 43,
    "A": "the tallest swing at the right end",
    "B": "the tallest swing at the left end",
    "type": "candidate-rule",
    "A1": "the final oscillation is the biggest one in the diagram",
    "B1": "the first oscillation is the biggest one in the diagram"
  },
  {
    "ID": 3,
    "BP": 43,
    "A": "only smooth, rounded curves",
    "B": "at least one sharp corner",
    "type": "candidate-rule",
    "A1": "every turn in the line is a rounded bend with no angular vertices",
    "B1": "the line contains angular, pointed turns such as zigzag teeth or square steps"
  },
  {
    "ID": 4,
    "BP": 43,
    "A": "fewer than six oscillations",
    "B": "six or more oscillations",
    "type": "candidate-rule",
    "A1": "counting each up-down swing, the line completes fewer than six",
    "B1": "counting each up-down swing, the line completes at least six"
  },
  {
    "ID": 5,
    "BP": 43,
    "A": "a line whose overall trend rises",
    "B": "a line whose overall trend falls",
    "type": "candidate-rule",
    "A1": "ignoring the oscillations, the line drifts upward across the frame",
    "B1": "ignoring the oscillations, the line drifts downward across the frame"
  },
  {
    "ID": 6,
    "BP": 43,
    "A": "swings mostly above the baseline",
    "B": "swings mostly below the baseline",
    "type": "candidate-rule",
    "A1": "the peaks extend upward from the general level of the line",
    "B1": "the peaks extend downward from the general level of the line"
  },
  {
    "ID": 1,
    "BP": 44,
    "A": "circles on opposite sides of the curve's sharp corner",
    "B": "both circles on the same side of the sharp corner",
    "type": "genuine-rule",
    "A1": "each curve has one cusp (sharp corner); the two small circles lie on different branches, so the corner is between them",
    "B1": "both small circles lie on the same branch of the curve; the cusp is not between them"
  },
  {
    "ID": 2,
    "BP": 44,
    "A": "circles far apart on the curve",
    "B": "circles close together",
    "type": "candidate-rule",
    "A1": "the two small circles are widely separated along the length of the curve",
    "B1": "the two small circles sit near each other on the curve"
  },
  {
    "ID": 3,
    "BP": 44,
    "A": "a downward-pointing cusp",
    "B": "an upward-pointing cusp",
    "type": "candidate-rule",
    "A1": "the sharp corner of the curve opens upward, with its point aimed downward",
    "B1": "the sharp corner of the curve points upward"
  },
  {
    "ID": 4,
    "BP": 44,
    "A": "the cusp near the middle of the frame",
    "B": "the cusp off to one side",
    "type": "candidate-rule",
    "A1": "the sharp corner sits roughly at the center of the panel",
    "B1": "the sharp corner sits noticeably left or right of center"
  },
  {
    "ID": 5,
    "BP": 44,
    "A": "both curve ends pointing upward",
    "B": "curve ends pointing in different directions",
    "type": "candidate-rule",
    "A1": "the two free ends of the curve both finish heading toward the top of the frame",
    "B1": "the two free ends of the curve finish heading in unlike directions"
  },
  {
    "ID": 6,
    "BP": 44,
    "A": "a curve spanning the whole frame width",
    "B": "a curve confined to part of the frame",
    "type": "candidate-rule",
    "A1": "the curve stretches nearly from the left edge to the right edge of the panel",
    "B1": "the curve occupies only a portion of the panel's width"
  },
  {
    "ID": 1,
    "BP": 45,
    "A": "the outlined shape in front of the filled shape",
    "B": "the filled shape in front of the outlined shape",
    "type": "genuine-rule",
    "A1": "each panel has one solid black figure and one white outlined figure; the white outlined figure overlaps and partly hides the black one",
    "B1": "the solid black figure overlaps and partly hides the white outlined figure"
  },
  {
    "ID": 2,
    "BP": 45,
    "A": "a black shape larger than the white shape",
    "B": "a black shape smaller than the white shape",
    "type": "candidate-rule",
    "A1": "the solid black figure covers more area than the outlined figure",
    "B1": "the outlined figure covers more area than the solid black figure"
  },
  {
    "ID": 3,
    "BP": 45,
    "A": "the black shape below or right of the white shape",
    "B": "the black shape above or left of the white shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 45,
    "A": "two shapes of different kinds",
    "B": "two shapes of the same kind",
    "type": "candidate-rule",
    "A1": "the black and white figures are different geometric types, e.g. square and ellipse",
    "B1": "the black and white figures are the same geometric type, e.g. two circles or two triangles"
  },
  {
    "ID": 5,
    "BP": 45,
    "A": "a curved black shape",
    "B": "a straight-edged black shape",
    "type": "candidate-rule",
    "A1": "the solid black figure has a rounded outline such as a circle or ellipse",
    "B1": "the solid black figure is a polygon with only straight edges"
  },
  {
    "ID": 6,
    "BP": 45,
    "A": "a convex white shape",
    "B": "a non-convex white shape",
    "type": "candidate-rule",
    "A1": "the white outlined figure bulges outward everywhere, with no indentations",
    "B1": "the white outlined figure appears indented or partly cut away"
  },
  {
    "ID": 1,
    "BP": 46,
    "A": "the triangle in front of the circle",
    "B": "the circle in front of the triangle",
    "type": "genuine-rule",
    "A1": "where the two shapes overlap, the triangle covers the circle, interrupting the circle's outline or fill",
    "B1": "where the two shapes overlap, the circle covers the triangle, interrupting the triangle's outline or fill"
  },
  {
    "ID": 2,
    "BP": 46,
    "A": "a triangle larger than the circle",
    "B": "a circle larger than the triangle",
    "type": "candidate-rule",
    "A1": "the triangle's overall extent exceeds that of the circle it overlaps",
    "B1": "the circle's overall extent exceeds that of the triangle it overlaps"
  },
  {
    "ID": 3,
    "BP": 46,
    "A": "the circle drawn above the triangle",
    "B": "the triangle drawn above the circle",
    "type": "candidate-rule",
    "A1": "the circle's center sits higher in the frame than the triangle's center",
    "B1": "the triangle's center sits higher in the frame than the circle's center"
  },
  {
    "ID": 4,
    "BP": 46,
    "A": "a filled shape only when it is the circle",
    "B": "a filled shape only when it is the triangle",
    "type": "candidate-rule",
    "A1": "whenever solid black shading appears, it is applied to the circle rather than the triangle",
    "B1": "whenever solid black shading appears, it is applied to the triangle rather than the circle"
  },
  {
    "ID": 5,
    "BP": 46,
    "A": "shapes that only partially overlap",
    "B": "one shape fully inside the other",
    "type": "candidate-rule",
    "A1": "the triangle and circle cross each other, with parts of each outside the other",
    "B1": "one of the two shapes is entirely contained within the boundary of the other"
  },
  {
    "ID": 6,
    "BP": 46,
    "A": "a triangle pointing upward or rightward",
    "B": "a triangle pointing leftward or downward",
    "type": "candidate-rule",
    "A1": "the triangle's sharpest vertex is directed toward the top or right of the frame",
    "B1": "the triangle's sharpest vertex is directed toward the left or bottom of the frame"
  },
  {
    "ID": 1,
    "BP": 47,
    "A": "a triangle inside a circle",
    "B": "a circle inside a triangle",
    "type": "genuine-rule",
    "A1": "each panel contains at least one circle with a small triangle drawn inside it",
    "B1": "each panel contains at least one triangle with a small circle drawn inside it"
  },
  {
    "ID": 2,
    "BP": 47,
    "A": "a circle as the enclosing shape",
    "B": "the largest shape is a triangle",
    "type": "candidate-rule",
    "A1": "wherever nesting occurs, the outer shape is a circle",
    "B1": "the biggest figure in the panel is triangular"
  },
  {
    "ID": 3,
    "BP": 47,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "counting all shapes in the panel, circles outnumber triangles",
    "B1": "counting all shapes in the panel, triangles outnumber circles"
  },
  {
    "ID": 4,
    "BP": 47,
    "A": "at least one downward-pointing triangle",
    "B": "all triangles pointing upward",
    "type": "candidate-rule",
    "A1": "some triangle in the panel has its apex at the bottom",
    "B1": "every triangle in the panel has its apex at the top"
  },
  {
    "ID": 5,
    "BP": 47,
    "A": "the smallest shape is a triangle",
    "B": "the smallest shape is a circle",
    "type": "candidate-rule",
    "A1": "the tiniest figure in each panel is triangular",
    "B1": "the tiniest figure in each panel is a small circle"
  },
  {
    "ID": 6,
    "BP": 47,
    "A": "nested shapes of different types only",
    "B": "a shape nested in a same-type shape",
    "type": "candidate-rule",
    "A1": "whenever one shape contains another, the two are of different kinds and the inner one is angular",
    "B1": "at least one containment pairs shapes where the inner one is round like part of its surroundings"
  },
  {
    "ID": 1,
    "BP": 48,
    "A": "filled shapes above the outline shapes",
    "B": "outline shapes above the filled shapes",
    "type": "genuine-rule",
    "A1": "every solid black shape is positioned higher in the frame than every unfilled (outline-only) shape",
    "B1": "every unfilled (outline-only) shape is positioned higher in the frame than every solid black shape"
  },
  {
    "ID": 2,
    "BP": 48,
    "A": "more filled shapes than outline shapes",
    "B": "more outline shapes than filled shapes",
    "type": "candidate-rule",
    "A1": "solid black shapes outnumber the unfilled ones",
    "B1": "unfilled shapes outnumber the solid black ones"
  },
  {
    "ID": 3,
    "BP": 48,
    "A": "a filled shape in the top-left region",
    "B": "the top-left region empty or with an outline shape",
    "type": "candidate-rule",
    "A1": "the upper-left corner area contains a solid black shape",
    "B1": "no solid black shape appears in the upper-left corner area"
  },
  {
    "ID": 4,
    "BP": 48,
    "A": "a filled circle among the topmost shapes",
    "B": "an outline shape as the single topmost shape",
    "type": "candidate-rule",
    "A1": "a solid black circle appears in the upper part of the frame",
    "B1": "the highest shape in the frame is unfilled"
  },
  {
    "ID": 5,
    "BP": 48,
    "A": "outline shapes clustered near the bottom edge",
    "B": "filled shapes clustered near the bottom edge",
    "type": "candidate-rule",
    "A1": "the unfilled shapes gather along the lower border of the frame",
    "B1": "the solid black shapes gather along the lower border of the frame"
  },
  {
    "ID": 6,
    "BP": 48,
    "A": "at least one filled square or triangle",
    "B": "at least one outline triangle",
    "type": "candidate-rule",
    "A1": "every frame contains a solid black square or a solid black triangle",
    "B1": "every frame contains an unfilled triangle"
  },
  {
    "ID": 1,
    "BP": 49,
    "A": "dots clustered inside the shape, scattered outside",
    "B": "dots scattered inside the shape, clustered outside",
    "type": "genuine-rule",
    "A1": "the small dots lying inside the closed outline sit close together in a tight group, while the dots outside it are spread far apart",
    "B1": "the small dots inside the closed outline are spread apart from one another, while the dots outside it form one tight compact group"
  },
  {
    "ID": 2,
    "BP": 49,
    "A": "more dots inside than outside",
    "B": "more dots outside than inside",
    "type": "candidate-rule",
    "A1": "the closed outline contains the majority of the small dots",
    "B1": "the majority of the small dots lie outside the closed outline"
  },
  {
    "ID": 3,
    "BP": 49,
    "A": "the large shape near the center of the frame",
    "B": "the large shape pushed toward one side",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the outline shape sits noticeably off-center, leaving room for the dots on the other side"
  },
  {
    "ID": 4,
    "BP": 49,
    "A": "a curved outline shape",
    "B": "a straight-edged outline shape",
    "type": "candidate-rule",
    "A1": "the large enclosing figure is drawn with curved lines, such as a circle or ellipse",
    "B1": "the large enclosing figure is a polygon made of straight sides"
  },
  {
    "ID": 5,
    "BP": 49,
    "A": "inside dots forming a triangle",
    "B": "inside dots forming a straight line",
    "type": "candidate-rule",
    "A1": "the dots within the shape are arranged as the corners of a small triangle",
    "B1": "the dots within the shape lie roughly along one straight line"
  },
  {
    "ID": 6,
    "BP": 49,
    "A": "outside dots on opposite sides of the shape",
    "B": "all outside dots on one side of the shape",
    "type": "candidate-rule",
    "A1": "the dots outside the outline surround it, appearing on different sides",
    "B1": "every dot outside the outline lies on the same side of it"
  },
  {
    "ID": 1,
    "BP": 50,
    "A": "a vertical axis of symmetry",
    "B": "no vertical axis of symmetry",
    "type": "genuine-rule",
    "A1": "the whole figure is mirror-symmetric about a vertical line; the left half is the reflection of the right half",
    "B1": "the figure cannot be mirrored onto itself across any vertical line, e.g. mismatched paired shapes, a tilted tree, or a slanted parallelogram"
  },
  {
    "ID": 2,
    "BP": 50,
    "A": "balanced left-right arrangement of shapes",
    "B": "shapes crowded to one side",
    "type": "candidate-rule",
    "A1": "the drawn content is evenly distributed between the left and right halves of the frame",
    "B1": "more of the drawn content lies in one half of the frame than the other"
  },
  {
    "ID": 3,
    "BP": 50,
    "A": "identical shapes appearing in matched pairs",
    "B": "at least one unpaired or mismatched shape",
    "type": "candidate-rule",
    "A1": "every repeated element occurs as a pair of identical copies",
    "B1": "some element has no identical partner in the diagram"
  },
  {
    "ID": 4,
    "BP": 50,
    "A": "only upright figures",
    "B": "at least one tilted figure",
    "type": "candidate-rule",
    "A1": "all components stand upright, aligned with the vertical direction of the frame",
    "B1": "some component is rotated away from the upright orientation"
  },
  {
    "ID": 5,
    "BP": 50,
    "A": "filled shapes matched by an identical filled twin",
    "B": "filled shapes without an identical twin",
    "type": "candidate-rule",
    "A1": "whenever a solid black shape appears, an identical solid copy appears elsewhere",
    "B1": "a solid black shape appears whose counterpart differs in fill or shape"
  },
  {
    "ID": 6,
    "BP": 50,
    "A": "a composition wider than it is tall or evenly square",
    "B": "a composition elongated along a diagonal",
    "type": "candidate-rule",
    "A1": "the overall arrangement fits a level, non-slanted bounding region",
    "B1": "the overall arrangement stretches along an oblique direction"
  },
  {
    "ID": 1,
    "BP": 51,
    "A": "two or more dots much closer together than the rest",
    "B": "dots roughly evenly spaced apart",
    "type": "genuine-rule",
    "A1": "each frame holds four dots, and at least two of them form a tight pair or clump, with a gap far smaller than the distances to the remaining dots",
    "B1": "the four dots are spread out so that no two dots are noticeably closer to each other than any other pair; all neighbouring gaps are of similar size"
  },
  {
    "ID": 2,
    "BP": 51,
    "A": "dots crowded into one part of the frame",
    "B": "dots spread across the whole frame",
    "type": "candidate-rule",
    "A1": "most of the frame is left empty because the dots gather in one region",
    "B1": "the dots occupy all quarters of the frame with no large empty area"
  },
  {
    "ID": 3,
    "BP": 51,
    "A": "three dots lying roughly on a straight line",
    "B": "no three dots in line",
    "type": "candidate-rule",
    "A1": "at least three of the four dots can be joined by a single straight line",
    "B1": "every set of three dots forms a clear triangle rather than a line"
  },
  {
    "ID": 4,
    "BP": 51,
    "A": "one dot isolated far from the other three",
    "B": "no isolated dot",
    "type": "candidate-rule",
    "A1": "three dots stay together while a fourth sits clearly apart from them",
    "B1": "each dot has at least one neighbour at a comparable distance, so none stands alone"
  },
  {
    "ID": 5,
    "BP": 51,
    "A": "an empty centre",
    "B": "a dot near the centre of the frame",
    "type": "candidate-rule",
    "A1": "the middle region of the frame contains no dot",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 51,
    "A": "dots whose outline is a triangle or a line",
    "B": "dots forming a convex four-sided shape",
    "type": "candidate-rule",
    "A1": "joining the outermost dots gives a triangle (one dot inside or on an edge) or a near-straight chain",
    "B1": "joining the four dots in order gives a convex quadrilateral with no dot inside it"
  },
  {
    "ID": 1,
    "BP": 52,
    "A": "two arrows indicating opposite directions along the line",
    "B": "two arrows indicating the same direction along the line",
    "type": "genuine-rule",
    "A1": "following the curve in either direction agrees with one arrowhead but contradicts the other, so no single flow satisfies both arrows",
    "B1": "one consistent direction of travel along the curve satisfies both arrowheads"
  },
  {
    "ID": 2,
    "BP": 52,
    "A": "arrows pointing toward each other",
    "B": "arrows pointing away from each other",
    "type": "candidate-rule",
    "A1": "the two arrowheads converge on a common region of the curve",
    "B1": "the two arrowheads diverge toward opposite ends of the curve"
  },
  {
    "ID": 3,
    "BP": 52,
    "A": "an arrowhead at the free tip of the curve",
    "B": "arrowheads only along the middle of the curve",
    "type": "candidate-rule",
    "A1": "at least one arrowhead sits exactly at an endpoint of the line",
    "B1": "both arrowheads sit away from the endpoints of the line"
  },
  {
    "ID": 4,
    "BP": 52,
    "A": "an S-shaped curve with a change of bend",
    "B": "a curve bending in only one direction",
    "type": "candidate-rule",
    "A1": "the line contains an inflection where its curvature switches side",
    "B1": "the line keeps curving the same way from end to end"
  },
  {
    "ID": 5,
    "BP": 52,
    "A": "arrowheads far apart on the curve",
    "B": "arrowheads close together on the curve",
    "type": "candidate-rule",
    "A1": "the two arrowheads sit near opposite ends of the line",
    "B1": "the two arrowheads sit within a short stretch of the line"
  },
  {
    "ID": 6,
    "BP": 52,
    "A": "an arrowhead in the upper-left part of the frame",
    "B": "arrowheads kept away from the upper-left corner",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 53,
    "A": "an outer polygon with more sides than the inner one",
    "B": "an inner polygon with more sides than the outer one",
    "type": "genuine-rule",
    "A1": "each diagram nests one polygon inside another; the enclosing polygon always has the greater number of sides, e.g. a square around a triangle",
    "B1": "the enclosed polygon always has the greater number of sides, e.g. a hexagon inside a triangle"
  },
  {
    "ID": 2,
    "BP": 53,
    "A": "an inner shape with at most four sides",
    "B": "an inner shape with at least four sides",
    "type": "candidate-rule",
    "A1": "the enclosed polygon is a triangle or quadrilateral",
    "B1": "the enclosed polygon is a square, pentagon or hexagon"
  },
  {
    "ID": 3,
    "BP": 53,
    "A": "no triangle as the outer shape",
    "B": "a triangle or low-sided polygon as the outer shape",
    "type": "candidate-rule",
    "A1": "the enclosing figure has four or more sides in every diagram",
    "B1": "the enclosing figure is often a three-sided figure"
  },
  {
    "ID": 4,
    "BP": 53,
    "A": "a small inner shape",
    "B": "a relatively large inner shape",
    "type": "candidate-rule",
    "A1": "the enclosed polygon occupies only a small fraction of the outer polygon's area",
    "B1": "the enclosed polygon fills a larger share of the outer polygon"
  },
  {
    "ID": 5,
    "BP": 53,
    "A": "an inner shape with straight, angular corners",
    "B": "an inner shape that is nearly rounded",
    "type": "candidate-rule",
    "A1": "the enclosed polygon has few, sharp vertices",
    "B1": "the enclosed polygon has many vertices, making it appear almost circular"
  },
  {
    "ID": 6,
    "BP": 53,
    "A": "shapes whose side counts differ by at least two",
    "B": "shapes whose side counts differ by exactly one",
    "type": "candidate-rule",
    "A1": "the outer and inner polygons differ by two or more in number of sides",
    "B1": "the outer and inner polygons have consecutive numbers of sides"
  },
  {
    "ID": 1,
    "BP": 54,
    "A": "triangle, circle, cross arranged counterclockwise",
    "B": "triangle, circle, cross arranged clockwise",
    "type": "genuine-rule",
    "A1": "tracing a path from the triangle to the circle to the cross moves in a counterclockwise direction",
    "B1": "tracing a path from the triangle to the circle to the cross moves in a clockwise direction"
  },
  {
    "ID": 2,
    "BP": 54,
    "A": "the circle closer to the triangle than to the cross",
    "B": "the circle closer to the cross than to the triangle",
    "type": "candidate-rule",
    "A1": "of the two distances measured from the circle, the one to the triangle is the shorter",
    "B1": "of the two distances measured from the circle, the one to the cross is the shorter"
  },
  {
    "ID": 3,
    "BP": 54,
    "A": "the cross to the right of the circle",
    "B": "the cross to the left of the circle",
    "type": "candidate-rule",
    "A1": "comparing horizontal positions, the cross lies further right than the circle",
    "B1": "comparing horizontal positions, the cross lies further left than the circle"
  },
  {
    "ID": 4,
    "BP": 54,
    "A": "the triangle above the other two shapes",
    "B": "the triangle below at least one other shape",
    "type": "candidate-rule",
    "A1": "the triangle is the highest of the three shapes in the frame",
    "B1": "the circle or the cross sits higher in the frame than the triangle"
  },
  {
    "ID": 5,
    "BP": 54,
    "A": "three shapes forming a wide, spread-out triangle",
    "B": "three shapes forming a narrow, elongated triangle",
    "type": "candidate-rule",
    "A1": "the imaginary triangle whose corners are the three shapes is broad, with no very sharp corner",
    "B1": "the imaginary triangle whose corners are the three shapes is stretched thin, with at least one sharp corner"
  },
  {
    "ID": 6,
    "BP": 54,
    "A": "shapes clustered toward the upper-left region",
    "B": "shapes clustered toward the upper-right region",
    "type": "candidate-rule",
    "A1": "the group of three shapes sits mostly in the left half of the frame, leaving the lower right empty",
    "B1": "the group of three shapes sits mostly in the right half of the frame, leaving the lower left empty"
  },
  {
    "ID": 1,
    "BP": 55,
    "A": "the small circle right at the notch",
    "B": "the small circle away from the notch",
    "type": "genuine-rule",
    "A1": "the tiny attached circle sits directly beside the indentation cut into the shape's outline",
    "B1": "the tiny attached circle is on a part of the outline distant from the indentation"
  },
  {
    "ID": 2,
    "BP": 55,
    "A": "the small circle on the left half",
    "B": "the small circle on the right half",
    "type": "candidate-rule",
    "A1": "the tiny attached circle lies in the left half of the frame",
    "B1": "the tiny attached circle lies in the right half of the frame"
  },
  {
    "ID": 3,
    "BP": 55,
    "A": "a rounded notch",
    "B": "an angular notch",
    "type": "candidate-rule",
    "A1": "the indentation in the outline is a smooth, curved bite",
    "B1": "the indentation in the outline has straight, angular sides"
  },
  {
    "ID": 4,
    "BP": 55,
    "A": "a notch in the lower part of the outline",
    "B": "a notch in the upper part of the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 55,
    "A": "a convex overall shape",
    "B": "an elongated or bent overall shape",
    "type": "candidate-rule",
    "A1": "apart from the notch, the main shape is compact and bulges outward everywhere",
    "B1": "the main shape is stretched, curved, or bent rather than compact"
  },
  {
    "ID": 6,
    "BP": 55,
    "A": "the small circle outside the outline",
    "B": "the small circle overlapping the outline",
    "type": "candidate-rule",
    "A1": "the tiny circle is attached from outside, touching the boundary",
    "B1": "the tiny circle straddles or intrudes into the shape's boundary"
  },
  {
    "ID": 1,
    "BP": 56,
    "A": "uniform fill: all figures solid or all outlined",
    "B": "a mix of solid and outlined figures",
    "type": "genuine-rule",
    "A1": "within each frame every figure has the same fill style — either every figure is filled black or every figure is just an outline",
    "B1": "each frame contains at least one solid black figure and at least one outline-only figure"
  },
  {
    "ID": 2,
    "BP": 56,
    "A": "figures of only one shape type or one color group",
    "B": "both shape types in both colors",
    "type": "candidate-rule",
    "A1": "the figures form a single visual family, such as only triangles or only black shapes",
    "B1": "triangles and circles appear together in differing fills"
  },
  {
    "ID": 3,
    "BP": 56,
    "A": "at most three figures",
    "B": "at least three figures",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 56,
    "A": "no solid circle together with a triangle outline",
    "B": "a solid figure next to its outlined counterpart",
    "type": "candidate-rule",
    "A1": "filled circles never share a frame with outlined triangles",
    "B1": "the same shape kind appears once filled and once as an outline"
  },
  {
    "ID": 5,
    "BP": 56,
    "A": "figures clustered toward one side",
    "B": "figures spread across the frame",
    "type": "candidate-rule",
    "A1": "the figures group together in one region of the frame",
    "B1": "the figures are distributed over most of the frame"
  },
  {
    "ID": 6,
    "BP": 56,
    "A": "all figures roughly the same size",
    "B": "a clearly larger figure among smaller ones",
    "type": "candidate-rule",
    "A1": "no figure is conspicuously bigger than the others in the frame",
    "B1": "one figure noticeably dominates the others in size"
  },
  {
    "ID": 1,
    "BP": 57,
    "A": "two identical figures",
    "B": "two different figures",
    "type": "genuine-rule",
    "A1": "the two figures in each frame match in shape, size and fill",
    "B1": "the two figures differ in shape, size or fill (e.g. circle vs triangle, large vs small square, filled vs outline triangle)"
  },
  {
    "ID": 2,
    "BP": 57,
    "A": "two figures of equal size",
    "B": "two figures of unequal size",
    "type": "candidate-rule",
    "A1": "both figures occupy about the same area",
    "B1": "one figure is clearly larger than the other"
  },
  {
    "ID": 3,
    "BP": 57,
    "A": "two figures with the same fill style",
    "B": "two figures with different fill styles",
    "type": "candidate-rule",
    "A1": "both figures are filled black or both are outlines",
    "B1": "one figure is solid black while the other is only an outline"
  },
  {
    "ID": 4,
    "BP": 57,
    "A": "two figures of the same shape type",
    "B": "two figures of different shape types",
    "type": "candidate-rule",
    "A1": "both figures are the same kind of shape, e.g. two triangles or two squares",
    "B1": "the two figures are different kinds of shape, e.g. a circle with a triangle"
  },
  {
    "ID": 5,
    "BP": 57,
    "A": "a pair arranged diagonally",
    "B": "a pair arranged side by side",
    "type": "candidate-rule",
    "A1": "one figure sits noticeably higher than the other, on a diagonal",
    "B1": "the two figures sit at roughly the same height"
  },
  {
    "ID": 6,
    "BP": 57,
    "A": "figures that could overlap exactly if slid together",
    "B": "figures that cannot be superimposed",
    "type": "candidate-rule",
    "A1": "a pure translation would place one figure exactly on top of the other",
    "B1": "no sliding motion can make one figure coincide with the other"
  },
  {
    "ID": 1,
    "BP": 58,
    "A": "two black squares of equal size",
    "B": "two black squares of different sizes",
    "type": "genuine-rule",
    "A1": "every diagram contains exactly two solid black squares, and they are the same size as each other; other shapes may also be present",
    "B1": "every diagram contains exactly two solid black squares, and one is clearly larger than the other"
  },
  {
    "ID": 2,
    "BP": 58,
    "A": "at least one hollow shape",
    "B": "solid black shapes only",
    "type": "candidate-rule",
    "A1": "some shape is drawn in outline, with a white interior",
    "B1": "every shape is filled in black with no outlined shapes"
  },
  {
    "ID": 3,
    "BP": 58,
    "A": "a triangle among the shapes",
    "B": "squares only",
    "type": "candidate-rule",
    "A1": "each diagram includes at least one triangle alongside the squares",
    "B1": "each diagram is made up entirely of squares, with no triangles"
  },
  {
    "ID": 4,
    "BP": 58,
    "A": "a largest shape that is solid black",
    "B": "a largest shape that is hollow",
    "type": "candidate-rule",
    "A1": "the biggest shape in the diagram is filled black",
    "B1": "the biggest shape in the diagram is drawn in outline only"
  },
  {
    "ID": 5,
    "BP": 58,
    "A": "a smallest shape that is solid black",
    "B": "a smallest shape that is hollow",
    "type": "candidate-rule",
    "A1": "the smallest shape in the diagram is filled black",
    "B1": "the smallest shape in the diagram is drawn in outline only"
  },
  {
    "ID": 6,
    "BP": 58,
    "A": "exactly two solid black shapes",
    "B": "three or more solid black shapes",
    "type": "candidate-rule",
    "A1": "counting only filled shapes, there are exactly two per diagram",
    "B1": "counting only filled shapes, there are at least three per diagram"
  },
  {
    "ID": 1,
    "BP": 59,
    "A": "two figures of the same shape, differing only in size",
    "B": "two figures of different shapes",
    "type": "genuine-rule",
    "A1": "one figure is an exact scaled copy of the other, with the same proportions and orientation",
    "B1": "the two figures are never scaled copies of one another; they differ in outline, proportions or orientation, not merely in size"
  },
  {
    "ID": 2,
    "BP": 59,
    "A": "two figures from the same shape family",
    "B": "figures from two different shape families",
    "type": "candidate-rule",
    "A1": "both figures belong to the same broad class, such as two triangles, two circles or two quadrilaterals",
    "B1": "the two figures belong to different broad classes, such as a triangle with a circle"
  },
  {
    "ID": 3,
    "BP": 59,
    "A": "a large figure at least twice the size of the small one",
    "B": "two figures of comparable size",
    "type": "candidate-rule",
    "A1": "the larger figure clearly dominates, being at least about twice as big as its companion",
    "B1": "neither figure is dramatically larger than the other"
  },
  {
    "ID": 4,
    "BP": 59,
    "A": "outlines that are all curved or all straight",
    "B": "one curved and one straight-edged figure",
    "type": "candidate-rule",
    "A1": "both figures are drawn the same way: either both from curves or both from straight segments",
    "B1": "one figure has a curved outline while the other is built from straight edges"
  },
  {
    "ID": 5,
    "BP": 59,
    "A": "the smaller figure placed above or left of the larger",
    "B": "the smaller figure placed below or right of the larger",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 59,
    "A": "two figures with the same orientation",
    "B": "two figures turned or flipped relative to each other",
    "type": "candidate-rule",
    "A1": "the two figures point the same way; neither is rotated or mirrored with respect to the other",
    "B1": "one figure is rotated or mirror-reversed compared with its companion"
  },
  {
    "ID": 1,
    "BP": 60,
    "A": "a pair of similar figures, one a scaled copy of the other",
    "B": "no two figures similar to each other",
    "type": "genuine-rule",
    "A1": "each panel contains two figures with exactly the same shape and proportions, differing only in size",
    "B1": "no figure is a scaled copy of another; even when two figures are the same general type (e.g. two triangles), their proportions differ"
  },
  {
    "ID": 2,
    "BP": 60,
    "A": "two figures of the same kind of shape",
    "B": "every figure a different kind of shape",
    "type": "candidate-rule",
    "A1": "each panel repeats one shape category, such as two triangles, two circles or two rectangles",
    "B1": "each panel mixes shape categories with no repeats"
  },
  {
    "ID": 3,
    "BP": 60,
    "A": "exactly three figures",
    "B": "at most two figures",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 60,
    "A": "the smallest figure is a shrunken version of the largest",
    "B": "smallest and largest figures of different shapes",
    "type": "candidate-rule",
    "A1": "the biggest and the smallest figure in the panel share the same outline shape",
    "B1": "the biggest and the smallest figure never share the same outline shape"
  },
  {
    "ID": 5,
    "BP": 60,
    "A": "a wide range of figure sizes",
    "B": "figures of roughly comparable size",
    "type": "candidate-rule",
    "A1": "the largest figure is several times bigger than the smallest one",
    "B1": "no figure dwarfs the others; sizes stay within a modest range"
  },
  {
    "ID": 6,
    "BP": 60,
    "A": "at least two triangles",
    "B": "at most one triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 61,
    "A": "equal numbers of crosses on each side of the line",
    "B": "unequal numbers of crosses on each side of the line",
    "type": "genuine-rule",
    "A1": "the line segment splits the crosses into two groups of exactly the same size",
    "B1": "the line segment splits the crosses into two groups of different sizes"
  },
  {
    "ID": 2,
    "BP": 61,
    "A": "an even total number of crosses",
    "B": "an odd total number of crosses",
    "type": "candidate-rule",
    "A1": "counting all crosses in the frame gives an even number",
    "B1": "counting all crosses in the frame gives an odd number"
  },
  {
    "ID": 3,
    "BP": 61,
    "A": "a line passing near the center of the frame",
    "B": "a line shifted toward one edge",
    "type": "candidate-rule",
    "A1": "the dividing line segment runs close to the middle of the frame",
    "B1": "the dividing line segment lies noticeably off-center"
  },
  {
    "ID": 4,
    "BP": 61,
    "A": "crosses spread evenly around the line",
    "B": "crosses clustered on one side",
    "type": "candidate-rule",
    "A1": "the crosses are distributed at similar distances on both sides of the line",
    "B1": "most crosses bunch together in one region relative to the line"
  },
  {
    "ID": 5,
    "BP": 61,
    "A": "a line longer than the spread of the crosses",
    "B": "a line shorter than the spread of the crosses",
    "type": "candidate-rule",
    "A1": "the line segment spans a greater extent than the cluster of crosses",
    "B1": "the cluster of crosses extends beyond the ends of the line segment"
  },
  {
    "ID": 6,
    "BP": 61,
    "A": "at most six crosses",
    "B": "more than six crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 62,
    "A": "a curve whose two ends are far apart",
    "B": "a curve whose two ends are close together",
    "type": "genuine-rule",
    "A1": "each diagram is one open line; the distance between its two endpoints is large compared with the curve's size",
    "B1": "the two endpoints nearly touch, so the curve almost closes on itself"
  },
  {
    "ID": 2,
    "BP": 62,
    "A": "a line that never crosses itself",
    "B": "a line that crosses or touches itself",
    "type": "candidate-rule",
    "A1": "the stroke can be followed from end to end without passing over itself",
    "B1": "somewhere along its length the stroke intersects or meets itself"
  },
  {
    "ID": 3,
    "BP": 62,
    "A": "a curve enclosing no sizeable region",
    "B": "a curve that almost encloses a region",
    "type": "candidate-rule",
    "A1": "the line meanders without surrounding any large area of the frame",
    "B1": "the line wraps around so that a substantial area is nearly surrounded"
  },
  {
    "ID": 4,
    "BP": 62,
    "A": "an elongated, stretched-out stroke",
    "B": "a compact, coiled stroke",
    "type": "candidate-rule",
    "A1": "the drawing extends across the frame more in one direction than the other",
    "B1": "the drawing folds back on itself into a compact figure"
  },
  {
    "ID": 5,
    "BP": 62,
    "A": "ends in opposite halves of the frame",
    "B": "ends in the same half of the frame",
    "type": "candidate-rule",
    "A1": "the two endpoints of the line lie on opposite sides of the frame's centre",
    "B1": "both endpoints of the line lie on the same side of the frame's centre"
  },
  {
    "ID": 6,
    "BP": 62,
    "A": "at most one loop or coil",
    "B": "at least one full loop",
    "type": "candidate-rule",
    "A1": "the stroke may bend and wave but rarely completes a full turn",
    "B1": "the stroke completes at least one full 360-degree turn somewhere along its length"
  },
  {
    "ID": 1,
    "BP": 63,
    "A": "an outline thickest on its right side",
    "B": "an outline thickest on its left side",
    "type": "genuine-rule",
    "A1": "the stroke of the shape's outline is heavy along the right flank and thin on the left, as if shaded from the left",
    "B1": "the stroke of the shape's outline is heavy along the left flank and thin on the right, as if shaded from the right"
  },
  {
    "ID": 2,
    "BP": 63,
    "A": "a thicker stroke along the bottom edge",
    "B": "a thicker stroke along the top edge",
    "type": "candidate-rule",
    "A1": "the outline appears heaviest at the lower part of the figure",
    "B1": "the outline appears heaviest at the upper part of the figure"
  },
  {
    "ID": 3,
    "BP": 63,
    "A": "a figure taller than it is wide",
    "B": "a figure wider than it is tall",
    "type": "candidate-rule",
    "A1": "the shape's vertical extent exceeds its horizontal extent",
    "B1": "the shape's horizontal extent exceeds its vertical extent"
  },
  {
    "ID": 4,
    "BP": 63,
    "A": "at least one straight edge",
    "B": "an entirely curved outline",
    "type": "candidate-rule",
    "A1": "part of the shape's boundary is a straight line segment",
    "B1": "no part of the shape's boundary is straight; it is made only of curves"
  },
  {
    "ID": 5,
    "BP": 63,
    "A": "a roughly convex figure",
    "B": "a deep indentation in the figure",
    "type": "candidate-rule",
    "A1": "the outline bulges outward with no significant inward notch",
    "B1": "the outline curves inward at some point, creating a pronounced concavity"
  },
  {
    "ID": 6,
    "BP": 63,
    "A": "a shape placed left of the frame's center",
    "B": "a shape placed right of the frame's center",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 64,
    "A": "an ellipse whose long axis points at the cross",
    "B": "an ellipse whose long axis points at the circle",
    "type": "genuine-rule",
    "A1": "if the ellipse's long (major) axis is extended as a straight line, it passes through the cross; the small circle lies well off this line",
    "B1": "if the ellipse's long (major) axis is extended as a straight line, it passes through the small circle; the cross lies well off this line"
  },
  {
    "ID": 2,
    "BP": 64,
    "A": "a cross closer to the circle than to the ellipse",
    "B": "a cross closer to the ellipse than to the circle",
    "type": "candidate-rule",
    "A1": "the distance from the cross to the small circle is smaller than the distance from the cross to the ellipse",
    "B1": "the distance from the cross to the ellipse is smaller than the distance from the cross to the small circle"
  },
  {
    "ID": 3,
    "BP": 64,
    "A": "circle, cross and ellipse arranged clockwise",
    "B": "circle, cross and ellipse arranged counterclockwise",
    "type": "candidate-rule",
    "A1": "reading the three figures in the order circle, cross, ellipse traces a clockwise path around their triangle",
    "B1": "reading the three figures in the order circle, cross, ellipse traces a counterclockwise path around their triangle"
  },
  {
    "ID": 4,
    "BP": 64,
    "A": "the circle between the ellipse and the cross",
    "B": "the cross between the ellipse and the circle",
    "type": "candidate-rule",
    "A1": "the small circle lies in the middle position along the path from the ellipse to the cross",
    "B1": "the cross lies in the middle position along the path from the ellipse to the circle"
  },
  {
    "ID": 5,
    "BP": 64,
    "A": "a strongly tilted ellipse",
    "B": "a nearly horizontal or vertical ellipse",
    "type": "candidate-rule",
    "A1": "the ellipse's long axis is oriented diagonally, far from horizontal or vertical",
    "B1": "the ellipse's long axis is close to horizontal or vertical"
  },
  {
    "ID": 6,
    "BP": 64,
    "A": "the cross below the circle",
    "B": "the cross above the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 65,
    "A": "triangles arranged in a horizontal line",
    "B": "triangles arranged in a vertical line",
    "type": "genuine-rule",
    "A1": "the triangles in each frame line up in a row running left to right; the circles are placed arbitrarily and can be ignored",
    "B1": "the triangles in each frame stack up in a column running top to bottom; the circles are placed arbitrarily and can be ignored"
  },
  {
    "ID": 2,
    "BP": 65,
    "A": "circles scattered around the triangles",
    "B": "circles clustered to one side of the triangles",
    "type": "candidate-rule",
    "A1": "the circles appear on several sides of the triangle group rather than all in one region",
    "B1": "the circles gather mostly on one side of the triangle group"
  },
  {
    "ID": 3,
    "BP": 65,
    "A": "a triangle group wider than it is tall",
    "B": "a triangle group taller than it is wide",
    "type": "candidate-rule",
    "A1": "the bounding region covering all triangles is stretched horizontally",
    "B1": "the bounding region covering all triangles is stretched vertically"
  },
  {
    "ID": 4,
    "BP": 65,
    "A": "more circles than triangles",
    "B": "at least as many triangles as circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 65,
    "A": "triangles evenly spaced along their line",
    "B": "irregular gaps between the triangles",
    "type": "candidate-rule",
    "A1": "neighbouring triangles sit at roughly equal distances from one another",
    "B1": "the spacing between neighbouring triangles varies noticeably"
  },
  {
    "ID": 6,
    "BP": 65,
    "A": "circles both above and below the triangles",
    "B": "circles only on one vertical side of the triangles",
    "type": "candidate-rule",
    "A1": "at least one circle lies above the triangle row and at least one lies below it",
    "B1": "all circles lie either above or below the triangle group, never both"
  },
  {
    "ID": 1,
    "BP": 66,
    "A": "loose dots in a horizontal row",
    "B": "loose dots in a vertical column",
    "type": "genuine-rule",
    "A1": "the circles not connected to any line segment are lined up side by side at the same height",
    "B1": "the circles not connected to any line segment are stacked one above the other"
  },
  {
    "ID": 2,
    "BP": 66,
    "A": "the connected network wider than tall",
    "B": "the connected network taller than wide",
    "type": "candidate-rule",
    "A1": "the graph of linked circles spreads mainly left to right",
    "B1": "the graph of linked circles spreads mainly top to bottom"
  },
  {
    "ID": 3,
    "BP": 66,
    "A": "exactly four or more loose dots",
    "B": "fewer loose dots than in Set A",
    "type": "candidate-rule",
    "A1": "at least four circles are left unconnected in each panel",
    "B1": "three or fewer circles are left unconnected"
  },
  {
    "ID": 4,
    "BP": 66,
    "A": "a connected network with no closed loop",
    "B": "a network containing a closed loop",
    "type": "candidate-rule",
    "A1": "the line segments form a tree; you can never return to a circle without retracing",
    "B1": "some line segments form a cycle among the circles"
  },
  {
    "ID": 5,
    "BP": 66,
    "A": "loose dots near the middle of the frame",
    "B": "loose dots near an edge of the frame",
    "type": "candidate-rule",
    "A1": "the unconnected circles sit around the centre of the panel",
    "B1": "the unconnected circles sit close to one side of the panel"
  },
  {
    "ID": 6,
    "BP": 66,
    "A": "no crossing line segments",
    "B": "at least two line segments that cross",
    "type": "candidate-rule",
    "A1": "the connecting lines never intersect each other away from a circle",
    "B1": "somewhere two connecting lines pass over each other"
  },
  {
    "ID": 1,
    "BP": 67,
    "A": "branches all pointing upward",
    "B": "a branch pointing downward",
    "type": "genuine-rule",
    "A1": "every side branch leaves the stem angled toward the tip, making its acute angle with the upper part of the trunk",
    "B1": "at least one side branch bends back toward the base, drooping so its acute angle is with the lower part of the trunk"
  },
  {
    "ID": 2,
    "BP": 67,
    "A": "branches only on the right side of the stem",
    "B": "at least one branch on the left side of the stem",
    "type": "candidate-rule",
    "A1": "all side shoots leave from the right-hand side of the main stem",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 67,
    "A": "exactly two side branches",
    "B": "three or more side branches",
    "type": "candidate-rule",
    "A1": "the main stem carries just two offshoots",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 67,
    "A": "branches only in the upper half of the stem",
    "B": "a branch in the lower half of the stem",
    "type": "candidate-rule",
    "A1": "all branching points sit near the tip, leaving the lower stem bare",
    "B1": "at least one branch attaches near the base of the stem"
  },
  {
    "ID": 5,
    "BP": 67,
    "A": "a trunk whose base bends to the right",
    "B": "a trunk whose base bends to the left",
    "type": "candidate-rule",
    "A1": "the lower end of the main stem curves rightward",
    "B1": "the lower end of the main stem curves leftward"
  },
  {
    "ID": 6,
    "BP": 67,
    "A": "branches springing from a single point",
    "B": "branches attached at separate points",
    "type": "candidate-rule",
    "A1": "the side shoots fork from roughly one spot on the stem",
    "B1": "the side shoots are spread out along the length of the stem"
  },
  {
    "ID": 1,
    "BP": 68,
    "A": "branches that fork upward",
    "B": "branches that fork downward",
    "type": "genuine-rule",
    "A1": "the side branches diverge toward the top of the frame, so the free tips of the twig lie above the branching point",
    "B1": "the side branches diverge toward the bottom of the frame, so the free tips of the twig lie below the branching point"
  },
  {
    "ID": 2,
    "BP": 68,
    "A": "a main stem curving to the left",
    "B": "a main stem curving to the right",
    "type": "candidate-rule",
    "A1": "the longest line bows toward the left side of the frame",
    "B1": "the longest line bows toward the right side of the frame"
  },
  {
    "ID": 3,
    "BP": 68,
    "A": "exactly two side branches",
    "B": "exactly one side branch",
    "type": "candidate-rule",
    "A1": "two shorter offshoots leave the main stem",
    "B1": "only one shorter offshoot leaves the main stem"
  },
  {
    "ID": 4,
    "BP": 68,
    "A": "a branching point in the lower half",
    "B": "a branching point in the upper half",
    "type": "candidate-rule",
    "A1": "the lines meet below the vertical midline of the frame",
    "B1": "the lines meet above the vertical midline of the frame"
  },
  {
    "ID": 5,
    "BP": 68,
    "A": "branches on the left of the stem",
    "B": "branches on the right of the stem",
    "type": "candidate-rule",
    "A1": "the side offshoots leave from the left-hand side of the main line",
    "B1": "the side offshoots leave from the right-hand side of the main line"
  },
  {
    "ID": 6,
    "BP": 68,
    "A": "side branches shorter than the stem",
    "B": "side branches about as long as the stem",
    "type": "candidate-rule",
    "A1": "the offshoots are clearly shorter than the main line",
    "B1": "the offshoots are of comparable length to the main line"
  },
  {
    "ID": 1,
    "BP": 69,
    "A": "the dot at the tip of the main stem",
    "B": "the dot at the tip of a side branch",
    "type": "genuine-rule",
    "A1": "following the figure up from its base, the trunk continues smoothly through every fork and ends in the filled dot",
    "B1": "to reach the dot from the base you must turn off the main stem at a fork; the dot ends a lateral offshoot"
  },
  {
    "ID": 2,
    "BP": 69,
    "A": "the dot on the longest branch",
    "B": "the dot on a shorter branch",
    "type": "candidate-rule",
    "A1": "the branch carrying the dot is the longest path from the base",
    "B1": "at least one branch without the dot is longer than the one carrying it"
  },
  {
    "ID": 3,
    "BP": 69,
    "A": "the dot at the highest point of the figure",
    "B": "the dot below the topmost branch tip",
    "type": "candidate-rule",
    "A1": "no branch tip rises above the filled dot",
    "B1": "some other branch tip reaches higher than the dot"
  },
  {
    "ID": 4,
    "BP": 69,
    "A": "the dot left of the figure's center",
    "B": "the dot right of the figure's center",
    "type": "candidate-rule",
    "A1": "the filled dot sits on the left half of the branching figure",
    "B1": "the filled dot sits on the right half of the branching figure"
  },
  {
    "ID": 5,
    "BP": 69,
    "A": "at most four branch tips",
    "B": "five or more branch tips",
    "type": "candidate-rule",
    "A1": "counting every free end of the figure, including the one with the dot, gives four or fewer",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 69,
    "A": "a stem curving toward the dot",
    "B": "a stem curving away from the dot",
    "type": "candidate-rule",
    "A1": "the lowest section of the figure bends toward the side on which the dot lies",
    "B1": "the lowest section of the figure bends away from the side on which the dot lies"
  },
  {
    "ID": 1,
    "BP": 70,
    "A": "branching four levels deep",
    "B": "branching at most three levels deep",
    "type": "genuine-rule",
    "A1": "somewhere a twig grows on a twig that grows on a branch of the main stem, giving a chain of four successive branchings",
    "B1": "twigs may grow on branches of the main stem, but no twig of the third level carries a further twig"
  },
  {
    "ID": 2,
    "BP": 70,
    "A": "a long trailing main stem",
    "B": "a short compact main stem",
    "type": "candidate-rule",
    "A1": "the main branch extends well beyond the region where the side branches grow",
    "B1": "the side branches occupy nearly the whole length of the main branch"
  },
  {
    "ID": 3,
    "BP": 70,
    "A": "side branches mostly on one side",
    "B": "side branches on both sides",
    "type": "candidate-rule",
    "A1": "the twigs sprout predominantly from a single side of the main stem",
    "B1": "the twigs fan out to the left and right of the main stem"
  },
  {
    "ID": 4,
    "BP": 70,
    "A": "fewer than eight branch tips",
    "B": "eight or more branch tips",
    "type": "candidate-rule",
    "A1": "counting the free ends of all twigs gives at most seven",
    "B1": "counting the free ends of all twigs gives at least eight"
  },
  {
    "ID": 5,
    "BP": 70,
    "A": "a strongly curved main stem",
    "B": "a nearly straight main stem",
    "type": "candidate-rule",
    "A1": "the principal branch bends noticeably along its length",
    "B1": "the principal branch runs roughly straight from base to tip"
  },
  {
    "ID": 6,
    "BP": 70,
    "A": "an asymmetric silhouette",
    "B": "a roughly symmetric fan of twigs",
    "type": "candidate-rule",
    "A1": "the overall outline of the branch is lopsided, with no axis of symmetry",
    "B1": "the twigs spread out in a balanced, fan-like arrangement about the stem"
  },
  {
    "ID": 1,
    "BP": 71,
    "A": "a shape nested inside a shape inside a shape",
    "B": "shapes nested at most one level deep",
    "type": "genuine-rule",
    "A1": "each panel contains a three-deep chain: an outer figure containing a figure that itself contains another figure",
    "B1": "figures may sit inside another figure, but no contained figure ever contains a further figure"
  },
  {
    "ID": 2,
    "BP": 71,
    "A": "exactly one large container shape",
    "B": "two or more shapes acting as containers",
    "type": "candidate-rule",
    "A1": "only a single figure in each panel has other figures drawn inside it",
    "B1": "at least two separate figures each enclose other figures"
  },
  {
    "ID": 3,
    "BP": 71,
    "A": "the innermost shape differing from its container",
    "B": "an innermost shape matching its container's type",
    "type": "candidate-rule",
    "A1": "the deepest nested figure is a different shape type than the figure directly enclosing it",
    "B1": "somewhere a contained figure is the same shape type as the figure enclosing it"
  },
  {
    "ID": 4,
    "BP": 71,
    "A": "at most two shapes outside the main container",
    "B": "three or more shapes outside any container",
    "type": "candidate-rule",
    "A1": "no more than two loose figures lie outside the largest enclosing figure",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 71,
    "A": "a container holding only one shape directly",
    "B": "a container holding several shapes side by side",
    "type": "candidate-rule",
    "A1": "the main enclosing figure directly contains a single figure (which may contain more)",
    "B1": "the enclosing figure holds two or more figures at the same level"
  },
  {
    "ID": 6,
    "BP": 71,
    "A": "five or fewer shapes in total",
    "B": "six or more shapes in total",
    "type": "candidate-rule",
    "A1": "counting every outline, each panel has at most five figures",
    "B1": "counting every outline, each panel has at least six figures"
  },
  {
    "ID": 1,
    "BP": 72,
    "A": "line ends pointing in parallel directions",
    "B": "line ends pointing in perpendicular directions",
    "type": "genuine-rule",
    "A1": "the tangent directions at the curve's two free ends are parallel — the tips point the same way or exactly opposite ways (e.g. both ends of the U point up, both ends of the 2 are horizontal)",
    "B1": "the tangent directions at the curve's two free ends differ by roughly a right angle (e.g. one end horizontal and the other vertical)"
  },
  {
    "ID": 2,
    "BP": 72,
    "A": "a roughly symmetric curve",
    "B": "an asymmetric curve",
    "type": "candidate-rule",
    "A1": "the line looks balanced under a mirror reflection or a half-turn, like a U, M or S shape",
    "B1": "the line has no apparent mirror or rotational symmetry"
  },
  {
    "ID": 3,
    "BP": 72,
    "A": "endpoints at about the same height",
    "B": "endpoints at clearly different heights",
    "type": "candidate-rule",
    "A1": "the two free ends of the line lie on roughly the same horizontal level in the frame",
    "B1": "one free end sits noticeably higher in the frame than the other"
  },
  {
    "ID": 4,
    "BP": 72,
    "A": "ends that finish straight",
    "B": "an end that curls into a hook",
    "type": "candidate-rule",
    "A1": "near each free tip the line runs straight or gently curved, without doubling back",
    "B1": "at least one free tip bends sharply back on itself, like the top of a question mark or an inward spiral"
  },
  {
    "ID": 5,
    "BP": 72,
    "A": "an even number of bends",
    "B": "an odd number of bends",
    "type": "candidate-rule",
    "A1": "the curve changes its turning direction an even number of times between its two ends",
    "B1": "the curve changes its turning direction an odd number of times between its two ends"
  },
  {
    "ID": 6,
    "BP": 72,
    "A": "endpoints far apart",
    "B": "endpoints close together",
    "type": "candidate-rule",
    "A1": "the straight-line distance between the two free ends is large compared with the size of the figure",
    "B1": "the two free ends lie near each other, as when the curve almost closes into a loop"
  },
  {
    "ID": 1,
    "BP": 73,
    "A": "an ellipse and rectangle elongated in different directions",
    "B": "an ellipse and rectangle elongated in the same direction",
    "type": "genuine-rule",
    "A1": "the long axis of the ellipse and the long axis of the rectangle are not parallel, typically roughly perpendicular",
    "B1": "the long axes of the ellipse and the rectangle are parallel: both vertical, both horizontal, or both tilted the same way"
  },
  {
    "ID": 2,
    "BP": 73,
    "A": "shapes elongated in three different directions",
    "B": "all shapes elongated in one common direction",
    "type": "candidate-rule",
    "A1": "the ellipse, triangle and rectangle each point a different way, so no two axes agree",
    "B1": "the elongation axes of the ellipse, triangle and rectangle all line up"
  },
  {
    "ID": 3,
    "BP": 73,
    "A": "a triangle pointing away from the ellipse",
    "B": "a triangle pointing toward the ellipse",
    "type": "candidate-rule",
    "A1": "the apex of the triangle is directed away from where the ellipse lies",
    "B1": "the apex of the triangle is aimed at the ellipse"
  },
  {
    "ID": 4,
    "BP": 73,
    "A": "the triangle closer to the rectangle than to the ellipse",
    "B": "the triangle closer to the ellipse than to the rectangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 73,
    "A": "an ellipse more elongated than the rectangle",
    "B": "a rectangle more elongated than the ellipse",
    "type": "candidate-rule",
    "A1": "the ellipse's length-to-width ratio exceeds that of the rectangle",
    "B1": "the rectangle's length-to-width ratio exceeds that of the ellipse"
  },
  {
    "ID": 6,
    "BP": 73,
    "A": "a triangle tilted relative to the rectangle",
    "B": "a triangle aligned with the rectangle",
    "type": "candidate-rule",
    "A1": "the triangle's axis of symmetry crosses the rectangle's long axis at an angle",
    "B1": "the triangle's axis of symmetry runs parallel to the rectangle's long axis"
  },
  {
    "ID": 1,
    "BP": 74,
    "A": "a drop with a sharp point at its free end",
    "B": "a drop that is rounded at its free end",
    "type": "genuine-rule",
    "A1": "the end of the blob away from the attached thread tapers to a sharp tip, like a leaf point",
    "B1": "the end of the blob away from the thread is smoothly rounded; the shape only narrows where it merges into the thread"
  },
  {
    "ID": 2,
    "BP": 74,
    "A": "a mostly outlined (unfilled) drop",
    "B": "a solid black drop",
    "type": "candidate-rule",
    "A1": "the drop is drawn as an outline only, not filled in",
    "B1": "the drop is filled with solid black"
  },
  {
    "ID": 3,
    "BP": 74,
    "A": "a curved, curling tail",
    "B": "a straight tail",
    "type": "candidate-rule",
    "A1": "the thread attached to the drop bends or curls",
    "B1": "the thread attached to the drop is a straight line"
  },
  {
    "ID": 4,
    "BP": 74,
    "A": "the tail attached at the top of the drop",
    "B": "the tail attached at the bottom of the drop",
    "type": "candidate-rule",
    "A1": "the thread leaves the blob from its upper side of the frame",
    "B1": "the thread leaves the blob from its lower side of the frame"
  },
  {
    "ID": 5,
    "BP": 74,
    "A": "a tail shorter than the drop",
    "B": "a tail longer than the drop",
    "type": "candidate-rule",
    "A1": "the attached thread is shorter than the long axis of the blob",
    "B1": "the attached thread is longer than the long axis of the blob"
  },
  {
    "ID": 6,
    "BP": 74,
    "A": "a tail curling back toward the drop",
    "B": "a tail curving away from the drop",
    "type": "candidate-rule",
    "A1": "the thread hooks around so its tip points back at the blob",
    "B1": "the thread sweeps outward, with its tip pointing away from the blob"
  },
  {
    "ID": 1,
    "BP": 75,
    "A": "a triangle on the concave side of the curve",
    "B": "a triangle on the convex side of the curve",
    "type": "genuine-rule",
    "A1": "the small triangle lies on the hollow, inward-opening side of the arc",
    "B1": "the small triangle lies on the bulging, outward side of the arc"
  },
  {
    "ID": 2,
    "BP": 75,
    "A": "a triangle below or beside the curve's opening",
    "B": "a triangle above or under the curve's bulge",
    "type": "candidate-rule",
    "A1": "the triangle sits in the region toward which the arc opens vertically or sideways",
    "B1": "the triangle sits opposite the arc's opening direction"
  },
  {
    "ID": 3,
    "BP": 75,
    "A": "a triangle far from the curve",
    "B": "a triangle touching or close to the curve",
    "type": "candidate-rule",
    "A1": "a clear gap separates the triangle from the arc",
    "B1": "the triangle nearly touches the end or body of the arc"
  },
  {
    "ID": 4,
    "BP": 75,
    "A": "an upward-pointing triangle",
    "B": "a downward-pointing triangle",
    "type": "candidate-rule",
    "A1": "the triangle's apex points toward the top of the frame",
    "B1": "the triangle's apex points toward the bottom of the frame"
  },
  {
    "ID": 5,
    "BP": 75,
    "A": "a shallow, gently bent arc",
    "B": "a deep, strongly bent arc",
    "type": "candidate-rule",
    "A1": "the curve spans much less than a half circle",
    "B1": "the curve bends through roughly a half circle or more"
  },
  {
    "ID": 6,
    "BP": 75,
    "A": "a triangle smaller than the curve's span",
    "B": "a triangle comparable in size to the curve",
    "type": "candidate-rule",
    "A1": "the triangle is clearly smaller than the arc's overall extent",
    "B1": "the triangle is nearly as large as the arc itself"
  },
  {
    "ID": 1,
    "BP": 76,
    "A": "a shape narrowest at its middle",
    "B": "a shape widest at its middle",
    "type": "genuine-rule",
    "A1": "the long sides curve inward, giving a bone or dumbbell shape pinched at mid-length and flaring at both ends",
    "B1": "the long sides bulge outward and the concave notches sit at the two short ends, giving a pillow-like shape"
  },
  {
    "ID": 2,
    "BP": 76,
    "A": "a strongly elongated figure",
    "B": "a compact, rounded figure",
    "type": "candidate-rule",
    "A1": "the shape is at least twice as long as it is wide",
    "B1": "length and width are roughly equal"
  },
  {
    "ID": 3,
    "BP": 76,
    "A": "a shape tilted diagonally",
    "B": "a shape aligned with the frame edges",
    "type": "candidate-rule",
    "A1": "the long axis runs at an oblique angle to the frame",
    "B1": "the long axis is horizontal or vertical"
  },
  {
    "ID": 4,
    "BP": 76,
    "A": "a small figure",
    "B": "a large figure",
    "type": "candidate-rule",
    "A1": "the outline covers only a small fraction of the frame",
    "B1": "the outline fills a large portion of the frame"
  },
  {
    "ID": 5,
    "BP": 76,
    "A": "an outline with sharp corner points",
    "B": "a smoothly curved outline",
    "type": "candidate-rule",
    "A1": "the arcs meet in pointed cusps at the corners",
    "B1": "the arcs blend together without sharp corners"
  },
  {
    "ID": 6,
    "BP": 76,
    "A": "exactly one concave side",
    "B": "two concave sides",
    "type": "candidate-rule",
    "A1": "only one side of the outline curves inward",
    "B1": "two opposite sides of the outline curve inward"
  },
  {
    "ID": 1,
    "BP": 77,
    "A": "three lines from one point with equal angles between them",
    "B": "three lines from one point with unequal angles between them",
    "type": "genuine-rule",
    "A1": "the middle segment bisects the fan: the two angles between adjacent segments are approximately equal",
    "B1": "the middle segment leans toward one outer segment, so one adjacent angle is clearly smaller than the other"
  },
  {
    "ID": 2,
    "BP": 77,
    "A": "a fan spreading less than a right angle",
    "B": "a fan spreading more than a right angle",
    "type": "candidate-rule",
    "A1": "the total angle between the two outermost segments is under 90 degrees",
    "B1": "the total angle between the two outermost segments exceeds 90 degrees"
  },
  {
    "ID": 3,
    "BP": 77,
    "A": "segments of roughly equal length",
    "B": "one segment much longer than the others",
    "type": "candidate-rule",
    "A1": "all three segments radiating from the vertex are about the same length",
    "B1": "one of the three segments is noticeably longer than the other two"
  },
  {
    "ID": 4,
    "BP": 77,
    "A": "a vertex in the left half of the frame",
    "B": "a vertex in the right half of the frame",
    "type": "candidate-rule",
    "A1": "the common point where the three segments meet lies left of the frame's center",
    "B1": "the common point where the three segments meet lies right of the frame's center"
  },
  {
    "ID": 5,
    "BP": 77,
    "A": "the middle segment as the longest",
    "B": "an outer segment as the longest",
    "type": "candidate-rule",
    "A1": "the segment lying between the two outer ones is the longest of the three",
    "B1": "one of the two outermost segments of the fan is the longest"
  },
  {
    "ID": 6,
    "BP": 77,
    "A": "a fan opening upward or sideways",
    "B": "a fan opening downward",
    "type": "candidate-rule",
    "A1": "the three segments spread away from the vertex toward the top or a side of the frame",
    "B1": "the three segments spread away from the vertex toward the bottom of the frame"
  },
  {
    "ID": 1,
    "BP": 78,
    "A": "segments that meet at one point when extended",
    "B": "segments that do not meet at one point when extended",
    "type": "genuine-rule",
    "A1": "if each of the three line segments is prolonged into a full straight line, all three lines pass through a single common point",
    "B1": "the extended lines are parallel or cross at three separate points, never all in one common point"
  },
  {
    "ID": 2,
    "BP": 78,
    "A": "at least one nearly vertical segment",
    "B": "no vertical segment",
    "type": "candidate-rule",
    "A1": "one of the three segments stands upright or close to upright",
    "B1": "all segments lie horizontally or at shallow slants"
  },
  {
    "ID": 3,
    "BP": 78,
    "A": "no two segments parallel",
    "B": "two segments with the same orientation",
    "type": "candidate-rule",
    "A1": "the three segments all point in clearly different directions",
    "B1": "at least two of the segments run parallel to each other"
  },
  {
    "ID": 4,
    "BP": 78,
    "A": "segments of noticeably different lengths",
    "B": "segments of roughly equal length",
    "type": "candidate-rule",
    "A1": "the longest segment is clearly longer than the shortest one",
    "B1": "all three segments look about the same length"
  },
  {
    "ID": 5,
    "BP": 78,
    "A": "segments fanning out from one side",
    "B": "segments scattered around the frame",
    "type": "candidate-rule",
    "A1": "the segments spread outward like a fan from one side or corner of the frame",
    "B1": "the segments are placed independently with no shared origin side"
  },
  {
    "ID": 6,
    "BP": 78,
    "A": "a segment close to the frame edge",
    "B": "all segments well inside the frame",
    "type": "candidate-rule",
    "A1": "at least one segment lies near the border of the frame",
    "B1": "every segment keeps a clear margin from the border"
  },
  {
    "ID": 1,
    "BP": 79,
    "A": "the black circle nearer the white circle than the triangle",
    "B": "the black circle nearer the triangle than the white circle",
    "type": "genuine-rule",
    "A1": "each panel holds a black circle, a white circle and a triangle; the distance from the black circle to the white circle is always smaller than its distance to the triangle",
    "B1": "the distance from the black circle to the triangle is always smaller than its distance to the white circle"
  },
  {
    "ID": 2,
    "BP": 79,
    "A": "the triangle isolated from the two circles",
    "B": "the white circle isolated from the other shapes",
    "type": "candidate-rule",
    "A1": "the two circles form a pair while the triangle stands apart from both",
    "B1": "the black circle and triangle form a pair while the white circle stands apart"
  },
  {
    "ID": 3,
    "BP": 79,
    "A": "the triangle in the lower half",
    "B": "the triangle in the upper half",
    "type": "candidate-rule",
    "A1": "the triangle tends to sit below the horizontal midline of the frame",
    "B1": "the triangle tends to sit above the horizontal midline of the frame"
  },
  {
    "ID": 4,
    "BP": 79,
    "A": "the white circle between the other two shapes",
    "B": "the black circle between the other two shapes",
    "type": "candidate-rule",
    "A1": "reading along the line of the three shapes, the white circle occupies the middle position",
    "B1": "reading along the line of the three shapes, the black circle occupies the middle position"
  },
  {
    "ID": 5,
    "BP": 79,
    "A": "the three shapes forming an obtuse triangle",
    "B": "the three shapes forming an acute triangle",
    "type": "candidate-rule",
    "A1": "the triangle whose corners are the centres of the three shapes has one angle wider than 90 degrees",
    "B1": "the triangle whose corners are the centres of the three shapes has all angles narrower than 90 degrees"
  },
  {
    "ID": 6,
    "BP": 79,
    "A": "the black circle to the left of the triangle",
    "B": "the black circle to the right of the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 80,
    "A": "a cross equally far from both dots",
    "B": "a cross clearly closer to one dot",
    "type": "genuine-rule",
    "A1": "each panel has one cross and two dots; the cross lies at the same distance from each dot, i.e. on the perpendicular bisector of the dot pair",
    "B1": "the distance from the cross to one dot is much smaller than the distance to the other dot"
  },
  {
    "ID": 2,
    "BP": 80,
    "A": "dots closer to each other than to the cross",
    "B": "the cross nearer to a dot than the dots are to each other",
    "type": "candidate-rule",
    "A1": "the gap between the two dots is smaller than either dot's distance to the cross",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 80,
    "A": "the cross set apart from the dot pair",
    "B": "the cross sitting among the dots",
    "type": "candidate-rule",
    "A1": "the cross occupies its own region of the frame, away from where the two dots cluster",
    "B1": "the cross falls between or right beside the dots rather than in a separate area"
  },
  {
    "ID": 4,
    "BP": 80,
    "A": "three marks forming a broad triangle",
    "B": "three marks lying nearly in a line",
    "type": "candidate-rule",
    "A1": "the cross and the two dots span a wide, open triangle",
    "B1": "the cross and the two dots are close to collinear, forming a flattened triangle"
  },
  {
    "ID": 5,
    "BP": 80,
    "A": "the cross on the far side of the frame from the nearest dot",
    "B": "the cross touching-distance from one dot",
    "type": "candidate-rule",
    "A1": "no dot lies in the immediate neighbourhood of the cross",
    "B1": "one dot sits in the immediate neighbourhood of the cross"
  },
  {
    "ID": 6,
    "BP": 80,
    "A": "dots spread diagonally across the frame",
    "B": "dots stacked toward one corner",
    "type": "candidate-rule",
    "A1": "the two dots occupy opposite diagonal regions of the frame",
    "B1": "the two dots crowd toward the same corner or edge of the frame"
  },
  {
    "ID": 1,
    "BP": 81,
    "A": "black and white shapes in two separate groups",
    "B": "black and white shapes intermixed",
    "type": "genuine-rule",
    "A1": "a single straight line could divide the frame so all filled (black) shapes lie on one side and all outlined (white) shapes on the other",
    "B1": "filled and outlined shapes are interleaved; no straight line can separate the black shapes from the white ones"
  },
  {
    "ID": 2,
    "BP": 81,
    "A": "circles grouped apart from triangles",
    "B": "circles and triangles intermingled",
    "type": "candidate-rule",
    "A1": "shapes of the same type (circle or triangle) cluster together in one region of the frame",
    "B1": "circles and triangles are scattered among each other with no grouping by shape type"
  },
  {
    "ID": 3,
    "BP": 81,
    "A": "equal numbers of black and white shapes",
    "B": "unequal numbers of black and white shapes",
    "type": "candidate-rule",
    "A1": "the count of filled shapes matches the count of outlined shapes",
    "B1": "filled and outlined shapes occur in different quantities"
  },
  {
    "ID": 4,
    "BP": 81,
    "A": "every shape's nearest neighbor with the same fill",
    "B": "some shape's nearest neighbor with the opposite fill",
    "type": "candidate-rule",
    "A1": "each shape sits closest to another shape of matching fill (black next to black, white next to white)",
    "B1": "at least one shape is closest to a shape of the opposite fill"
  },
  {
    "ID": 5,
    "BP": 81,
    "A": "shapes arranged along a diagonal band",
    "B": "shapes spread around the frame's border",
    "type": "candidate-rule",
    "A1": "the shapes lie roughly along one diagonal strip of the frame",
    "B1": "the shapes are distributed near the edges, leaving the center comparatively empty"
  },
  {
    "ID": 6,
    "BP": 81,
    "A": "two identical shapes close together",
    "B": "no two identical shapes close together",
    "type": "candidate-rule",
    "A1": "at least one pair of shapes of the same type and fill appear side by side",
    "B1": "identical shapes, when present, are placed far apart from each other"
  },
  {
    "ID": 1,
    "BP": 82,
    "A": "the circle set off to one side of the crosses",
    "B": "the circle flanked by crosses on opposite sides",
    "type": "genuine-rule",
    "A1": "the crosses lie predominantly in one direction from the circle, so the circle sits beside or beyond the group rather than being enclosed by it",
    "B1": "crosses lie on opposite sides of the circle (e.g., left and right), so the circle falls within the spread of the group"
  },
  {
    "ID": 2,
    "BP": 82,
    "A": "the circle on the concave side of the crosses' curve",
    "B": "the circle on the convex side of the crosses' curve",
    "type": "candidate-rule",
    "A1": "the crosses trace a bent chain or arc; the circle sits in the hollow of the bend",
    "B1": "the circle lies on the outward-bulging side of the chain of crosses"
  },
  {
    "ID": 3,
    "BP": 82,
    "A": "the circle outside the polygon suggested by the crosses",
    "B": "the circle inside the polygon suggested by the crosses",
    "type": "candidate-rule",
    "A1": "joining the crosses in order outlines a polygon; the circle falls outside that outline",
    "B1": "joining the crosses in order outlines a polygon that contains the circle"
  },
  {
    "ID": 4,
    "BP": 82,
    "A": "the circle farther from its nearest cross than the crosses' own spacing",
    "B": "the circle closer to a cross than the crosses' own spacing",
    "type": "candidate-rule",
    "A1": "the gap between the circle and the nearest cross exceeds the typical distance between neighbouring crosses",
    "B1": "the circle sits nearer to some cross than neighbouring crosses are to each other, so it blends into the group"
  },
  {
    "ID": 5,
    "BP": 82,
    "A": "an odd number of crosses",
    "B": "an even number of crosses",
    "type": "candidate-rule",
    "A1": "three or five crosses accompany the circle",
    "B1": "four crosses (occasionally more, but an even count) accompany the circle"
  },
  {
    "ID": 6,
    "BP": 82,
    "A": "crosses gathered into a tight group",
    "B": "crosses spread widely over the frame",
    "type": "candidate-rule",
    "A1": "the crosses huddle together, occupying only a small part of the frame",
    "B1": "the crosses are scattered so that they span most of the frame"
  },
  {
    "ID": 1,
    "BP": 83,
    "A": "the circle inside the group of crosses",
    "B": "the circle outside the group of crosses",
    "type": "genuine-rule",
    "A1": "the crosses surround the circle on all sides; the circle lies within the area they span",
    "B1": "the circle sits beyond the cluster of crosses, so a straight line could separate it from all of them"
  },
  {
    "ID": 2,
    "BP": 83,
    "A": "the circle near the middle of the frame",
    "B": "the circle near an edge or corner",
    "type": "candidate-rule",
    "A1": "the circle is placed in the central region of the frame",
    "B1": "the circle is placed close to the frame border"
  },
  {
    "ID": 3,
    "BP": 83,
    "A": "four or more crosses",
    "B": "fewer than four crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 83,
    "A": "crosses spread over the whole frame",
    "B": "crosses clustered in one region",
    "type": "candidate-rule",
    "A1": "the crosses are scattered widely, reaching most parts of the frame",
    "B1": "the crosses occupy only a limited part of the frame"
  },
  {
    "ID": 5,
    "BP": 83,
    "A": "a cross below the circle",
    "B": "no cross below the circle",
    "type": "candidate-rule",
    "A1": "at least one cross lies lower in the frame than the circle",
    "B1": "all crosses are level with or higher than the circle"
  },
  {
    "ID": 6,
    "BP": 83,
    "A": "the circle roughly equidistant from its neighboring crosses",
    "B": "the circle much closer to one cross than the others",
    "type": "candidate-rule",
    "A1": "the nearest crosses lie at similar distances around the circle",
    "B1": "one cross is clearly the circle's closest neighbor while the rest are farther away"
  },
  {
    "ID": 1,
    "BP": 84,
    "A": "a square outside the dotted outline",
    "B": "a square inside the dotted outline",
    "type": "genuine-rule",
    "A1": "the small square lies outside the region enclosed by the outline of circles, even when it sits in a concave notch of the outline",
    "B1": "the small square lies within the region enclosed by the outline of circles"
  },
  {
    "ID": 2,
    "BP": 84,
    "A": "a square close to the dot outline",
    "B": "a square far from the dot outline",
    "type": "candidate-rule",
    "A1": "the square sits adjacent to or touching the chain of circles",
    "B1": "the square is well separated from the chain of circles, near the middle of the enclosed area"
  },
  {
    "ID": 3,
    "BP": 84,
    "A": "an open chain of dots",
    "B": "a closed chain of dots",
    "type": "candidate-rule",
    "A1": "the outline of circles has a gap and does not fully close on itself",
    "B1": "the outline of circles forms a fully closed loop"
  },
  {
    "ID": 4,
    "BP": 84,
    "A": "a concave dot outline",
    "B": "a convex dot outline",
    "type": "candidate-rule",
    "A1": "the outline of circles bends inward somewhere, creating an indentation",
    "B1": "the outline of circles bulges outward everywhere, with no indentation"
  },
  {
    "ID": 5,
    "BP": 84,
    "A": "a square away from the frame center",
    "B": "a square near the frame center",
    "type": "candidate-rule",
    "A1": "the small square sits toward an edge or corner of the panel",
    "B1": "the small square sits in the central area of the panel"
  },
  {
    "ID": 6,
    "BP": 84,
    "A": "more than twenty dots",
    "B": "twenty dots or fewer",
    "type": "candidate-rule",
    "A1": "the outline is drawn with a larger number of small circles",
    "B1": "the outline is drawn with a smaller number of small circles"
  },
  {
    "ID": 1,
    "BP": 85,
    "A": "three line segments",
    "B": "five line segments",
    "type": "genuine-rule",
    "A1": "each diagram is drawn from exactly three straight strokes, whether separate, joined, or crossing",
    "B1": "each diagram is drawn from exactly five straight strokes, whether separate, joined, or crossing"
  },
  {
    "ID": 2,
    "BP": 85,
    "A": "a simple, sparse figure",
    "B": "a dense, busy figure",
    "type": "candidate-rule",
    "A1": "only a small amount of ink with few intersections",
    "B1": "more strokes and crossings make the figure look cluttered"
  },
  {
    "ID": 3,
    "BP": 85,
    "A": "at most one closed region",
    "B": "multiple enclosed regions",
    "type": "candidate-rule",
    "A1": "the strokes enclose no more than one area, as in the triangle",
    "B1": "crossings and joins appear to fence off several separate areas"
  },
  {
    "ID": 4,
    "BP": 85,
    "A": "no more than two crossing points",
    "B": "three or more crossing points",
    "type": "candidate-rule",
    "A1": "pairs of strokes intersect at most twice in the whole diagram",
    "B1": "the strokes intersect one another at three or more points"
  },
  {
    "ID": 5,
    "BP": 85,
    "A": "an odd shape resembling a letter",
    "B": "no letter-like form",
    "type": "candidate-rule",
    "A1": "figures suggest letters such as Y, N, or A",
    "B1": "the arrangements do not resemble any letter of the alphabet"
  },
  {
    "ID": 6,
    "BP": 85,
    "A": "strokes meeting at wide angles",
    "B": "strokes meeting at sharp angles",
    "type": "candidate-rule",
    "A1": "where lines join or cross, the angles tend to be open and blunt",
    "B1": "joins and crossings tend to form narrow, acute angles"
  },
  {
    "ID": 1,
    "BP": 86,
    "A": "three free line ends",
    "B": "five free line ends",
    "type": "genuine-rule",
    "A1": "counting the loose endpoints (tips) of the line figure always gives exactly three",
    "B1": "counting the loose endpoints (tips) of the line figure always gives exactly five"
  },
  {
    "ID": 2,
    "BP": 86,
    "A": "at most one branch point",
    "B": "lines meeting or crossing at several points",
    "type": "candidate-rule",
    "A1": "the figure forks at no more than a single junction",
    "B1": "the figure appears to contain multiple junctions or crossings"
  },
  {
    "ID": 3,
    "BP": 86,
    "A": "fewer than six line segments",
    "B": "six or more line segments",
    "type": "candidate-rule",
    "A1": "the whole figure can be traced with only a few straight strokes",
    "B1": "the figure is built from many straight strokes"
  },
  {
    "ID": 4,
    "BP": 86,
    "A": "no crossing lines",
    "B": "at least one crossing",
    "type": "candidate-rule",
    "A1": "segments meet at endpoints but never pass through one another",
    "B1": "somewhere two segments intersect and pass through each other"
  },
  {
    "ID": 5,
    "BP": 86,
    "A": "a sparse, open figure",
    "B": "a dense, tangled figure",
    "type": "candidate-rule",
    "A1": "little ink and wide empty space around the strokes",
    "B1": "more strokes packed into the same area, giving a cluttered look"
  },
  {
    "ID": 6,
    "BP": 86,
    "A": "a roughly symmetric layout",
    "B": "an asymmetric layout",
    "type": "candidate-rule",
    "A1": "the figure looks nearly balanced about a vertical axis",
    "B1": "the figure has no apparent axis of symmetry"
  },
  {
    "ID": 1,
    "BP": 87,
    "A": "four line segments",
    "B": "five line segments",
    "type": "genuine-rule",
    "A1": "counting every straight piece between endpoints, bends and crossing points, each diagram contains exactly four segments; e.g. the X counts as four because the crossing splits each line in two",
    "B1": "by the same counting, each diagram contains exactly five segments; e.g. the pentagon has five sides and the H's crossbar splits the uprights into five pieces"
  },
  {
    "ID": 2,
    "BP": 87,
    "A": "an even number of strokes",
    "B": "an odd number of strokes",
    "type": "candidate-rule",
    "A1": "the total count of drawn straight strokes is even",
    "B1": "the total count of drawn straight strokes is odd"
  },
  {
    "ID": 3,
    "BP": 87,
    "A": "no crossing lines",
    "B": "at least one pair of crossing lines",
    "type": "candidate-rule",
    "A1": "lines may meet at endpoints but never pass through one another",
    "B1": "somewhere two lines cross and continue past the crossing point"
  },
  {
    "ID": 4,
    "BP": 87,
    "A": "at most one junction point",
    "B": "two or more junction points",
    "type": "candidate-rule",
    "A1": "points where lines meet or cross occur no more than once per diagram",
    "B1": "lines meet or cross at two or more distinct points"
  },
  {
    "ID": 5,
    "BP": 87,
    "A": "no closed region",
    "B": "a closed region may occur",
    "type": "candidate-rule",
    "A1": "apart from the frame, the lines never enclose an area",
    "B1": "some diagrams enclose an area, such as the pentagon"
  },
  {
    "ID": 6,
    "BP": 87,
    "A": "a single connected figure or exactly four pieces",
    "B": "a branching connected figure or five pieces",
    "type": "candidate-rule",
    "A1": "the content is either one connected figure or four separate strokes",
    "B1": "the content is either a figure with a branch point or five separate strokes"
  },
  {
    "ID": 1,
    "BP": 88,
    "A": "exactly three shapes",
    "B": "exactly five shapes",
    "type": "genuine-rule",
    "A1": "each frame contains three rounded pill shapes, whether separate or touching, filled or outlined",
    "B1": "each frame contains five rounded pill shapes, whether separate or touching, filled or outlined"
  },
  {
    "ID": 2,
    "BP": 88,
    "A": "fewer than four shapes",
    "B": "more than four shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 88,
    "A": "at most one cluster of touching shapes",
    "B": "shapes forming two or more groups",
    "type": "candidate-rule",
    "A1": "the touching shapes, if any, form a single connected group",
    "B1": "the shapes are distributed over at least two separate groups or clusters"
  },
  {
    "ID": 4,
    "BP": 88,
    "A": "at most two black shapes",
    "B": "at least three black shapes",
    "type": "candidate-rule",
    "A1": "no more than two of the pills are filled solid black",
    "B1": "three or more of the pills are filled solid black"
  },
  {
    "ID": 5,
    "BP": 88,
    "A": "an odd number of white shapes",
    "B": "an even number of white shapes",
    "type": "candidate-rule",
    "A1": "the count of outlined (unfilled) pills is odd",
    "B1": "the count of outlined (unfilled) pills is even"
  },
  {
    "ID": 6,
    "BP": 88,
    "A": "shapes confined to one half of the frame",
    "B": "shapes spread across the whole frame",
    "type": "candidate-rule",
    "A1": "all pills fit within roughly half of the frame's area",
    "B1": "the pills are scattered so that both halves of the frame are occupied"
  },
  {
    "ID": 1,
    "BP": 89,
    "A": "exactly three groups of cells",
    "B": "exactly five groups of cells",
    "type": "genuine-rule",
    "A1": "the pills cluster into exactly three separate groups; group sizes and shading vary freely",
    "B1": "the pills cluster into exactly five separate groups, regardless of group size or shading"
  },
  {
    "ID": 2,
    "BP": 89,
    "A": "at most three shaded cells",
    "B": "more than three shaded cells",
    "type": "candidate-rule",
    "A1": "no panel contains more than three black pills",
    "B1": "each panel contains four or more black pills in total"
  },
  {
    "ID": 3,
    "BP": 89,
    "A": "a group of four or more cells",
    "B": "only groups of three or fewer cells",
    "type": "candidate-rule",
    "A1": "at least one cluster in every panel contains four or more touching pills",
    "B1": "no cluster contains more than three touching pills"
  },
  {
    "ID": 4,
    "BP": 89,
    "A": "groups arranged in a triangle",
    "B": "groups scattered irregularly",
    "type": "candidate-rule",
    "A1": "the group centers form a rough triangular layout",
    "B1": "the group centers show no simple triangular arrangement"
  },
  {
    "ID": 5,
    "BP": 89,
    "A": "fewer than ten cells in total",
    "B": "ten or more cells in total",
    "type": "candidate-rule",
    "A1": "counting every pill across all groups gives fewer than ten",
    "B1": "counting every pill across all groups gives ten or more"
  },
  {
    "ID": 6,
    "BP": 89,
    "A": "at least one isolated single cell",
    "B": "no isolated single cell",
    "type": "candidate-rule",
    "A1": "every panel includes a group consisting of just one pill",
    "B1": "every group contains two or more pills"
  },
  {
    "ID": 1,
    "BP": 90,
    "A": "three groups of white circles",
    "B": "four groups of white circles",
    "type": "genuine-rule",
    "A1": "each run of adjacent outline circles counts as one group; the black circles act only as separators, and every panel contains exactly three such groups",
    "B1": "counting each run of adjacent outline circles as one group, with black circles as separators, every panel contains exactly four groups"
  },
  {
    "ID": 2,
    "BP": 90,
    "A": "three black circles",
    "B": "four black circles",
    "type": "candidate-rule",
    "A1": "the filled circles scattered along the chains total exactly three per panel",
    "B1": "the filled circles scattered along the chains total exactly four per panel"
  },
  {
    "ID": 3,
    "BP": 90,
    "A": "an odd number of white circles",
    "B": "an even number of white circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 90,
    "A": "three separate figures",
    "B": "four separate figures",
    "type": "candidate-rule",
    "A1": "the panel contains exactly three disconnected chains or single circles",
    "B1": "the panel contains exactly four disconnected chains or single circles"
  },
  {
    "ID": 5,
    "BP": 90,
    "A": "a largest white run of three circles",
    "B": "a largest white run of four circles",
    "type": "candidate-rule",
    "A1": "the longest stretch of adjacent white circles anywhere in the panel is three circles long",
    "B1": "the longest stretch of adjacent white circles anywhere in the panel is four circles long"
  },
  {
    "ID": 6,
    "BP": 90,
    "A": "a circle total divisible by three",
    "B": "a circle total divisible by four",
    "type": "candidate-rule",
    "A1": "counting both white and black circles, the total in each panel is a multiple of three",
    "B1": "counting both white and black circles, the total in each panel is a multiple of four"
  },
  {
    "ID": 1,
    "BP": 91,
    "A": "three of something",
    "B": "four of something",
    "type": "genuine-rule",
    "A1": "each diagram shows a count of three: three branches, three sides, three squares, three notches, three ticks, or three dots",
    "B1": "each diagram shows a count of four: four sides, four tabs, four cross-ticks, four circles, four rays, or four leaves"
  },
  {
    "ID": 2,
    "BP": 91,
    "A": "an odd number of parts",
    "B": "an even number of parts",
    "type": "candidate-rule",
    "A1": "the countable elements in each diagram total an odd number",
    "B1": "the countable elements in each diagram total an even number"
  },
  {
    "ID": 3,
    "BP": 91,
    "A": "a figure without any symmetry axis",
    "B": "a figure with at least one symmetry axis",
    "type": "candidate-rule",
    "A1": "the arrangement cannot be mirrored onto itself",
    "B1": "the arrangement admits a mirror reflection onto itself"
  },
  {
    "ID": 4,
    "BP": 91,
    "A": "fewer elements than in the facing set",
    "B": "more elements than in the facing set",
    "type": "candidate-rule",
    "A1": "the marked or repeated features number below a middle threshold",
    "B1": "the marked or repeated features number above a middle threshold"
  },
  {
    "ID": 5,
    "BP": 91,
    "A": "a branching or triple-point structure",
    "B": "a closed or fully rounded structure",
    "type": "candidate-rule",
    "A1": "lines meet at junctions of three or elements cluster in threes",
    "B1": "figures form closed loops or rounded repeated units"
  },
  {
    "ID": 6,
    "BP": 91,
    "A": "elements grouped around a single center",
    "B": "elements spread along a line or ring",
    "type": "candidate-rule",
    "A1": "the repeated features radiate from or gather about one point",
    "B1": "the repeated features are strung out along a path or around a perimeter"
  },
  {
    "ID": 1,
    "BP": 92,
    "A": "a dot chain that never crosses or branches",
    "B": "a dot chain that crosses itself or branches",
    "type": "genuine-rule",
    "A1": "the dots trace one simple open curve with exactly two loose ends; no point of the chain is shared by more than two neighbouring stretches",
    "B1": "somewhere along the chain two stretches of dots cross, or three or more stretches meet at a junction, giving the figure more than two loose ends"
  },
  {
    "ID": 2,
    "BP": 92,
    "A": "an even number of filled dots",
    "B": "an odd number of filled dots",
    "type": "candidate-rule",
    "A1": "counting only the solid black dots in the chain gives 0, 2 or 4",
    "B1": "counting only the solid black dots in the chain gives 1 or 3"
  },
  {
    "ID": 3,
    "BP": 92,
    "A": "a chain that curls into a spiral",
    "B": "a chain with no inward spiral",
    "type": "candidate-rule",
    "A1": "at least one end of the dot chain winds inward on itself like a coil",
    "B1": "the chain wiggles or bends but never coils inward"
  },
  {
    "ID": 4,
    "BP": 92,
    "A": "chain ends far apart",
    "B": "chain ends close together",
    "type": "candidate-rule",
    "A1": "the two free ends of the dot chain lie in distant parts of the frame",
    "B1": "the free ends of the dot chain finish near one another"
  },
  {
    "ID": 5,
    "BP": 92,
    "A": "filled dots only on curved stretches",
    "B": "a filled dot at a straight stretch",
    "type": "candidate-rule",
    "A1": "every solid black dot sits where the chain is bending",
    "B1": "at least one solid black dot sits on a straight run of dots"
  },
  {
    "ID": 6,
    "BP": 92,
    "A": "more than twenty dots",
    "B": "twenty dots or fewer",
    "type": "candidate-rule",
    "A1": "the chain is long, made of over twenty small circles",
    "B1": "the chain is shorter, made of at most twenty small circles"
  },
  {
    "ID": 1,
    "BP": 93,
    "A": "an empty circle at the junction",
    "B": "a black circle at the junction",
    "type": "genuine-rule",
    "A1": "each figure is a chain of small circles that crosses or branches; the circle located exactly at the crossing or branch point is unfilled, while the black circles lie elsewhere along the chains",
    "B1": "the circle located exactly at the point where the chains cross or branch is filled solid black"
  },
  {
    "ID": 2,
    "BP": 93,
    "A": "exactly three black circles",
    "B": "a different number of black circles",
    "type": "candidate-rule",
    "A1": "each chain figure contains precisely three filled circles among the outlined ones",
    "B1": "the count of filled circles is two, four, or some number other than three"
  },
  {
    "ID": 3,
    "BP": 93,
    "A": "a black circle at a chain end",
    "B": "no black circle at any chain end",
    "type": "candidate-rule",
    "A1": "at least one filled circle sits at a free endpoint of the dotted curve",
    "B1": "all endpoints of the dotted curves are empty circles; filled circles occur only in the interior"
  },
  {
    "ID": 4,
    "BP": 93,
    "A": "two curves that cross over",
    "B": "curves that branch without crossing",
    "type": "candidate-rule",
    "A1": "the dotted chains pass through one another, continuing on both sides of the meeting point",
    "B1": "the dotted chains merely meet or fork at a point rather than passing through each other"
  },
  {
    "ID": 5,
    "BP": 93,
    "A": "two adjacent black circles",
    "B": "black circles all separated",
    "type": "candidate-rule",
    "A1": "somewhere along the chain two filled circles occur next to each other",
    "B1": "every filled circle is surrounded by empty circles on both sides along the chain"
  },
  {
    "ID": 6,
    "BP": 93,
    "A": "more than sixteen circles",
    "B": "sixteen or fewer circles",
    "type": "candidate-rule",
    "A1": "counting both filled and empty circles, the chain contains more than sixteen dots",
    "B1": "counting both filled and empty circles, the chain contains at most sixteen dots"
  },
  {
    "ID": 1,
    "BP": 94,
    "A": "the filled circle inside the chain",
    "B": "the filled circle at an end of the chain",
    "type": "genuine-rule",
    "A1": "the single black circle lies in the interior of the chain of circles, with neighboring circles on more than one side",
    "B1": "the single black circle is a terminal circle of the chain, touching only one neighbor"
  },
  {
    "ID": 2,
    "BP": 94,
    "A": "a branching chain of circles",
    "B": "a single unbranched chain",
    "type": "candidate-rule",
    "A1": "the chain splits into three or more arms at a junction point",
    "B1": "the circles form one simple path with no junctions"
  },
  {
    "ID": 3,
    "BP": 94,
    "A": "the black circle near the top of the figure",
    "B": "the black circle near the bottom of the figure",
    "type": "candidate-rule",
    "A1": "the filled circle sits in the upper portion of the arrangement of circles",
    "B1": "the filled circle sits in the lower portion of the arrangement of circles"
  },
  {
    "ID": 4,
    "BP": 94,
    "A": "a curved or bent chain",
    "B": "a straight chain",
    "type": "candidate-rule",
    "A1": "the line of circles bends, arches, or branches rather than running straight",
    "B1": "the circles lie along a single straight line"
  },
  {
    "ID": 5,
    "BP": 94,
    "A": "an odd number of circles",
    "B": "an even number of circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 94,
    "A": "the black circle centered horizontally",
    "B": "the black circle near a side of the frame",
    "type": "candidate-rule",
    "A1": "the filled circle lies close to the vertical midline of the frame",
    "B1": "the filled circle lies close to the left or right edge of the frame"
  },
  {
    "ID": 1,
    "BP": 95,
    "A": "vertical hatching",
    "B": "horizontal hatching",
    "type": "genuine-rule",
    "A1": "each shape is filled with parallel vertical stripes",
    "B1": "each shape is filled with parallel horizontal stripes"
  },
  {
    "ID": 2,
    "BP": 95,
    "A": "stripes parallel to the frame's sides",
    "B": "stripes parallel to the frame's top and bottom",
    "type": "candidate-rule",
    "A1": "the fill lines run in the same direction as the left and right edges of the frame",
    "B1": "the fill lines run in the same direction as the upper and lower edges of the frame"
  },
  {
    "ID": 3,
    "BP": 95,
    "A": "more stripes than a Set B shape of similar size",
    "B": "fewer, more widely spaced stripes",
    "type": "candidate-rule",
    "A1": "the vertical hatching appears denser, with narrower gaps between lines",
    "B1": "the horizontal hatching appears sparser, with wider gaps between lines"
  },
  {
    "ID": 4,
    "BP": 95,
    "A": "outlines with straight edges or smooth convex curves",
    "B": "at least one concave or notched outline",
    "type": "candidate-rule",
    "A1": "triangles, quadrilaterals, a circle and an ellipse — all convex",
    "B1": "several Set B shapes have inward dents, like the notched circle and the kidney shape"
  },
  {
    "ID": 5,
    "BP": 95,
    "A": "a shape taller than it is wide",
    "B": "a shape wider than it is tall",
    "type": "candidate-rule",
    "A1": "the vertically striped figures tend to be elongated top-to-bottom",
    "B1": "the horizontally striped figures tend to be elongated left-to-right"
  },
  {
    "ID": 6,
    "BP": 95,
    "A": "stripes that meet the outline at its top and bottom",
    "B": "stripes that meet the outline at its left and right sides",
    "type": "candidate-rule",
    "A1": "the fill lines start and end on the upper and lower parts of the shape's boundary",
    "B1": "the fill lines start and end on the left and right parts of the shape's boundary"
  },
  {
    "ID": 1,
    "BP": 96,
    "A": "a hatched region shaped like a triangle",
    "B": "a hatched region shaped like a quadrilateral",
    "type": "genuine-rule",
    "A1": "the parallel hatch lines fill an outline with exactly three corners; the sides may be slightly curved but there are always three vertices",
    "B1": "the hatch lines fill an outline with exactly four corners, e.g. a square, diamond, dart or trapezoid, sometimes with curved sides"
  },
  {
    "ID": 2,
    "BP": 96,
    "A": "hatch lines parallel to one side of the outline",
    "B": "hatch lines crossing all sides at an angle",
    "type": "candidate-rule",
    "A1": "the shading strokes run parallel to one edge of the implied shape",
    "B1": "no edge of the implied shape is parallel to the shading strokes"
  },
  {
    "ID": 3,
    "BP": 96,
    "A": "an outline with a single topmost or bottommost point",
    "B": "an outline with a flat top or bottom edge",
    "type": "candidate-rule",
    "A1": "the shape narrows to a single extreme point vertically",
    "B1": "the shape ends in a roughly horizontal edge at top or bottom"
  },
  {
    "ID": 4,
    "BP": 96,
    "A": "fewer than 25 hatch lines",
    "B": "25 or more hatch lines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 96,
    "A": "a convex hatched shape",
    "B": "a shape with a concave indentation",
    "type": "candidate-rule",
    "A1": "the implied outline bulges outward everywhere with no inward dents",
    "B1": "at least part of the implied outline caves inward"
  },
  {
    "ID": 6,
    "BP": 96,
    "A": "a shape occupying less than half the frame",
    "B": "a shape occupying more than half the frame",
    "type": "candidate-rule",
    "A1": "the hatched figure covers a minority of the frame area",
    "B1": "the hatched figure spreads across most of the frame"
  },
  {
    "ID": 1,
    "BP": 97,
    "A": "a triangle",
    "B": "a circle",
    "type": "genuine-rule",
    "A1": "each frame shows one triangular figure, regardless of rendering style (solid, outline, dashed, dotted, hatched or speckled)",
    "B1": "each frame shows one circular figure, regardless of rendering style (solid, outline, dashed, patterned, or formed of small marks)"
  },
  {
    "ID": 2,
    "BP": 97,
    "A": "a shape with straight edges only",
    "B": "a shape with a curved boundary",
    "type": "candidate-rule",
    "A1": "the overall figure is bounded by straight line segments",
    "B1": "the overall figure is bounded by a curved, round outline"
  },
  {
    "ID": 3,
    "BP": 97,
    "A": "a shape with corners",
    "B": "a shape without corners",
    "type": "candidate-rule",
    "A1": "the figure's outline has sharp vertices",
    "B1": "the figure's outline is smooth with no vertices"
  },
  {
    "ID": 4,
    "BP": 97,
    "A": "a three-sided figure",
    "B": "a many-element round figure",
    "type": "candidate-rule",
    "A1": "the figure can be seen as having exactly three sides",
    "B1": "the figure is round and often built from many small elements or lines"
  },
  {
    "ID": 5,
    "BP": 97,
    "A": "a shape narrower at one end",
    "B": "a shape equally wide in all directions",
    "type": "candidate-rule",
    "A1": "triangular figures taper toward one vertex",
    "B1": "circular figures have the same width whichever way they are measured"
  },
  {
    "ID": 6,
    "BP": 97,
    "A": "a figure lacking rotational symmetry",
    "B": "a figure with high rotational symmetry",
    "type": "candidate-rule",
    "A1": "a scalene or irregular triangle looks different after most rotations",
    "B1": "a circle looks the same after any rotation about its center"
  },
  {
    "ID": 1,
    "BP": 98,
    "A": "a triangle as the outlined shape",
    "B": "a quadrilateral as the outlined shape",
    "type": "genuine-rule",
    "A1": "regardless of the background texture, the single bold outlined figure has exactly three sides",
    "B1": "regardless of the background texture, the single bold outlined figure has exactly four sides"
  },
  {
    "ID": 2,
    "BP": 98,
    "A": "an outlined shape with at least one acute corner",
    "B": "an outlined shape with only near-right or obtuse corners",
    "type": "candidate-rule",
    "A1": "every triangle shows at least one sharply pointed angle smaller than 60 degrees",
    "B1": "the four-sided figures appear to have wide, blunt corners"
  },
  {
    "ID": 3,
    "BP": 98,
    "A": "a background made of parallel or freely scattered lines",
    "B": "a background made of crossing line families",
    "type": "candidate-rule",
    "A1": "the textures behind the shape run mostly in one direction or are irregular strokes",
    "B1": "the textures behind the shape form grids or cross-hatching where lines intersect"
  },
  {
    "ID": 4,
    "BP": 98,
    "A": "the outlined shape covering most of the frame",
    "B": "the outlined shape confined to the central region",
    "type": "candidate-rule",
    "A1": "the main figure spans a large fraction of the panel from edge to edge",
    "B1": "the main figure sits compactly near the middle, leaving wide margins"
  },
  {
    "ID": 5,
    "BP": 98,
    "A": "an outlined shape tilted off any horizontal base",
    "B": "an outlined shape resting on a roughly horizontal side",
    "type": "candidate-rule",
    "A1": "the figures are rotated so no side is parallel to the frame bottom",
    "B1": "each figure has one side that lies close to horizontal"
  },
  {
    "ID": 6,
    "BP": 98,
    "A": "an odd number of sides on the outlined shape",
    "B": "a shape with a pair of roughly parallel sides",
    "type": "candidate-rule",
    "A1": "the main figure has an odd side count (three sides)",
    "B1": "the four-sided figures include at least one pair of sides running in nearly the same direction"
  },
  {
    "ID": 1,
    "BP": 99,
    "A": "circle and triangle groups that overlap each other",
    "B": "circle and triangle groups that stay separate or nested",
    "type": "genuine-rule",
    "A1": "the region occupied by the circles and the region occupied by the triangles cross, so the boundaries of the two clusters intersect",
    "B1": "the two clusters never interpenetrate: they are either fully apart or one cluster lies entirely inside a ring formed by the other"
  },
  {
    "ID": 2,
    "BP": 99,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 99,
    "A": "triangles inside the loop of circles",
    "B": "triangles outside the loop of circles",
    "type": "candidate-rule",
    "A1": "at least one triangle lies within the ring traced by the circles",
    "B1": "all triangles lie outside the ring traced by the circles"
  },
  {
    "ID": 4,
    "BP": 99,
    "A": "the two shape groups touching",
    "B": "a visible gap between the two shape groups",
    "type": "candidate-rule",
    "A1": "some circle and some triangle are drawn immediately next to each other",
    "B1": "the circles and the triangles are separated by empty space everywhere"
  },
  {
    "ID": 5,
    "BP": 99,
    "A": "shapes scattered irregularly",
    "B": "shapes arranged in neat rings or rows",
    "type": "candidate-rule",
    "A1": "the shapes do not form clean, closed ring-like chains",
    "B1": "each kind of shape forms an orderly ring or aligned rows"
  },
  {
    "ID": 6,
    "BP": 99,
    "A": "circles concentrated on the left side",
    "B": "circles concentrated on the right side",
    "type": "candidate-rule",
    "A1": "the circle cluster sits mostly in the left half of the frame",
    "B1": "the circle cluster sits mostly in the right half of the frame"
  },
  {
    "ID": 1,
    "BP": 100,
    "A": "the letter A",
    "B": "the Cyrillic letter Б (B)",
    "type": "genuine-rule",
    "A1": "each frame contains the capital letter A drawn in a different typeface",
    "B1": "each frame contains the Cyrillic capital letter Б drawn in a different typeface"
  },
  {
    "ID": 2,
    "BP": 100,
    "A": "a roughly triangular outline",
    "B": "a rounded bowl on the right side",
    "type": "candidate-rule",
    "A1": "the figure narrows to a point or apex at the top, giving an overall triangular silhouette",
    "B1": "the figure includes a curved loop or bowl bulging to the right in its lower half"
  },
  {
    "ID": 3,
    "BP": 100,
    "A": "two legs reaching the bottom",
    "B": "a single vertical stem",
    "type": "candidate-rule",
    "A1": "the character stands on two separate strokes that touch the baseline",
    "B1": "the character is supported by one main upright stroke on its left"
  },
  {
    "ID": 4,
    "BP": 100,
    "A": "an enclosed hole in the upper half",
    "B": "an enclosed hole in the lower half",
    "type": "candidate-rule",
    "A1": "the counter (the enclosed white space) sits in the top part of the letter",
    "B1": "the counter sits in the bottom part of the letter"
  },
  {
    "ID": 5,
    "BP": 100,
    "A": "near left-right symmetry",
    "B": "a clearly asymmetric form",
    "type": "candidate-rule",
    "A1": "the letterform is approximately mirror-symmetric about a vertical axis",
    "B1": "the letterform has no vertical axis of mirror symmetry"
  },
  {
    "ID": 6,
    "BP": 100,
    "A": "a crossbar joining two slanted strokes",
    "B": "a horizontal bar only at the top",
    "type": "candidate-rule",
    "A1": "a horizontal stroke connects two diagonal strokes near the middle of the figure",
    "B1": "the only free horizontal stroke extends from the top of the vertical stem"
  }
]
