var rulesArray = [
  {
    "ID": 1,
    "BP": 1,
    "A": "an empty frame",
    "B": "a non-empty frame",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 1,
    "A": "no ink inside the border",
    "B": "at least one closed outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 1,
    "A": "perfect blank symmetry",
    "B": "contents placed off-centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 1,
    "A": "fewer than one object",
    "B": "exactly one connected figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 1,
    "A": "no curved lines",
    "B": "at least one curved line",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 1,
    "A": "nothing touching the border",
    "B": "a figure well clear of the border",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 2,
    "A": "one large shape",
    "B": "one small shape",
    "type": "genuine-rule",
    "A1": "the shape spans roughly half the frame or more",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 2,
    "A": "a shape covering the frame's centre",
    "B": "a shape away from the centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 2,
    "A": "a shape with a smooth or many-sided outline",
    "B": "a shape with few sharp corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 2,
    "A": "a shape drawn with thick lines",
    "B": "a shape drawn with thin lines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 2,
    "A": "a shape touching the left half of the frame",
    "B": "a shape kept in one corner region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 2,
    "A": "a convex overall silhouette",
    "B": "a concave or notched silhouette",
    "type": "candidate-rule",
    "A1": "convex: no part of the outline bends inward",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 3,
    "A": "outline shapes with white interiors",
    "B": "solid black filled shapes",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 3,
    "A": "exactly one shape per frame",
    "B": "at least one frame with two shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 3,
    "A": "shapes with at least one straight edge",
    "B": "shapes bounded only by curves",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
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
    "A": "a convex shape",
    "B": "a concave shape",
    "type": "candidate-rule",
    "A1": "no part of the outline bends inward",
    "B1": "some part of the outline bends inward"
  },
  {
    "ID": 6,
    "BP": 3,
    "A": "shapes larger than a quarter of the frame",
    "B": "shapes smaller than a quarter of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 4,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "genuine-rule",
    "A1": "no dents: every straight line between two points of the shape stays inside it",
    "B1": "the outline has at least one inward dent or notch"
  },
  {
    "ID": 2,
    "BP": 4,
    "A": "a smooth, regular shape",
    "B": "an irregular, wobbly shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 4,
    "A": "a familiar geometric figure",
    "B": "an abstract free-form figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 4,
    "A": "no interior angle sharper than a right angle pointing inward",
    "B": "a narrow inward-pointing wedge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 4,
    "A": "a shape wider than its indentations",
    "B": "a shape nearly split into two lobes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 4,
    "A": "an outline that a rubber band would fit snugly",
    "B": "an outline a rubber band would bridge over",
    "type": "candidate-rule",
    "A1": "",
    "B1": "a stretched band around the shape leaves gaps at the dents"
  },
  {
    "ID": 1,
    "BP": 5,
    "A": "straight-sided polygons",
    "B": "smoothly curved outlines",
    "type": "genuine-rule",
    "A1": "",
    "B1": "the outline contains no straight segments or corners"
  },
  {
    "ID": 2,
    "BP": 5,
    "A": "outlines with sharp corners",
    "B": "outlines without any corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 5,
    "A": "convex shapes",
    "B": "at least one concave dent in the outline",
    "type": "candidate-rule",
    "A1": "the outline never bends inward",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 5,
    "A": "shapes drawn with thin lines",
    "B": "shapes drawn with thicker lines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
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
    "A": "an even number of sides",
    "B": "no countable sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 6,
    "A": "three sides (triangles)",
    "B": "four sides (quadrilaterals)",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 6,
    "A": "a sharply pointed corner",
    "B": "only blunt corners",
    "type": "candidate-rule",
    "A1": "at least one angle much smaller than a right angle",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 6,
    "A": "an elongated shape",
    "B": "a compact shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 6,
    "A": "no pair of parallel sides",
    "B": "at least one pair of parallel sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 6,
    "A": "filled shapes only",
    "B": "outlined shapes only",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 6,
    "A": "a shape touching the left half of the frame",
    "B": "a shape kept in the right half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 7,
    "A": "a figure elongated vertically",
    "B": "a figure elongated horizontally",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 7,
    "A": "a figure taller than the frame's half-height",
    "B": "a figure shorter than the frame's half-height",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 7,
    "A": "a figure placed off-centre",
    "B": "a figure centred in the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 7,
    "A": "a thin, narrow figure",
    "B": "a broad, thick figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 7,
    "A": "an open or single-stroke outline",
    "B": "a closed outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 7,
    "A": "a figure with a straight long axis",
    "B": "a figure with a wavy long axis",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 8,
    "A": "the figure in the right half of the frame",
    "B": "the figure in the left half of the frame",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 8,
    "A": "the figure far from the frame's left edge",
    "B": "the figure close to the frame's left edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 8,
    "A": "a shape drawn below the frame's top edge with clear space above",
    "B": "a shape touching or nearly touching the top or bottom border",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 8,
    "A": "a convex or nearly convex outline",
    "B": "an outline with a clear indentation",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the boundary curves inward at some point"
  },
  {
    "ID": 5,
    "BP": 8,
    "A": "a larger figure relative to its frame",
    "B": "a smaller figure relative to its frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 8,
    "A": "a figure in the lower-right diagonal half of the frame",
    "B": "a figure in the upper-left diagonal half of the frame",
    "type": "candidate-rule",
    "A1": "split along the diagonal from top-left to bottom-right",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 9,
    "A": "a smooth outline",
    "B": "a jagged, zigzag outline",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 9,
    "A": "fewer than ten corners",
    "B": "dozens of sharp corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 9,
    "A": "a short outline for its size",
    "B": "a long outline for its size",
    "type": "candidate-rule",
    "A1": "perimeter compared with the area it encloses",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 9,
    "A": "a convex or gently curved figure",
    "B": "many deep notches cut into the figure",
    "type": "candidate-rule",
    "A1": "convex: no part of the boundary bends inward",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 9,
    "A": "a recognizable basic shape",
    "B": "an irregular, hard-to-name shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 9,
    "A": "long, uninterrupted boundary segments",
    "B": "only very short boundary segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 10,
    "A": "a triangle",
    "B": "a quadrilateral",
    "type": "genuine-rule",
    "A1": "the overall outline has three corners, even if the edges are jagged or wavy",
    "B1": "the overall outline has four corners, even if the edges are jagged"
  },
  {
    "ID": 2,
    "BP": 10,
    "A": "an outline with a pointed top",
    "B": "an outline with a flat or rounded top",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 10,
    "A": "a shape narrower at one end",
    "B": "a shape of even width throughout",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 10,
    "A": "at least one smooth straight side",
    "B": "no perfectly straight sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 10,
    "A": "a shape taller than it is wide",
    "B": "a shape wider than it is tall",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 10,
    "A": "an odd number of sides",
    "B": "an even number of sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 11,
    "A": "an elongated shape, much longer than it is wide",
    "B": "a compact shape, about as wide as it is tall",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 11,
    "A": "a shape tilted away from vertical or horizontal",
    "B": "an upright, unrotated shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 11,
    "A": "at least one concave stretch of outline",
    "B": "a fully convex outline",
    "type": "candidate-rule",
    "A1": "concave: the outline bends inward somewhere",
    "B1": "convex: no part of the outline bends inward"
  },
  {
    "ID": 4,
    "BP": 11,
    "A": "a shape touching or nearly reaching a frame edge",
    "B": "a shape well clear of the frame edges",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 11,
    "A": "a shape with a sharp, pointed end",
    "B": "a shape with no sharp points",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 11,
    "A": "a large figure spanning most of the frame",
    "B": "a small figure occupying little of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 12,
    "A": "an elongated shape, much longer than wide",
    "B": "a compact shape, about as wide as tall",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 12,
    "A": "a shape with at least one sharp pointed tip",
    "B": "a shape without sharp pointed tips",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 12,
    "A": "a shape drawn tilted or slanted",
    "B": "a shape drawn upright",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 12,
    "A": "a shape with no line of symmetry",
    "B": "a shape with mirror symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 12,
    "A": "a shape enclosing only a small area",
    "B": "a shape enclosing a large area",
    "type": "candidate-rule",
    "A1": "area is compared to the frame size",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 12,
    "A": "an irregular, freehand-looking outline",
    "B": "a regular, recognizable geometric figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 13,
    "A": "upright rectangles or flat ellipses",
    "B": "flat rectangles or upright ellipses",
    "type": "genuine-rule",
    "A1": "rectangles taller than wide; ellipses wider than tall",
    "B1": "rectangles wider than tall; ellipses taller than wide"
  },
  {
    "ID": 2,
    "BP": 13,
    "A": "the shape near the frame's centre column",
    "B": "the shape pushed toward a side or corner",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 13,
    "A": "a shape elongated at least twice as long as wide",
    "B": "a shape only slightly elongated",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 13,
    "A": "curved shapes larger than the angular ones",
    "B": "curved shapes smaller than the angular ones",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 13,
    "A": "the shape's long axis pointing toward the nearest frame edge",
    "B": "the shape's long axis parallel to the nearest frame edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 13,
    "A": "the shape in the upper or middle band of the frame",
    "B": "the shape allowed to sit in the bottom band",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 14,
    "A": "a large figure spanning most of the frame",
    "B": "a small figure occupying only a small part of the frame",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 14,
    "A": "curved lines",
    "B": "straight line segments only",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 14,
    "A": "one single connected figure",
    "B": "several separate marks",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 14,
    "A": "a figure covering the center of the frame",
    "B": "contents kept away from the center",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 14,
    "A": "an enclosed region",
    "B": "open strokes with no enclosed region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 14,
    "A": "a complex figure drawn with much ink",
    "B": "a sparse figure drawn with little ink",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 15,
    "A": "a closed curve",
    "B": "an open curve",
    "type": "genuine-rule",
    "A1": "",
    "B1": "the outline has a gap and never closes on itself"
  },
  {
    "ID": 2,
    "BP": 15,
    "A": "an outline enclosing a region",
    "B": "a line that encloses no region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 15,
    "A": "a curve whose ends meet",
    "B": "a curve with two free ends",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 15,
    "A": "a distinct inside and outside",
    "B": "no separation of inside from outside",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 15,
    "A": "a shape that could hold water",
    "B": "a shape that would leak",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 15,
    "A": "an unbroken outline",
    "B": "a broken outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 16,
    "A": "a spiral winding clockwise",
    "B": "a spiral winding counterclockwise",
    "type": "genuine-rule",
    "A1": "traced from the outer end in toward the centre",
    "B1": "traced from the outer end in toward the centre"
  },
  {
    "ID": 2,
    "BP": 16,
    "A": "a loosely wound spiral",
    "B": "a tightly wound spiral",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 16,
    "A": "a spiral with a rounded outline",
    "B": "a spiral with straight, angular sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 16,
    "A": "a spiral with at most two full turns",
    "B": "a spiral with more than two full turns",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 16,
    "A": "a spiral whose outer end lies in the lower half",
    "B": "a spiral whose outer end lies in the upper half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 16,
    "A": "a large spiral filling most of the frame",
    "B": "a small spiral leaving wide margins",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 17,
    "A": "a sharp concave corner",
    "B": "no sharp concave corner",
    "type": "genuine-rule",
    "A1": "a pointed corner whose angle opens into the shape, like a notch cut into the outline",
    "B1": "any inward dips of the outline are smooth curves; all sharp corners point outward"
  },
  {
    "ID": 2,
    "BP": 17,
    "A": "a deep V-shaped cut splitting the figure into two lobes",
    "B": "a single undivided body",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 17,
    "A": "no line of symmetry",
    "B": "at least one line of mirror symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 17,
    "A": "outlines mixing straight and curved edges",
    "B": "outlines of only one edge type",
    "type": "candidate-rule",
    "A1": "",
    "B1": "either all straight sides or all curved sides"
  },
  {
    "ID": 5,
    "BP": 17,
    "A": "an odd number of corners",
    "B": "an even number of corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 17,
    "A": "shapes resembling everyday objects",
    "B": "abstract geometric blobs",
    "type": "candidate-rule",
    "A1": "e.g. an arrow, a banner, a letter",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 18,
    "A": "a narrow neck joining two wider parts",
    "B": "no neck; width never pinches in",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 18,
    "A": "two distinct lobes",
    "B": "a single lobe",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 18,
    "A": "an outline that nearly touches itself",
    "B": "an outline that stays well clear of itself",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 18,
    "A": "a shape that could be cut in two by removing one small piece",
    "B": "a shape that stays in one piece unless a large piece is removed",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 18,
    "A": "a concave outline with two opposing indentations",
    "B": "at most one indentation",
    "type": "candidate-rule",
    "A1": "indentations face each other from opposite sides",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 18,
    "A": "mirror symmetry about an axis through the waist",
    "B": "no mirror symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 19,
    "A": "two blobs joined by a horizontal neck",
    "B": "two blobs joined by a vertical neck",
    "type": "genuine-rule",
    "A1": "the blobs sit side by side, left and right",
    "B1": "one blob sits above the other"
  },
  {
    "ID": 2,
    "BP": 19,
    "A": "a figure wider than it is tall",
    "B": "a figure taller than it is wide",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 19,
    "A": "two parts of roughly equal size",
    "B": "one part clearly larger than the other",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 19,
    "A": "a near-vertical axis of symmetry",
    "B": "no axis of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 19,
    "A": "the neck attached near mid-height",
    "B": "the neck attached near an end",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 19,
    "A": "an outline with at least one deep concavity on top",
    "B": "a smooth convex upper edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 20,
    "A": "both dots on the same side of the neck",
    "B": "dots on opposite sides of the neck",
    "type": "genuine-rule",
    "A1": "the neck is the narrowest part of the blob",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 20,
    "A": "the two dots close together",
    "B": "the two dots far apart",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 20,
    "A": "dots joinable along the outline without passing the waist",
    "B": "any outline path between the dots crosses the waist",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 20,
    "A": "both dots on the larger lobe",
    "B": "dots on different lobes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 20,
    "A": "both dots in the same half of the frame",
    "B": "one dot in each half of the frame",
    "type": "candidate-rule",
    "A1": "halves taken by a horizontal midline",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 20,
    "A": "both dots on convex parts of the outline",
    "B": "at least one dot in a concave dent",
    "type": "candidate-rule",
    "A1": "convex: the outline bulges outward at the dot",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 21,
    "A": "at least one very small figure",
    "B": "no small figures",
    "type": "genuine-rule",
    "A1": "",
    "B1": "every shape is of medium or large size"
  },
  {
    "ID": 2,
    "BP": 21,
    "A": "shapes of clearly different sizes",
    "B": "shapes all about the same size",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 21,
    "A": "at least one circle",
    "B": "circles or triangles in equal balance",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 21,
    "A": "shapes scattered widely across the frame",
    "B": "shapes gathered near the centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 21,
    "A": "the largest shape near the middle",
    "B": "the largest shape near an edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 21,
    "A": "three or more figures",
    "B": "two or fewer figures",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 22,
    "A": "shapes all about the same size",
    "B": "shapes of clearly different sizes",
    "type": "genuine-rule",
    "A1": "",
    "B1": "each frame mixes at least one big and one much smaller shape"
  },
  {
    "ID": 2,
    "BP": 22,
    "A": "a triangle in every frame",
    "B": "a circle in every frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 22,
    "A": "at most three shapes",
    "B": "three or more shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 22,
    "A": "shapes lying roughly along a diagonal",
    "B": "shapes scattered without alignment",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 22,
    "A": "no shape close to the frame border",
    "B": "at least one shape near the frame border",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 22,
    "A": "two or more different shape kinds",
    "B": "a repeated shape kind",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the same kind of shape appears more than once"
  },
  {
    "ID": 1,
    "BP": 23,
    "A": "exactly one shape",
    "B": "exactly two shapes",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 23,
    "A": "a shape near the middle of the frame",
    "B": "shapes pushed toward the edges",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 23,
    "A": "no two figures of the same kind",
    "B": "a repeated shape kind somewhere in the set",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 23,
    "A": "a single closed outline enclosing all the ink",
    "B": "ink split into separate regions",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 23,
    "A": "one large dominant figure",
    "B": "at least one small figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 23,
    "A": "all shapes about the same size",
    "B": "a big shape paired with a much smaller one",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 24,
    "A": "at least one circle",
    "B": "no circles",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 24,
    "A": "a square present",
    "B": "no squares",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 24,
    "A": "at most one triangle",
    "B": "two or more triangles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 24,
    "A": "triangles never pointing downward",
    "B": "a downward-pointing triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 24,
    "A": "shapes of at least two different types",
    "B": "shapes of a single type",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
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
    "A": "a solid black triangle",
    "B": "a solid black circle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 25,
    "A": "a filled shape with corners",
    "B": "a filled shape with no corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 25,
    "A": "more triangles than squares",
    "B": "more circles than triangles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 25,
    "A": "the filled shape below an outlined circle",
    "B": "the filled shape in the upper half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 25,
    "A": "exactly five shapes",
    "B": "four or six shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 25,
    "A": "all triangles pointing up",
    "B": "at least one triangle pointing down",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 26,
    "A": "at least one solid black triangle",
    "B": "no solid black triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": "any triangles present are outlines only"
  },
  {
    "ID": 2,
    "BP": 26,
    "A": "more triangles than circles",
    "B": "more circles than triangles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 26,
    "A": "exactly one solid shape",
    "B": "two or more solid shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 26,
    "A": "a triangle pointing up or right",
    "B": "a triangle pointing down",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 26,
    "A": "four shapes",
    "B": "five shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 26,
    "A": "a solid shape near the centre",
    "B": "solid shapes only near the edges",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 27,
    "A": "more filled shapes than outlined shapes",
    "B": "more outlined shapes than filled shapes",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 27,
    "A": "at least two filled triangles or circles touching the upper half",
    "B": "filled shapes kept to the lower half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 27,
    "A": "a filled circle in every frame",
    "B": "at least one frame element without a filled circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 27,
    "A": "no more than one square",
    "B": "two or more squares",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 27,
    "A": "every triangle pointing upward and mostly filled",
    "B": "triangles mostly outlined or pointing down",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 27,
    "A": "an even number of filled shapes",
    "B": "an odd number of filled shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 28,
    "A": "more black circles than white circles",
    "B": "more white circles than black circles",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 28,
    "A": "more black shapes than white shapes",
    "B": "more white shapes than black shapes",
    "type": "candidate-rule",
    "A1": "triangles counted along with circles",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 28,
    "A": "at least two black circles",
    "B": "at most one black circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 28,
    "A": "black circles as the largest group of identical shapes",
    "B": "white circles as the largest group of identical shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 28,
    "A": "a majority of the circles clustered near the centre",
    "B": "circles spread toward the frame edges",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 28,
    "A": "exactly one white circle",
    "B": "two or more white circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 29,
    "A": "more dots inside the outline than outside it",
    "B": "more dots outside the outline than inside it",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 29,
    "A": "at least half of all dots enclosed by the shape",
    "B": "fewer than half of the dots enclosed by the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 29,
    "A": "fewer than four dots outside the outline",
    "B": "at least four dots outside the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 29,
    "A": "the outline in the left half of the frame",
    "B": "the outline in the right half or centre of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 29,
    "A": "an even total number of dots",
    "B": "an odd total number of dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 29,
    "A": "all outside dots on one side of the outline",
    "B": "outside dots scattered around the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 30,
    "A": "a line that crosses itself",
    "B": "a line that never crosses itself",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 30,
    "A": "an enclosed loop formed by the stroke",
    "B": "no enclosed region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 30,
    "A": "a tangled, disordered scribble",
    "B": "a tidy, recognizable figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 30,
    "A": "a mix of straight and curved parts",
    "B": "either all straight or all curved lines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 30,
    "A": "more than two line endpoints",
    "B": "at most two line endpoints",
    "type": "candidate-rule",
    "A1": "free ends where the stroke stops",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 30,
    "A": "a stroke longer than needed to span the frame",
    "B": "a compact, short stroke",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 31,
    "A": "one continuous line",
    "B": "two separate lines",
    "type": "genuine-rule",
    "A1": "the whole figure can be drawn in a single stroke",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 31,
    "A": "a curve that crosses only itself",
    "B": "a curve crossed or accompanied by another curve",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 31,
    "A": "at most two free line ends",
    "B": "more than two free line ends or none",
    "type": "candidate-rule",
    "A1": "a free end is a point where a stroke stops",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 31,
    "A": "no closed loop as a separate shape",
    "B": "at least one fully closed shape or paired figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 31,
    "A": "a figure spanning the frame diagonally",
    "B": "a figure spread side by side",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 31,
    "A": "an odd number of self-crossings",
    "B": "an even number of crossings",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 32,
    "A": "at least one acute angle",
    "B": "no acute angles",
    "type": "genuine-rule",
    "A1": "a sharp point where the outline meets at less than 90 degrees",
    "B1": "every corner is right, obtuse, or smoothly rounded"
  },
  {
    "ID": 2,
    "BP": 32,
    "A": "a thin spike or tapering tip",
    "B": "roughly even width throughout",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 32,
    "A": "an elongated, stretched figure",
    "B": "a compact, blob-like figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 32,
    "A": "a straight edge somewhere in the outline",
    "B": "an outline made only of curves",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 32,
    "A": "no axis of symmetry",
    "B": "at least one axis of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 32,
    "A": "a deep concave indentation",
    "B": "only shallow indentations or none",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 33,
    "A": "at least one sharp point",
    "B": "no sharp points",
    "type": "genuine-rule",
    "A1": "a spike or cusp where the outline meets at an acute angle",
    "B1": "all corners are right or obtuse, or the outline is smooth"
  },
  {
    "ID": 2,
    "BP": 33,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 33,
    "A": "at least one curved side",
    "B": "straight sides only",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 33,
    "A": "an elongated, narrow figure",
    "B": "a compact, roundish figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 33,
    "A": "a notch cut into the shape",
    "B": "an unbroken smooth boundary",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 33,
    "A": "no line of symmetry",
    "B": "at least one line of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 34,
    "A": "a large hole",
    "B": "a small hole",
    "type": "genuine-rule",
    "A1": "the white hole is a sizeable part of the black shape",
    "B1": "the white hole is a tiny speck"
  },
  {
    "ID": 2,
    "BP": 34,
    "A": "a hole wider than half the shape",
    "B": "a hole narrower than a quarter of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 34,
    "A": "more white than black inside the outline",
    "B": "more black than white inside the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 34,
    "A": "a hole of a different shape than the outline",
    "B": "a hole of the same shape as the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 34,
    "A": "a hole touching the shape's centre",
    "B": "a hole off to one side of the centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 34,
    "A": "a curved outline",
    "B": "a straight-edged outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 35,
    "A": "a hole elongated parallel to the shape's long axis",
    "B": "a hole elongated across the shape's long axis",
    "type": "genuine-rule",
    "A1": "",
    "B1": "the hole's long axis is perpendicular to the black shape's long axis"
  },
  {
    "ID": 2,
    "BP": 35,
    "A": "an elliptical hole",
    "B": "a straight-sided hole",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 35,
    "A": "a polygonal outer shape",
    "B": "an elliptical outer shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 35,
    "A": "a tilted outer shape",
    "B": "an axis-aligned outer shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the shape's long axis is horizontal or vertical"
  },
  {
    "ID": 5,
    "BP": 35,
    "A": "a large hole relative to the shape",
    "B": "a tiny hole relative to the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 35,
    "A": "a hole at the exact centre of the shape",
    "B": "an off-centre hole",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 36,
    "A": "the triangle above the circle",
    "B": "the circle above the triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 36,
    "A": "the circle in the lower half of the frame",
    "B": "the circle in the upper half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 36,
    "A": "the triangle touching the top third of the frame",
    "B": "the triangle kept clear of the top third",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 36,
    "A": "the two shapes far apart",
    "B": "the two shapes close together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 36,
    "A": "the circle left of the triangle",
    "B": "the circle right of the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 36,
    "A": "a downward-pointing triangle",
    "B": "an upward-pointing triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 37,
    "A": "the triangle higher than the circle",
    "B": "the circle higher than the triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 37,
    "A": "the square between the triangle and circle in height",
    "B": "the square highest or lowest of the three shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 37,
    "A": "the triangle left of the circle",
    "B": "the circle left of the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 37,
    "A": "the circle as the lowest shape",
    "B": "the square as the lowest shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 37,
    "A": "three shapes spread diagonally down the frame",
    "B": "three shapes roughly in a horizontal band",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 37,
    "A": "the square nearer the triangle than the circle",
    "B": "the square nearer the circle than the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 38,
    "A": "a triangle larger than the circle",
    "B": "a circle larger than the triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 38,
    "A": "the triangle left of or containing the circle",
    "B": "the triangle right of or inside the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 38,
    "A": "a small circle",
    "B": "a large circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 38,
    "A": "shapes that never touch",
    "B": "shapes that touch or overlap",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 38,
    "A": "a triangle pointing upward",
    "B": "a triangle pointing downward",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 38,
    "A": "the circle above the triangle's base",
    "B": "the circle level with the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 39,
    "A": "three parallel line segments",
    "B": "three line segments in different directions",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 39,
    "A": "segments of roughly equal length",
    "B": "one segment clearly longer than the others",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 39,
    "A": "no two segments perpendicular",
    "B": "two segments nearly perpendicular",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 39,
    "A": "segments arranged along one diagonal band",
    "B": "segments scattered without alignment",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 39,
    "A": "no horizontal and vertical segment together",
    "B": "both a horizontal and a vertical segment",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 39,
    "A": "extended segments never meeting inside the frame",
    "B": "extended segments meeting inside the frame",
    "type": "candidate-rule",
    "A1": "segments are imagined prolonged in both directions",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 40,
    "A": "three of the four dots collinear",
    "B": "no three dots collinear",
    "type": "genuine-rule",
    "A1": "three dots lie on one straight line",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 40,
    "A": "three dots evenly spaced",
    "B": "unevenly spaced dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 40,
    "A": "one dot far from a tight trio",
    "B": "dots spread out uniformly",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 40,
    "A": "dots forming a thin triangle with one extra dot",
    "B": "dots forming a wide quadrilateral",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 40,
    "A": "a dot in the upper-right region",
    "B": "the upper-right region empty",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 40,
    "A": "two dots at the same height",
    "B": "all dots at different heights",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 41,
    "A": "three outline circles collinear",
    "B": "outline circles forming a triangle",
    "type": "genuine-rule",
    "A1": "the three white circles lie on one straight line",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 41,
    "A": "filled and outline circles separable by a straight line",
    "B": "filled and outline circles intermixed",
    "type": "candidate-rule",
    "A1": "one straight line puts all black dots on one side, all white on the other",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 41,
    "A": "filled circles enclosing an outline circle",
    "B": "no outline circle inside the filled circles' triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 41,
    "A": "outline circles clustered more tightly than filled circles",
    "B": "outline circles spread more widely than filled circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 41,
    "A": "the lowest circle filled",
    "B": "the lowest circle an outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 41,
    "A": "a filled circle in the top half only",
    "B": "an outline circle in the top half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 42,
    "A": "the three dots inside the outline collinear",
    "B": "the three dots inside the outline not collinear",
    "type": "genuine-rule",
    "A1": "all three lie on one straight line",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 42,
    "A": "exactly one dot outside the outline",
    "B": "two dots outside the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 42,
    "A": "the inside dots evenly spaced",
    "B": "the inside dots unevenly spaced",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 42,
    "A": "an outline elongated in the direction of the inside dots",
    "B": "an outline elongated across the inside dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 42,
    "A": "all outside dots on the same side of the shape",
    "B": "outside dots on opposite sides of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 42,
    "A": "an inside dot near the outline's boundary",
    "B": "all inside dots well clear of the boundary",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 43,
    "A": "oscillations that grow from left to right",
    "B": "oscillations that shrink from left to right",
    "type": "genuine-rule",
    "A1": "the swings of the line get steadily bigger toward the right",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 43,
    "A": "smooth, rounded curves",
    "B": "sharp corners or angular turns",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 43,
    "A": "a line ending higher than it starts",
    "B": "a line ending lower than it starts",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 43,
    "A": "peaks pointing upward",
    "B": "peaks pointing downward",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 43,
    "A": "fewer than five swings",
    "B": "five or more swings",
    "type": "candidate-rule",
    "A1": "one swing is one full up-and-down of the line",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 43,
    "A": "the biggest swing at the right end",
    "B": "the biggest swing in the middle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 44,
    "A": "the cusp of the curve between the two circles",
    "B": "both circles on the same side of the cusp",
    "type": "genuine-rule",
    "A1": "the cusp is the sharp corner; one circle lies on each branch of the curve",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 44,
    "A": "the two circles far apart",
    "B": "the two circles close together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 44,
    "A": "both circles on the concave side of the curve",
    "B": "a circle on the convex side of the curve",
    "type": "candidate-rule",
    "A1": "the concave side is the hollow side of the bend the circle touches",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 44,
    "A": "a cusp pointing upward",
    "B": "a cusp pointing downward",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 44,
    "A": "circles at the same height",
    "B": "one circle clearly above the other",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 44,
    "A": "the cusp near the middle of the curve",
    "B": "the cusp near one end of the curve",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 45,
    "A": "the outlined shape in front of the black shape",
    "B": "the black shape in front of the outlined shape",
    "type": "genuine-rule",
    "A1": "the white outlined shape covers part of the solid black shape where they overlap",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 45,
    "A": "the black shape larger than the outlined shape",
    "B": "the outlined shape larger than the black shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 45,
    "A": "the outlined shape a polygon",
    "B": "the outlined shape curved or a triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 45,
    "A": "the outlined shape left of or above the black shape",
    "B": "the black shape left of or above the outlined shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 45,
    "A": "the two shapes of different kinds",
    "B": "two shapes of the same kind at least once",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 45,
    "A": "the black shape touching the frame's lower half",
    "B": "the black shape confined to the upper half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 46,
    "A": "a triangle in front of a circle",
    "B": "a circle in front of a triangle",
    "type": "genuine-rule",
    "A1": "where they overlap, the triangle hides the circle's outline",
    "B1": "where they overlap, the circle hides the triangle's outline"
  },
  {
    "ID": 2,
    "BP": 46,
    "A": "a circle larger than the triangle",
    "B": "a triangle larger than the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 46,
    "A": "outlines that cross each other",
    "B": "one shape fully inside the other",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 46,
    "A": "the black-filled shape is the triangle",
    "B": "the black-filled shape is the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 46,
    "A": "the triangle below or beside the circle's centre",
    "B": "the triangle above the circle's centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 46,
    "A": "a triangle pointing up or right",
    "B": "a triangle pointing left or down",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 47,
    "A": "a triangle inside a circle",
    "B": "a circle inside a triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 47,
    "A": "the largest shape is a circle",
    "B": "the largest shape is a triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 47,
    "A": "the nested pair near the frame's centre",
    "B": "the nested pair off-centre",
    "type": "candidate-rule",
    "A1": "the nested pair is the shape drawn inside another",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 47,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 47,
    "A": "the inner shape pointing upward",
    "B": "the inner shape without a point",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 47,
    "A": "at least one downward-pointing triangle when several shapes appear",
    "B": "all triangles upright or tilted, none pointing straight down",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 48,
    "A": "filled shapes above outlined shapes",
    "B": "outlined shapes above filled shapes",
    "type": "genuine-rule",
    "A1": "every solid black shape sits higher in the frame than every hollow shape",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 48,
    "A": "more filled shapes than outlined shapes",
    "B": "more outlined shapes than filled shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 48,
    "A": "a filled shape in the top-left corner",
    "B": "an outlined shape in the top-left corner",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 48,
    "A": "a filled circle as the highest shape",
    "B": "an outlined shape as the highest shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 48,
    "A": "an outlined square present",
    "B": "no outlined square, or one only among filled shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 48,
    "A": "filled shapes clustered on the left half",
    "B": "filled shapes clustered on the right half",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 49,
    "A": "outside dots scattered around the shape",
    "B": "outside dots bunched in one tight cluster",
    "type": "genuine-rule",
    "A1": "the dots lying outside the large shape sit far apart, on different sides of it",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 49,
    "A": "outside dots on at least two sides of the shape",
    "B": "all outside dots on one side of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 49,
    "A": "a large shape near the frame centre",
    "B": "a large shape pushed toward the frame edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 49,
    "A": "the inside dots closer together than the outside dots",
    "B": "the outside dots closer together than the inside dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 49,
    "A": "a highly symmetric large shape",
    "B": "an elongated or irregular large shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 49,
    "A": "more dots outside the shape than inside",
    "B": "equal numbers of dots inside and outside",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 50,
    "A": "a vertical axis of mirror symmetry",
    "B": "no vertical axis of mirror symmetry",
    "type": "genuine-rule",
    "A1": "the left half is the mirror image of the right half",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 50,
    "A": "left and right halves with equal ink",
    "B": "one side heavier than the other",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 50,
    "A": "matching pairs of identical elements",
    "B": "at least one unmatched element",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 50,
    "A": "upright figures only",
    "B": "at least one tilted or slanted figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 50,
    "A": "a composition centered in the frame",
    "B": "a composition shifted off-center",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 50,
    "A": "shapes of the same kind drawn in the same style",
    "B": "same-kind shapes drawn in differing styles",
    "type": "candidate-rule",
    "A1": "same style means both filled or both outlined, and equal size",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 51,
    "A": "two dots close together",
    "B": "all dots far apart",
    "type": "genuine-rule",
    "A1": "at least one pair of dots separated by about two dot-widths or less",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 51,
    "A": "unevenly spaced dots",
    "B": "roughly evenly spaced dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 51,
    "A": "three dots roughly in a line",
    "B": "no three dots in a line",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 51,
    "A": "one dot far from the other three",
    "B": "no outlying dot",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 51,
    "A": "dots grouped in pairs",
    "B": "dots forming a single spread-out group",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 51,
    "A": "dots forming a narrow chain",
    "B": "dots forming a wide quadrilateral",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 52,
    "A": "two arrows pointing in opposite directions along the curve",
    "B": "two arrows pointing in the same direction along the curve",
    "type": "genuine-rule",
    "A1": "no single way of travelling the curve matches both arrowheads",
    "B1": "one traversal of the curve matches both arrowheads"
  },
  {
    "ID": 2,
    "BP": 52,
    "A": "at least one arrowhead away from an endpoint",
    "B": "arrowheads only at the curve's endpoints",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 52,
    "A": "arrows pointing toward each other",
    "B": "arrows pointing away from each other",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 52,
    "A": "a curve with at least two bends",
    "B": "a curve with at most one bend",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 52,
    "A": "an arrowhead in the upper half of the frame",
    "B": "both arrowheads in the lower half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 52,
    "A": "a curve that closes or nearly closes on itself",
    "B": "a clearly open curve",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 53,
    "A": "an inner polygon with fewer sides than the outer one",
    "B": "an inner polygon with more sides than the outer one",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 53,
    "A": "an outer polygon with at least four sides",
    "B": "an outer triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 53,
    "A": "an inner polygon with at most four sides",
    "B": "an inner polygon with at least five sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 53,
    "A": "an inner shape much smaller than the outer shape",
    "B": "an inner shape nearly filling the outer shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 53,
    "A": "a triangle only as the inner shape, if at all",
    "B": "a triangle only as the outer shape, if at all",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 53,
    "A": "an odd total number of sides across both polygons",
    "B": "an even total number of sides across both polygons",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 54,
    "A": "triangle, circle, cross in counterclockwise order",
    "B": "triangle, circle, cross in clockwise order",
    "type": "genuine-rule",
    "A1": "visiting the three shapes in that order traces a counterclockwise turn",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 54,
    "A": "the triangle and circle as the closest pair",
    "B": "the triangle and cross as the closest pair",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 54,
    "A": "the circle above the cross",
    "B": "the circle below the cross",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 54,
    "A": "the cross outside the triangle-circle gap",
    "B": "the cross between the triangle and the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 54,
    "A": "the three shapes widely spread",
    "B": "the three shapes clustered together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 54,
    "A": "the triangle left of the circle",
    "B": "the triangle right of the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 55,
    "A": "the small circle attached right at the notch",
    "B": "the small circle attached away from the notch, on a convex part",
    "type": "genuine-rule",
    "A1": "the notch is the concave cut in the shape's outline",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 55,
    "A": "a rounded, curved notch",
    "B": "a square-cornered or shallow notch",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 55,
    "A": "the small circle on the lower half of the shape",
    "B": "the small circle on the upper half of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 55,
    "A": "a straight-edged main shape",
    "B": "a curved main shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 55,
    "A": "the notch cut into a straight edge",
    "B": "the notch cut into a curved edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 55,
    "A": "the small circle on the right side of the shape",
    "B": "the small circle on the left side of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 56,
    "A": "all shapes with the same fill",
    "B": "a mix of solid and outline shapes",
    "type": "genuine-rule",
    "A1": "within each frame the shapes are either all solid black or all outlines",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 56,
    "A": "all triangles sharing one fill",
    "B": "triangles of both fills, or none matching",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 56,
    "A": "shapes of only one kind",
    "B": "circles and triangles together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 56,
    "A": "no more than three shapes",
    "B": "at least three shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 56,
    "A": "more triangles than circles",
    "B": "at least as many circles as triangles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 56,
    "A": "all circles of equal size",
    "B": "circles of different sizes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 57,
    "A": "two identical figures",
    "B": "two figures that differ",
    "type": "genuine-rule",
    "A1": "same shape, size and fill; orientation may vary",
    "B1": "they differ in shape, size or fill"
  },
  {
    "ID": 2,
    "BP": 57,
    "A": "two figures of equal size",
    "B": "two figures of clearly different sizes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 57,
    "A": "two figures with the same fill",
    "B": "one filled and one outlined figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 57,
    "A": "two figures of the same shape type",
    "B": "two figures of different shape types",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 57,
    "A": "figures arranged diagonally",
    "B": "figures arranged side by side",
    "type": "candidate-rule",
    "A1": "one figure noticeably higher than the other",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 57,
    "A": "no circles",
    "B": "at least one circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 58,
    "A": "two black squares of equal size",
    "B": "two black shapes of clearly different sizes",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 58,
    "A": "the largest shape filled black",
    "B": "the largest shape outlined",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 58,
    "A": "an outlined triangle",
    "B": "a filled triangle or none",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 58,
    "A": "black squares aligned on a diagonal",
    "B": "black squares aligned horizontally or vertically",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 58,
    "A": "more black shapes than outlined shapes",
    "B": "at least as many outlined shapes as black ones",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 58,
    "A": "shapes of at most two different sizes",
    "B": "shapes of three or more different sizes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 59,
    "A": "two copies of the same shape at different sizes",
    "B": "two shapes of different kinds",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 59,
    "A": "the smaller figure a scaled copy of the larger",
    "B": "the smaller figure a different figure from the larger",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 59,
    "A": "both shapes with the same number of sides",
    "B": "shapes with different numbers of sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 59,
    "A": "two shapes both convex or both concave",
    "B": "one convex and one concave shape",
    "type": "candidate-rule",
    "A1": "concave means the outline has an inward dent",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 59,
    "A": "shapes placed far apart",
    "B": "shapes placed close together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 59,
    "A": "the larger shape lower in the frame than the smaller",
    "B": "both shapes at the same height",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 60,
    "A": "two figures that are scaled copies of each other",
    "B": "no two figures of the same shape and proportions",
    "type": "genuine-rule",
    "A1": "same shape and proportions, differing only in size",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 60,
    "A": "a repeated shape among three figures",
    "B": "every figure a different kind of shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 60,
    "A": "the smallest figure a miniature of the largest",
    "B": "smallest and largest figures of different kinds",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 60,
    "A": "at least two triangles",
    "B": "at most one triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 60,
    "A": "figures arranged along a diagonal",
    "B": "figures scattered without alignment",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 60,
    "A": "more outline shapes than shape kinds",
    "B": "as many shape kinds as figures",
    "type": "candidate-rule",
    "A1": "some shape kind occurs more than once",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 61,
    "A": "a line splitting the crosses into two equal groups",
    "B": "a line with unequal numbers of crosses on its two sides",
    "type": "genuine-rule",
    "A1": "the same number of crosses lies on each side of the line",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 61,
    "A": "an even total number of crosses",
    "B": "an odd total number of crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 61,
    "A": "a line passing near the centre of the frame",
    "B": "a line kept away from the centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 61,
    "A": "crosses spread over both halves of the frame",
    "B": "crosses crowded into one half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 61,
    "A": "a long line, spanning most of the frame",
    "B": "a short line",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 61,
    "A": "no cross touching the line",
    "B": "at least one cross touching or overlapping the line",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 62,
    "A": "a curve that never crosses itself",
    "B": "a curve that crosses itself",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 62,
    "A": "endpoints far apart",
    "B": "endpoints close together",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 62,
    "A": "a curve enclosing no region",
    "B": "a curve enclosing at least one region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 62,
    "A": "no closed loop anywhere",
    "B": "at least one closed loop",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 62,
    "A": "a smooth curve without sharp corners",
    "B": "at least one sharp corner",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 62,
    "A": "an endpoint near the frame edge",
    "B": "both endpoints away from the frame edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 63,
    "A": "an outline thickened on its right side",
    "B": "an outline thickened on its left side",
    "type": "genuine-rule",
    "A1": "the contour line is drawn heavier along the shape's right edge",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 63,
    "A": "a shadow cast by light from the left",
    "B": "a shadow cast by light from above",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 63,
    "A": "a taller-than-wide figure",
    "B": "a wider-than-tall figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 63,
    "A": "a shape leaning to the right",
    "B": "a shape leaning to the left",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 63,
    "A": "an outline of uniform curvature style",
    "B": "an outline mixing tight and gentle curves",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 63,
    "A": "the thin part of the outline at the top",
    "B": "the thin part of the outline at the bottom",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 64,
    "A": "the cross on the line of the ellipse's long axis",
    "B": "the circle on the line of the ellipse's long axis",
    "type": "genuine-rule",
    "A1": "the long axis is extended straight beyond the ellipse",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 64,
    "A": "the circle nearer to the ellipse than the cross",
    "B": "the cross nearer to the ellipse than the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 64,
    "A": "cross and circle on opposite sides of the ellipse",
    "B": "cross and circle on the same side of the ellipse",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 64,
    "A": "a large elongated ellipse",
    "B": "a small compact ellipse",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 64,
    "A": "the circle between the ellipse and the cross",
    "B": "the cross between the ellipse and the circle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 64,
    "A": "the cross in the lower half of the frame",
    "B": "the cross in the upper half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 65,
    "A": "triangles in a horizontal row",
    "B": "triangles in a vertical column",
    "type": "genuine-rule",
    "A1": "all the triangles lie at the same height",
    "B1": "all the triangles lie one above another"
  },
  {
    "ID": 2,
    "BP": 65,
    "A": "circles scattered irregularly",
    "B": "circles roughly aligned",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 65,
    "A": "the triangle group spans the frame's width",
    "B": "the triangle group confined to one side",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 65,
    "A": "triangles and circles in separate regions",
    "B": "triangles and circles intermixed",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 65,
    "A": "at least as many circles as triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 65,
    "A": "triangles away from the frame's centre line",
    "B": "a triangle on the frame's centre line",
    "type": "candidate-rule",
    "A1": "the vertical line through the middle of the frame",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 66,
    "A": "the unconnected dots in a horizontal row",
    "B": "the unconnected dots in a vertical column",
    "type": "genuine-rule",
    "A1": "the dots not joined by any line segment lie on one horizontal line",
    "B1": "the dots not joined by any line segment lie on one vertical line"
  },
  {
    "ID": 2,
    "BP": 66,
    "A": "at least four unconnected dots",
    "B": "fewer than four unconnected dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 66,
    "A": "a connected network wider than it is tall",
    "B": "a connected network taller than it is wide",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 66,
    "A": "unconnected dots near the frame's centre",
    "B": "unconnected dots near the frame's edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 66,
    "A": "the network split into two separate pieces",
    "B": "the network in one connected piece",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 66,
    "A": "no crossing line segments",
    "B": "at least two crossing line segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 67,
    "A": "side branches on the right of the stem",
    "B": "side branches on the left of the stem",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 67,
    "A": "a main stem leaning to the right",
    "B": "a main stem leaning to the left",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 67,
    "A": "a trunk that bows toward the left",
    "B": "a trunk that bows toward the right",
    "type": "candidate-rule",
    "A1": "bows means the stem's curve is concave on its left side",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 67,
    "A": "exactly two side branches",
    "B": "three or more side branches",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 67,
    "A": "branches sprouting from the upper half of the stem",
    "B": "a branch sprouting from the lower half of the stem",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 67,
    "A": "the highest tip belonging to a side branch",
    "B": "the highest tip belonging to the main stem",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 68,
    "A": "branches pointing upward",
    "B": "branches pointing downward",
    "type": "genuine-rule",
    "A1": "each side branch ends higher than the point where it joins the stem",
    "B1": "each side branch ends lower than the point where it joins the stem"
  },
  {
    "ID": 2,
    "BP": 68,
    "A": "branches sprouting from the stem's left side",
    "B": "branches sprouting from the stem's right side",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 68,
    "A": "a main stem leaning left",
    "B": "a main stem leaning right",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 68,
    "A": "branch junctions in the lower half of the twig",
    "B": "branch junctions in the upper half of the twig",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 68,
    "A": "a curved main stem",
    "B": "a straight main stem",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 68,
    "A": "exactly two side branches",
    "B": "a single side branch",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 69,
    "A": "the dot at the tip of the main stem",
    "B": "the dot at the tip of a side branch",
    "type": "genuine-rule",
    "A1": "the marked branch is the direct continuation of the trunk from its base",
    "B1": "the trunk continues into an unmarked branch; the dot ends a branch that splits off"
  },
  {
    "ID": 2,
    "BP": 69,
    "A": "the dot at the highest point of the figure",
    "B": "the dot below the highest branch tip",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 69,
    "A": "the dot on the longest branch",
    "B": "the dot on a shorter branch",
    "type": "candidate-rule",
    "A1": "branch length measured from the root of the twig to the tip",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 69,
    "A": "an even number of branch tips",
    "B": "an odd number of branch tips",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 69,
    "A": "the marked branch curving to the left",
    "B": "the marked branch curving to the right",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 69,
    "A": "the dot on the left half of the frame",
    "B": "the dot on the right half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 70,
    "A": "branches growing only from the main stem",
    "B": "a branch growing from another branch",
    "type": "genuine-rule",
    "A1": "only one level of branching: no offshoot carries its own offshoot",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 70,
    "A": "fewer than seven branch tips",
    "B": "seven or more branch tips",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 70,
    "A": "a noticeably curved main stem",
    "B": "a straight main stem",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 70,
    "A": "at least one branch pointing downward",
    "B": "all branches pointing upward",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 70,
    "A": "branches spread out along the whole stem",
    "B": "branches bunched near the top",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 70,
    "A": "a figure leaning to one side",
    "B": "a roughly symmetric figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": "symmetric about a vertical axis through the trunk"
  },
  {
    "ID": 1,
    "BP": 71,
    "A": "a shape nested inside a shape inside a shape",
    "B": "nesting at most two shapes deep",
    "type": "genuine-rule",
    "A1": "somewhere a chain of three shapes, each enclosing the next",
    "B1": "no enclosed shape contains anything itself"
  },
  {
    "ID": 2,
    "BP": 71,
    "A": "every container holding exactly one shape directly",
    "B": "a container holding two or more shapes side by side",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 71,
    "A": "the innermost shape smaller than all loose shapes",
    "B": "an innermost shape as large as some loose shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 71,
    "A": "a circle involved in every nesting",
    "B": "at least one nesting made only of straight-sided shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 71,
    "A": "exactly one nested group of shapes",
    "B": "two or more separate nested groups",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 71,
    "A": "the largest shape enclosing something",
    "B": "the largest shape left empty",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 72,
    "A": "a line whose two end segments are parallel",
    "B": "a line whose two end segments are not parallel",
    "type": "genuine-rule",
    "A1": "the short straight-ish pieces at the curve's two free ends run in the same or exactly opposite directions",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 72,
    "A": "a curve whose ends point in tidy horizontal or vertical directions",
    "B": "a curve with at least one end pointing diagonally",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 72,
    "A": "a curve with an axis of symmetry",
    "B": "a curve with no axis of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 72,
    "A": "a curve that never crosses itself",
    "B": "a curve that crosses or nearly crosses itself",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 72,
    "A": "a curve resembling a letter or digit",
    "B": "an arbitrary scribble resembling no character",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 72,
    "A": "a curve whose two endpoints are at similar heights",
    "B": "a curve whose two endpoints are at clearly different heights",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 73,
    "A": "the ellipse's long axis perpendicular to the rectangle's long axis",
    "B": "the ellipse's long axis parallel to the rectangle's long axis",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 73,
    "A": "the triangle pointing toward the rectangle",
    "B": "the triangle pointing toward the ellipse",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 73,
    "A": "the triangle's axis parallel to the rectangle's long axis",
    "B": "the triangle's axis parallel to the ellipse's long axis",
    "type": "candidate-rule",
    "A1": "the axis runs from the triangle's apex to the middle of its base",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 73,
    "A": "the ellipse higher in the frame than the rectangle",
    "B": "the rectangle higher in the frame than the ellipse",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 73,
    "A": "the ellipse as the largest of the three shapes",
    "B": "the rectangle as the largest of the three shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 73,
    "A": "three widely separated shapes",
    "B": "three shapes clustered near the frame's centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 74,
    "A": "a sharp tip at the end opposite the tail",
    "B": "a rounded free end, narrowing only where the tail joins",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 74,
    "A": "a curved, curling tail",
    "B": "a straight or gently swept tail",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 74,
    "A": "an outlined drop, drawn hollow",
    "B": "a solid black drop",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 74,
    "A": "a tail shorter than the drop body",
    "B": "a tail longer than the drop body",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 74,
    "A": "a tail that stays clear of the body",
    "B": "a tail that touches or crosses the body",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 74,
    "A": "a drop tilted with its tail toward the upper right",
    "B": "a drop tilted with its tail toward the lower left",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 75,
    "A": "a triangle on the concave side of the arc",
    "B": "a triangle on the convex side of the arc",
    "type": "genuine-rule",
    "A1": "the hollow side, which the arc curves around",
    "B1": "the bulging outer side of the arc"
  },
  {
    "ID": 2,
    "BP": 75,
    "A": "the triangle far from the arc",
    "B": "the triangle close to or touching the arc",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 75,
    "A": "the triangle above the arc's midpoint",
    "B": "the triangle below the arc's midpoint",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 75,
    "A": "an arc spanning more than a quarter circle",
    "B": "an arc spanning a quarter circle or less",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 75,
    "A": "a triangle pointing away from the arc",
    "B": "a triangle pointing toward the arc",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 75,
    "A": "the arc larger than the triangle",
    "B": "the arc and triangle about the same size",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 76,
    "A": "a waist: narrowest in the middle, wider at the ends",
    "B": "a bulge: widest in the middle, with concave notches at the ends",
    "type": "genuine-rule",
    "A1": "the two long sides curve inward",
    "B1": "the two long sides curve outward"
  },
  {
    "ID": 2,
    "BP": 76,
    "A": "a long axis running vertically or diagonally",
    "B": "a long axis running horizontally or diagonally",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 76,
    "A": "strongly elongated outlines",
    "B": "compact, nearly round outlines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 76,
    "A": "exactly two concave arcs facing each other",
    "B": "concave arcs on opposite corners only",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 76,
    "A": "a shape centred left of the frame's middle",
    "B": "a shape centred right of the frame's middle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 76,
    "A": "gently curved sides",
    "B": "sharply curved sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 77,
    "A": "three segments meeting at one common point",
    "B": "three segments that do not all meet at one point",
    "type": "genuine-rule",
    "A1": "",
    "B1": "one segment ends slightly away from where the other two meet"
  },
  {
    "ID": 2,
    "BP": 77,
    "A": "a fan opening from a single vertex",
    "B": "a zigzag chain of segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": "segments joined end to end at different points"
  },
  {
    "ID": 3,
    "BP": 77,
    "A": "all angles at the junction acute",
    "B": "at least one obtuse angle at a junction",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 77,
    "A": "segments of roughly equal length",
    "B": "one segment much longer than the others",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 77,
    "A": "the junction in the lower half of the frame",
    "B": "the junction in the upper half of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 77,
    "A": "a middle segment inside the angle of the outer two",
    "B": "no segment lying between the other two",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 78,
    "A": "three segments whose extensions meet at one point",
    "B": "three segments whose extensions do not meet at one point",
    "type": "genuine-rule",
    "A1": "each segment prolonged into a full line; all three lines cross at a single common point",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 78,
    "A": "no two segments parallel",
    "B": "two segments roughly parallel",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 78,
    "A": "segments pointing toward a common center",
    "B": "segments scattered without a shared focus",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 78,
    "A": "segments of noticeably different lengths",
    "B": "segments of about the same length",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 78,
    "A": "at least one strongly slanted segment",
    "B": "mostly horizontal or vertical segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 78,
    "A": "extensions forming no enclosed triangle",
    "B": "extensions forming a triangle",
    "type": "candidate-rule",
    "A1": "the three prolonged lines never bound a triangular region",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 79,
    "A": "the black circle closer to the white circle than to the triangle",
    "B": "the black circle closer to the triangle than to the white circle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 79,
    "A": "the triangle farthest from the other two shapes",
    "B": "the white circle farthest from the other two shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 79,
    "A": "the three shapes roughly in a line",
    "B": "the three shapes forming a wide triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 79,
    "A": "the black circle above the triangle",
    "B": "the black circle below or level with the triangle",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 79,
    "A": "the white circle on the left half of the frame",
    "B": "the white circle in a corner of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 79,
    "A": "the shapes spread widely apart",
    "B": "two shapes nearly touching",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 80,
    "A": "a cross equidistant from the two dots",
    "B": "a cross clearly nearer to one dot than the other",
    "type": "genuine-rule",
    "A1": "the cross lies on the perpendicular bisector of the two dots",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 80,
    "A": "a cross farther from each dot than the dots are from each other",
    "B": "a cross lying almost on top of one dot",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 80,
    "A": "three marks forming a wide triangle",
    "B": "three marks nearly collinear",
    "type": "candidate-rule",
    "A1": "",
    "B1": "the two dots and the cross lie close to one straight line"
  },
  {
    "ID": 4,
    "BP": 80,
    "A": "the cross outside the gap between the dots",
    "B": "the cross between the two dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 80,
    "A": "both dots on the same side of the cross",
    "B": "dots on opposite sides of the cross",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 80,
    "A": "the cross below the midpoint of the dots",
    "B": "the cross above the midpoint of the dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 81,
    "A": "black and white shapes separable by a straight line",
    "B": "black and white shapes not separable by a straight line",
    "type": "genuine-rule",
    "A1": "a line can be drawn with all filled shapes on one side, all outlines on the other",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 81,
    "A": "black shapes grouped in one cluster",
    "B": "black shapes dispersed among the white shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 81,
    "A": "all white shapes on one side of the frame",
    "B": "white shapes on opposite sides of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 81,
    "A": "at least as many circles as triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 81,
    "A": "black circles close together",
    "B": "black circles far apart",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 81,
    "A": "equal numbers of black and white shapes",
    "B": "unequal numbers of black and white shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 82,
    "A": "three crosses forming an equilateral triangle",
    "B": "no three crosses forming an equilateral triangle",
    "type": "genuine-rule",
    "A1": "some three of the crosses; the circle and any extra crosses lie anywhere",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 82,
    "A": "the circle inside the cluster of crosses",
    "B": "the circle outside the cluster of crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 82,
    "A": "crosses evenly spaced",
    "B": "crosses unevenly spaced",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 82,
    "A": "outermost crosses marking a triangle",
    "B": "outermost crosses marking a four- or five-sided shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 82,
    "A": "the circle on the arrangement's axis of symmetry",
    "B": "the circle off any axis of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 82,
    "A": "at most four crosses",
    "B": "at least four crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 83,
    "A": "the circle surrounded by the crosses",
    "B": "the circle outside the group of crosses",
    "type": "genuine-rule",
    "A1": "the circle lies inside the convex hull of the crosses",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 83,
    "A": "the circle near the centre of the frame",
    "B": "the circle near the frame's edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 83,
    "A": "a cross in the bottom-left region",
    "B": "no cross in the bottom-left region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 83,
    "A": "crosses spread over the whole frame",
    "B": "crosses clustered in one part of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 83,
    "A": "at least four crosses",
    "B": "fewer than four crosses",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 83,
    "A": "the circle below its nearest cross",
    "B": "the circle above its nearest cross",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 84,
    "A": "the square outside the dotted outline",
    "B": "the square inside the dotted outline",
    "type": "genuine-rule",
    "A1": "outside the region enclosed by the chain of small circles",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 84,
    "A": "the square touching or near the frame edge",
    "B": "the square near the center of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 84,
    "A": "a dotted outline with a deep concavity",
    "B": "a smooth convex dotted outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 84,
    "A": "more than twenty dots",
    "B": "twenty dots or fewer",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 84,
    "A": "the square close to the dot chain",
    "B": "the square far from every dot",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 84,
    "A": "an open chain of dots",
    "B": "a closed loop of dots",
    "type": "candidate-rule",
    "A1": "the chain has two free ends",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 85,
    "A": "three line segments",
    "B": "five line segments",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 85,
    "A": "an odd number of segments below five",
    "B": "at least five segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 85,
    "A": "at most two intersection points",
    "B": "three or more intersection points",
    "type": "candidate-rule",
    "A1": "points where drawn lines meet or cross",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 85,
    "A": "no closed region",
    "B": "a closed region",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 85,
    "A": "all segments connected into one figure",
    "B": "at least one detached segment",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 85,
    "A": "a figure fitting in the lower-left half",
    "B": "a figure spread across the whole frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 86,
    "A": "exactly three branches meeting at the junction point",
    "B": "four or more branches meeting at the junction point",
    "type": "genuine-rule",
    "A1": "branches may zigzag, but only three arms leave the branch point",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 86,
    "A": "fewer than six line segments",
    "B": "six or more line segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 86,
    "A": "no lines crossing each other",
    "B": "at least one crossing of lines",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 86,
    "A": "three free line ends",
    "B": "more than three free line ends",
    "type": "candidate-rule",
    "A1": "a free end is a segment tip not joined to anything",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 86,
    "A": "a sparse figure with wide open spaces",
    "B": "a dense, cluttered figure",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 86,
    "A": "the junction near the middle of the frame",
    "B": "the junction away from the middle of the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 87,
    "A": "exactly four line segments",
    "B": "exactly five line segments",
    "type": "genuine-rule",
    "A1": "a segment is each straight piece between endpoints or junction points",
    "B1": "a segment is each straight piece between endpoints or junction points"
  },
  {
    "ID": 2,
    "BP": 87,
    "A": "an even number of line segments",
    "B": "an odd number of line segments",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 87,
    "A": "fewer than five free line endpoints",
    "B": "five or more free line endpoints",
    "type": "candidate-rule",
    "A1": "a free endpoint is a line end not touching any other line",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 87,
    "A": "no more than two junction points",
    "B": "at least three junction points",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 87,
    "A": "lines drawn with at most four strokes",
    "B": "lines requiring at least five pen strokes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 87,
    "A": "no segment crossed at both ends",
    "B": "a segment joined to others at both ends",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 88,
    "A": "exactly three pills",
    "B": "exactly five pills",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 88,
    "A": "at most one black pill",
    "B": "at least one black pill among many",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 88,
    "A": "pills forming at most two groups",
    "B": "pills forming three or more groups",
    "type": "candidate-rule",
    "A1": "touching pills count as one group",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 88,
    "A": "more white pills than black",
    "B": "more black pills than white",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 88,
    "A": "pills confined to one half of the frame",
    "B": "pills spread across the whole frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 88,
    "A": "an odd number of white pills",
    "B": "an even number of white pills",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 89,
    "A": "exactly three separate groups of pills",
    "B": "exactly five separate groups of pills",
    "type": "genuine-rule",
    "A1": "a group is a cluster of touching pills; a lone pill counts as one group",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 89,
    "A": "at most three black pills",
    "B": "at least four black pills",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 89,
    "A": "a group of three or more touching pills",
    "B": "no group larger than two pills",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 89,
    "A": "an odd total number of pills",
    "B": "an even total number of pills",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 89,
    "A": "a black pill inside the largest group",
    "B": "an all-white largest group",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 89,
    "A": "fewer than ten pills in total",
    "B": "ten or more pills in total",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 90,
    "A": "three groups of white shapes",
    "B": "four groups of white shapes",
    "type": "genuine-rule",
    "A1": "a group is a run of touching white shapes; black shapes and gaps separate groups",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 90,
    "A": "exactly three black shapes",
    "B": "exactly four black shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 90,
    "A": "an odd number of white shapes",
    "B": "an even number of white shapes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 90,
    "A": "no two black shapes touching",
    "B": "at least two black shapes touching",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 90,
    "A": "more white shapes than black",
    "B": "at least as many black shapes as white",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 90,
    "A": "fewer than twelve shapes in total",
    "B": "twelve or more shapes in total",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 91,
    "A": "three of something",
    "B": "four of something",
    "type": "genuine-rule",
    "A1": "three parts, sides or elements: e.g. three arms, three sides, three squares",
    "B1": "four parts, sides or elements: e.g. four sides, four tabs, four circles"
  },
  {
    "ID": 2,
    "BP": 91,
    "A": "an odd number of elements",
    "B": "an even number of elements",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 91,
    "A": "figures with three-fold symmetry or arrangement",
    "B": "figures with four-fold symmetry or arrangement",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 91,
    "A": "fewer than four distinct parts",
    "B": "at least four distinct parts",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 91,
    "A": "a triangular overall layout",
    "B": "a square overall layout",
    "type": "candidate-rule",
    "A1": "the elements sit at or suggest the corners of a triangle",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 91,
    "A": "junctions where three lines meet",
    "B": "junctions where four lines meet",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 92,
    "A": "a dotted path that never crosses or touches itself",
    "B": "dotted lines that cross or meet at some point",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 92,
    "A": "one single chain of dots",
    "B": "two separate chains of dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 92,
    "A": "no dot with more than two neighbours",
    "B": "a junction dot with three or more neighbours",
    "type": "candidate-rule",
    "A1": "neighbours are the adjacent dots along the chain",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 92,
    "A": "a chain that curls into a spiral or hook",
    "B": "chains made of nearly straight strokes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 92,
    "A": "filled dots only at ends or bends of the chain",
    "B": "a filled dot in the middle of a straight run",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 92,
    "A": "more than fifteen dots",
    "B": "fifteen dots or fewer",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 93,
    "A": "no black dot at any crossing or branch point of the dotted curves",
    "B": "a black dot exactly at a crossing or branch point",
    "type": "genuine-rule",
    "A1": "where curves cross or meet, the dot there is an open circle",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 93,
    "A": "exactly three black dots",
    "B": "exactly four black dots",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 93,
    "A": "a black dot at an endpoint of a curve",
    "B": "no black dot at any curve endpoint",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 93,
    "A": "two separate dotted curves",
    "B": "a single connected dotted curve",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 93,
    "A": "all black dots in the left half of the frame",
    "B": "black dots spread across both halves",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 93,
    "A": "two black dots adjacent along the same curve",
    "B": "black dots always separated by open circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 94,
    "A": "the black circle inside the chain",
    "B": "the black circle at an end of the chain",
    "type": "genuine-rule",
    "A1": "the black circle touches neighbouring circles on both sides",
    "B1": "the black circle is a tip, touching only one neighbour"
  },
  {
    "ID": 2,
    "BP": 94,
    "A": "the black circle in the upper half of the chain",
    "B": "the black circle in the lower half of the chain",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 94,
    "A": "a chain with a branch point",
    "B": "a single unbranched chain",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 94,
    "A": "the black circle left of the chain's centre",
    "B": "the black circle right of the chain's centre",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 94,
    "A": "an even number of white circles",
    "B": "an odd number of white circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 94,
    "A": "a chain symmetric about the black circle",
    "B": "a chain asymmetric about the black circle",
    "type": "candidate-rule",
    "A1": "equal numbers of circles on each side of the black one",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 95,
    "A": "vertical hatching",
    "B": "horizontal hatching",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 95,
    "A": "a shape drawn only with straight or smoothly convex outlines",
    "B": "at least one shape with an indented outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 95,
    "A": "stripes crossing the shape's longest dimension",
    "B": "stripes running along the shape's longest dimension",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 95,
    "A": "more than eight stripes",
    "B": "eight or fewer stripes",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 95,
    "A": "a shape wider than it is tall",
    "B": "a shape taller than it is wide",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 95,
    "A": "stripes that end on the shape's slanted or curved edges",
    "B": "stripes parallel to one straight edge of the shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 96,
    "A": "a hatched triangle",
    "B": "a hatched shape that is not a triangle",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 96,
    "A": "a shape with exactly three straight sides",
    "B": "a shape with more than three sides or a curved edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 96,
    "A": "hatching parallel to one side of the outline",
    "B": "hatching parallel to no side of the outline",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 96,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "candidate-rule",
    "A1": "the outline has no inward dents",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 96,
    "A": "a shape with a sharp corner pointing to a frame edge",
    "B": "a shape with no corner pointing to a frame edge",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 96,
    "A": "an outline that narrows to a single point",
    "B": "an outline of roughly even width throughout",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 97,
    "A": "a triangular shape",
    "B": "a circular shape",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 97,
    "A": "an outline containing straight edges",
    "B": "an outline with no straight portions",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 97,
    "A": "a shape with at least one sharp corner",
    "B": "a smooth, cornerless shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 97,
    "A": "a figure wider at the bottom than at the top",
    "B": "a figure of equal width at top and bottom",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 97,
    "A": "a shape drawn from broken or textured strokes",
    "B": "a shape drawn with one continuous style",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 97,
    "A": "a figure with exactly one axis of symmetry",
    "B": "a figure with many axes of symmetry",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 98,
    "A": "a triangle as the outlined shape",
    "B": "a quadrilateral as the outlined shape",
    "type": "genuine-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 98,
    "A": "a shape with at least one very sharp corner",
    "B": "a shape with only wide corners",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 98,
    "A": "an irregular shape with unequal sides",
    "B": "a shape with parallel opposite sides",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 98,
    "A": "a shape crossed by background lines",
    "B": "a shape on a clear background",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 98,
    "A": "a tilted shape",
    "B": "an upright shape",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 98,
    "A": "a shape reaching close to the frame edge",
    "B": "a shape well inside the frame",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 99,
    "A": "circle and triangle groups partly overlapping",
    "B": "groups separate or one wholly inside the other",
    "type": "genuine-rule",
    "A1": "the two clusters interlock: neither is apart from, nor entirely inside, the other",
    "B1": ""
  },
  {
    "ID": 2,
    "BP": 99,
    "A": "circles and triangles not separable by a straight line",
    "B": "a straight line can divide circles from triangles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 99,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 99,
    "A": "circles forming an open, broken ring",
    "B": "circles forming a closed ring",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 99,
    "A": "the two clusters touching each other",
    "B": "a clear gap between the two clusters",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 99,
    "A": "shapes spread across the whole frame",
    "B": "shapes leaving one corner empty",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 1,
    "BP": 100,
    "A": "the letter A",
    "B": "the letter Б",
    "type": "genuine-rule",
    "A1": "",
    "B1": "Б is the Cyrillic letter \"be\""
  },
  {
    "ID": 2,
    "BP": 100,
    "A": "two strokes meeting at a top apex",
    "B": "a single vertical stem with a bowl",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 3,
    "BP": 100,
    "A": "a triangular enclosed counter",
    "B": "a rounded enclosed counter",
    "type": "candidate-rule",
    "A1": "counter: the hole enclosed inside the letter",
    "B1": ""
  },
  {
    "ID": 4,
    "BP": 100,
    "A": "a roughly mirror-symmetric form",
    "B": "a clearly asymmetric form",
    "type": "candidate-rule",
    "A1": "symmetric about a vertical axis",
    "B1": ""
  },
  {
    "ID": 5,
    "BP": 100,
    "A": "a pointed or narrowing top",
    "B": "a flat horizontal bar on top",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  },
  {
    "ID": 6,
    "BP": 100,
    "A": "mostly straight strokes",
    "B": "at least one large curved stroke",
    "type": "candidate-rule",
    "A1": "",
    "B1": ""
  }
]
