function Node(data) {
    this.next = null;
    this.data = data;
}
function AddOnHead(data, head) {
    if (!head) {
        let newNode = new Node(data);
        return newNode;
    }
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
    return head
}
function AddOnTaile(data, head) {
    let current = head;
    let newNode = new Node(data)
    if (!current) {
        return newNode
    }
    while (current.next) {
        current = current.next;
    }
    current.next = newNode
    return head;
}
function printList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next
    }
    console.log(" ")
}
function AddOnPosition(data, pos, head) {
    if (pos == 0) {
        return AddOnHead(data, head);
    }
    let i = 0;
    let prev = null;
    let current = head;
    let newNode = new Node(data);
    while (current && i < pos) {
        prev = current;
        current = current.next;
        i++
    }
    if (i < pos) {
        console.log("Position is out of length")
        return AddOnTaile(data, head)
    }
    prev.next = newNode;
    newNode.next = current
    return head;
}
function deleteOnTaile(head) {
    if (!head || !head.next) {
        return null;
    }
    let current = head;
    while (current.next.next) {
        current = current.next;
    }
    current.next = null
    return head
}
function deleteOnHead(head) {
    let temp = head;
    head = head.next;
    temp.next = null
    return head
}
function deleteVale(head, val) {// Leetcode que
    // let dummy = new Node(0);
    // dummy.next = head;
    // let prev = dummy;
    // let current = head;
    // while (current) {
    //     if (current.data == val) {
    //         prev.next = current.next
    //         current = current.next;
    //     } else {
    //         prev = current;
    //         current = current.next;
    //     }
    // }
    // return dummy.next;
    let dummy = new Node(0);
    dummy.next = head;
    let current = dummy;
    while (current.next) {
        if (current.next.data == val) {
            current.next = current.next.next
        } else current = current.next
    }
    return dummy.next

}
function deleteAtPostion(pos, head) {
    // if (pos == 0) return deleteOnHead(head);
    let dummy = new Node(0);
    dummy.next = head;
    let current = head;
    let prev = dummy
    let i = 0;
    while (current.next && i < pos) {
        prev = current;
        current = current.next;
        i++;
    }
    if (!current) {
        prev.next = null
        return dummy.next;
    }
    // if(current)
    prev.next = current.next;
    return dummy.next;
}
function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}
function reverseLinkedList(head) {
    let prev = null
    let front = head;
    while (front) {
        let temp = front.next;
        front.next = prev;
        prev = front;
        front = temp
    }
    return prev
}
function reverseLinkedListWithRecursion(head) {

}
function reveresDoublyLinkedList(head) {
    let current = head; //? it's will not work 
    let temp = null
    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev
    }
    return temp.prev;
}
function detectLoopInList(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true
        }
    }
    return false
}
function checkPalidrome(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let newList = reverseLinkedList(slow.next);
    let i = head;
    let flag = true;
    // printList(newList)
    let j = newList
    while (i && j) {
        if (i.data != j.data) {
            flag = false
            break;
        }
        i = i.next;
        j = j.next;
    }
    reverseLinkedList(newList);
    printList(head)
    console.log(flag)
    // return flag
}
function findTheStartPointOfList(head) {

}
function checkThatListIsPalidrom(head) {

}
function oddEvenLinkedList(head) {
    
}
function findIntersectionOfTwoLinkedList(head1, head2) {

}
function removenthNodeOfTheEndOflist(head, n) {

}
function removeDuplicateFromSortedList(head) {
    let current = head;
    while (current.next) {
        if (current.data == current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next
        }
    }
    return head;
}
function addTwoNumbers(head1, head2) {

}
function rotateList(head, k) {

}
function removeNthNodeInList(head, n) {
    let dummy = new Node(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    let i = 0;
    while (fast.next) {
        if (i < n) {
            fast = fast.next;
            i++;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }
    slow.next = slow.next.next;
    return dummy.next;
}

function bulkListCreate(arr) {
    let head = new Node(0);
    let current = head;
    for (let el of arr) {
        current.next = new Node(el);
        current = current.next;
    }
    return head.next;
}
let head = bulkListCreate([1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5])
printList(head)
head = removeDuplicateFromSortedList(head)
printList(head)
// head = AddOnTaile(2, head)
// head = AddOnTaile(3, head)
// head = AddOnTaile(4, head)
// head = AddOnTaile(5, head)

// head = removeNthNodeInList(head, 1)
// printList(head)
// head = deleteVale(head, 6)
// let reveresHe = reverseLinkedList(head)
// console.log(reveresHe)
// printList(reveresHe)
// head = deleteAtPostion(4, head)
// head = AddOnPosition(5, 4, head)
// head = deleteOnHead(head);
// head = deleteOnHead(head);
// head = deleteOnTaile(head)
// head = deleteOnTaile(head)
// head = deleteOnTaile(head)
// head = deleteOnTaile(head)
// head = deleteOnTaile(head)
// printList(head)