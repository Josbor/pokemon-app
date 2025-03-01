export interface AlphabetSummaryProps {
    alphabetCounts: Record<string, number>;
    windowSize: { width: number; height: number };
}

const styles = {
    container: "border rounded-md overflow-hidden",
    table: "min-w-full divide-y divide-red-200",
    thead: "bg-red-50 ",
    th: "px-1 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider ",
    tdLetter: "px-2 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900 uppercase",
    tdCount: "px-2 py-4 whitespace-nowrap text-center text-sm text-gray-500",
    emptyCell: "px-6 py-4 whitespace-nowrap"
};

export default function AlphabetSummary({ alphabetCounts }: AlphabetSummaryProps) {
    // Create an array of alphabet letters
    const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");


    return (
        <div className={styles.container}>
            <div className="overflow-x-auto">
                
            {new Array(3).fill(9).map((Numbervalue, index) => (
          
          <table key={index} className={`${styles.table} text-sm`}>
          <thead className={styles.thead}>
              <tr>
                  {alphabet.slice(Numbervalue * index, Numbervalue * (index + 1)).map((letter) => (
                      <th key={letter} className={`${styles.th}w-1/12 `}>{letter}</th>
                  ))}
              </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                  {alphabet.slice(Numbervalue * index, Numbervalue * (index + 1)).map((letter) => (
                      <td key={letter} className={`${styles.tdCount} w-1/12`}>{alphabetCounts[letter] || 0}</td>
                  ))}
              </tr>
          </tbody>
          
      </table>
 
        ))}
            </div>
        </div>
    );
}
       
 

