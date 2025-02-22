import { useState } from "react";
import accordionData from "./data";
import "./style.css";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export default function Accordion() {
  // Single selection
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState<
    boolean | null
  >(null);
  const [multiSelect, setMultiSelect] = useState<number[]>([]);

  const handleSingleSelection = (getCurrentId: number) => {
    if (selected === getCurrentId) {
      setSelected(null);
    } else {
      setSelected(getCurrentId);
    }
  };

  const handleMultiSelection = (getCurrentId: number) => {
    const multiSelectCopy: number[] = [...multiSelect];

    const findIndexOfCurrentId: number = multiSelect.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      setMultiSelect([...multiSelectCopy, getCurrentId]);
    } else {
      multiSelectCopy.splice(findIndexOfCurrentId, 1);
      setMultiSelect(multiSelectCopy);
    }
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          if (enableMultiSelection) {
            setSelected(null);
          } else {
            setMultiSelect([]);
          }
          setEnableMultiSelection(!enableMultiSelection);
        }}
        className="multi-select-btn"
      >
        Multi-Selection
      </button>
      <div className="accordion">
        {accordionData && accordionData.length === 0 ? (
          <h1>No Data Present</h1>
        ) : (
          accordionData.map((dataItem: AccordionItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiSelect.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
