// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Definition for singly-linked list.
// class ListNode {
//     constructor(val, next){
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }

// }

let link1 = [2,4,3]
let link2 = [5,6,4]

let link01 = [0]
let link02 = [0]

let link001 = [9,9,9,9,9,9,9]
let link002 = [9,9,9,9]

const addTwoNumbers = (link1, link2) => {
    let carry = 0;
    let previousNode = new ListNode();
    const headNode = previousNode;

    while(link1 || link2 || carry){
        let val1 = 0;
        let val2 = 0;
        if(link1){
            val1 = link1.val;
            link1 = link1.next;
        }
        if(link2){
            val2 = link2.val;
            link2 = link2.next;
        }
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;
        const currentNode = new ListNode(digit);
        previousNode.next = currentNode;
        previousNode = currentNode;
    }
    return headNode.next;
}