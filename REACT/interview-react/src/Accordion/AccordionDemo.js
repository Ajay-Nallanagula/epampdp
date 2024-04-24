const toggleAccordion = useCallback(
    (id) => {
      //activeAccordions means the ones that were opened
      setActiveAccordions((prev) => {
        //at first, we are storing them in the Set
        const updatedActiveAccordions = new Set(prev);
        //if the id of the accordion you are going to click now is already in opened ?
        if (updatedActiveAccordions.has(id)) {
          // if yes, then delete that id from that set stored (which means, the accordion is going to be closed)
          updatedActiveAccordions.delete(id);
        } else {
             // if it is not allowed to keep multiple accordions opened then on click of any accordion, at first we are closing all the opened ones
          if (!allowMultipleOpen) {
            // simply maintain an empty set by clearing everything (this helps us to close everything that is opened only when checkbox is unchecked)
            updatedActiveAccordions.clear();
          }
          // then as the click happened, post all clear we  are adding that particular clicked accordion and we will be showing only one in this case.
          updatedActiveAccordions.add(id);
        }
        // returning the set
        return updatedActiveAccordions;
      });
    },
    [allowMultipleOpen]
  );