// Компонент без состояния: только отображает кнопки и вызывает callback
function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={filter === selected ? 'toolbar__btn toolbar__btn--active' : 'toolbar__btn'}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
