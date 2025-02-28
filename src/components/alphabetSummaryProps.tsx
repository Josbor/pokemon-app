import React from 'react';

export interface AlphabetSummaryProps {
    alphabetCounts: Record<string, number>;
}

const styles = {
    container: "border rounded-md overflow-hidden",
    table: "min-w-full divide-y divide-gray-200",
    thead: "bg-gray-50",
    th: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
    tdLetter: "px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900 uppercase",
    tdCount: "px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500",
    emptyCell: "px-6 py-4 whitespace-nowrap"
};

export default function AlphabetSummary({ alphabetCounts }: AlphabetSummaryProps) {
    // Create an array of alphabet letters
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    // Group the letters into rows of 6 for better display
    const rows = [];
    for (let i = 0; i < alphabet.length; i += 6) {
        rows.push(alphabet.slice(i, i + 6));
    }

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.th}>Letra</th>
                        <th className={styles.th}>Cantidad</th>
                        <th className={styles.th}>Letra</th>
                        <th className={styles.th}>Cantidad</th>
                        <th className={styles.th}>Letra</th>
                        <th className={styles.th}>Cantidad</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((letter) => (
                                <React.Fragment key={letter}>
                                    <td className={styles.tdLetter}>{letter}</td>
                                    <td className={styles.tdCount}>{alphabetCounts[letter] || 0}</td>
                                </React.Fragment>
                            ))}
                            {/* Fill empty cells if row is not complete */}
                            {row.length < 3 &&
                                Array(3 - row.length)
                                    .fill(0)
                                    .map((_, i) => (
                                        <React.Fragment key={`empty-${i}`}>
                                            <td className={styles.emptyCell}></td>
                                            <td className={styles.emptyCell}></td>
                                        </React.Fragment>
                                    ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
