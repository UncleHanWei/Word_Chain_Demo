function BoardGrid(props) {
  return (
    <div className="board-grid d-flex justify-content-center">
      <span className="align-self-center">{props.value}</span>
    </div>
  );
}

export default BoardGrid;