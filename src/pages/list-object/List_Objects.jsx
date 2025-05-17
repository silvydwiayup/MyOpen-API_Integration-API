import "./List_Object.css";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";

const List_Object = () => {
  return <Container_List_Object />;
};

const Container_List_Object = () => {
    const [jsonData, setJsonData] = useState([
        {
            key: "aa",
            value: [
                { key: "ada", value: "" },
                { key: "dua", value: "" }
            ]
        },
        {
            key: "simpleKey",
            value: ""
        }
    ]);

    // start add object btn
    const handleAddFieldObject = () => {
        const keyInput = prompt("Enter the key (e.g. name):");
        if (!keyInput?.trim()) {
            alert("Please enter a valid key!");
            return;
        }
        setJsonData((prev) => [...prev, { key: keyInput.trim(), value: "" }]);
    };
    // end add object btn

    // start edit object btn
    const handleEditObject = (index, data, setData) => {
        const newKey = prompt("Edit key:", data[index].key);
        if (!newKey?.trim()) return;
        const updated = [...data];
        updated[index].key = newKey.trim();
        setData(updated);
    };
    // end edit object btn

    // start delete object btn
    const handleDeleteObject = (index, data, setData) => {
        const updated = data.filter((_, i) => i !== index);
        setData(updated);
    };
    // end delete object btn

    // start add nested object btn
    const handleAddNestedObject = () => {
        const nestedKey = prompt("Nested Object Key:");
        if (!nestedKey?.trim()) return;
        setJsonData((prev) => [...prev, { key: nestedKey.trim(), value: [] }]);
    };
    // end add nested object btn

    // start add object to nested btn
    const handleAddSubFieldObject = (parentIndex) => {
    const subKey = prompt("Field key inside nested object:");
        if (!subKey?.trim()) return;
        const updated = [...jsonData];
        updated[parentIndex].value.push({ key: subKey.trim(), value: "" });
        setJsonData(updated);
    };
    // end add object to nested btn

    // start edit object to nested btn
    const handleEditSubFieldObject = (parentIndex, subIndex) => {
        const currentKey = jsonData[parentIndex].value[subIndex].key;
        const newKey = prompt("Edit nested key:", currentKey);
        if (!newKey?.trim()) return;
        const updated = [...jsonData];
        updated[parentIndex].value[subIndex].key = newKey.trim();
        setJsonData(updated);
    };
    // end edit object to nested btn
    
    // start delete object to nested btn
    const handleDeleteSubFieldObject = (parentIndex, subIndex) => {
        const updated = [...jsonData];
        updated[parentIndex].value = updated[parentIndex].value.filter((_, i) => i !== subIndex);
        setJsonData(updated);
    };
    // end delete object to nested btn

    // start get json data object
    const getJsonObject = (data, indent = 2) => {
        const lines = ['{'];
        data.forEach(({ key, value }, i) => {
            const isNested = Array.isArray(value);
            const comma = i < data.length - 1 ? ',' : '';
            const formattedValue = isNested
            ? getJsonObject(value, indent + 2)
            : JSON.stringify(value);
            lines.push(
                `${' '.repeat(indent)}"${key}": ${formattedValue}${comma}`
            );
        });
        lines.push(`${' '.repeat(indent - 2)}}`);
        return lines.join('\n');
    };
    // end get json data object

  return (
    <div className="section-list-object">
        <div className="container-title-and-path-list-object">
            <div className="container-title-list-object">
                <div className="wrapper-title-list-object" onClick={() => window.history.back()}>
                    <FaArrowLeft className="title-list-object-icon"/>
                    <h2>List-Object</h2>
                </div>
            </div>
            <div className="container-path-list-object">
                <ul className="unordered-list-list-object">
                    <li className="list-list-object">
                        Users
                    </li>
                    <li className="list-list-object">
                       <span>/</span> project
                     </li>
                    <li className="list-list-object">
                        <span>/</span> list-project
                    </li>
                </ul>
            </div>
        </div>

        <div className="list-object-body">
        {/* === Kiri: JSON hasil akhir === */}
            <div className="list-object-body-left">
                <h4>Object:</h4>
                <pre className="list-object-json-preview">
                    {getJsonObject(jsonData)}
                </pre>
            </div>

            {/* === Kanan: UI builder === */}
            <div className="list-object-body-right">
                <h2>Add Object Json</h2>

                <div className="list-object-button-group">
                    <button className="list-object-button-btn" onClick={handleAddFieldObject}>Add Object</button>
                    <button className="list-object-button-btn" onClick={handleAddNestedObject}>Add Nested Object</button>
                </div>

                <h4>JSON Output:</h4>
                <div className="json-output">
                    {jsonData.map((item, index) => {
                    const isNested = Array.isArray(item.value);
                    return (
                        <div key={index} className="list-object-body-right-json-item">
                            <div className="json-item-header">
                                <span>
                                    "{item.key}": {isNested ? "{" : JSON.stringify(item.value)}
                                </span>
                                <button className="list-object-body-right-btn" onClick={() => handleEditObject(index, jsonData, setJsonData)}><AiOutlineEdit className="list-object-icons"/></button>
                                <button className="list-object-body-right-btn" onClick={() => handleDeleteObject(index, jsonData, setJsonData)}><FaTrashAlt className="list-object-icons"/></button>
                                {isNested && (
                                    <button className="list-object-body-right-btn" onClick={() => handleAddSubFieldObject(index)}>Add Object</button>
                                )}
                            </div>

                            {isNested && (
                            <div className="list-object-body-right-json-nested">
                                {item.value.map((subItem, subIndex) => (
                                <div key={subIndex} className="list-object-body-right-json-nested-item">
                                    <div className="json-item-header">
                                    <span>
                                        "{subItem.key}": {JSON.stringify(subItem.value)}
                                    </span>
                                    <button className="list-object-body-right-btn" onClick={() => handleEditSubFieldObject(index, subIndex)}><AiOutlineEdit className="list-object-icons"/></button>
                                    <button className="list-object-body-right-btn" onClick={() => handleDeleteSubFieldObject(index, subIndex)}><FaTrashAlt className="list-object-icons"/></button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                            {isNested && (
                                <span>{"}"}</span>
                            )}
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};

export default List_Object;
