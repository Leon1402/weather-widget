import {
  arrayMove,
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import styles from './Setting.module.css';
import { useState } from 'react';

const DragHandle = sortableHandle(() => <span className={styles.burger}></span>);

const SortableItem = sortableElement(({ value, deleteCity }) => (
  <li className={styles.city}>
    <div className={styles.block}>
      <DragHandle />
      {value}
    </div>
    <button onClick={() => {deleteCity(value)}}>X</button>
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

export const Setting = ({cities, setCities, isSettingOpen}) => {
  const [value, setValue] = useState('')
  const inputHandler = (e) => {
    setValue(e.currentTarget.value)
  }

  const addCity = () => {
    setCities([...cities, value])
    setValue('')
  }

  const deleteCity = (value) => {
    setCities(cities.filter((city) => city !== value))
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCities(arrayMove(cities, oldIndex, newIndex))
  };
  const settingOpen = `${styles.setting} ${styles.settingOpen}`

  return (
    <div className={isSettingOpen ? settingOpen : styles.setting}>
      <h2 className={styles.title}>Settings</h2>
      <button className={styles.close}>X</button>
      <SortableContainer onSortEnd={onSortEnd} useDragHandle>
        {cities.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} deleteCity={deleteCity}/>
        ))}
      </SortableContainer>
      <p className={styles.text}>Add location:</p>
      <input type="text" value={value} onChange={inputHandler}/>
      <button onClick={addCity}>A</button>
    </div>
  );
}