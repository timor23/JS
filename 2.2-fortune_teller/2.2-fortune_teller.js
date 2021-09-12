function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    let numberOfChildrenPhrase;
    if (numberOfChildren == 1) {
        numberOfChildrenPhrase = 'one child';
    }
    if (numberOfChildren == 0) {
        numberOfChildrenPhrase = 'no children';
    }
    
    if (numberOfChildren > 1) {
        numberOfChildrenPhrase = numberOfChildren + ' children';
    }
    
    return 'you will be a ' + jobTitle + ' in ' + location + ' and married to '
            + partnerName + ' with ' + numberOfChildrenPhrase;
}

