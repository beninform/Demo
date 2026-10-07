var rulesArray = [
    {
        "ID": 1,
        "BP": 1,
        "A": "Nested",
        "B": "Not nested",
        "type": "genuine-rule"
    },
    {
        "ID": 2,
        "BP": 1,
        "A": "At least two shapes",
        "B": "Only one shape",
        "type": "candidate-rule"
    },
    {
        "ID": 3,
        "BP": 1,
        "A": "Geometric shapes",
        "B": "Non-geometric shapes",
        "type": "candidate-rule"
    },
    {
        "ID": 4,
        "BP": 1,
        "A": "Big and small shapes",
        "B": "Only big shapes",
        "type": "candidate-rule"
    },
    {
        "ID": 5,
        "BP": 1,
        "A": "Straight-sided shapes",
        "B": "Curved shapes",
        "type": "candidate-rule"
    },
  {
    "ID": 1,
    "BP": 2,
    "A": "one large figure",
    "B": "one small figure",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 2,
    "A": "a figure centred in the frame",
    "B": "a figure away from the centre",
    "type": "genuine-rule"
  },
  {
    "ID": 3,
    "BP": 2,
    "A": "an outlined figure",
    "B": "a solid black figure",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 2,
    "A": "a convex figure",
    "B": "a concave figure",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 2,
    "A": "a figure with curved edges",
    "B": "a figure with only straight edges",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 3,
    "A": "an unfilled outline shape",
    "B": "a solid black filled shape",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 3,
    "A": "a convex shape",
    "B": "a concave shape",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 3,
    "A": "a shape near the centre of the frame",
    "B": "a shape near a corner of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 3,
    "A": "a shape with only straight edges",
    "B": "a shape with curved edges",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 3,
    "A": "a small shape",
    "B": "a large shape",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 4,
    "A": "convex",
    "B": "concave",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 4,
    "A": "simple geometric figures",
    "B": "irregular freeform figures",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 4,
    "A": "fewer than eight corners",
    "B": "eight or more corners",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 4,
    "A": "mirror symmetric",
    "B": "not mirror symmetric",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 4,
    "A": "compact, evenly proportioned silhouettes",
    "B": "elongated or sprawling silhouettes",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 5,
    "A": "a closed outline made only of straight lines",
    "B": "a closed outline made of curved lines",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 5,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 5,
    "A": "a compact, unstretched shape",
    "B": "an elongated, stretched shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 5,
    "A": "a shape placed away from the centre",
    "B": "a shape placed near the centre",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 5,
    "A": "an outline enclosing a large area",
    "B": "an outline enclosing a small area",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 6,
    "A": "a polygon with three sides",
    "B": "a polygon with four sides",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 6,
    "A": "a shape with no parallel sides",
    "B": "a shape with at least one pair of parallel sides",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 6,
    "A": "a convex shape",
    "B": "a shape that may be concave",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 6,
    "A": "a shape with at least one sharp tip",
    "B": "a shape with only blunt corners",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 6,
    "A": "a shape whose angles sum to less than a full turn",
    "B": "a shape whose angles sum to a full turn",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 7,
    "A": "a figure elongated vertically",
    "B": "a figure elongated horizontally",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 7,
    "A": "an open line figure",
    "B": "a closed outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 7,
    "A": "only straight edges",
    "B": "at least one curved edge",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 7,
    "A": "mirror-symmetric about a vertical axis",
    "B": "not mirror-symmetric about a vertical axis",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 7,
    "A": "a figure placed off-centre in the frame",
    "B": "a figure placed at the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 8,
    "A": "a figure in the right half of the frame",
    "B": "a figure in the left half of the frame",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 8,
    "A": "a figure in the upper half of the frame",
    "B": "a figure in the lower half of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 8,
    "A": "a convex figure",
    "B": "a concave figure",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 8,
    "A": "a figure with only straight edges",
    "B": "a figure with at least one curved edge",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 8,
    "A": "a figure far from the frame border",
    "B": "a figure close to the frame border",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 9,
    "A": "an outline without jagged zigzag teeth",
    "B": "an outline edged with jagged zigzag teeth",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 9,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 9,
    "A": "curved edges",
    "B": "only straight edges",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 9,
    "A": "small, filling less than half the frame",
    "B": "large, filling more than half the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 9,
    "A": "an irregular, asymmetric outline",
    "B": "a regular, symmetric outline",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 10,
    "A": "an outline with three main corners, a triangle",
    "B": "an outline with four main corners, a quadrilateral",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 10,
    "A": "no pair of parallel sides",
    "B": "at least one pair of parallel sides",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 10,
    "A": "narrower at the top than at the bottom",
    "B": "as wide at the top as at the bottom",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 10,
    "A": "one corner pointing straight up or down",
    "B": "no corner pointing straight up or down",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 10,
    "A": "a small enclosed area",
    "B": "a large enclosed area",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 11,
    "A": "elongated, much longer than wide",
    "B": "compact, about as wide as long",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 11,
    "A": "irregular outlines",
    "B": "regular polygons or circles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 11,
    "A": "tilted or slanted orientation",
    "B": "upright, level orientation",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 11,
    "A": "at least one sharp acute angle",
    "B": "no acute angles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 11,
    "A": "not symmetric about any axis",
    "B": "symmetric about several axes",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 12,
    "A": "elongated, much longer in one direction than the other",
    "B": "compact, about as wide as they are long",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 12,
    "A": "a small enclosed area",
    "B": "a large enclosed area",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 12,
    "A": "no rotational symmetry",
    "B": "rotational symmetry",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 12,
    "A": "at least one pointed tip",
    "B": "no pointed tip",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 12,
    "A": "tilted or lying flat",
    "B": "upright",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 13,
    "A": "an upright rectangle or a lying ellipse",
    "B": "a lying rectangle or an upright ellipse",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 13,
    "A": "a shape placed in the upper half of the frame",
    "B": "a shape placed in the lower half of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 13,
    "A": "a large outline",
    "B": "a small outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 13,
    "A": "a shape near the frame centre",
    "B": "a shape near a frame edge",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 13,
    "A": "a moderately elongated shape",
    "B": "a strongly elongated, thin shape",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 14,
    "A": "a large total length of drawn lines",
    "B": "a small total length of drawn lines",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 14,
    "A": "a figure spread over most of the frame",
    "B": "figures confined to small regions of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 14,
    "A": "mostly smooth curved lines",
    "B": "mostly straight line segments",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 14,
    "A": "one connected figure",
    "B": "several separate pieces",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 14,
    "A": "a figure centred in the frame",
    "B": "figures placed off the frame's centre",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 15,
    "A": "a closed outline with no gaps",
    "B": "an open outline with a gap or loose ends",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 15,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 15,
    "A": "a large shape filling most of the frame",
    "B": "a small shape leaving much empty space",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 15,
    "A": "a single stroke",
    "B": "two or more separate strokes",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 15,
    "A": "a symmetric shape",
    "B": "an asymmetric shape",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 16,
    "A": "a spiral turning clockwise from center outward",
    "B": "a spiral turning counterclockwise from center outward",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 16,
    "A": "a spiral whose outer end lies on the left",
    "B": "a spiral whose outer end lies on the right",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 16,
    "A": "a spiral with irregular uneven spacing between turns",
    "B": "a spiral with even spacing between turns",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 16,
    "A": "a spiral with at most two turns",
    "B": "a spiral with more than two turns",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 16,
    "A": "a spiral whose inner end points left",
    "B": "a spiral whose inner end points right",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 17,
    "A": "at least one sharp corner pointing inward",
    "B": "no inward-pointing corners; any dents are smooth curves",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 17,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 17,
    "A": "no line of symmetry",
    "B": "at least one line of symmetry",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 17,
    "A": "a mouth-like opening bitten into the outline",
    "B": "a closed, unbroken body without openings",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 17,
    "A": "a dent on only one side",
    "B": "dents on several sides or none",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 18,
    "A": "two wide parts joined by a narrow neck",
    "B": "one body with no narrow neck",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 18,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 18,
    "A": "a mirror-symmetric outline",
    "B": "an asymmetric outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 18,
    "A": "at least one sharp corner",
    "B": "no sharp corners",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 18,
    "A": "more than four corners or bends",
    "B": "four or fewer corners or bends",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 19,
    "A": "two parts joined by a horizontal neck",
    "B": "two parts joined by a vertical neck",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 19,
    "A": "two lobes of similar size",
    "B": "two lobes of clearly different size",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 19,
    "A": "no mirror symmetry",
    "B": "near mirror symmetry about a vertical axis",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 19,
    "A": "a short wide neck",
    "B": "a long thin stem",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 19,
    "A": "no flat base at the bottom",
    "B": "a broad base at the bottom",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 20,
    "A": "no symmetry of the figure maps one dot onto the other",
    "B": "a symmetry of the figure maps one dot onto the other",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 20,
    "A": "straight segment joining the dots stays inside the figure",
    "B": "straight segment joining the dots passes outside the figure",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 20,
    "A": "dots lie on convex stretches of the outline",
    "B": "dots flank a concave stretch of the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 20,
    "A": "both dots on the same half of the figure",
    "B": "dots on opposite halves of the figure",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 20,
    "A": "dots where the outline bends sharply",
    "B": "dots where the outline curves gently",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 21,
    "A": "at least one small figure",
    "B": "no small figures",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 21,
    "A": "figures of clearly different sizes",
    "B": "figures all the same size",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 21,
    "A": "figures spread far apart",
    "B": "figures close together",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 21,
    "A": "triangles pointing up or sideways",
    "B": "triangles pointing down",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 21,
    "A": "three or more figures",
    "B": "one or two figures",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 22,
    "A": "figures all the same size",
    "B": "figures of clearly different sizes",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 22,
    "A": "three figures or fewer",
    "B": "four figures or more",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 22,
    "A": "every figure a different shape",
    "B": "at least two figures share a shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 22,
    "A": "figures spread evenly across the frame",
    "B": "figures crowded toward one side",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 22,
    "A": "every triangle pointing upward",
    "B": "at least one triangle not pointing upward",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 23,
    "A": "exactly one figure",
    "B": "exactly two figures",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 23,
    "A": "no circle",
    "B": "at least one circle",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 23,
    "A": "a figure near the centre of the frame",
    "B": "figures placed off-centre",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 23,
    "A": "only straight edges or only curves",
    "B": "both curved and straight edges",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 23,
    "A": "figures of uniform size",
    "B": "a large figure beside a small figure",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 24,
    "A": "at least one circle",
    "B": "no circles",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 24,
    "A": "no triangle pointing downward",
    "B": "a triangle pointing downward",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 24,
    "A": "at most four shapes",
    "B": "more than four shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 24,
    "A": "shapes of mixed kinds",
    "B": "shapes of only one kind",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 24,
    "A": "an even number of shapes",
    "B": "an odd number of shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 25,
    "A": "a black filled triangle",
    "B": "a black filled circle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 25,
    "A": "all triangles pointing upward",
    "B": "at least one triangle pointing downward",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 25,
    "A": "at least one square",
    "B": "no squares",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 25,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 25,
    "A": "five shapes in the frame",
    "B": "four shapes in the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 26,
    "A": "at least one black triangle",
    "B": "no black triangle; every triangle is white",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 26,
    "A": "more circles than triangles",
    "B": "at least as many triangles as circles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 26,
    "A": "at least one triangle pointing down",
    "B": "all triangles pointing up",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 26,
    "A": "more black shapes than white shapes",
    "B": "more white shapes than black shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 26,
    "A": "at least one white circle",
    "B": "no white circle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 27,
    "A": "more black shapes than white shapes",
    "B": "more white shapes than black shapes",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 27,
    "A": "at least two black triangles",
    "B": "at most one black triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 27,
    "A": "more triangles than circles",
    "B": "more circles than triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 27,
    "A": "no more than one white square",
    "B": "two or more white squares",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 27,
    "A": "black shapes grouped near the centre",
    "B": "black shapes scattered toward the edges",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 28,
    "A": "more black circles than white circles",
    "B": "more white circles than black circles",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 28,
    "A": "more black shapes than white shapes",
    "B": "more white shapes than black shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 28,
    "A": "exactly one white circle",
    "B": "two or more white circles",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 28,
    "A": "more outline triangles than filled triangles",
    "B": "more filled triangles than outline triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 28,
    "A": "at least two black circles",
    "B": "only one black circle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 29,
    "A": "more small circles inside the outline than outside it",
    "B": "more small circles outside the outline than inside it",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 29,
    "A": "outline crowded with small circles",
    "B": "outline mostly empty of small circles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 29,
    "A": "fewer than five small circles outside the outline",
    "B": "many small circles scattered around the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 29,
    "A": "outside circles on one side of the outline",
    "B": "outside circles surrounding the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 29,
    "A": "at least two small circles inside the outline",
    "B": "few small circles inside the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 30,
    "A": "a line that crosses itself",
    "B": "a line that never crosses itself",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 30,
    "A": "at least two enclosed regions",
    "B": "at most one enclosed region",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 30,
    "A": "an irregular, tangled outline",
    "B": "a tidy, recognizable outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 30,
    "A": "a line end lying inside the figure",
    "B": "line ends lying outside the figure",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 30,
    "A": "a small inner loop",
    "B": "no small inner loop",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 31,
    "A": "drawn with one single continuous line",
    "B": "drawn with two separate lines",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 31,
    "A": "a line that crosses only itself",
    "B": "lines that cross each other",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 31,
    "A": "no full closed circle",
    "B": "at least one full closed circle",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 31,
    "A": "at most one loop",
    "B": "two or more loops",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 31,
    "A": "few crossing points",
    "B": "many crossing points",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 32,
    "A": "at least one acute corner pointing outward",
    "B": "no acute corner pointing outward",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 32,
    "A": "thin, narrow figures",
    "B": "fat, compact figures",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 32,
    "A": "small enclosed area",
    "B": "large enclosed area",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 32,
    "A": "no mirror symmetry",
    "B": "mirror symmetric outline",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 32,
    "A": "no inward-pointing notch",
    "B": "at least one inward-pointing notch",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 33,
    "A": "at least one acute angle or sharp point",
    "B": "no acute angles; only right, obtuse or rounded corners",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 33,
    "A": "a concave outline",
    "B": "a convex outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 33,
    "A": "an asymmetric, irregular outline",
    "B": "a balanced, regular outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 33,
    "A": "narrow, pinched parts",
    "B": "an evenly broad, compact body",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 33,
    "A": "only straight edges or only curved edges",
    "B": "a mix of straight and curved edges",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 34,
    "A": "a black figure with a large hole",
    "B": "a black figure with a tiny hole",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 34,
    "A": "a hole centred in the figure",
    "B": "a hole off-centre in the figure",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 34,
    "A": "a hole shaped differently from the outline",
    "B": "a hole shaped like the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 34,
    "A": "a hole with more corners than three",
    "B": "a hole that is a square or triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 34,
    "A": "a regular outer outline",
    "B": "an irregular outer outline",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 35,
    "A": "a hole elongated parallel to the outer shape's long axis",
    "B": "a hole elongated across the outer shape's long axis",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 35,
    "A": "a hole matching the outer shape's type",
    "B": "a hole differing from the outer shape's type",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 35,
    "A": "a hole exactly at the outer shape's centre",
    "B": "a hole off the outer shape's centre",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 35,
    "A": "a small hole relative to the black area",
    "B": "a large hole relative to the black area",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 35,
    "A": "an outer shape with mostly straight edges",
    "B": "an outer shape with mostly curved edges",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 36,
    "A": "a triangle placed higher than the circle",
    "B": "a circle placed higher than the triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 36,
    "A": "a triangle left of the circle",
    "B": "a triangle right of the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 36,
    "A": "a triangle pointing downward",
    "B": "a triangle pointing upward",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 36,
    "A": "circle and triangle far apart",
    "B": "circle and triangle close together",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 36,
    "A": "a circle nearer the frame edge than the triangle",
    "B": "a triangle nearer the frame edge than the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 37,
    "A": "triangle above the circle",
    "B": "circle above the triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 37,
    "A": "triangle as the highest shape",
    "B": "circle as the highest shape",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 37,
    "A": "circle as the lowest shape",
    "B": "circle not the lowest shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 37,
    "A": "triangle, circle, square placed clockwise",
    "B": "triangle, circle, square placed counterclockwise",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 37,
    "A": "circle to the right of the triangle",
    "B": "circle to the left of the triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 38,
    "A": "a triangle larger than the circle",
    "B": "a circle larger than the triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 38,
    "A": "a triangle pointing upward",
    "B": "a triangle pointing downward",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 38,
    "A": "circle and triangle far apart",
    "B": "circle and triangle close together",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 38,
    "A": "circle to the right of the triangle",
    "B": "circle to the left of the triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 38,
    "A": "triangle nearer the frame centre than the circle",
    "B": "circle nearer the frame centre than the triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 39,
    "A": "three segments nearly parallel to each other",
    "B": "at least one segment in a clearly different direction",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 39,
    "A": "one segment clearly longer than the other two",
    "B": "segments of similar length",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 39,
    "A": "segment extensions enclose no nearby triangle",
    "B": "segment extensions enclose a nearby triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 39,
    "A": "no horizontal or vertical segment",
    "B": "at least one horizontal or vertical segment",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 39,
    "A": "segments stacked side by side in a row",
    "B": "segments scattered around the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 40,
    "A": "three of the four dots on one straight line",
    "B": "no three dots on one straight line",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 40,
    "A": "one dot far from the other three",
    "B": "no dot far from the others",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 40,
    "A": "dots outlining a triangle",
    "B": "dots outlining a quadrilateral",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 40,
    "A": "dots in the upper part of the frame",
    "B": "dots spread over the whole frame",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 40,
    "A": "dots forming a mirror-symmetric pattern",
    "B": "dots forming an asymmetric pattern",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 41,
    "A": "three white circles lying on one straight line",
    "B": "three white circles not on one straight line",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 41,
    "A": "black circles not on one straight line",
    "B": "black circles lying on one straight line",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 41,
    "A": "a white circle nearest the centre",
    "B": "a black circle nearest the centre",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 41,
    "A": "black and white groups separable by a straight line",
    "B": "black and white groups intermixed",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 41,
    "A": "no black circle inside the white circles' triangle",
    "B": "a black circle inside the white circles' triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 42,
    "A": "three dots inside the outline lying in a straight line",
    "B": "three dots inside the outline forming a triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 42,
    "A": "exactly one dot outside the outline",
    "B": "exactly two dots outside the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 42,
    "A": "an outline made of straight edges",
    "B": "an outline made of curves",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 42,
    "A": "an elongated outline",
    "B": "a compact, rounded outline",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 42,
    "A": "outside dots right of the outline",
    "B": "outside dots left of the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 43,
    "A": "waves growing larger from left to right",
    "B": "waves growing smaller from left to right",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 43,
    "A": "a line that rises toward the right",
    "B": "a line that falls toward the right",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 43,
    "A": "smooth curved waves",
    "B": "angular straight-edged waves",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 43,
    "A": "fewer than six peaks",
    "B": "six or more peaks",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 43,
    "A": "peaks spaced widely apart",
    "B": "peaks packed closely together",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 44,
    "A": "one circle on each arc, on either side of the cusp",
    "B": "both circles on the same arc, on one side of the cusp",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 44,
    "A": "both circles on the same side of the line",
    "B": "circles on opposite sides of the line",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 44,
    "A": "circles on the convex side of the curve",
    "B": "circles on the concave side of the curve",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 44,
    "A": "cusp pointing downward",
    "B": "cusp pointing upward",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 44,
    "A": "circles equally far from the cusp",
    "B": "circles unequally far from the cusp",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 45,
    "A": "white outlined shape lying on top of the black shape",
    "B": "black shape lying on top of the white outlined shape",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 45,
    "A": "white shape smaller than the black shape",
    "B": "white shape larger than the black shape",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 45,
    "A": "white shape left of the black shape",
    "B": "white shape right of the black shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 45,
    "A": "two shapes of different kinds",
    "B": "two shapes of the same kind",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 45,
    "A": "white shape higher than the black shape",
    "B": "black shape higher than the white shape",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 46,
    "A": "a triangle lying in front of the circle",
    "B": "a circle lying in front of the triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 46,
    "A": "a triangle smaller than the circle",
    "B": "a triangle larger than the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 46,
    "A": "a triangle vertex pointing into the circle",
    "B": "a triangle side running behind the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 46,
    "A": "a black shape on top",
    "B": "a white shape on top",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 46,
    "A": "a triangle above or right of the circle",
    "B": "a circle above or right of the triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 47,
    "A": "a triangle inside a circle",
    "B": "a circle inside a triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 47,
    "A": "more triangles than circles",
    "B": "more circles than triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 47,
    "A": "a circle as the largest shape",
    "B": "a triangle as the largest shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 47,
    "A": "every triangle pointing upward",
    "B": "at least one triangle pointing downward",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 47,
    "A": "the nested pair at the picture centre",
    "B": "the nested pair away from the centre",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 48,
    "A": "black figures all above the white figures",
    "B": "white figures all above the black figures",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 48,
    "A": "more black figures than white figures",
    "B": "more white figures than black figures",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 48,
    "A": "black figures grouped on the left side",
    "B": "white figures grouped on the left side",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 48,
    "A": "the largest figure is black",
    "B": "the largest figure is white",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 48,
    "A": "a black triangle among the figures",
    "B": "no black triangle unless paired with another",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 49,
    "A": "small circles clustered inside the outline, scattered outside it",
    "B": "small circles scattered inside the outline, clustered outside it",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 49,
    "A": "more small circles inside the outline than outside",
    "B": "more small circles outside the outline than inside",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 49,
    "A": "inner small circles forming a triangle",
    "B": "inner small circles forming a straight line",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 49,
    "A": "a large outline with corners",
    "B": "a large outline without corners",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 49,
    "A": "inner small circles touching each other",
    "B": "inner small circles not touching each other",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 50,
    "A": "mirror symmetric about an axis",
    "B": "without any axis of mirror symmetry",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 50,
    "A": "an even number of separate figures",
    "B": "an odd number of separate figures",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 50,
    "A": "figures centered in the frame",
    "B": "figures shifted off the frame's center",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 50,
    "A": "every figure in an identical pair",
    "B": "at least one figure without an identical twin",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 50,
    "A": "all figures upright",
    "B": "some figure slanted or tilted",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 51,
    "A": "at least two circles close together",
    "B": "all circles far apart from each other",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 51,
    "A": "three circles lying on a straight line",
    "B": "no three circles on a straight line",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 51,
    "A": "circles crowded into one part of the frame",
    "B": "circles spread evenly across the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 51,
    "A": "circles forming a concave quadrilateral",
    "B": "circles forming a convex quadrilateral",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 51,
    "A": "unequal gaps between neighbouring circles",
    "B": "equal gaps between neighbouring circles",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 52,
    "A": "two arrowheads pointing opposite ways along the curve",
    "B": "two arrowheads pointing the same way along the curve",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 52,
    "A": "two arrowheads pointing toward each other",
    "B": "two arrowheads pointing away from each other",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 52,
    "A": "an S-shaped curve",
    "B": "a U-shaped curve",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 52,
    "A": "an arrowhead at the end of the line",
    "B": "no arrowhead at the end of the line",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 52,
    "A": "both arrowheads on the same half of the curve",
    "B": "arrowheads on different halves of the curve",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 53,
    "A": "an inner polygon with fewer sides than the outer polygon",
    "B": "an inner polygon with more sides than the outer polygon",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 53,
    "A": "an outer polygon with five or more sides",
    "B": "an outer polygon with four or fewer sides",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 53,
    "A": "a small inner shape leaving a wide gap to the outline",
    "B": "a large inner shape nearly touching the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 53,
    "A": "an irregular outer polygon",
    "B": "a regular outer polygon",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 53,
    "A": "an inner shape offset from the outer centre",
    "B": "an inner shape centred in the outer polygon",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 54,
    "A": "going clockwise: triangle, then cross, then circle",
    "B": "going clockwise: triangle, then circle, then cross",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 54,
    "A": "circle nearer the triangle than the cross is",
    "B": "cross nearer the triangle than the circle is",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 54,
    "A": "three figures spread far apart",
    "B": "three figures clustered close together",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 54,
    "A": "triangle is the leftmost figure",
    "B": "triangle is not the leftmost figure",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 54,
    "A": "cross lower than the circle",
    "B": "cross higher than the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 55,
    "A": "small circle left of the notch, seen from inside the shape",
    "B": "small circle right of the notch, seen from inside the shape",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 55,
    "A": "small circle above the notch",
    "B": "small circle below the notch",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 55,
    "A": "notch on the right half of the shape",
    "B": "notch on the left half of the shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 55,
    "A": "small circle right next to the notch",
    "B": "small circle far from the notch",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 55,
    "A": "notch with a rounded outline",
    "B": "notch with an angular outline",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 56,
    "A": "figures all filled or all outlined",
    "B": "both filled and outlined figures",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 56,
    "A": "only one kind of shape",
    "B": "both circles and triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 56,
    "A": "figures all the same size",
    "B": "figures of different sizes",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 56,
    "A": "all triangles pointing upward",
    "B": "at least one triangle pointing downward",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 56,
    "A": "an odd number of figures",
    "B": "an even number of figures",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 57,
    "A": "two identical shapes, same form and same size",
    "B": "two shapes differing in form or size",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 57,
    "A": "two shapes of the same kind",
    "B": "two shapes of different kinds",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 57,
    "A": "two shapes of equal size",
    "B": "two shapes of unequal size",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 57,
    "A": "two shapes placed diagonally",
    "B": "two shapes placed side by side",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 57,
    "A": "both shapes filled alike",
    "B": "shapes differing in fill",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 58,
    "A": "black squares all the same size",
    "B": "black squares differing in size",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 58,
    "A": "black squares lined up in a row or column",
    "B": "black squares offset diagonally",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 58,
    "A": "more black squares than outline shapes",
    "B": "no more black squares than outline shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 58,
    "A": "no single shape much larger than the rest",
    "B": "one black square much larger than the rest",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 58,
    "A": "a black square near the frame centre",
    "B": "no black square near the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 59,
    "A": "two shapes of the same form, differing only in size",
    "B": "two shapes of different form",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 59,
    "A": "two shapes with the same number of corners",
    "B": "two shapes with different numbers of corners",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 59,
    "A": "both shapes curved or both shapes straight-edged",
    "B": "one curved shape and one straight-edged shape",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 59,
    "A": "smaller shape placed higher than the larger shape",
    "B": "smaller shape placed lower than the larger shape",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 59,
    "A": "shapes far apart from each other",
    "B": "shapes close together",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 60,
    "A": "at least two figures similar in shape",
    "B": "no two figures similar in shape",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 60,
    "A": "two figures of the same kind",
    "B": "every figure of a different kind",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 60,
    "A": "three figures",
    "B": "two figures",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 60,
    "A": "no triangle next to a circle",
    "B": "a triangle next to a circle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 60,
    "A": "one figure much larger than another",
    "B": "figures of comparable size",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 61,
    "A": "equal numbers of crosses on both sides of the line",
    "B": "unequal numbers of crosses on the two sides of the line",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 61,
    "A": "an even total number of crosses",
    "B": "an odd total number of crosses",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 61,
    "A": "crosses on both sides of the line",
    "B": "all crosses on one side of the line",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 61,
    "A": "a line passing through the frame centre",
    "B": "a line away from the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 61,
    "A": "all crosses equally far from the line",
    "B": "crosses at varying distances from the line",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 62,
    "A": "a single line whose two ends are far apart",
    "B": "a single line whose two ends are close together",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 62,
    "A": "an elongated line stretched across the frame",
    "B": "a compact figure bunched in one area",
    "type": "genuine-rule"
  },
  {
    "ID": 3,
    "BP": 62,
    "A": "line ends pointing away from the rest of the line",
    "B": "a line end pointing toward another part of the line",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 62,
    "A": "a line with curls at its ends",
    "B": "a line without curls at its ends",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 62,
    "A": "a line with at most one sharp corner",
    "B": "a line with two or more sharp corners",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 63,
    "A": "a thickened black edge on the right side",
    "B": "a thickened black edge on the left side",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 63,
    "A": "taller than wide",
    "B": "wider than tall",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 63,
    "A": "a convex outline",
    "B": "a concave outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 63,
    "A": "a mirror-symmetric outline",
    "B": "an asymmetric outline",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 63,
    "A": "black thickening widest near the bottom",
    "B": "black thickening widest near the top",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 64,
    "A": "ellipse's long axis, extended, passes through the cross",
    "B": "ellipse's long axis, extended, passes through the circle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 64,
    "A": "cross farther from the ellipse than the circle",
    "B": "circle farther from the ellipse than the cross",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 64,
    "A": "cross and circle on opposite sides of the ellipse",
    "B": "cross and circle on the same side of the ellipse",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 64,
    "A": "cross left of the circle",
    "B": "cross right of the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 64,
    "A": "cross lower than the circle",
    "B": "cross higher than the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 65,
    "A": "triangles grouped in a horizontal band",
    "B": "triangles grouped in a vertical band",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 65,
    "A": "more circles than triangles",
    "B": "as many triangles as circles",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 65,
    "A": "circles lined up in a vertical column",
    "B": "circles scattered with no alignment",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 65,
    "A": "circles on both sides of the triangles",
    "B": "circles on one side of the triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 65,
    "A": "triangles in the upper half of the frame",
    "B": "triangles spanning the whole frame height",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 66,
    "A": "unconnected circles lined up in a horizontal row",
    "B": "unconnected circles lined up in a vertical column",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 66,
    "A": "a connected network with no closed loop",
    "B": "a connected network containing a closed loop",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 66,
    "A": "connected circles form one single network",
    "B": "connected circles form several separate networks",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 66,
    "A": "unconnected circles evenly spaced",
    "B": "unconnected circles unevenly spaced",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 66,
    "A": "fewer unconnected circles than connected circles",
    "B": "more unconnected circles than connected circles",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 67,
    "A": "right branch joins the stem higher than the left branch",
    "B": "left branch joins the stem higher than the right branch",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 67,
    "A": "right branch shorter than the left branch",
    "B": "left branch shorter than the right branch",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 67,
    "A": "stem bending to the right at its bottom end",
    "B": "stem bending to the left at its bottom end",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 67,
    "A": "right branch tip higher than the left branch tip",
    "B": "left branch tip higher than the right branch tip",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 67,
    "A": "stem top higher than both branch tips",
    "B": "a branch tip higher than the stem top",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 68,
    "A": "right branch tip higher than left branch tip",
    "B": "left branch tip higher than right branch tip",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 68,
    "A": "right branch joins the trunk above the left branch",
    "B": "left branch joins the trunk above the right branch",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 68,
    "A": "right branch longer than left branch",
    "B": "left branch longer than right branch",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 68,
    "A": "trunk tip is the highest point",
    "B": "a branch tip is the highest point",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 68,
    "A": "trunk top leans to the right of its base",
    "B": "trunk top leans to the left of its base",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 69,
    "A": "a ball at the tip of the main trunk",
    "B": "a ball at the tip of a side branch",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 69,
    "A": "a ball higher than every branch tip",
    "B": "a branch tip higher than the ball",
    "type": "genuine-rule"
  },
  {
    "ID": 3,
    "BP": 69,
    "A": "branches on both sides of the ball's stem",
    "B": "branches on one side of the ball's stem",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 69,
    "A": "a ball near the horizontal centre of the tree",
    "B": "a ball near the edge of the tree",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 69,
    "A": "a curved stem leading to the ball",
    "B": "a straight stem leading to the ball",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 70,
    "A": "side branches growing directly from one main stem",
    "B": "branches that split again into smaller branches",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 70,
    "A": "fewer than eight branch tips",
    "B": "eight or more branch tips",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 70,
    "A": "branches joining the stem at separate points",
    "B": "branches joining in pairs at shared forks",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 70,
    "A": "a lopsided crown leaning to one side",
    "B": "a balanced crown spread evenly on both sides",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 70,
    "A": "a curved, leaning main stem",
    "B": "an upright, nearly straight main stem",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 71,
    "A": "three shapes nested one inside the next",
    "B": "no more than two levels of nesting",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 71,
    "A": "every container holds exactly one shape",
    "B": "a container holding two or more shapes",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 71,
    "A": "circles, squares and triangles all present",
    "B": "at least one shape type missing",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 71,
    "A": "inner shape differs in type from its container",
    "B": "inner shape matches its container in type",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 71,
    "A": "at least one shape outside every container",
    "B": "all shapes inside a single container",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 72,
    "A": "a curve whose two end segments are parallel",
    "B": "a curve whose two end segments are not parallel",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 72,
    "A": "a curve symmetric about an axis or point",
    "B": "a curve with no symmetry",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 72,
    "A": "both curve ends at the same height",
    "B": "curve ends at different heights",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 72,
    "A": "a curve resembling a letter",
    "B": "a curve resembling a digit or symbol",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 72,
    "A": "an even number of bends in the curve",
    "B": "an odd number of bends in the curve",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 73,
    "A": "ellipse and rectangle with perpendicular long axes",
    "B": "ellipse and rectangle with parallel long axes",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 73,
    "A": "three shapes scattered irregularly",
    "B": "three shapes lined up in a row",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 73,
    "A": "triangle pointing toward the ellipse",
    "B": "triangle pointing away from the ellipse",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 73,
    "A": "at least one shape tilted off the frame axes",
    "B": "every shape aligned with the frame axes",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 73,
    "A": "ellipse and triangle with perpendicular long axes",
    "B": "ellipse and triangle with parallel long axes",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 74,
    "A": "a tail attached to the rounded end of the drop",
    "B": "a tail attached to the pointed end of the drop",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 74,
    "A": "a tail that curves away from the body",
    "B": "a tail that continues the body's outline smoothly",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 74,
    "A": "a drop pointing downward or sideways",
    "B": "a drop pointing upward or sideways",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 74,
    "A": "a tail shorter than the drop",
    "B": "a tail longer than the drop",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 74,
    "A": "a tail leaving the drop at a sharp angle",
    "B": "a tail leaving the drop at a gentle angle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 75,
    "A": "a triangle on the concave inner side of the arc",
    "B": "a triangle on the convex outer side of the arc",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 75,
    "A": "a triangle far from the arc",
    "B": "a triangle close to the arc",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 75,
    "A": "a triangle larger than in the other set",
    "B": "a triangle smaller than in the other set",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 75,
    "A": "a triangle right of the arc",
    "B": "a triangle left of the arc",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 75,
    "A": "a triangle tip pointing at the arc",
    "B": "a triangle tip pointing away from the arc",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 76,
    "A": "long sides curving inward, short ends bulging outward",
    "B": "long sides bulging outward, short ends curving inward",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 76,
    "A": "blunt obtuse corners",
    "B": "sharp pointed corners",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 76,
    "A": "bent along their length",
    "B": "straight along their length",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 76,
    "A": "length more than twice the width",
    "B": "length less than twice the width",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 76,
    "A": "tilted away from the frame edges",
    "B": "aligned with the frame edges",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 77,
    "A": "middle line bisecting the angle between the outer two",
    "B": "middle line not bisecting the angle between the outer two",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 77,
    "A": "two outer lines of equal length",
    "B": "two outer lines of unequal length",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 77,
    "A": "middle line longest of the three",
    "B": "middle line not longest of the three",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 77,
    "A": "outer lines meeting at under 90 degrees",
    "B": "outer lines meeting at over 90 degrees",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 77,
    "A": "meeting point near the frame centre",
    "B": "meeting point near a frame edge",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 78,
    "A": "three segments whose extensions all meet at one point",
    "B": "three segments whose extensions do not meet at one point",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 78,
    "A": "no two segments parallel",
    "B": "at least two segments parallel",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 78,
    "A": "exactly one horizontal segment",
    "B": "two horizontal segments or none",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 78,
    "A": "segments of clearly unequal lengths",
    "B": "segments of nearly equal lengths",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 78,
    "A": "segments clustered toward one side of the frame",
    "B": "segments spread evenly across the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 79,
    "A": "black circle closer to the white circle than to the triangle",
    "B": "black circle closer to the triangle than to the white circle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 79,
    "A": "triangle in the upper half of the box",
    "B": "triangle in the lower half of the box",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 79,
    "A": "black circle between the white circle and the triangle",
    "B": "triangle between the black and white circles",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 79,
    "A": "black circle left of the white circle",
    "B": "black circle right of the white circle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 79,
    "A": "three shapes nearly in a straight line",
    "B": "three shapes forming a wide triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 80,
    "A": "a cross equally distant from both dots",
    "B": "a cross much closer to one dot than the other",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 80,
    "A": "three marks forming an acute triangle",
    "B": "three marks forming an obtuse triangle",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 80,
    "A": "three marks spread evenly across the frame",
    "B": "two marks clustered close together",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 80,
    "A": "a cross lying off the line through both dots",
    "B": "a cross lying near the line through both dots",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 80,
    "A": "a cross nearer the frame edge than both dots",
    "B": "a cross nearer the frame centre than one dot",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 81,
    "A": "black and white figures separable by one straight line",
    "B": "black and white figures not separable by one straight line",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 81,
    "A": "equal numbers of black and white figures",
    "B": "unequal numbers of black and white figures",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 81,
    "A": "more triangles than circles",
    "B": "more circles than triangles",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 81,
    "A": "an upside-down triangle among the figures",
    "B": "no upside-down triangle among the figures",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 81,
    "A": "figures in an asymmetric arrangement",
    "B": "figures in a mirror-symmetric arrangement",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 82,
    "A": "three crosses at the corners of an equilateral triangle",
    "B": "no three crosses at the corners of an equilateral triangle",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 82,
    "A": "circle outside the outline of the crosses",
    "B": "circle inside the outline of the crosses",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 82,
    "A": "an odd number of crosses",
    "B": "an even number of crosses",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 82,
    "A": "circle nearer the frame edge than the centre",
    "B": "circle nearer the centre than the frame edge",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 82,
    "A": "crosses scattered in no regular pattern",
    "B": "crosses at the corners of a quadrilateral",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 83,
    "A": "a circle surrounded by the crosses, inside their outline",
    "B": "a circle outside the outline formed by the crosses",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 83,
    "A": "a circle near the centre of the frame",
    "B": "a circle near the edge of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 83,
    "A": "crosses spread widely across the frame",
    "B": "crosses clustered close together",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 83,
    "A": "a cross closer to the circle than any other",
    "B": "crosses all roughly equally far from the circle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 83,
    "A": "crosses on both sides of the circle horizontally",
    "B": "all crosses on one side of the circle horizontally",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 84,
    "A": "a square outside the dotted outline",
    "B": "a square inside the dotted outline",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 84,
    "A": "a concave dotted outline",
    "B": "a convex dotted outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 84,
    "A": "a square in the lower half of the frame",
    "B": "a square in the upper half of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 84,
    "A": "a square near the frame edge",
    "B": "a square near the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 84,
    "A": "a dotted outline with straight segments",
    "B": "a dotted outline with only curved segments",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 85,
    "A": "made of exactly three straight line segments",
    "B": "made of exactly five straight line segments",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 85,
    "A": "at most two line crossings",
    "B": "three or more line crossings",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 85,
    "A": "a figure suggesting a triangle",
    "B": "a figure suggesting a star or pentagon",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 85,
    "A": "lines leaving much empty space",
    "B": "lines densely filling the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 85,
    "A": "segments of roughly equal length",
    "B": "segments of clearly unequal lengths",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 86,
    "A": "three lines meeting at a single point",
    "B": "five lines meeting at a single point",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 86,
    "A": "few straight segments in total",
    "B": "many straight segments in total",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 86,
    "A": "branches bent into zigzags",
    "B": "branches straight without bends",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 86,
    "A": "junction point away from the frame centre",
    "B": "junction point at the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 86,
    "A": "branches of unequal length",
    "B": "branches of equal length",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 87,
    "A": "four line segments when lines are cut at every junction",
    "B": "five line segments when lines are cut at every junction",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 87,
    "A": "no T-shaped junctions",
    "B": "at least one T-shaped junction",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 87,
    "A": "lines meeting at no more than one point",
    "B": "lines meeting at two or more points",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 87,
    "A": "an even number of free line ends",
    "B": "an odd number of free line ends",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 87,
    "A": "no parallel lines",
    "B": "at least one pair of parallel lines",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 88,
    "A": "exactly three ovals in total",
    "B": "exactly five ovals in total",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 88,
    "A": "at most two separate groups of ovals",
    "B": "three or more separate groups of ovals",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 88,
    "A": "more black ovals than white ovals",
    "B": "more white ovals than black ovals",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 88,
    "A": "no row of four or more touching ovals",
    "B": "a row of four or more touching ovals",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 88,
    "A": "ovals spread over a small area",
    "B": "ovals spread over a large area",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 89,
    "A": "exactly three separate clusters of ovals",
    "B": "exactly five separate clusters of ovals",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 89,
    "A": "fewer than ten ovals in total",
    "B": "ten or more ovals in total",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 89,
    "A": "at most one black oval per cluster",
    "B": "some cluster with two black ovals",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 89,
    "A": "an odd number of black ovals",
    "B": "an even number of black ovals",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 89,
    "A": "clusters of different lengths",
    "B": "clusters all of equal length",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 90,
    "A": "exactly three separate runs of adjacent white ovals",
    "B": "exactly four separate runs of adjacent white ovals",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 90,
    "A": "an odd number of white ovals in total",
    "B": "an even number of white ovals in total",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 90,
    "A": "every chain mirror-symmetric left to right",
    "B": "at least one chain not mirror-symmetric left to right",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 90,
    "A": "no two black ovals separated by a single white oval",
    "B": "two black ovals separated by a single white oval",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 90,
    "A": "at least one chain starting with a black oval",
    "B": "no chain starting with a black oval",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 91,
    "A": "exactly three of a repeated element",
    "B": "exactly four of a repeated element",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 91,
    "A": "notches cut inward into the outline",
    "B": "tabs sticking outward from the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 91,
    "A": "an asymmetric, irregular arrangement",
    "B": "a symmetric, regular arrangement",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 91,
    "A": "more straight lines than curved lines",
    "B": "more curved lines than straight lines",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 91,
    "A": "all parts joined into one figure",
    "B": "parts spread as separate figures",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 92,
    "A": "dots forming one line that never crosses or branches",
    "B": "dots forming lines that cross or branch",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 92,
    "A": "a line winding inward like a spiral",
    "B": "a line that does not spiral",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 92,
    "A": "black dots placed at bends of the line",
    "B": "black dots placed on straight stretches",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 92,
    "A": "only smooth bends, no straight runs of dots",
    "B": "at least one straight run of dots",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 92,
    "A": "evenly spaced dots along the line",
    "B": "unevenly spaced dots along the line",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 93,
    "A": "a hollow circle where the dotted lines cross or branch",
    "B": "a black dot where the dotted lines cross or branch",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 93,
    "A": "exactly three black dots",
    "B": "a number of black dots other than three",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 93,
    "A": "black dots near the ends of the lines",
    "B": "black dots near the middle of the lines",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 93,
    "A": "dotted lines that meet at an oblique angle",
    "B": "dotted lines that meet at a right angle",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 93,
    "A": "black dots all on the same dotted line",
    "B": "black dots spread over different dotted lines",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 94,
    "A": "a black circle inside the chain, not at an end",
    "B": "a black circle at one end of the chain",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 94,
    "A": "a black circle in the upper half of the frame",
    "B": "a black circle in the lower half of the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 94,
    "A": "a chain of at most nine circles",
    "B": "a chain of ten or more circles",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 94,
    "A": "a mirror-symmetric chain of circles",
    "B": "an asymmetric chain of circles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 94,
    "A": "a black circle left of the frame centre",
    "B": "a black circle right of the frame centre",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 95,
    "A": "filled with vertical hatching lines",
    "B": "filled with horizontal hatching lines",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 95,
    "A": "hatching lines tilted relative to the shape's long axis",
    "B": "hatching lines aligned with the shape's long axis",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 95,
    "A": "shapes taller than they are wide",
    "B": "shapes wider than they are tall",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 95,
    "A": "only convex outlines",
    "B": "at least one concave outline",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 95,
    "A": "fewer than ten hatching lines",
    "B": "ten or more hatching lines",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 96,
    "A": "a triangle filled with parallel hatch lines",
    "B": "a quadrilateral filled with parallel hatch lines",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 96,
    "A": "hatch lines parallel to one edge of the outline",
    "B": "hatch lines parallel to no edge of the outline",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 96,
    "A": "a convex hatched outline",
    "B": "a concave hatched outline",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 96,
    "A": "longest hatch line touching a corner",
    "B": "longest hatch line touching no corner",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 96,
    "A": "fewer than fifteen hatch lines",
    "B": "fifteen or more hatch lines",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 97,
    "A": "a figure forming a triangle overall",
    "B": "a figure forming a circle overall",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 97,
    "A": "made only of straight strokes",
    "B": "containing at least one curved stroke",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 97,
    "A": "a figure offset from the frame centre",
    "B": "a figure centred in the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 97,
    "A": "a figure covering less than half the frame",
    "B": "a figure covering more than half the frame",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 97,
    "A": "an asymmetric figure",
    "B": "a mirror-symmetric figure",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 98,
    "A": "a triangle outline",
    "B": "a quadrilateral outline",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 98,
    "A": "background lines that never cross each other",
    "B": "background lines that cross each other",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 98,
    "A": "an outline with only acute angles",
    "B": "an outline with at least one non-acute angle",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 98,
    "A": "straight background lines in one direction",
    "B": "background lines forming a grid",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 98,
    "A": "an irregular outline with unequal sides",
    "B": "a regular outline with matching opposite sides",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 99,
    "A": "a loop of circles crossing a loop of triangles",
    "B": "a loop of circles and a loop of triangles that do not cross",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 99,
    "A": "circles forming an open curve",
    "B": "circles forming a closed loop",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 99,
    "A": "triangles scattered without a pattern",
    "B": "triangles arranged in a ring",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 99,
    "A": "more circles than triangles",
    "B": "more triangles than circles",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 99,
    "A": "a circle loop and triangle loop of equal size",
    "B": "a circle loop and triangle loop of different sizes",
    "type": "candidate-rule"
  },
  {
    "ID": 1,
    "BP": 100,
    "A": "the letter A in various fonts",
    "B": "the Cyrillic letter Б in various fonts",
    "type": "genuine-rule"
  },
  {
    "ID": 2,
    "BP": 100,
    "A": "two slanted strokes meeting near the top",
    "B": "a vertical stroke on the left side",
    "type": "candidate-rule"
  },
  {
    "ID": 3,
    "BP": 100,
    "A": "a triangular enclosed hole",
    "B": "a rounded enclosed hole",
    "type": "candidate-rule"
  },
  {
    "ID": 4,
    "BP": 100,
    "A": "mirror symmetric about a vertical axis",
    "B": "not mirror symmetric about a vertical axis",
    "type": "candidate-rule"
  },
  {
    "ID": 5,
    "BP": 100,
    "A": "wider at the bottom than at the top",
    "B": "as wide at the top as at the bottom",
    "type": "candidate-rule"
  }
]
