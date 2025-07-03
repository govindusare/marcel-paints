import React from 'react';

const ReusableTable = ({ caption, columns, data, align = 'center' }) => {
  const alignmentClass =
    align === 'left' ? 'self-start' :
    align === 'right' ? 'self-end' : 'self-center';

  return (
    <div className={`flex flex-col ${alignmentClass} w-full max-w-[1100px] mt-16 px-4 relative`}>
      {/* Caption pill */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-[#EEC2FA] text-[#1E1E5D] text-sm font-semibold shadow-md text-center uppercase">
        {caption}
      </div>

      {/* Table */}
      <div className="w-full rounded-[12px] overflow-hidden mt-6 border border-gray-300">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1E1E5D] text-white text-sm text-center">
              {columns.map((col, idx) => (
                <th key={idx} className="p-3 border border-gray-300 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center p-4 text-gray-500">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center text-sm bg-white">
                  {columns.map((col, colIndex) => {
                    const key = col.toLowerCase().replace(/\s+/g, '_');
                    const value = row[key] || '-';

                    const isLastRow = rowIndex === data.length - 1;
                    const isFirstCol = colIndex === 0;
                    const isLastCol = colIndex === columns.length - 1;

                    return (
                      <td
                        key={colIndex}
                        className={`
                          p-3 border border-gray-300 whitespace-pre-line
                          ${isLastRow && isFirstCol ? 'rounded-bl-[12px]' : ''}
                          ${isLastRow && isLastCol ? 'rounded-br-[12px]' : ''}
                        `}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
