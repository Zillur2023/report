"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../(redux)/features/report/reportSlice";
import DefectsName from "./DefectsName";
import Header from "./Header";

const ReportPage = () => {
  const dispatch = useDispatch();
  const { allItems } = useSelector((state) => state.report);

  // console.log(allItems);
  // console.log(totalCheckGmts);

  const handleUpdateValue = (index, field, value) => {
    dispatch(updateField({ index, field, value }));
  };

  useEffect(() => {
    const keys = Object.keys(allItems[0]); // Assuming allItems always has at least one item
    keys.forEach((key) => {
      let totalDefectsQtySum = 0;
      for (let i = 0; i <= 36; i++) {
        totalDefectsQtySum += parseFloat(allItems[i][key] || 0);
      }

      const totalDefectsQty = parseFloat(allItems[42][key] || 0);
      const totalCheckGmts = parseFloat(allItems[39][key] || 0);
      const totalDefectiveGmts = parseFloat(allItems[41][key] || 0);
      const totalPassGmts = totalCheckGmts - totalDefectiveGmts;
      const DefectiveRectifiedQty = parseFloat(allItems[44][key] || 0);
      const RejectsQty = parseFloat(allItems[37][key] || 0);
      const DefectiveBalanceQty = totalDefectiveGmts - DefectiveRectifiedQty;

      let DHU = 0;
      if (totalCheckGmts) {
        DHU = parseFloat((totalDefectsQty * 100) / totalCheckGmts).toFixed(2);
      }

      dispatch(
        updateField({ index: 43, field: key, value: parseFloat(DHU || "") })
      );
      dispatch(
        updateField({
          index: 47,
          field: key,
          value: parseFloat(RejectsQty || ""),
        })
      );
      dispatch(
        updateField({
          index: 45,
          field: key,
          value: parseFloat(DefectiveBalanceQty || ""),
        })
      );
      dispatch(
        updateField({
          index: 42,
          field: key,
          value: parseFloat(totalDefectsQtySum || ""),
        })
      );
      dispatch(
        updateField({
          index: 40,
          field: key,
          value: parseFloat(totalPassGmts || ""),
        })
      );
    });
  }, [allItems, dispatch]);

  // const total = (index) => {
  //   const result =
  //     parseFloat(allItems[index].one || 0) +
  //     parseFloat(allItems[index].two || 0) +
  //     parseFloat(allItems[index].three || 0) +
  //     parseFloat(allItems[index].four || 0) +
  //     parseFloat(allItems[index].five || 0) +
  //     parseFloat(allItems[index].six || 0) +
  //     parseFloat(allItems[index].seven || 0) +
  //     parseFloat(allItems[index].eight || 0) +
  //     parseFloat(allItems[index].nine || 0) +
  //     parseFloat(allItems[index].ten || 0);
  //   return result;
  // };

  const total = (index) => {
    if (!allItems[index]) return 0; // Ensure allItems[index] is defined

    return Object.values(allItems[index]).reduce((acc, val) => {
      // Convert val to float and add to accumulator
      return acc + parseFloat(val || 0);
    }, 0); // Initialize accumulator with 0
  };

  return (
  <div className=" ">
    
      <div className=" flex">
      <DefectsName />

      <table className="table-auto w-full pl-1 ">
        <thead>
          <tr>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">08-09 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">09-10 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">10-11</span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">11-12 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">12-01 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">02-03 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">03-04 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">04-05 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">05-06 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">06-07 </span>
            </th>
            <th className=" whitespace-nowrap py-2 border-2">
              <span className="  inline">Total </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {allItems?.map((item, index) => (
            <tr key={index}>
              <td className="border-2 ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.one}
                  onChange={(e) =>
                    handleUpdateValue(index, "one", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.two}
                  onChange={(e) =>
                    handleUpdateValue(index, "two", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.three}
                  onChange={(e) =>
                    handleUpdateValue(index, "three", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.four}
                  onChange={(e) =>
                    handleUpdateValue(index, "four", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.five}
                  onChange={(e) =>
                    handleUpdateValue(index, "five", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.six}
                  onChange={(e) =>
                    handleUpdateValue(index, "six", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.seven}
                  onChange={(e) =>
                    handleUpdateValue(index, "seven", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.eight}
                  onChange={(e) =>
                    handleUpdateValue(index, "eight", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.nine}
                  onChange={(e) =>
                    handleUpdateValue(index, "nine", parseInt(e.target.value))
                  }
                />
              </td>
              <td className="border-2  ">
                <input
                  className="w-full pl-1   rounded "
                  type="number"
                  value={item.ten}
                  onChange={(e) =>
                    handleUpdateValue(index, "ten", parseInt(e.target.value))
                  }
                />
              </td>
              {/* Repeat this pattern for the remaining columns */}
              <td className="border-2">
                {parseFloat(total(index).toFixed(2) || 0) || ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ReportPage;
