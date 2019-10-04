import elements from './elements';

const chemistBacktrack = word => {
  let current = { element: null, letters: 0, prev: null, next: [] };

  while (true) {
    current.visited = true;

    // found a solution
    if (current.letters === word.length) {
      const elements = [];

      while (current.element) {
        elements.unshift(current.element);
        current = current.prev;
      }

      return { success: true, elements };
    }

    // calculate possible next steps
    if (current.next.length === 0) {
      if (current.letters < word.length - 1) {
        const element = elements.find(
          e =>
            e.symbol.toLowerCase() ===
            `${word[current.letters]}${
              word[current.letters + 1]
            }`.toLowerCase(),
        );
        if (element)
          current.next.push({
            element,
            visited: false,
            prev: current,
            letters: current.letters + 2,
            next: [],
          });
      }

      if (current.letters < word.length) {
        const element = elements.find(
          e => e.symbol.toLowerCase() === word[current.letters].toLowerCase(),
        );
        if (element)
          current.next.push({
            element,
            visited: false,
            prev: current,
            letters: current.letters + 1,
            next: [],
          });
      }
    }

    // select next possible step
    const next = current.next.find(n => !n.visited);

    // go to next step
    if (next) {
      current = next;
      // backtrack
    } else if (current.prev) {
      current = current.prev;
      // no next step possible
    } else {
      return { success: false, elements: [] };
    }
  }
};

export { chemistBacktrack };
