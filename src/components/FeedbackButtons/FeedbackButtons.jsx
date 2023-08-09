export const FeedbackButtons = ({ onChangeStats, onClear }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button type="button" onClick={() => onChangeStats('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onChangeStats('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onChangeStats('bad')}>
            Bad
          </button>
        </li>
        <li>
          <button type="button" onClick={onClear}>
            Clear
          </button>
        </li>
      </ul>
    </div>
  );
};
