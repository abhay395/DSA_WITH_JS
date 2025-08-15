if (!head || !head.next) {
        return head;
    }
    let middle = findMiddle(head);
    let left = sortList(head);
    let right = sortList(middle);
    return mergeList(left, right)