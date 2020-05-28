let itemID = 1;

let inputAction = document.getElementById('addItem')
inputAction.addEventListener('click', function makeList() {
    // selecting ul
    const itemLists = document.querySelector('#itemLists');

    // creating item
    let itemBox = document.createElement('li');
    setAttributes(itemBox, {
        id: 'Item-' + itemID,
        class: 'list'
    })

    // creating span for item name
    const itemSpan = document.createElement('span');
    setAttributes(itemSpan, {
        id: 'span-' + itemID,
        class: 'span',
        onclick: 'markDone(this)',
    })

    // creating checkbox
    const doneCBox = document.createElement('input');
    setAttributes(doneCBox, {
        type: 'checkbox',
        value: 'DONE',
        id: 'CBox-' + itemID,
        class: 'button checkbox',
        onclick: 'markDone(this) ',
    })
    // creating delete Button
    const delBtn = document.createElement('input')
    setAttributes(delBtn, {
        type: 'button',
        value: '\u2A09',
        id: 'delBtn-' + itemID,
        class: 'button delete',
        onClick: 'delBtn(this)',
    })

    // getting and storing user input
    const itemInput = document.querySelector('#itemInput');
    const itemInputValue = document.createTextNode(itemInput.value);
    const itemInputValueTrimmed = itemInputValue.nodeValue.trim()
    // Checking Empty or not
    if (itemInputValueTrimmed === "") {
        alert("Enter Something!")
        return itemID;
    }

    // apending childs
    itemSpan.appendChild(itemInputValue);
    appendChilds(itemBox, [doneCBox, itemSpan, delBtn], )
    itemLists.appendChild(itemBox);

    return itemID++;
})




// function for deleting item with the help delete button
function delBtn(ele) {
    itemBox = ele.parentNode;
    itemBox.remove();
}
// Function for setting multiples attributes at once
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
// function for appending multiple childs at once
function appendChilds(el, attrs) {
    for (var i in attrs) {
        el.appendChild(attrs[i]);
    }
}

// Function to create strikethrogh in span (item of List) by targeting checkbox state
function markDone(span) {
    if (span.checked) {
        span.nextSibling.style.textDecoration = "line-through";
    } else {
        span.nextSibling.style.textDecoration = "none";
    }
}