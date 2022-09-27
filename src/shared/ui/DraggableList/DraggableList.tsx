import React from "react";
import { DraggableListPropsType, DraggableListType } from "./types";
import cn from "classnames";
import styles from "./styles.module.scss";

export class DraggableList extends React.Component<DraggableListPropsType> {
  state = {
    items: this.props.items,
  };

  draggedItem: DraggableListType["draggedItem"] = {
    id: "",
    value: "",
  };

  draggedIdx: number | null = null;

  onDragStart = (event, index: number) => {
    this.draggedItem = {
      id: this.state.items[index].id,
      value: this.state.items[index].value,
    };

    event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.parentNode);
  };

  onDragOver = index => {
    const { items } = this.state;
    const hoveredItem = items[index];

    if (this.draggedItem.id === hoveredItem.id) {
      return;
    }

    const filteredItems = items.filter(item => item.id !== this.draggedItem.id);

    filteredItems.splice(index, 0, this.draggedItem);
    this.setState({ items: filteredItems });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
    this.props.getItemList(this.state.items);
  };

  render() {
    const { items } = this.state;
    return (
      <div className={styles.draggableList}>
        <main>
          <ul>
            {items.map((item, index) => (
              <li key={item.id} onDragOver={() => this.onDragOver(index)}>
                <div
                  className={styles.handle}
                  draggable
                  onDragStart={event => this.onDragStart(event, index)}
                  onDragEnd={this.onDragEnd}
                >
                  <div className={styles["handle-content"]}>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="2" fill="#FDA700" />
                      <rect y="4" width="12" height="2" fill="#FDA700" />
                      <rect y="8" width="12" height="2" fill="#FDA700" />
                    </svg>
                    <span className="content">{item.value}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
