const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTransaction)
})


async function deleteTransaction() {
    const transactionId = this.parentNode.parentNode.dataset.id
    try {
        const response = await fetch('finance/deleteTransaction', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'transactionIdFromJSFile': transactionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

