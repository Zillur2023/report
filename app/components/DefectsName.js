import React from "react";

const DefectsName = () => {
  const defectsName = [
    'Broken stitch',
    'Needle mark',
   ' Open seam',
    'Fabric fault',
    'Drop stitch',
    'Needle hole',
    'Improper tuck',
    'Improper shape',
    'Joint stitch',
    'Label fault',
   ' Measurement',
    'Oil spot',
    'Dirty spot',
    'Puckering',
    'Pleat',
    'Wrong SPI',
    'Yarn oont',
    'Rawedge',
    'Reverse',
    'Slanted',
    'Skip stitch',
    'Shading',
    'Thread mistake',
    'Twisting',
    'Thread tension',
    'Up down',
    'Un even',
    'Uncut thread',
    'Wavyness',
    'Pocket',
    'Side band',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    'Rejects',
    '.',
    'Total check gmts',
    'Total Pass gmts',
    'Total defective gmts',
    'Total defects qty',
    'DHU%',
    'Defective rectified qty',
    'Defective balance qty',
    'Rectify Defective check &',
    'Rejects qty',
    'Supervisor signature',
  ];

  return (
    <div>
      <table className="table-auto min-w-full">
        <thead>
            <tr>
            <th className=" py-2 border-2">Defects Name</th>
            </tr>
        </thead>

       <tbody>
       {defectsName.map((defect ,index) => (
          <tr  key={index}>
            <td className=" whitespace-nowrap pl-1 w-full border-2"> 
           
            <span className="  inline">{defect} </span>
            </td>
          </tr>
        ))}
       </tbody>
      </table>
    </div>
  );
};

export default DefectsName;
