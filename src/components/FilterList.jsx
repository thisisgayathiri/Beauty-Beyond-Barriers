import { Divider, Modal, Row, Space } from "antd";
import CheckableTag from "antd/es/tag/CheckableTag";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";

const FilterList = ({ show, onClick }) => {
  const [modal2Open, setModal2Open] = useState(show);
  const [selectedTags, setSelectedTags] = useState(["Books"]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const filterTags = (filters) => {
    return (
      <Row>
        <Space size={[0, 6]} wrap>
          {filters.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
              style={{
                border: "1px solid #DFE0E2",
                borderColor: COLORS.GREY_LIGHT
              }}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
      </Row>
    );
  };

  useEffect(() => {
    setModal2Open(show);
  }, [show]);

  return (
    <>
      <Modal
        title="Filter"
        centered
        open={modal2Open}
        onOk={onClick}
        onCancel={onClick}
      >
        <div
          style={{
            marginBottom: "20px",
            color: "grey",
          }}
        >
          Choose to find the best services for you
        </div>

        {filterTags(["Home service", "Virtual pre-consulting", "ally trained"])}
        <Divider />

        {filterTags(["Ramps", "Cafe", "Locker rooms", "Parking"])}
        <Divider />

        {filterTags([
          "Lifts",
          "Noiseless",
          "Grab rails",
          "Reserved Parking",
          "Toilets",
        ])}
        <Divider />

        {filterTags(["Kid safe", "Helping hand"])}
      </Modal>
    </>
  );
};

export default FilterList;
