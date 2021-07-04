import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import styles from './Setting.module.css';
import { useState } from 'react';

const DragHandle = sortableHandle(() => <span className={styles.burger}></span>);

const SortableItem = sortableElement(({ value }) => (
  <li className={styles.city}>
    <div className={styles.block}>
      <DragHandle />
      {value}
    </div>
    <button>X</button>
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

export const Setting = () => {
  const [cities, setCities] = useState(
    ['London', 'Moscow']
  )

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCities(arrayMove(cities, oldIndex, newIndex));
  };
  return (
    <div>
      <h2 className={styles.title}>Settings</h2>
      <SortableContainer onSortEnd={onSortEnd} useDragHandle>
        {cities.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
      <p className={styles.text}>Add location:</p>
      <input type="text" />
      <button>A</button>
    </div>
  );
}