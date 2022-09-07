

export default function Transactions({ transactions, toggleText }) {

    let transactionsToDisplay = transactions.sort((tx1, tx2) => tx2.id - tx1.id).map(transaction => {
        return (
            <tr>
                <td>{transaction.currency}</td>
                <td>{transaction.price}</td>
                <td>{transaction.status}</td>
                <td>{transaction.side}</td>
                <td>{transaction.date}</td>
            </tr>
        )
    })


    return (
        <>
            <div className={"tableHeader " + toggleText}>
                <table>
                    <thead>
                        <tr>
                            <th>CCY</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Side</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className={'transactions ' + toggleText} >
                <table>
                    <tbody>
                        {transactionsToDisplay}
                    </tbody>
                </table>
            </div>
        </>
    )
}